import React, { useState, useEffect, Suspense } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useLocation, useHistory } from "react-router-dom";
import { useSelector } from 'react-redux';
import SVG from 'react-inlinesvg';
import './style.scss';
import Hashtag from 'assets/img/hashtag.svg';
import Bookmark from 'assets/img/bookmark.svg';
import List from 'assets/img/list.svg';
import Message from 'assets/img/message.svg';
import More from 'assets/img/more.svg';
import Notification from 'assets/img/notification.svg';
import User from 'assets/img/user.svg';
import Home from 'assets/img/home.svg';
import HashtagFilled from 'assets/img/hashtag-filled.svg';
import BookmarkFilled from 'assets/img/bookmark-filled.svg';
import ListFilled from 'assets/img/list-filled.svg';
import MessageFilled from 'assets/img/message-filled.svg';
import MoreFilled from 'assets/img/more-filled.svg';
import NotificationFilled from 'assets/img/notification-filled.svg';
import UserFilled from 'assets/img/user-filled.svg';
import HomeFilled from 'assets/img/home-filled.svg';
import Back from 'assets/img/back.svg';
import content from 'assets/img/twinkle-star.svg';
import Sidebar from './sidebar-left';

const SidebarRight = React.lazy(() => import('./sidebar-right'));
const PrivateRoutes = React.lazy(() => import('app/routes/privateRoutes'));

export default function Layout() {
  const [layoutWidth, setLayoutWidth] = useState(1023);
  const [menuTrigger, setTrigger] = useState(false);
  const currentUser = useSelector(state => state.currentUser);
  const header = useSelector(state => state.header);
  const location = useLocation();
  const route = useHistory();

  const primaryMenu = [
    {
      icon: Home,
      iconActive: HomeFilled,
      title: 'Home',
      link: '/home'
    },
    {
      icon: Hashtag,
      iconActive: HashtagFilled,
      title: 'Explore',
      link: '/home'
    },
    {
      icon: Notification,
      iconActive: NotificationFilled,
      title: 'Notifications',
      link: '/home'
    },
    {
      icon: Message,
      iconActive: MessageFilled,
      title: 'Messages',
      link: '/home'
    },
    {
      icon: Bookmark,
      iconActive: BookmarkFilled,
      title: 'Bookmarks',
      link: '/home'
    },
    {
      icon: List,
      iconActive: ListFilled,
      title: 'Lists',
      link: '/home'
    },
    {
      icon: User,
      iconActive: UserFilled,
      title: 'Profile',
      link: '/' + currentUser.username
    },
    {
      icon: More,
      iconActive: MoreFilled,
      title: 'More'
    }
  ]

  const trends = [
    {
      id: 1,
      location: 'India',
      category: 'Cricket',
      count: 5000,
      hashtag: 'IPL2020'
    },
    {
      id: 2,
      location: 'India',
      category: 'Health',
      count: 50_000,
      hashtag: 'Covid19'
    }
  ]

  useEffect(() => {
    setLayoutWidth(window.innerWidth);
    window.addEventListener('resize', function () {
      setLayoutWidth(window.innerWidth);
    })
    return () => {
      window.removeEventListener('resize', function () { })
    }
  }, [])

  return (
      <div className="app-container">
        <Sidebar primaryMenu={primaryMenu} currentUser={currentUser} isMenuOpen={menuTrigger} onCloseMenu={() => setTrigger(false)} />
        <div className="layout-main">
          <div className="content-area">
            <div className="app-toolbar">
              <span className="action">
                {!location.pathname.includes('home') && <SVG alt="back-icon" src={Back} onClick={() => route.push('/home')} />}
                {layoutWidth < 500 && location.pathname.includes('home') &&
                  <LazyLoadImage
                    alt="user-avatar" onClick={() => setTrigger(value => !value)} className="avatar-header" src={currentUser.profile_image}
                  />
                }
                <div>
                  <h3>{header.title}</h3>
                  {
                    header.subTitle && <span className="trend-footer">{header.subTitle}</span>
                  }
                </div>
              </span>
              <span className="content">
                <SVG alt="content-icon" src={content} />
              </span>
            </div>
            <div className="content-scroll">
              <PrivateRoutes />
            </div>
          </div>
          {
            layoutWidth > 1023 &&
            <Suspense fallback={''}>
              <SidebarRight content={trends} />
            </Suspense>
          }
        </div>
      </div>
  )
}
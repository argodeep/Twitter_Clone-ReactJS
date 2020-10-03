import React, { useState, useEffect } from 'react';
import SVG from 'react-inlinesvg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setHeader } from 'app/redux/actions';
import './style.scss';
import logo from 'assets/img/logo.svg';
import down from 'assets/img/down.svg';
import addTweet from 'assets/img/add-tweet.svg';

export default function Header({ currentUser, primaryMenu, isMenuOpen, onCloseMenu }) {
  const menuRef = React.createRef();
  const location = useLocation();
  const dispatch = useDispatch();
  const route = useHistory();

  function handleClickOutside(event) {
    onCloseMenu(false);
  }

  function updateHeader(event, title) {
    if (title !== 'Profile') {
      //   dispatch(setHeader({
      //     title: currentUser.name,
      //     subTitle: currentUser.tweets + ' Tweet' + (currentUser.tweets > 1 ? 's' : '')
      //   }))
      // } else {
      dispatch(setHeader({
        title: title,
        subTitle: ''
      }))
    }
  }

  useEffect(() => {
    if (isMenuOpen === true) {
      document.addEventListener("click", handleClickOutside, false);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside, false);
    }
  }, [isMenuOpen])

  return (
    <div className={'layout-header' + (isMenuOpen ? ' mobile-header' : '')}>
      <span ref={menuRef} className="background">
        <LazyLoadImage
          alt="logo"
          className="logo"
          src={logo}
          onClick={() => route.push('/home')}
        />
        <ul className="menu">
          {
            primaryMenu.map((menu, index) =>
              <div key={menu.title + index}>
                {
                  ((index !== 0 && index !== primaryMenu.length - 2) || index === primaryMenu.length - 1) &&
                  <li>
                    <SVG alt="menu-icon" src={menu.icon} />
                    <span>{menu.title}</span>
                  </li>
                }
                {/* Route activated for home and profile */}
                {
                  (index === 0 || index === primaryMenu.length - 2) && <Link to={menu.link}>
                    <li onClick={(event) => updateHeader(event, menu.title)}>
                      <SVG alt="menu-icon" src={location.pathname.includes(menu.link) ? menu.iconActive : menu.icon} />
                      <span className={location.pathname.includes(menu.link) ? 'active' : ''}>{menu.title}</span>
                    </li>
                  </Link>
                }
              </div>
            )
          }
        </ul>
        <button className="add-tweet" onClick={() => route.push('/compose/tweet')}>Tweet</button>
        <button className="add-tweet-icon" onClick={() => route.push('/compose/tweet')}>
          <SVG alt="profile-expand-icon" src={addTweet} />
        </button>
        <div className="profile">
          <LazyLoadImage
            alt="user-avatar" className="avatar" src={currentUser.profile_image}
          />
          <span className="profile-column">
            <span className="name">{currentUser.name}</span>
            <span className="username">@{currentUser.username}</span>
          </span>
          <SVG alt="profile-expand-icon" src={down} />
        </div>
      </span>
    </div>
  )
}

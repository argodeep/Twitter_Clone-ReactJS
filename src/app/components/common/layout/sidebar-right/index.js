import React from 'react';
import SVG from 'react-inlinesvg';
import Search from 'assets/img/search.svg';


export default function SidebarRight({ content }) {
    return (
        <div className="right-bar">
            <div className="search-autocomplete">
                <SVG alt="search-icon" src={Search} />
                <input placeholder="Search Twitter" type="text" autoComplete="off" />
            </div>
            <div className="trending-card">
                <h2>What’s happening</h2>
                {
                    content.map((trend, index) => (
                        <div className="trends" key={trend.location+index}>
                            <span className="trend-header">{trend.location} · {trend.category}</span>
                    <span className="trend-title">#{trend.hashtag}</span>
                            <span className="trend-footer">{trend.count} Tweets</span>
                        </div>
                    ))
                }
                <div className="trends">
                    <p className="show-more">Show More</p>
                </div>
            </div>
        </div>
    )
}
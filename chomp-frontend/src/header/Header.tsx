import * as React from 'react';
import './header.css';
import { Link } from 'react-router';

export function Header() {
    return (
        <div className="header">
            <div className="left">
                <input id="site-search"></input>
            </div>
            <Link to="/" data-testid="header-home">
                <div className="center logo">
                    <div className="clickable-div" />
                </div>
            </Link>
            <div className="right">
                <div id="profile-settings">TODO</div>
            </div>
        </div>
    );
}

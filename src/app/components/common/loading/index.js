import React from 'react';
import SVG from 'react-inlinesvg';
import Logo from 'assets/img/logo.svg';

export default function Loading({ type = 'spinner', errorText = '' }) {
    if (type === 'logo') {
        return (
            <div className="layout-centered">
                <SVG alt="logo" src={Logo} />
            </div>
        )
    }

    if (type === 'spinner') {
        return (
            <div className="layout-flex">
                <div className="spinner"></div>
                {errorText && <p>{errorText}</p>}
            </div>
        )
    }
}

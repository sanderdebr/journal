import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
import headerImg from '../../images/general-header-image.jpg';

const HeaderNav = () => {
    return (
        <header>
            <div className='archive__section'>
                <div className='archive__hero' style={{backgroundImage: `url(${headerImg})`}}></div>
                <div className='archive__nav'>
                    <Link to='/blog' className={window.location.href.indexOf('/blog') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>All</Link>
                    <Link to='/category/javascript' className={window.location.href.indexOf('category/javascript') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Javascript</Link>
                    <Link to='/category/css' className={window.location.href.indexOf('category/css') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>CSS</Link>
                    <Link to='/category/webdesign' className={window.location.href.indexOf('category/webdesign') > 0 ? 'archive__nav--link selected' : 'archive__nav--link'}>Webdesign</Link>
                </div>
            </div>
        </header>
    )
}

export default HeaderNav;
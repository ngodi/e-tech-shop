import React from 'react';
import './MenuItem.scss';

const MenuItem = ({title, imageUrl, large}) => {
    return (
    <div className={`menu-item ${large}`}>
      <div className="background-image"  style={{backgroundImage:`url(${imageUrl})`}}>
        </div>
        <div className="content">
            <h1 className="title">{title}</h1>
            <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
    );
}

export default MenuItem;
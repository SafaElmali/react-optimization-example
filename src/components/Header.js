import React, { memo } from 'react';

const Header = (props) => {
    console.log("Rendering:Header component");
    return (
        <div style={{ background: '#040404' }}>
            <img src={props.imgPath} alt="hey logo" style={{ width: "100%", height: 200 }}></img>
        </div>
    )
}

export default memo(Header);

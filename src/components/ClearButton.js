import React, { memo } from 'react';

const ClearButton = ({ handleClear }) => {
    console.log("Render: Clear Button")
    return (
        <div style={{ textAlign: 'center', marginBottom: 10 }}>
            <button onClick={handleClear}>
                Clear list
            </button>
        </div>
    )
}

export default memo(ClearButton);
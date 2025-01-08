import React, { useState } from 'react';
import RingLoader from "react-spinners/RingLoader";

function Loader() {
    let [loading, setLoading] = useState(true);

    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh', // Full viewport height for centering vertically
                marginTop: '-150px', // Adjust if needed for a specific layout
            }}
        >
            <div className="sweet-loading">
                <RingLoader
                    color='#000'
                    loading={loading}
                    size={80}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
            </div>
        </div>
    );
}

export default Loader;

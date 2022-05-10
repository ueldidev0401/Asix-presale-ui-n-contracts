import React from 'react';

function FetchingDataLoader() {
    return (
        <div className='fullscreen-loader'>
            <div className='fullscreen-loader-inner bg-white'>
                <div className='container'>
                    <div className='d-flex align-items-center justify-content-center'>
                        <span className='loader'>
                            <span className='loader-inner'></span>
                        </span>
                        <div className='ms-3'>
                            <h5 className='mb-1'>Fetching your data</h5>
                            <p className='text-muted mb-2'>Make sure MetaMask is connected</p>
                            <div className='cloud m-0'></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FetchingDataLoader;

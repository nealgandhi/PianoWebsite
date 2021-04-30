import React from 'react';

function Header(){
    return(
        <div style={{ background: '#000'}}>
            <div className="container">
                <div className="text-sm-center text-white py-3">
                    <h1>Piano Final Project</h1>
                    <p>
                        Interactive piano made by Neal Gandhi using react.js
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Header;
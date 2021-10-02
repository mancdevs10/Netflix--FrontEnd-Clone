import React, { useEffect, useState } from 'react';

import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);

    // scroll listener 
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY>100){
                handleShow(true);
            }
            else{
                handleShow(false);
            }
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, []);


    return (
        <div className={`nav ${show && `nav__black`}`}>
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="netflix logo " />
            <img className="nav__avatar" src="https://i.pinimg.com/originals/2b/90/0d/2b900d5612554cd0b5edf7d8e848c3ea.png" alt="avatar" />

        </div>
    )
}

export default Nav

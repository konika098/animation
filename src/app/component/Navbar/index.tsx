import React from 'react';

const Navbar = () => {
    return (
     <div className="navbar my-7">
        <div className="container">
        <ul className='flex justify-between text-lg font-bold text-black'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
     </div>
    );
};

export default Navbar;
// src/components/Footer.js
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-light text-center py-3">
            <p className="mb-0">© {new Date().getFullYear()} My Video Wall. All rights reserved.</p>
        </footer>
    );
};

export default Footer;

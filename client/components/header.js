import React from 'react';
import Link from "next/link";
import s from '../styles/Header.module.css'

const Header = () => {
    return (
        <div className={s.home}>
            <Link href='/'>Home</Link>

        </div>
    );
};

export default Header;

import { useState } from 'react';
import React from 'react';
import styles from './navbar.module.css';
import { Link, animateScroll as scroll } from 'react-scroll'
import {RxCrossCircled} from 'react-icons/rx';
import {BiMenu} from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
 

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  return (
    <>
    <nav className={styles.navbar}>
      <div className={styles.logo}>GYM</div>
      <ul className={styles.navLinks}>
        <li>
          <Link to="#home" className={styles.navelm}>Home</Link>
        </li>
        <li>
          <Link to="#about" className={styles.navelm}>About Us</Link>
        </li>
        <li>
          <Link to="#classes" className={styles.navelm}>Training</Link>
        </li>
        <li>
          <Link to="#blogs" className={styles.navelm}>Pricing</Link>
        </li>
      </ul>
      <button className={styles.joinButton} onClick={()=> navigate('/signup')}>Join Us</button>
       <BiMenu className={styles.menuToggle} onClick={toggleMenu}/>


    </nav>
    <div>
      
      {isMenuOpen && (
        <div className={styles.menuListOuter}>
        <ul className={styles.menuList}>
          <li>
            <Link to="#home" className={styles.navelms} onClick={()=>{setIsMenuOpen(false)}}>Home</Link>
          </li>
          <li>
            <Link to="#about" className={styles.navelms}  onClick={()=>{setIsMenuOpen(false)}}>About Us</Link>
          </li>
          <li>
            <Link to="#classes" className={styles.navelms}  onClick={()=>{setIsMenuOpen(false)}}>Training</Link>
          </li>
          <li>
            <Link to="#blogs" className={styles.navelms}  onClick={()=>{setIsMenuOpen(false)}}>Pricing</Link>
          </li>
        </ul>
        <RxCrossCircled className={styles.back}  onClick={()=>{setIsMenuOpen(false)}}/>
        </div>
      )}
    </div>
    </>
  );
};

export default Navbar;

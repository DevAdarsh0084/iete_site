'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import styles from './CSS/Navbar.module.css'
import Image from 'next/image'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'
import { BsCalendar2EventFill, BsCalendarEvent, BsInfoCircle } from 'react-icons/bs'
import { RiGalleryFill, RiGalleryLine } from 'react-icons/ri'
import { FaGraduationCap } from 'react-icons/fa'
import { FaUsersViewfinder } from 'react-icons/fa6'
import { LiaUserGraduateSolid } from 'react-icons/lia'

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(true)

    const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <>
            <div className={styles.navbar}>
                <nav>
                    <Link href='/' className={styles.navLogo}>
                        <Image src='/img/ieteLogo.png' alt='navLogo' width={40} height={40} />
                        <span>IETE</span>
                    </Link>
                    <div className={styles.navLinkWrap}>
                        {toggleMenu &&
                            <div className={styles.navLink}>
                                <ul>
                                    <li><Link href='/about'><div className={styles.navNewIcon}><BsInfoCircle /></div>About</Link></li>
                                    <li><Link href='/event'><div className={styles.navNewIcon}><BsCalendarEvent /></div>Events</Link></li>
                                    {/* <li><Link href='#'>Glimpse</Link>
                                        <ul>
                                            <li><Link href='/event'><BsCalendar2EventFill />Events</Link></li>
                                            <li><Link href='/gallery'><RiGalleryFill />Gallery</Link></li>
                                        </ul>
                                    </li> */}
                                    <li><Link href='/member'><div className={styles.navNewIcon}><FaUsersViewfinder /></div>Members</Link></li>
                                    {/* <li><Link href='#'>Associate</Link>
                                        <ul>
                                            <li><Link href='/member'><FaUsersViewfinder />Members</Link></li>
                                            <li><Link href='/'><FaGraduationCap />Alumni</Link></li>
                                        </ul>
                                    </li> */}
                                    <li><Link href='/gallery'><div className={styles.navNewIcon}><RiGalleryLine /></div>Gallery</Link></li>
                                    <li><Link href='/alumni'><div className={styles.navNewIcon}><LiaUserGraduateSolid /></div>Alumni</Link></li>
                                    <li><Link href='/contact'><div className={styles.navNewIcon}><LiaUserGraduateSolid /></div>Contact</Link></li>
                                </ul>
                            </div>
                        }
                    </div>

                    <div className={styles.navExtra}>
                        <Link href='/techUdbhav'>
                            <div className={styles.navBtn}>Tech Udbhav</div>
                        </Link>
                        <div className={styles.navIcon} onClick={toggleNav}><HiOutlineMenuAlt3 /></div>
                    </div>

                    <div className={styles.navBorder}></div>
                </nav>
            </div>
        </>
    )
}

export default Navbar

import Link from "next/link";
import {useTheme} from "next-themes";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import {BiMoon, BiSun} from "react-icons/bi";
import {useEffect, useState} from "react";
import Image from "next/image";
import logo_white from "/public/logop.png"
import logo_black from "/public/logop-white.png"

function NavigationBar() {
    const router = useRouter()
    const {data: session} = useSession()
    const { theme, setTheme } = useTheme()
    const darkTheme = theme === 'dark'
    const { locale } = useRouter();
    const enLanguage = locale === 'en'
    const [path, setPath] = useState('')
    useEffect(() => {
        setPath(window.location.pathname)
        const navbar = document.getElementById('navbar')
        const onScroll = () => {
            const scroll = document.documentElement.scrollTop
            if (scroll > 40) {
                navbar.classList.add('shadow-sm')
            } else {
                navbar.classList.remove('shadow-sm')
            }
        }

// Use the function
        window.addEventListener('scroll', onScroll)
    }, [path, theme, darkTheme, ])
    return <>
        <nav id="navbar" className={`sticky-top navbar navbar-expand-lg mt-5 mb-4 ${darkTheme ? 'navbar-dark bg-black' : 'navbar-light bg-white'}`}>
            <div className="container">
                <Link className="navbar-brand d-inline-block align-text-top" href="/">
                    <Image src={darkTheme ? logo_black : logo_white} alt="Placedv" height={30} width={30}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        {/*<li className="nav-item">
                            <Link className={`simplonmono-regular nav-link ${path.includes('/about') ? 'active' : null}`} href="/about">
                                {enLanguage
                                    ? 'About'
                                    : 'About'
                                }
                            </Link>
                        </li>*/}
                        <li className="nav-item">
                            <Link className={`nav-link ${path.includes('/projects') ? 'active' : null}`} href="/projects">
                                {enLanguage
                                    ? 'Projects'
                                    : 'Progetti'
                                }
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`nav-link ${path.includes('/sponsors') ? 'active' : null}`} href="/sponsors">
                                Sponsors
                            </Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {/*<li className="nav-item">
                            {enLanguage
                                ? <Link className="simplonmono-regular nav-link mt-1" href="/" locale="it">IT</Link>
                                : <Link className="simplonmono-regular nav-link mt-1" href="/" locale="en">EN</Link>
                            }
                        </li>*/}
                        <li className="nav-item nav-link">
                            {darkTheme
                                ? <span className="cursor-pointer simplonmono-regular nav-link" onClick={() => setTheme('light')}>
                                    <BiSun size={24}/>
                                </span>
                                : <span className="cursor-pointer simplonmono-regular nav-link" onClick={() => setTheme('dark')}>
                                    <BiMoon size={24}/>
                                </span>
                            }
                        </li>
                        <li className="nav-item d-flex align-items-center nav-link">
                            <button className={`fw-semibold btn ${darkTheme ? 'btn-light' : 'btn-light'}`} data-bs-toggle="modal" data-bs-target="#loginModal">
                                {!session
                                    ? enLanguage
                                        ? 'Login'
                                        : 'Accedi'
                                    : enLanguage
                                        ? <div className="d-flex align-items-center gap-2">
                                        {session.user.name}
                                    </div> || 'Login'
                                        : <div className="d-flex align-items-center gap-2">
                                        {session.user.name}
                                    </div> || 'Accedi'

                                }
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}

export default NavigationBar

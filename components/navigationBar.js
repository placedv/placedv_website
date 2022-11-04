import Head from "next/head";
import Link from "next/link";
import {useTheme} from "next-themes";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import {Logo} from "./logo";
import {BiMoon, BiSun} from "react-icons/bi";
import {useEffect, useState} from "react";

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
    }, [path])
    return <>
        <nav class={`sticky-top navbar navbar-expand-lg  ${darkTheme ? 'navbar-dark bg-dark' : 'navbar-dark bg-primary'}`}>
            <div class="container">
                <Link className="navbar-brand d-inline-block align-text-top" href="/">
                    <Logo height={30} width={30} fill={darkTheme ? '#ffffff' : '#ffffff'}/>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"/>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li className="nav-item">
                            <Link className={`simplonmono-regular nav-link ${path.includes('/projects') ? 'active' : null}`} href="/projects">
                                {enLanguage
                                    ? 'Projects'
                                    : 'Progetti'
                                }
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`simplonmono-regular nav-link ${path.includes('/events') ? 'active' : null}`} href="/events">
                                {enLanguage
                                    ? 'Events'
                                    : 'Eventi'
                                }
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`simplonmono-regular nav-link ${path.includes('/faq') ? 'active' : null}`} href="/faq">
                                FAQ
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className={`simplonmono-regular nav-link ${path.includes('/sponsors') ? 'active' : null}`} href="/sponsors">
                                Sponsors
                            </Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
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
                            <button className={`simplonmono-regular fw-semibold btn ${darkTheme ? 'btn-light' : 'btn-light'}`} data-bs-toggle="modal" data-bs-target="#loginModal">
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

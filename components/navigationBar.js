import Head from "next/head";
import Link from "next/link";
import {useTheme} from "next-themes";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import {Logo} from "./logo";
import {BiMoon, BiSun} from "react-icons/bi";

function NavigationBar({title}) {
    const {data: session} = useSession()
    const { theme, setTheme } = useTheme()
    const darkTheme = theme === 'dark'
    const { locale } = useRouter();
    const enLanguage = locale === 'en'
    return <>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <nav class={`sticky-top navbar navbar-expand-lg  ${darkTheme ? 'navbar-dark bg-primary' : 'navbar-dark bg-dark'}`}>
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
                            <Link className="simplonmono-regular nav-link" href="/projects">
                                {enLanguage
                                    ? 'Projects'
                                    : 'Progetti'
                                }
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="simplonmono-regular nav-link" href="/">
                                {enLanguage
                                    ? 'Events'
                                    : 'Eventi'
                                }
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="simplonmono-regular nav-link" href="/">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="simplonmono-regular nav-link" href="/">Sponsors</Link>
                        </li>
                    </ul>
                    <ul class="navbar-nav ms-auto">
                        {/*<li className="nav-item">
                            {enLanguage
                                ? <Link className="simplonmono-regular nav-link mt-1" href="/" locale="it">IT</Link>
                                : <Link className="simplonmono-regular nav-link mt-1" href="/" locale="en">EN</Link>
                            }
                        </li>*/}
                        <li className="nav-item">
                            {darkTheme
                                ? <span className="cursor-pointer simplonmono-regular nav-link" onClick={() => setTheme('light')}>
                                <BiSun size={24} color="#ffffff"/>
                            </span>
                                : <span className="cursor-pointer simplonmono-regular nav-link" onClick={() => setTheme('dark')}>
                                <BiMoon size={24} color="#ffffff"/>
                            </span>
                            }
                        </li>
                        <li className="nav-item d-flex align-items-center ms-3">
                            <button className="simplonmono-regular fw-semibold btn btn-light" data-bs-toggle="modal" data-bs-target="#loginModal">
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

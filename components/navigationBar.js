import Head from "next/head";
import Link from "next/link";
import {useTheme} from "next-themes";
import {useRouter} from "next/router";
import {useSession} from "next-auth/react";
import {Logo} from "./logo";
import {FaGithub} from "react-icons/fa";

function NavigationBar({title}) {
    const router = useRouter()
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
        <div className="container m-auto mt-5 pt-4 d-flex align-items-center justify-content-between">
            <h1 className={`fs-3 fw-semibold gap-2 d-flex align-items-center cursor-pointer ${darkTheme ? 'text-white ' : 'text-black'}`} onClick={() => router.push('/')}>
                <Logo height={36} width={36} fill={darkTheme ? '#ffffff' : '#000000'}/> Placedv 🇺🇦
            </h1>
            <div className="d-flex align-items-center gap-3">
                <Link href="https://github.com/placedv" target="_blank">
                    <FaGithub size={24} color={darkTheme ? '#ffffff' : '#000000'}/>
                </Link>
                <button className={darkTheme ? 'btn btn-lg btn-outline-light pl-4 pr-4 fw-semibold' : 'btn btn-lg btn-outline-primary fw-semibold'} data-bs-toggle="modal" data-bs-target="#loginModal">
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
                {/*<div>
                    {enLanguage
                        ? <h3>
                            <Link href="/" locale="it">🇮🇹</Link>
                        </h3>
                        : <h3>
                            <Link href="/" locale="en">🇬🇧</Link>
                        </h3>
                    }
                </div>*/}
                <div>
                    {darkTheme
                        ? <div style={{cursor: 'pointer'}} onClick={() => setTheme('light')}><h3>☀️</h3></div>
                        : <div style={{cursor: 'pointer'}} onClick={() => setTheme('dark')}><h3>🌑</h3></div>}
                </div>
            </div>
        </div>
    </>
}

export default NavigationBar

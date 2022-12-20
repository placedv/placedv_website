import NavigationBar from "./navigationBar";
import Footer from "./footer";
import {useEffect, useState} from "react";
import Modal from "./modal";
import Head from "next/head";
import BannerUp from "./bannerUp";

function Layout({children, title}) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    if(!mounted) return null
    /*if (process.env.NODE_ENV === "production") return <>
        <Head>
            <title>Placedv</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-60TP8LBMSV"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-60TP8LBMSV');
                    `,
                }}
            />
        </Head>
        <div className="container m-auto mt-5 pt-5 mb-5 pb-5 text-center">
            <div>
                <div className="mb-5">
                    <BiPlanet size={36} color={darkTheme ? '#ffffff' : '#000000'}/>
                </div>
                <h1 className={`display-1 simplonmono-regular mb-5 ${darkTheme ? 'text-white' : 'text-black'}`}>
                    Qualsoa di pauroso sta per nascere...
                </h1>
                <h1 className={`fs-3 calibre-regular ${darkTheme ? 'text-secondary' : 'text-secondary'}`}>
                    Torna qui il 1° novembre
                </h1>
            </div>
        </div>
    </>*/
    return <>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-60TP8LBMSV"></script>
            <script
                dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-60TP8LBMSV');
                    `,
                }}
            />
        </Head>
        <NavigationBar title={title}/>
        {children}
        <Modal id={''}/>
        <Footer/>
    </>
}

export default Layout

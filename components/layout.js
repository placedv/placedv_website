import NavigationBar from "./navigationBar";
import Footer from "./footer";
import {useEffect, useState} from "react";
import Modal from "./modal";
import {useTheme} from "next-themes";

function Layout({children, title}) {
    const { theme } = useTheme()
    const darkTheme = theme === 'dark'
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    if(!mounted) return null
    if (process.env.NODE_ENV === "production") return <>
        <div className="container m-auto mt-5 pt-5 mb-5 pb-5 text-center">
            <h1>
                <h1 className={`display-1 simplonmono-regular ${darkTheme ? 'text-white' : 'text-black'}`}>
                    Qualsoa di pauroso sta per nascere...
                </h1>
            </h1>
        </div>
    </>
    return <>
        <NavigationBar title={title}/>
        {children}
        <Modal/>
        <Footer/>
    </>
}

export default Layout

import NavigationBar from "./navigationBar";
import Footer from "./footer";
import {useEffect, useState} from "react";
import Modal from "./modal";

function Layout({children, title}) {
    const [mounted, setMounted] = useState(false)
    useEffect(() => {
        setMounted(true)
    }, [])
    if(!mounted) return null
    return <>
        <NavigationBar title={title}/>
        {children}
        <Modal/>
        <Footer/>
    </>
}

export default Layout

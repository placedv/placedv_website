import {footerYear} from "./footerYear";
import {useTheme} from "next-themes";
import Script from "next/script";

function Footer() {
    const { theme } = useTheme()
    const darkTheme = theme === 'dark'
    return <>
        <div className="container m-auto p-0 pt-5 pb-5 mb-5">
            <p className="text-secondary">Placedv Community &copy; {footerYear()}</p>
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"/>
    </>
}

export default Footer

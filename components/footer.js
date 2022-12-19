import {footerYear} from "./footerYear";
import {useTheme} from "next-themes";
import Script from "next/script";
import {AiFillGithub} from "react-icons/ai";
import Link from "next/link";

function Footer() {
    const { theme } = useTheme()
    const darkTheme = theme === 'dark'
    return <>
        <div className="container m-auto p-0 pt-5 pb-5 mb-5">
            <div className="d-flex align-items-center gap-4">
                <div>
                    <Link className="nav-link text-secondary" href="https://github.com/placedv" target="_blank">
                        <AiFillGithub size={24}/>
                    </Link>
                </div>
                <div>
                    <p className="simplonmono-regular text-secondary">
                        Placedv Community &copy; {footerYear()}
                    </p>
                </div>
            </div>
        </div>
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" crossorigin="anonymous"/>
    </>
}

export default Footer

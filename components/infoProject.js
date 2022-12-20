import Link from "next/link";
import Image from "next/image";
import {useTheme} from "next-themes";
import {FiExternalLink} from "react-icons/fi";

function InfoProject({link, image, title, description}) {
    const { theme } = useTheme()
    const darkTheme = theme === 'dark'
    return <div className="col link-project">
        <Link href={link} target="_blank">
            <div className={`d-flex align-items-center gap-3 p-3`}>
                <div>
                    <h3 className={`calibre-semibold mb-3 fs-3 fw-semibold d-flex align-items-center justify-content-between ${darkTheme ? 'text-white' : 'text-black'}`}>
                        {title}
                        <FiExternalLink size={20}/>
                    </h3>
                    <h6 className="text-secondary fw-semibold fs-5 mb-0">
                        {description}
                    </h6>
                </div>
            </div>
        </Link>
    </div>
}

export default InfoProject

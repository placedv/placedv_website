import Link from "next/link";
import Image from "next/image";
import {useTheme} from "next-themes";

function InfoProject({link, image, title, description}) {
    const { theme } = useTheme()
    const darkTheme = theme === 'dark'
    return <div className="col link-project">
        <Link href={link} target="_blank">
            <div className="d-flex align-items-center gap-3 p-2">
                <div>
                    <Image className={`rounded-3 ${darkTheme ? null : 'border shadow-sm'}`} src={image} alt="random emoji" width={130} height={80}/>
                </div>
                <div>
                    <h3 className={`mb-1 fs-4 fw-semibold ${darkTheme ? 'text-white ' : 'text-black'}`}>
                        {title}
                    </h3>
                    <h6 className="text-secondary">
                        {description}
                    </h6>
                </div>
            </div>
        </Link>
    </div>
}

export default InfoProject

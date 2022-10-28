import Image from "next/image";
import Link from "next/link";

function AvatarProfile({key, src, alt, height, width, link}) {
    return <Link className="shadow-none" key={key} href={`https://github.com/${link}`} target="_blank">
        <div className="bg-black rounded-3 cursor-pointer">
            <Image className="rounded-3" src={src} alt={alt} height={height} width={width}/>
        </div>
    </Link>
}

export default AvatarProfile

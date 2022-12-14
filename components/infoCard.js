import {useEffect, useState} from "react";
import {useTheme} from "next-themes";
import {useRouter} from "next/router";

function InfoCard({emoji, title, description}) {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const darkTheme = theme === 'dark'
    const { defaultLocale, locale, locales } = useRouter();
    const enLanguage = locale === 'en'
    useEffect(() => {
        setMounted(true)
    }, [defaultLocale, locales, setTheme])
    if(!mounted) return null
    return <>
        <div className="d-flex align-items-center gap-3 text-black mb-4">
            <div className="text-primary">
                <h1>{emoji}</h1>
            </div>
            <h3 className={`fs-2 fw-bold ${darkTheme ? 'text-white' : 'text-black'}`}>
                {enLanguage
                    ? title.en
                    : title.it
                }
            </h3>
        </div>
        <div>
            <p className="text-secondary fw-semibold fs-4">
                {enLanguage
                    ? description.en
                    : description.it
                }
            </p>
        </div>
    </>
}

export default InfoCard

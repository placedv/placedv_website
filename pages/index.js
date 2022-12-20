import {RandomEmoji} from "../components/randomEmoji";
import { useTheme } from 'next-themes'
import {useRouter} from "next/router";
import InfoCard from "../components/infoCard";
import Layout from "../components/layout";
import {translation} from "../lib/translation";
import InfoProject from "../components/infoProject";
import useSWR from "swr";
import {fetcher} from "../lib/fetchApi";
import AvatarProfile from "../components/avatarProfile";
import {BiGroup, BiInfoCircle, BiRecycle} from "react-icons/bi";

function HomePage() {
    const { theme } = useTheme()
    const darkTheme = theme === 'dark'
    const { locale } = useRouter();
    const enLanguage = locale === 'en'
    const { data: profile } = useSWR(`/api/profile`, fetcher)
    const { data: projects } = useSWR(`/api/projects`, fetcher)
    return <Layout title={enLanguage ? '🇬🇧 Placedv' : '🇮🇹 Placedv'}>
        <div className="container m-auto mb-5 pb-5">
            <div>
                <h1 className={`calibre-semibold display-1 fw-bold mb-0 ${darkTheme ? 'text-primary' : 'text-primary'}`}>
                    {enLanguage
                        ? translation.call_to_action.phrase_1.en
                        : translation.call_to_action.phrase_1.it
                    }
                </h1>
                <h1 className={`calibre-semibold display-1 fw-bold mb-0 ${darkTheme ? 'text-primary' : 'text-primary'}`}>
                    {enLanguage
                        ? translation.call_to_action.phrase_2.en
                        : translation.call_to_action.phrase_2.it
                    }
                </h1>
                <h1 className={`calibre-semibold display-1 fw-bold mb-0 ${darkTheme ? 'text-primary' : 'text-primary'}`}>
                    {enLanguage
                        ? translation.call_to_action.phrase_3.en
                        : translation.call_to_action.phrase_3.it
                    }
                </h1>
                <h1 className={`calibre-semibold display-1 fw-bold ${darkTheme ? 'text-primary' : 'text-primary'}`}>
                    {enLanguage
                        ? translation.call_to_action.phrase_4.en + ' ' + RandomEmoji()
                        : translation.call_to_action.phrase_4.it + ' ' + RandomEmoji()
                    }
                </h1>
            </div>
        </div>
        <div className="container m-auto mb-5 pb-5">
            <div className="row mb-5">
                <div className="col-md-4">
                    <InfoCard
                        emoji={<BiInfoCircle size={46}/> }
                        title={{
                            en: translation.info_cards.card_1.title.en,
                            it: translation.info_cards.card_1.title.it,
                    }}
                        description={{
                            en: translation.info_cards.card_1.description.en,
                            it: translation.info_cards.card_1.description.it,
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <InfoCard
                        emoji={<BiGroup size={46}/> }
                        title={{
                            en: translation.info_cards.card_3.title.en,
                            it: translation.info_cards.card_3.title.it,
                        }}
                        description={{
                            en: translation.info_cards.card_3.description.en,
                            it: translation.info_cards.card_3.description.it,
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <InfoCard
                        emoji={<BiRecycle size={46}/>}
                        title={{
                            en: translation.info_cards.card_4.title.en,
                            it: translation.info_cards.card_4.title.it,
                        }}
                        description={{
                            en: translation.info_cards.card_4.description.en,
                            it: translation.info_cards.card_4.description.it,
                        }}
                    />
                </div>
            </div>
        </div>
        {/*<div className={`rounded-4 container mb-5 ${darkTheme ? 'border border-primary' : 'bg-light'}`}>
            <div className="m-auto p-5 ps-4 pe-4">
                <div className="d-flex align-items-center justify-content-between">
                    <div className="w-50">
                        <h1 className={`calibre-semibold fs-2 ${darkTheme ? 'text-white' : 'text-black'}`}>
                            Vuoi diventare sponsor?
                        </h1>
                    </div>
                    <form className="d-flex align-items-center justify-content-between gap-2 w-50">
                        <input
                            required={true}
                            type="email"
                            className="form-control form-control-lg btn-outline-light fw-semibold"
                            placeholder="Indirizzo email..."
                        />
                        <button type="submit" className={`btn btn-lg fw-semibold ${darkTheme ? 'btn-primary' : 'btn-primary'}`}>Richiedi</button>
                    </form>
                </div>
            </div>
        </div>*/}
        <div className="container p-0 m-auto mb-5 pb-5 row">
            <div className="col-12 mb-5">
                <h3 className={`calibre-semibold mb-1 fs-2 ${darkTheme ? 'text-white' : 'text-black'}`}>
                    {enLanguage ? 'Recent projects' : 'Progetti recenti'}
                </h3>
            </div>
            {projects?.map((d, i) => {
                return <div className="col-md-4" key={i}>
                    <InfoProject
                        link={d.link}
                        title={d.name}
                        description={enLanguage ? d.description_en : d.description_it}
                    />
                </div>
            })}
        </div>
        <div className="container m-auto mb-5 pb-5">
            <div className="mb-5">
                <h3 className={`calibre-semibold mb-1 fs-2 ${darkTheme ? 'text-white' : 'text-black'}`}>
                    Community
                </h3>
            </div>
            <div className="d-flex gap-2 flex-wrap">
                {profile?.map((d, i) => {
                    return <AvatarProfile
                        key={i}
                        src={d.image}
                        alt={d.name}
                        width={70}
                        height={70}
                        link={`${d.name}`}
                    />
                })}
            </div>
        </div>
    </Layout>
}

export default HomePage

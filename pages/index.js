import {RandomEmoji} from "../components/randomEmoji";
import { useTheme } from 'next-themes'
import {useRouter} from "next/router";
import InfoCard from "../components/infoCard";
import Layout from "../components/layout";
import {translation} from "../lib/translation";
import random_emoji from "../public/random_emoji.png"
import goofls from "../public/goofls.png"
import pyramid from "../public/pyramid.png"
import InfoProject from "../components/infoProject";
import useSWR from "swr";
import {fetcher} from "../lib/fetchApi";
import AvatarProfile from "../components/avatarProfile";

function HomePage() {
    const { theme } = useTheme()
    const darkTheme = theme === 'dark'
    const { locale } = useRouter();
    const enLanguage = locale === 'en'
    const { data } = useSWR(`/api/profile`, fetcher)
    return <Layout title={enLanguage ? '🇬🇧 Placedv' : '🇮🇹 Placedv'}>
        <div className="container m-auto mb-5 pb-5">
            <div className="mt-5">
                <h1 className="text-primary display-1 fw-bold mb-2 text-opacity-25">
                    {enLanguage
                        ? translation.call_to_action.phrase_1.en
                        : translation.call_to_action.phrase_1.it
                    }
                </h1>
                <h1 className="text-primary display-1 fw-bold mb-2 text-opacity-50">
                    {enLanguage
                        ? translation.call_to_action.phrase_2.en
                        : translation.call_to_action.phrase_2.it
                    }
                </h1>
                <h1 className="text-primary display-1 fw-bold mb-2 text-opacity-75">
                    {enLanguage
                        ? translation.call_to_action.phrase_3.en
                        : translation.call_to_action.phrase_3.it
                    }
                </h1>
                <h1 className="text-primary display-1 fw-bold mb-2">
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
                        emoji="🚀"
                        title={{
                            en: 'Projects',
                            it: 'Progetti'
                    }}
                        description={{
                            en: 'Every day we try to build amazing stuff, contribute to open source and help other devs to solve their problems.',
                            it: 'Ogni giorno proviamo a creare cose spettacolari, contriubuiamo a progetti open source e aiutiamo altri sviluppatori.'
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <InfoCard
                        emoji="🧑🏿‍🤝‍🧑🏽"
                        title={{
                            en: 'People',
                            it: 'Chi siamo?'
                        }}
                        description={{
                            en: 'We are more 10 people inside Placedv, all days we try to make the world a better place and create amazing stuff.',
                            it: 'In Placedv siamo in più di 10 persone, ogni giorno proviamo a rendere il mondo un posto migliore in cui vivere.'
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <InfoCard
                        emoji="🙌"
                        title={{
                            en: 'Community',
                            it: 'Community'
                        }}
                        description={{
                            en: 'We are around the world, we help each other to build amazing stuff and projects, in order to help other people.',
                            it: 'Siamo in tutto il mondo, ci aiutiamo l\'una/o con l\'altra/a per costruire progetti fantastici e imparare nuove culture.'
                        }}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col-md-4">
                    <InfoCard
                        emoji="♻️"
                        title={{
                            en: 'Sustainability',
                            it: 'Sostenibilità'
                        }}
                        description={{
                            en: 'Our main goal is to preserve our planet, all the project, where is possible, are carbon neutral zero.',
                            it: 'Il nostro goal principale è preservare il nostro pianeta, tutti i progetti, dove possibile, sono ad emissioni zero.'
                        }}
                    />
                </div>
                <div className="col-md-4">
                    <InfoCard
                        emoji="🌍️"
                        title={{
                            en: 'Goals',
                            it: 'Goals'
                        }}
                        description={{
                            en: 'We trust in people, and in their power, together we can maintenance a better world for our next generations.',
                            it: 'Crediamo nelle persone e nel loro potere, insieme possiamo mantenere un mondo migliore per noi e per le generazioni future.'
                        }}
                    />
                </div>
            </div>
        </div>
        <div className="container p-0 m-auto mb-5 pb-5 row">
            <div className="col-12 mb-5">
                <h3 className={`mb-1 fs-4 ${darkTheme ? 'text-white' : 'text-black'}`}>
                    {enLanguage ? 'Recent projects' : 'Progetti recenti'}
                </h3>
            </div>
            <div className="col-md-4">
                <InfoProject
                    link="https://goofls.sergiocasolari.com"
                    image={goofls}
                    title="Goofls"
                    description={enLanguage ? 'Load FLS faster and securely' : 'Carica contenitori floodlight velocemente e in modo sicuro'}
                />
            </div>
            <div className="col-md-4">
                <InfoProject
                    link="https://pyramid.placedv.com/"
                    image={pyramid}
                    title="Placedv Pyramid"
                    description={enLanguage ? 'Dashboard for Online Advertising' : 'Dashboard veloce e sicura per Online Advertising'}
                />
            </div>
        </div>
        <div className="container m-auto mb-5 pb-5">
            <div className="mb-5">
                <h3 className={`mb-1 fs-4 ${darkTheme ? 'text-white' : 'text-black'}`}>
                    Community
                </h3>
            </div>
            <div className="d-flex gap-2 flex-wrap">
                {data?.map((d, i) => {
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

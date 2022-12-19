import Layout from "../../components/layout";
import {useTheme} from "next-themes";

function Sponsors() {
    const { theme } = useTheme()
    const darkTheme = theme === 'dark'
    return <Layout title="Projects">
        <div className="container m-auto mt-5 mb-5 pt-5 pb-5">
            <div className="mb-5">
                <h1 className={`fw-semibold ${darkTheme ? 'text-white' : 'text-black'}`}>
                    Sponsors
                </h1>
            </div>
            <div>
                <h3 className={`${darkTheme ? 'text-white' : 'text-black'}`}>
                    Stiamo lavorando per regalarti la miglior esperienza utente sul nostro sito, torna a breve su questa pagina.
                </h3>
            </div>
        </div>
    </Layout>
}

export default Sponsors

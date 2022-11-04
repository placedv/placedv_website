import Layout from "../../components/layout";
import {useTheme} from "next-themes";

function Projects() {
    const { theme } = useTheme()
    const darkTheme = theme === 'dark'
    return <Layout title="Projects">
        <div className="container m-auto mt-5 mb-5 pt-5 pb-5">
            <h1 className={`fw-semibold ${darkTheme ? 'text-white' : 'text-black'}`}>
                Progetti
            </h1>
        </div>
    </Layout>
}

export default Projects

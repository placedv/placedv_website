import Layout from "../components/layout";
import {useTheme} from "next-themes";

function Error404() {
    const { theme, setTheme } = useTheme()
    const darkTheme = theme === 'dark'
    return <Layout title="404">
        <div className="container m-auto mt-5 pt-5 mb-5 pb-5 text-center">
            <h1 className={`display-1 simplonmono-regular ${darkTheme ? 'text-white' : 'text-black'}`}>404</h1>
        </div>
    </Layout>
}

export default Error404

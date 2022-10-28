import Layout from "../components/layout";
import useSWR from 'swr'
import {useRouter} from "next/router";
import {useTheme} from "next-themes";
import Image from "next/image";
import {fetcher} from "../lib/fetchApi";

function Username() {
    const router = useRouter()
    const { theme } = useTheme()
    const darkTheme = theme === 'dark'
    const { username } = router.query
    const { data } = useSWR(`/api/profile/${username}`, fetcher)
    if(!data) return <>User not found</>
    return <Layout title="hello">
        <div className="container m-auto mt-5 mb-5 pb-5">
            <div className="d-flex gap-4 align-items-center">
                <div className="bg-black rounded-3">
                    <Image className="rounded-3" src={data.image} alt={data.name} width={90} height={90}/>
                </div>
                <div>
                    <h1 className={`fs-1 fw-semibold mb-1 ${darkTheme ? 'text-white' : 'text-black'}`}>{data.name}</h1>
                    <h3 className="fs-5 text-secondary">{data.email}</h3>
                </div>
            </div>
        </div>
    </Layout>
}

export default Username

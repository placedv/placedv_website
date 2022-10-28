import useSWR from "swr";

export default function Profile({}) {

    const fetcher = url => fetch(url).then(r => r.json())
    const {data, error} = useSWR('/api/hello', fetcher)

    if (!error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>

    // render data
    return <div>hello {data.name}!</div>
}

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import { ThemeProvider } from 'next-themes'
import { SessionProvider } from "next-auth/react"

function MyApp({ Component, pageProps }) {
    return <SessionProvider>
        <ThemeProvider enableSystem={false} disableTransitionOnChange>
            <Component {...pageProps} />
        </ThemeProvider>
    </SessionProvider>
}

export default MyApp

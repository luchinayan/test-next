import '@/styles/globals.css'
import Layout from "@/components/layout";

export default function App({Component, pageProps}) {
    return (
        <Layout className={'main'}>
            <Component  {...pageProps} />
        </Layout>
    )

}

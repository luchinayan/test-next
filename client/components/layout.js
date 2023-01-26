
import Header from './header'
import Footer from "@/components/footer";

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer/>
        </>
    )
}

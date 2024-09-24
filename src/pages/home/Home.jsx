import './home.scss'
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Roadmap from "../../components/roadmap/Roadmap";
import Hero from "../../components/hero/Hero";


export default function Home() {
    return (
        <>
            <div className="ln-inner">
                <div className="ln-top">
                    <Header />
                    <Hero />
                    <div className="ln-bottom" />
                </div>
                <Roadmap />
                <Footer />
            </div>


        </>
    )
}

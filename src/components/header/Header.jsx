import './header.scss'
import logo from '../../assets/logo.png'

export default function Header() {
    return (
        <header>
            <div className="ln-header-left">
                <div className="ln-header-social">
                    <a className="is-x" href="#" target="_blank" title="X" >
                        <div className="icon">
                            <img src="/svgs/x.svg" alt="" />
                        </div>
                    </a>
                    <a className="is-telegram" href="#" target="_blank" title="Telegram official channel" >
                        <div className="icon">
                            <img src="/svgs/telegram.svg" alt="" />
                        </div>
                    </a>
                    <p>Join us!</p>
                </div>
            </div>
            <div className="ln-header-center">
                <div className="ln-header-center-logo">
                    <img className="img-responsive" src={logo} alt="Hamster Kombat" />
                </div>
                <p>Digie Kombat</p>
            </div>
            <div className="ln-header-right">
                <a className="button" href="/docs/HK_WP_03.pdf" target="_blank" title="Whitepaper" >
                    <p>Whitepaper</p>
                    <div className="icon">
                        <img src="/svgs/right-arrow.svg" alt="" />
                    </div>
                </a>
            </div>
        </header>
    )
}

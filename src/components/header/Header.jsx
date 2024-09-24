import './header.scss'

export default function Header() {
    return (
        <header>
            <div className="header-left">
                <div className="social">
                    <a href="#" title="X" >
                        <div className="icon">
                            <img src="/svgs/x.svg" alt="" />
                        </div>
                    </a>
                    <a href="#" title="Telegram" >
                        <div className="icon">
                            <img src="/svgs/telegram.svg" alt="" />
                        </div>
                    </a>
                    <p>Join us!</p>
                </div>
            </div>
            <div className="ln-header-center">
                <div className="ln-header-center-logo">
                    <img className="img-responsive" src='/images/logo.png' alt="Hamster Kombat" />
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

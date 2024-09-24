import './hero.scss';


export default function Hero() {
    return (
        <>
            <div className="ln-content">
                <div className="ln-content-hamster">
                    <div className="ln-content-hamster-image is-1">
                        <img className="img-responsive" src='/images/kambat.png' alt="Hamster Kombat" />
                    </div>
                    <div className="ln-content-hamster-image is-2">
                        <img className="img-responsive" src='/images/kambat.png' alt="Hamster Kombat" />
                    </div>
                    <div className="ln-content-hamster-image is-3">
                        <img className="img-responsive" src='/images/kambat.png' alt="Hamster Kombat" />
                    </div>
                    <div className="ln-content-hamster-image is-4">
                        <img className="img-responsive" src='/images/kambat.png' alt="Hamster Kombat" />
                    </div>
                </div>
                <h1>Unleash your inner CEO</h1>
                <div className="ln-content-exchanges">
                    <div className="ln-content-exchange">
                        <div className="exchange-image is-binance">
                            <img src="/svgs/exchange1.svg" alt="" />
                        </div>
                    </div>
                    <div className="ln-content-exchange">
                        <div className="exchange-image is-bybit">
                            <img src="/svgs/exchange2.svg" alt="" />
                        </div>
                    </div>
                    <div className="ln-content-exchange">
                        <div className="exchange-image is-crypto_com">
                            <img src="/svgs/exchange1.svg" alt="" />
                        </div>
                    </div>
                    <div className="ln-content-exchange">
                        <div className="exchange-image is-okx">
                            <img src="/svgs/exchange2.svg" alt="" />
                        </div>
                    </div>
                    <div className="ln-content-exchange">
                        <div className="exchange-image is-bingx">
                            <img src="/svgs/exchange1.svg" alt="" />
                        </div>
                    </div>
                    <div className="ln-content-exchange">
                        <div className="exchange-image is-htx">
                            <img src="/svgs/exchange2.svg" alt="" />
                        </div>
                    </div>
                    <div className="ln-content-exchange">
                        <div className="exchange-image is-kucoin">
                            <img src="/svgs/exchange1.svg" alt="" />
                        </div>
                    </div>
                    <div className="ln-content-exchange">
                        <div className="exchange-image is-gate_io">
                            <img src="/svgs/exchange2.svg" alt="" />
                        </div>
                    </div>
                    <div className="ln-content-exchange">
                        <div className="exchange-image is-mexc">
                            <img src="/svgs/exchange1.svg" alt="" />
                        </div>
                    </div>
                    <div className="ln-content-exchange">
                        <div className="exchange-image is-bitget">
                            <img src="/svgs/exchange2.svg" alt="" />
                        </div>
                    </div>
                </div>
                <p> Make your way from the shaved hamster to the grandmaster CEO of the tier-1 crypto exchange </p>
                <p className="is-hidden-mobile"> Buy upgrades, complete quests, invite friends and become the best </p>
                <div className="ln-content-button">
                    <a className="button" href="#" target="_blank" >
                        <span>Play now</span>
                    </a>
                </div>
            </div>
        </>
    )
}

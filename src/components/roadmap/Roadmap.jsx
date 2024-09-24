import kambat5 from '../../assets/kambat5.png'
import kambat6 from '../../assets/kambat6.png'
import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'

export default function Roadmap() {
    return (
        <>
            <div className="ln-roadmap">
                <h2>Roadmap</h2>
                <div className="ln-roadmap-inner">
                    <div className="ln-roadmap-item is-completed">
                        <div className="ln-roadmap-title">
                            <p>March 2024</p>
                        </div>
                        <div className="ln-roadmap-content">
                            <ul>
                                <li className="is-completed">Basic game</li>
                                <li className="is-completed">Mining updates</li>
                                <li className="is-completed">Earn tasks</li>
                            </ul>
                        </div>
                    </div>
                    <div className="ln-roadmap-item is-completed">
                        <div className="ln-roadmap-title">
                            <p>April 2024</p>
                        </div>
                        <div className="ln-roadmap-content">
                            <ul>
                                <li className="is-completed">Referral system</li>
                                <li className="is-completed">LVL ratings</li>
                                <li className="is-completed">Daily rewards</li>
                            </ul>
                        </div>
                        <div className="ln-roadmap-hamster is-1">
                            <div className="ln-roadmap-hamster-bg">
                                <img src={bg1} loading="lazy" alt="Hamster Kombat" />
                            </div>
                            <div className="ln-roadmap-hamster-image">
                                <img
                                    className="img-responsive"
                                    src={kambat5}
                                    alt="Hamster Kombat"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="ln-roadmap-item is-completed">
                        <div className="ln-roadmap-title">
                            <p>May 2024</p>
                        </div>
                        <div className="ln-roadmap-content">
                            <ul>
                                <li className="is-completed">Special cards</li>
                                <li className="is-completed">Daily Combo</li>
                                <li className="is-completed">«Partner» blockchain announcement</li>
                            </ul>
                        </div>
                    </div>
                    <div className="ln-roadmap-item is-completed">
                        <div className="ln-roadmap-title">
                            <p>June 2024</p>
                        </div>
                        <div className="ln-roadmap-content">
                            <ul>
                                <li className="is-completed">
                                    On-chain infrastructure development
                                </li>
                                <li className="is-completed">Wallet in-game implementation</li>
                                <li className="is-completed">Web 3 pre-listing Quest</li>
                            </ul>
                        </div>
                    </div>
                    <div className="ln-roadmap-item is-completed">
                        <div className="ln-roadmap-title">
                            <p>July 2024</p>
                        </div>
                        <div className="ln-roadmap-content">
                            <ul>
                                <li className="is-completed">Characters and skins</li>
                                <li className="is-completed">Third-party game integration MVP</li>
                                <li className="is-completed">
                                    Tech solution for the largest-ever AirDrop
                                </li>
                            </ul>
                        </div>
                        <div className="ln-roadmap-hamster is-2">
                            <div className="ln-roadmap-hamster-bg">
                                <img src={bg2} loading="lazy" alt="Hamster Kombat" />
                            </div>
                            <div className="ln-roadmap-hamster-image">
                                {/* <picture class="is-hamster-image is-level-10"> */}
                                {/* <source srcset="/images/hamsters/10.webp" type="image/webp"> */}
                                <img
                                    className="img-responsive"
                                    src={kambat6}
                                    alt="Hamster Kombat"
                                />
                                {/* </picture> */}
                            </div>
                        </div>
                    </div>
                    <div className="ln-roadmap-item">
                        <div className="ln-roadmap-title">
                            <p>Upcoming</p>
                        </div>
                        <div className="ln-roadmap-content">
                            <ul>
                                <li className="is-completed">Achievements</li>
                                <li>Implementing tech for the largest AirDrop</li>
                                <li>AirDrop tasks</li>
                                <li>Gaming platform launch</li>
                                <li>TGE and AirDrop distribution</li>
                                <li>AppStore, Google Play Store apps</li>
                                <li>Live events</li>
                                <li>Time-limited events</li>
                                <li>Squads</li>
                                <li>And much more</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

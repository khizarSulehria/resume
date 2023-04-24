import style from  '/styles/Home.module.css';
export default function Home(){
    return (
        <div className="main">
            <div className="content">
                <div className="container">
                    <section className={style.mainHome}>
                        <div className={style.smallHeading}>
                            <span>Hi, my name is</span>
                        </div>
                        <div className={style.bigHeading}>
                            <span>Khizar Jawaid.</span>
                        </div>
                        <div className={`${style.bigHeading} ${style.secondBigHeading}`}>
                            <span>I build things for the web.</span>
                        </div>
                        <div>
                        <p>
                            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I’m focused on building accessible, human-centered products at <a href="https://upstatement.com/" target="_blank" rel="noreferrer">Upstatement</a></p>

                        </div>
                        <div className={`${style.emailLink}` }><a  href="https://brittanychiang.com/#about" target="_blank" rel="noreferrer">Check out my course!</a></div>
                    </section>
                </div>
            </div>
        </div>
    )
}
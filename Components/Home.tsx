import { useEffect, useState } from 'react';
import style from  '/styles/Home.module.css';

export default function Home(){
    const [profile, setProfile] : any = useState({});



    useEffect(() => {
        async function fetchData() {
            try {
            const response = await fetch(`https://graphql.contentful.com/content/v1/spaces/0scgrccnnjkw/`, {
                                method: "POST",
                                headers: {
                                "Content-Type": "application/json",
                                Authorization: "Bearer EEgac6T4clmbr8a6euEneXbJdsm2bBYMca4nqWgaz1M",
                                },
                                // send the GraphQL query
                                body: JSON.stringify({
                                    query: `
                                    query {
                                        profile(id: "2d0tCTt9P3NSgQyRlYTLsb") {
                                        sys {
                                            id
                                        }
                                        name
                                        defineProfile
                                        shortIntro
                                    }
                                    }
                                    `,
                                })
                            });
                const json = await response.json();
                setProfile(json?.data?.profile);
                console.log(json?.data?.profile)
            }catch (error) {
                console.error(error);
            }
        }

        fetchData();
    },[])


 
    return (
        <div className="main">
            <div className="content">
                <div className="container">
                    <section className={style.mainHome}>
                        <div className={style.smallHeading}>
                            <span>Hi, my name is</span>
                        </div>
                        <div className={style.bigHeading}>
                            <span>{profile?.name}.</span>
                        </div>
                        <div className={`${style.bigHeading} ${style.secondBigHeading}`}>
                            <span>{profile?.defineProfile}.</span>
                        </div>
                        <div>
                        <p>
                            {profile?.shortIntro}
                        </p>
                        </div>
                        <div className={`${style.emailLink}` }><a  href="https://brittanychiang.com/#about" target="_blank" rel="noreferrer">Check out my course!</a></div>
                    </section>
                </div>
            </div>
        </div>
    )
}
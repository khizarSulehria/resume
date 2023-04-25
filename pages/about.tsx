import Image from 'next/image';
import style from '/styles/Home.module.css';
import Navbar from '@/Components/Navbar';
import { useEffect, useState } from 'react';

export default function About(){
    const [profile, setProfile] :any = useState({});



    useEffect(() => {
        console.log("kkaa");
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
                                            about {
                                             json
                                            },
                                            image {
                                              url
                                            },
                                            techstack
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
        <>
        <Navbar />
        <div className="main">
            <div className="content">
                <div className="container">
                    <section className={style.mainHome}>
                        <h2 className="numbered-heading">01. About Me</h2>
                        <div className='innerContent'>
                            <div className="innerMessage">
                               {
                                profile?.about?.json?.content?.length > 0 && profile?.about?.json?.content?.map((data : any,key : number) => {
                                    return (
                                        <p key={key}>{data.content[0].value}</p>
                                        )
                                })
                            }
                            <ul>
                            {
                                profile?.techstack?.length > 0 && profile?.techstack?.map((data :string,key : number) => {
                                    return (
                                        <li key={key}> {data}</li>
                                        )
                                })
                            }
                            </ul>
                            </div>
                            <div className="innerImage">
                                <img src={profile?.image?.url} width={300} height={300} />
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </>
       
    )
}
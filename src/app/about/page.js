'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { getContentFullProfileData } from '@/app/requests';

export default function About(){
    const [profile, setProfile] = useState({});



    useEffect(() => {
        async function fetchData() {
            try {
            const json = await getContentFullProfileData({
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
                                            });
                setProfile(json?.data?.profile);
            }catch (error) {
                console.error(error);
            }
        }

        fetchData();
    },[])


    return (
        <>
        <div className="main">
            <div className="content">
                <div className="container">
                    <section className="mainHome">
                        <h2 className="numbered-heading">01. About Me</h2>
                        <div className='innerContent'>
                            <div className="innerMessage">
                               {
                                profile?.about?.json?.content?.length > 0 && profile?.about?.json?.content?.map((data,key) => {
                                    return (
                                        <p key={key}>{data.content[0].value}</p>
                                        )
                                })
                            }
                            <ul className="skills-list">
                            {
                                profile?.techstack?.length > 0 && profile?.techstack?.map((data,key) => {
                                    return (
                                        <li key={key}> {data}</li>
                                        )
                                })
                            }
                            </ul>
                            </div>
                            <div className="innerImage">
                                <div className='wrapper'>
                                    <img src={profile?.image?.url} width={300} height={300} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
        </>
       
    )
}
import Image from 'next/image';
import style from '/styles/Home.module.css';
import Navbar from '@/Components/Navbar';
import { useEffect, useState } from 'react';
import { getContentFullProfileData } from '@/api/index';

export default function Contact(){
    const [profile, setProfile] :any = useState({});



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
        <Navbar />
        <div className="main">
            <div className="content">
                <div className="container">
                    <section className={`${style.mainHome} row`}>
                        <div className='col text-center'>

                            <h2 className="overline">What’s Next?</h2>
                            <h2 className="title">Get In Touch</h2>
                            <div className='text-center'>Although I’m not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</div>
                            <div className="email-link">
                            <a className="buttonTheme resume-btn" href="mailto:khizar.sulehri.ks@gmail.com" rel="noopener noreferrer" target="_blank">Say Hello</a>
                            </div>
                        </div>
                    
                    </section>
                </div>
            </div>
        </div>
        </>
       
    )
}
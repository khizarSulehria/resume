import { useEffect, useState } from 'react';
import style from  '/styles/Home.module.css';
import { getContentFullProfileData } from '@/api';
import ReactMarkdown from 'react-markdown'

export default function Home(){
    const [profile, setProfile] : any = useState({});



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
                    }
                    }
                    `,
                })
                setProfile(json?.data?.profile);
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
                        <ReactMarkdown>{profile?.shortIntro}</ReactMarkdown>
                        
                        </div>
                        <div className={`${style.emailLink}` }><a  href="https://brittanychiang.com/#about" target="_blank" rel="noreferrer">Check out my course!</a></div>
                    </section>
                </div>
            </div>
        </div>
    )
}
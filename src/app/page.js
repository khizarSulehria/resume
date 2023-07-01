'use client'
import { useEffect, useState } from 'react';
import { getContentFullProfileData } from '@/app/requests';
import ReactMarkdown from 'react-markdown'


export default function Home() {
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
                    <section className="mainHome">
                        <div className="smallHeading">
                            <span>Hi, my name is</span>
                        </div>
                        <div className="bigHeading">
                            <span>{profile?.name}.</span>
                        </div>
                        <div className="bigHeading secondBigHeading">
                            <span>{profile?.defineProfile}.</span>
                        </div>
                        <div>
                        <ReactMarkdown>{profile?.shortIntro}</ReactMarkdown>
                        
                        </div>
                        <div className="emailLink" ><a  href="https://brittanychiang.com/#about" target="_blank" rel="noreferrer">Check out my course!</a></div>
                    </section>
                </div>
            </div>
        </div>
  )
}

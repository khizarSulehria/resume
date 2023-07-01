'use client'
import Image from 'next/image';
import Navbar from '@/Components/Navbar';
import { useEffect, useState } from 'react';
import { getContentFullProfileData } from '@/app/requests';
import VerticalTabs from '@/Components/VerticalTabs';

export default function Experience(){
    const [profile, setProfile] = useState({});

    const tabs = [
        {
          label: 'Arpatech',
          content: <div id="panel-0" role="tabpanel" aria-labelledby="tab-0" aria-hidden="false" className="jobs__StyledTabPanel-sc-59sdss-5 QgHxr"><h3><span> Engineer</span><span className="company">&nbsp;@&nbsp;<a href="https://www.upstatement.com/" className="inline-link" rel="noopener noreferrer" target="_blank">Upstatement</a></span></h3><p className="range">May 2018 - Present</p><div><ul>
          <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
          <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
          <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
          <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
          </ul></div></div>,
        },
        {
          label: 'Golpik',
          content: <div id="panel-0" role="tabpanel" aria-labelledby="tab-0" aria-hidden="false" className="jobs__StyledTabPanel-sc-59sdss-5 QgHxr"><h3><span>02 Engineer</span><span className="company">&nbsp;@&nbsp;<a href="https://www.upstatement.com/" className="inline-link" rel="noopener noreferrer" target="_blank">Upstatement</a></span></h3><p className="range">May 2018 - Present</p><div><ul>
          <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
          <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
          <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
          <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
          </ul></div></div>,
        },
        {
          label: 'Itsec',
          content: <div id="panel-0" role="tabpanel" aria-labelledby="tab-0" aria-hidden="false" className="jobs__StyledTabPanel-sc-59sdss-5 QgHxr"><h3><span>Lead Engineer</span><span className="company">&nbsp;@&nbsp;<a href="https://www.upstatement.com/" className="inline-link" rel="noopener noreferrer" target="_blank">Upstatement</a></span></h3><p className="range">May 2018 - Present</p><div><ul>
          <li>Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more</li>
          <li>Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements</li>
          <li>Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders</li>
          <li>Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship</li>
          </ul></div></div>,
        },
      ];
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
                    <section className="mainHome">
                    <h2 className="numbered-heading">02. Where I’ve Worked</h2>
                    <div className="container mt-5">
                    <VerticalTabs tabs={tabs} />
                    </div>
                    </section>
                </div>
            </div>
        </div>
        
        </>
       
    )
}
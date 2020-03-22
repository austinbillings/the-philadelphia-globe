import React from 'react';
import Link from 'next/link';

import { Icon } from 'arkade/common';
import { CentralLayout } from 'arkade/layouts';
import { AppError } from 'arkade/errors';
import { ErrorBoundary } from 'arkade/tools';

import { AppBase } from 'components/app-base';
import { SocialButtons } from 'components/social-buttons';

import config from 'config';
const { API_BASE_URL } = config;

const Home = () => {
    return (
        <AppBase>
            <ErrorBoundary>
                <div className="row">
                    <Link href="/">
                        <img
                            src="/logo-phillyglobe.svg"
                            alt="The Philadelphia Globe logo"
                            className="margin-10 background-primary clickable"
                            style={{ width: '100px', maxWidth: '100%', borderRadius: '50%', cursor: 'pointer' }}
                        />
                    </Link>
                    <SocialButtons/>
                </div>

                <CentralLayout style={{ minHeight: 'auto' }}>
                    <div className="row pad-10 justify-center items-center self-center">
                        <img
                            src="/love-from-philly.png"
                            alt="The Philadelphia Globe logo"
                            className="background-white pad-30 margin-30 clickable"
                            style={{ width: '300px', maxWidth: '100%' }}
                        />

                        <div className="stack pad-10" style={{ maxWidth: '500px' }}>
                            <div className="background-secondary pad-30 margin-bottom-10 text-large text-white">
                                <p className="text-center text-engraved text-small text-black margin-bottom-10" style={{ marginTop: '-10px' }}>
                                    The Philadelphia Globe presents
                                </p>
                                <p className="text-regular" style={{ fontWeight: 300 }}>
                                    Love From Philly is a community effort to bring hope, inspiration and love from Philly to benefit our city's musicians and artists.
                                </p>
                                <p>
                                    Love From Philly serves as a virtual stage for Philly’s finest musicians, artists and personalities, as well as artists from around the globe, who can send in their <b>#lovejawns</b> -- 1-3 min videos sharing their stories from inside the trenches of this crazy pandemic and ending with a song they’d like to perform, as well as near-daily Live in-home performances from around the city and the globe.
                                </p>
                            </div>

                            <a href="https://www.lovefromphilly.com/" target="_blank">
                                <button className="btn btn-primary text-large text-thin margin-bottom-20" style={{ width: '100%' }}>
                                    <big>Visit the <b>Love From Philly</b> site</big> <Icon fa="play-circle-o" />
                                </button>
                            </a>

                            <div className="background-white pad-30 text-large text-light" style={{ lineHeight: '180%' }}>
                                Love From Philly is a partnership between The Philadelphia Globe and <a href="https://30amp.org" target="_blank">30 Amp Circuit</a>, the award winning Philly-based non-profit which promotes health and wellness for working musicians and their associates. To donate, please do so directly to <a href="https://30amp.org">30amp’s “Cost of Living Fund,”</a> which will then award grants to Philadelphia musicians getting hit the hardest by the COVID-19 pandemic. More info can be found at <a href="https://30amp.org" target="_blank">30amp.org</a> and <a href="https://lovefromphilly.org" target="_blank">lovefromphilly.com</a>.
                            </div>
                        </div>
                    </div>
                </CentralLayout>
            </ErrorBoundary>
        </AppBase>
    );
};

export default Home;

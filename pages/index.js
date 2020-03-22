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
                <CentralLayout>
                    <div className="row pad-20 justify-center items-center self-center">
                        <div>
                            <img
                                src="/logo-phillyglobe.svg"
                                alt="The Philadelphia Globe logo"
                                className="background-primary margin-30 margin-bottom-0"
                                style={{ width: '300px', maxWidth: '100%', borderRadius: '50%' }}
                            />
                            <SocialButtons />
                        </div>
                        <div className="stack pad-10" style={{ maxWidth: '600px' }}>
                            <div className="pad-30 background-primary text-white">
                                <h3 className="text-light">Welcome to</h3>
                                <img src="/logo-text-white.svg" style={{ width: '300px', maxWidth: '100%' }} />
                                <p class="text-large margin-top-10">All new website coming soon.</p>
                            </div>
                            <div className="pad-30 background-white row">
                                <div className="grow-1 text-large">

                                <p className="text-engraved text-small">The Philadelphia Globe presents</p>
                                    <img
                                        src="/love-from-philly.png"
                                        style={{ float: 'right', width: '120px' }}
                                        className="margin-10"
                                    />
                                    <p className="text-bold text-large">
                                        Love from Philly.
                                        <br/>
                                        Live from Philly.
                                    </p>
                                    <p>
                                        Love From Philly is a community effort to bring hope, inspiration and love from Philly to benefit our city's musicians and artists.
                                    </p>
                                    <p>
                                        Love From Philly serves as a virtual stage for Philly’s finest musicians, artists and personalities, as well as artists from around the globe, who can send in their <b>#lovejawns</b> -- 1-3 min videos sharing their stories from inside the trenches of this crazy pandemic and ending with a song they’d like to perform, as well as near-daily Live in-home performances from around the city and the globe.
                                    </p>
                                    <Link href="/lovefromphilly">
                                        <button className="btn" style={{ width: '100%' }}>
                                            Check it out <Icon fa="arrow-right" className="margin-left-10" />
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </CentralLayout>
            </ErrorBoundary>
        </AppBase>
    );
};

export default Home;

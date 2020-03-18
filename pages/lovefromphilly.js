import React from 'react';
import Link from 'next/link';

import { Icon } from 'arkade/common';
import { CentralLayout } from 'arkade/layouts';
import { AppError } from 'arkade/errors';
import { ErrorBoundary } from 'arkade/tools';

import { AppBase } from 'components/app-base';

import config from 'config';
const { API_BASE_URL } = config;

const Home = () => {
    return (
        <AppBase>
            <ErrorBoundary>
                <Link href="/">
                    <img
                        src="/logo-phillyglobe.svg"
                        alt="The Philadelphia Globe logo"
                        className="margin-10 background-primary clickable"
                        style={{ width: '100px', maxWidth: '100%', borderRadius: '50%', cursor: 'pointer' }}
                    />
                </Link>

                <CentralLayout style={{ minHeight: 'auto' }}>
                    <div className="row pad-10 justify-center items-center self-center">
                        <img
                            src="https://images.squarespace-cdn.com/content/5e6f59318679733a83b1c786/1584545335724-F0XPEBZHPXSX3S8GQV8F/jen-styles+of+logo.png?content-type=image%2Fpng"
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
                                    <b>Love From Philly: Live from Philly</b> is a one-hour show which will stream live, bringing you a daily rotating collection of Philly’s finest musicians, artists and personalities who will perform and share their stories from the trenches of this crazy pandemic.
                                </p>
                            </div>

                            <a href="https://www.lovefromphilly.com/">
                                <button className="btn btn-primary text-large text-thin margin-bottom-20" style={{ width: '100%' }}>
                                    <big>Stream <b>Love From Philly</b> now</big> <Icon fa="play-circle-o" />
                                </button>
                            </a>

                            <div className="background-white pad-30 text-large">
                                <p style={{ fontWeight: 300 }}>The broadcast will raise money for <a className="text-primary" href="https://30amp.org" target="_blank">30amp.org</a>, the award winning Philly-based non-profit which promotes health and wellness for working musicians and their associates.  Please donate directly to 30amp’s <i>“Cost of Living Fund,”</i> which will then award grants to Philadelphia musicians getting hit the hardest by the COVID-19 pandemic.</p>
                            </div>
                        </div>
                    </div>
                </CentralLayout>
            </ErrorBoundary>
        </AppBase>
    );
};

export default Home;

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
                <CentralLayout>
                    <div className="row pad-20 justify-center items-center self-center">
                        <img
                            src="/logo-phillyglobe.svg"
                            alt="The Philadelphia Globe logo"
                            className="background-primary margin-30"
                            style={{ width: '300px', maxWidth: '100%', borderRadius: '50%' }}
                        />
                        <div className="stack pad-20" style={{ maxWidth: '500px' }}>
                            <div className="pad-40 background-primary text-white">
                                <h3><span className="text-light">Welcome to</span> The Philadelphia Globe</h3>
                                <p class="text-large">All new website coming soon.</p>
                            </div>
                            <div className="pad-40 background-white row">
                                <div className="grow-1 text-large">

                                <p className="text-engraved text-small">The Philadelphia Globe presents</p>
                                    <img
                                        src="https://images.squarespace-cdn.com/content/5e6f59318679733a83b1c786/1584545335724-F0XPEBZHPXSX3S8GQV8F/jen-styles+of+logo.png?content-type=image%2Fpng"
                                        style={{ float: 'right', width: '120px' }}
                                        className="margin-10"
                                    />
                                    <p>
                                        <b className="text-large">Love from Philly.<br/>Live from Philly.</b>
                                        <br/>
                                        Click here to visit <nobr className="text-bold">Love From Philly</nobr>, our one-hour live stream bringing you a daily rotating collection of Philly’s finest musicians, artists and personalities who will perform and share their stories from the trenches of this crazy pandemic.
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
                    <p>Yo?</p>
                </CentralLayout>
            </ErrorBoundary>
        </AppBase>
    );
};

export default Home;

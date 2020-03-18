import React from 'react';
import Head from 'next/head';

import 'mansion-ui';
import 'theme/theme.scss';

import appConfig from 'config';

export const AppBase = ({ children, ...props } = {}) => {
    const { APP_NAME, API_BASE_URL } = appConfig;

    return (
        <div {...props}>
            <Head>
                <title>{APP_NAME}</title>
                <meta charSet="UTF-8" />
                <link rel="icon" href="/favicon.png" />
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" />
                <meta name="viewport" content="initial-scale=1, maximum-scale=1" />
            </Head>
            {children}
        </div>
    );
};

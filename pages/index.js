import React from 'react';

import { AppError } from 'arkade/errors';
import { ErrorBoundary } from 'arkade/tools';

import { AppBase } from 'components/app-base';

import config from 'config';
const { API_BASE_URL } = config;

const Home = () => {
    return (
        <AppBase>
            <ErrorBoundary>
                YO lol
            </ErrorBoundary>
        </AppBase>
    );
};

export default Home;

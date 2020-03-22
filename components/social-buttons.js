import React from 'react';

import { Icon } from 'arkade/common';

const links = [
    {
        url: 'https://www.instagram.com/philaglobe/',
        title: 'The Philadelphia Globe on Instagram',
        icon: 'instagram'
    },
    {
        url: 'https://www.youtube.com/channel/UCCLn48VCIl-t5foYQXbiaWw?',
        title: 'The Philadelphia Globe on YouTube',
        icon: 'youtube'
    },
    {
        url: 'https://www.youtube.com/channel/UCCLn48VCIl-t5foYQXbiaWw?',
        title: 'https://www.facebook.com/thephiladelphiaglobe',
        icon: 'facebook'
    }
]


export const SocialButtons = () => (
    <div className="pad-30 margin-bottom-10 text-white text-center" style={{ fontSize: '2em' }}>
        {links.map(link => (
            <a key={link.url} href={link.url} target="_blank" title={link.title}>
                <Icon fa={link.icon} className="pad-10" />
            </a>
        ))}
    </div>
)

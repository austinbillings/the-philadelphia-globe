import React, { useState } from 'react';

import { Icon } from 'arkade/common';
import { Audio } from 'arkade/media';
import './album-stream-card.scss';

export const AlbumStreamCard = ({ title = null, artist = {}, tracks = [], coverUrl = null }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [activeTrack, setActiveTrack] = useState(tracks[0]);

    const isActiveTrack = (track) => activeTrack.title === track.title;

    const onTrackClick = (track) => (evt) => {
        if (isActiveTrack(track))
            return setIsPlaying(!isPlaying);

        setActiveTrack(track);
        setIsPlaying(true);
    };

    const onTrackComplete = () => {
        const currentTrackIndex = tracks.findIndex(isActiveTrack);
        const hasNextTrack = (currentTrackIndex + 1) < tracks.length;

        if (!hasNextTrack) return;

        setActiveTrack(tracks[currentTrackIndex + 1]);
    };

    return (
        <div className="album-stream-card">

            <div className="album-header">
                {coverUrl && (
                    <img src={coverUrl} className="album-cover"/>
                )}
                {activeTrack && (
                    <Audio
                        src={activeTrack.source.url}
                        title={activeTrack.title}
                        length={activeTrack.length}
                        onComplete={onTrackComplete}
                    />
                )}
            </div>

            <div className="album-body">

                {title && <h1 className="album-title pad-bottom-5">{title}</h1>}

                {artist && (
                    <a className="album-artist" href={artist.url} target="_blank">
                        {artist.name}
                    </a>
                )}

                {tracks && (
                    <ul className="album-tracks">
                        {tracks.map((track, index) => (
                            <li key={index}
                                className={`album-track album-track--${isActiveTrack(track) ? 'active' : 'inactive'}`}
                                onClick={onTrackClick(track)}>
                                {isActiveTrack(track)
                                    ? <Icon fa="volume-up track-playing-icon"/>
                                    : <span className="track-number">{index + 1}. </span>
                                }
                                <span className="album-track-title">{track.title}</span>
                            </li>
                        ))}
                    </ul>
                )}

            </div>
        </div>
    );
};

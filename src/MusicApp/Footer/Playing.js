import './Playing.css';

import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

import {useContext} from 'react';
import {Songs} from '../Context';

const Playing = () => {

    const {song, handleSetSong} = useContext(Songs)

    const handleClickNext = () => {
        handleSetSong(song.id + 1)
    }

    const handleClickPre = () => {
        handleSetSong(song.id - 1)
    }

    return(
        <>
            <AudioPlayer
                className = "player-music"
                layout = "stacked-reverse"
                showSkipControls = {true}
                showJumpControls = {false}
                src = {song.url}
                onClickNext = {() => handleClickNext()}
                onClickPrevious = {() => handleClickPre()}
            />
        </>
    )
}

export default Playing;
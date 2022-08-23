import {useState} from "react";

import Header from "./Header/Header";
import Container from "./Container/Container";
import Playing from "./Footer/Playing";

import {Songs} from "./Context";
import DataSongs from './Data/songs.json';

const MusicApp = () => {

    const [song, setSong] = useState(DataSongs[0])

    const handleSetSong = (idSong) => {
        const song = DataSongs.find(song => song.id === idSong)
        if(!song) 
            setSong(DataSongs[0])
        else
            setSong(song)
    }

    return(
        <>
            <Songs.Provider value={{DataSongs, handleSetSong, song}}>
                <Header/>
                <Container/>
                <Playing/>
            </Songs.Provider>
        </>
    )
}

export default MusicApp;
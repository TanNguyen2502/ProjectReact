import {useContext} from 'react';
import {Songs} from '../Context';

import './Detail.css';

const Detail = () => {

    const {song} = useContext(Songs)

    return(
        <>
            <div className = 'wrap-music'>
                <div className = 'title-1'> Nhạc đang phát </div>
                <div className = 'title-2'> {song.name} </div>
                <img className = 'image' src = {song.links.images[0].url} alt = 'avatar' />
            </div>
        </>
    )
}

export default Detail;
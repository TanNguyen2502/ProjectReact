import './List.css';

import {Songs} from '../Context';
import {useState,useContext, useEffect} from 'react';

const List = () => {

    const {DataSongs, handleSetSong, song} = useContext(Songs)

    const [idSong, setidSong] = useState(0);

    const handlePlaySong = (idSong) => {
        setidSong(idSong)
        handleSetSong(idSong)
    }

    useEffect(() => {
        setidSong(song.id)
    }, [song])

    return(
        <>
            <div> 
                <div className = 'row scrollbar style-6'>
                    <table>
                        <thead>
                            <tr className = "title">
                                <th className = "col-1"> # </th>
                                <th className = "col-8 songTitle"> Tên bài hát </th>
                                <th className = "col-2"> Tác giả </th>
                                <th className = "col-1"> <i className = 'fas fa-download'/> </th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                DataSongs.map((item, index) => (
                                    <tr key = {index} className = "item" onClick = {() => handlePlaySong(item.id)}>
                                        <td> {index +1} </td>
                                        <td className = "songTitle"> {item.name} </td>
                                        <td> {item.author} </td>
                                        <td> <a href = {item.url} className = 'fas fa-download'/> </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default List;





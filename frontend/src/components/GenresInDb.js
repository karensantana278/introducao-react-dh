import { useState, useEffect } from "react";
import axios from "axios";
import GenreCard from './GenreCard';
import Painel from "./Painel";

function GenresInDb(){
    const [ genres, setGenres ] = useState([]);

	useEffect(() => {
		axios.get("http://localhost:3001/api/genres").then((resp) => {
			setGenres(resp.data.data);
		});
	}, []);

    return <Painel titulo="Genres in Data Base">
        <div className="row">
            {genres.map(genre => <GenreCard name={genre.name}/>)}	
        </div>
    </Painel>
}

export default GenresInDb;
import { useState, useEffect } from "react";
import axios from "axios";

function MoviesList(){
    const [ movies, setMovies ] = useState([]);

    useEffect(() => {
		axios.get("http://localhost:3001/api/movies").then((resp) => {
			setMovies(resp.data.data);
		});
	}, []);

    return <div className="row">
        <div className="col-sm-12">
            <table className="table">
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Avaliação</th>
                        <th>Prêmios</th>
                        <th>Duração</th>
                    </tr>
                </thead>
                <tbody>
                    { movies.map((movie) => {
                        return <tr>
                            <td>{movie.title}</td>
                            <td>{movie.rating}</td>
                            <td>{movie.awards}</td>
                            <td>{movie.length}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    </div>
}

export default MoviesList;
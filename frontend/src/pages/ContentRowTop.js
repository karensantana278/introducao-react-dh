import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import ContentRowMovies from '../components/ContentRowMovies';
import Painel from '../components/Painel';
import GenresInDb from '../components/GenresInDb';
import MoviesList from '../components/MoviesList';

function ContentRowTop(){
	const informacoes = [
		{titulo: "Movies in Data Base", quantidade:21, icone:'film', cor:'primary'},
		{titulo: "Total Awards", quantidade:79, icone:'award', cor:'success'},
		{titulo: "Actors Quantity", quantidade:49, icone:'user', cor:'warning'},
	];

    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>
					

					{/*<!-- Content Row Movies-->*/}
					<div className="row">
					{ informacoes.map((info) => {
						return <ContentRowMovies
						key={info.titulo}
						titulo={info.titulo}
						quantidade = {info.quantidade}
						icone= {info.icone}
						cor = {info.cor} />
					})}
					</div>
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<Painel titulo="Last movie in Data Base">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa citationem ratione aperiam voluptatum non corporis ratione aperiam voluptatum quae dolorem culpa ratione aperiam voluptatum?</p>
									<a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a>
						</Painel>

						{/*<!-- Genres in DB -->*/}
						<GenresInDb />
					</div>
					<MoviesList />
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;
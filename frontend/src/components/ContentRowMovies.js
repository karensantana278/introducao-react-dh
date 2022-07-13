import PropTypes from "prop-types";

function ContentRowMovies(props){

    const {titulo, quantidade, cor, icone} = props;

    return <div className="col-md-4 mb-4">
    <div className={`card border-left-${cor} shadow h-100 py-2`}>
        <div className="card-body">
            <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                    <div className={`text-xs font-weight-bold text-${cor} text-uppercase mb-1`}>{titulo}</div>
                    <div className="h5 mb-0 font-weight-bold text-gray-800">{quantidade}</div>
                </div>
                <div className="col-auto">
                    <i className={`fas fa-${icone} fa-2x text-gray-300`}></i>
                </div>
            </div>
        </div>
    </div>
</div>
}

ContentRowMovies.propTypes = {
    titulo: PropTypes.string.isRequired,
    quantidade: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    cor: PropTypes.oneOf(['primary', 'success', 'danger', 'warning', 'info']).isRequired,
    icone: PropTypes.string.isRequired,
}

ContentRowMovies.defaultProps = {
    titulo: "Título", 
    quantidade: 0, 
    icone: 'film',
    cor: 'primary'
}

export default ContentRowMovies
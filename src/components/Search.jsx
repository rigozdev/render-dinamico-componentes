const Search = ({onChange}) => {
    return (
        <form action="">
            <div className="search-container">
                <label className="form-label labelSearch" htmlFor="">Búsqueda:</label>
                <input className="form-control inputSearch" type="text" onChange={onChange}/>
            </div>
            
        </form>
    );
}

export default Search;
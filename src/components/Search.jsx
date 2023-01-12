const Search = ({onChange}) => {
    return (
        <form action="">
            <label htmlFor="">Búsqueda:</label>
            <input type="text" onChange={onChange}/>
        </form>
    );
}

export default Search;
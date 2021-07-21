import QueryString from 'query-string'
function Search(props){

var query=QueryString.parse(props.location.search)

    return(
        <h2>Search Cake for{query.q}</h2>
    )
}
export default Search;
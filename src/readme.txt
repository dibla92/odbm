passare dal figlio al padre:
Dall' app.component è possibile passare in input il metodo dell' app.component richiamabile dal figlio.
Nel caso in esempio:
onSearchTerm = {this.searchMovies}   // sul parametro onSearchTerm gli metto il metodo dell' app.component
export default function navBar({onSearchTerm}) {   //navBar lo prende in input
<SearchBar onSearchMovie = {onSearchTerm}/>   //navBar glielo passa al figlio nelle props.onSearchMovie
onClick = {this.props.onSearchMovie(this.state.term)}  // il figlio ce l' ha nelle props
onChange = {this.SearchChange} type="search"  value={this.state.term} // o è possibile cambiarli lo stato
e nel metodo searchChange del figlio cambiarli la props -> this.props.onSearchMovie(evt.target.value);

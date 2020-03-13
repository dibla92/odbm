import React, {Component} from 'react'

export default class SearchBar extends Component{

    constructor(props) {
        super(props);
        this.state = {
            term: 'dolce vita'
        }
    }

    SearchChange = (evt) => {
        this.setState({term: evt.target.value})
        // this.props.onSearchMovie(evt.target.value);
    }

    searchClicked = (evt) => {
        evt.preventDefault();
        this.props.onSearchMovie(this.state.term)
    }

    render() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" 
                onChange = {this.SearchChange}  //senza questo metodo che cambia lo stato il testo è cablato su dolce vita invece il setState reinderizza
                type="search"  value={this.state.term} placeholder="Search" aria-label="Search"/>
                <button onClick = {this.searchClicked} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        )
    }
}

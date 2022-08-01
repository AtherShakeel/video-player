import React, {Component} from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: ' '};
    }

    render () {
    //    return <input onChange={event => console.log(event.target.value)} />;
        return (
            <div className='search-bar'>
                 <input
                    value={this.state.term}
                    onChange={event => this.onInputChange (event.target.value) } />
            </div>
        );
    }


    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }

    //onInputChange (event) {                            instead of writing this function explicitly we have used and
                                                         //arrow         function above to condense the code into 1 line
    //    console.log(event.target.value);
    //}
}

export default SearchBar;


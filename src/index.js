import _ from 'lodash';
import { extend } from 'lodash';
import React, { Component} from 'react';
import ReactDOM, { render } from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyC-WFiic5uN9e0wSxNEfXHamNyFHMPxqig';


// Create a new component. This component should produce some HTML.


// const App = () => {
//     return (
//         <div>
//             <SearchBar />
//         </div>                // this HTML looking piece is actually JSX. JSX is a subset or dialect of JavaScript which
//                               //allows us to write what looks like HTML but is really behind the scenes just JavaScript
//     );
// }

//We will now refactor the above function component into a class component because we have to make use of the state property of the component. We will use state property to track the response(videos in this case) we get from youtube search api
//hence commented out the above APP function and refactored it below

class App extends Component {
    constructor(props) {
        super(props);

        this.state = { videos: [] , selectedVideo: null};

        this.videoSearch('surfboards');
    }

        videoSearch(term) {
            YTSearch({key: API_KEY , term: term}, (data) => {
                this.setState({ videos: data , selectedVideo: data[0]});
            });
        }


        render() {
            const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300)
            return (
                <div>
                    <SearchBar onSearchTermChange = {videoSearch}/>
                    <VideoDetail videoAvailable = {this.state.selectedVideo} />
                    <VideoList
                    onVideoSelect = {clickedItem => this.setState({selectedVideo: clickedItem})}
                    vList = {this.state.videos}
                    />
                </div>
            );
        }

}

// Take this component's generated HTML and put it on the page (in the DOM).

ReactDOM.render(<App />, document.querySelector('.container'));

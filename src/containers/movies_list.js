import React, { Component } from 'react';
import { connect }  from 'react-redux';
import * as actions from '../actions'

class MoviesList extends Component {

  componentWillMount(){
    this.props.moviesList() /// calling movies list function form actions
  }
  renderList=(movies) =>{
    if(movies){
      return movies.map((movie)=>{
        return (
          <div>{movie.name}</div>
        )
      })
    }
  }

  render() {
    return (
        <div>
           {this.renderList(this.props.movies)}
        </div>
    )
  }
}
function mapStateToProps(state){
  console.log(state);
  console.log("inside map state to props");
  return{
    movies:state.movies // setting the movies data in "movies" state 
  }
}

//export default App;

export default connect(mapStateToProps,actions)(MoviesList);






// constructor(props){
//   super(props);
//   state ={
//     movies:null;
//   }
// }

// tthis.setState{(movies:data)}
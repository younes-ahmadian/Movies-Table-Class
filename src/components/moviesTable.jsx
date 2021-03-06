import React, {Component} from 'react';
import Like from './common/like';
import Table from './common/table';
import {Link} from 'react-router-dom';


class MoviesTable extends Component {
  
    columns = [
        {path: "title", lable: "Title", content: movie => <Link to={`/movies/${movie._id}`}>{movie.title}</Link>},
        {path: "genre.name", lable: "Genre"},
        {path: "numberInStock", lable: "Stock"},
        {path: "dailyRentalRate", lable: "Rate"},
        {key: "like",
        content: movie => <Like onClick={() => this.props.onLike(movie)} liked ={movie.liked}/>},
        {key: "delete",
        content: movie => <button onClick = {() => this.props.onDelete(movie)}
        className="btn btn-danger btn-sm">Delete</button> }
    ];

    render() { 
        const {movies, onSort, sortColumn} = this.props;

        return ( 
            <Table onSort={onSort}
            sortColumn={sortColumn}
            columns={this.columns}
            data={movies}/>
         );
    
    }
}
 
export default MoviesTable;

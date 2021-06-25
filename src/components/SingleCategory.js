
import '../css/SingleCategory.css'

import React, { Component } from 'react';
import SingleCategoryItem from '../components/SingleCategoryItem';


    class SingleCategory extends Component {
        state = {
            data: [],
            isLoaded: false
        }
        componentDidMount() {
            let id = this.props.match.params.Id
            console.log(id)
            fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${id}`)
            .then((result) => result.json())
            .then((result) => result)
            .then((result) => this.setState({ data: result, isLoaded:true }))
            console.log(this.state.data);
            console.log(JSON.stringify(this.state.data));
        }
 
        render() {
            return (
                <div className="Categories">
                    { 
                    this.state.isLoaded ?
                        <div> 
                           Everything {this.props.match.params.Id}
                           {this.state.data.meals.map((Key, idMeal) => <SingleCategoryItem
                    data={Key}
                    key={Key.idMeal}
                />)} 
                    </div>
                        :
                        <div>
                        Loading...
                         </div>
                       }
                </div> 
               
             );
        }
    }

export default SingleCategory;

import React, {useState, useEffect} from 'react';

import axios from 'axios';






const AllLocations = () => {


    const [allLocations, setAllLocations] = useState([])







    useEffect( () => {
        
        const options = {

            method: 'GET',

            url: 'https://escape-from-tarkov.p.rapidapi.com/locations',

            headers: {

            'x-rapidapi-host': 'escape-from-tarkov.p.rapidapi.com',

            'x-rapidapi-key': ''

            }

        };
        
        axios.request(options)
        
        .then(response=>{

            console.log(response.data);

            setAllLocations(response.data)

        })
        
        .catch(function (error) {

            console.error(error);
        });


    }, [] )








    return (

        <div>


        <table className="table table-dark table-bordered">

                        <thead>

                                <tr>

                                <th scope="col">Name</th>

                                <th scope="col">Description</th>

                                

                                

                                </tr>

                        </thead>

                    </table>

        {

                allLocations.map( (location, x) => {

                return (

                <div key = {x}>


                    <table className="table table-dark table-bordered table-hover align-middle">

                        <tbody>

                                <tr>

                                        <td key = {x}> {location.name} </td>

                                        <td key = {x}> {location.description} </td>

                                </tr>
        
                        </tbody>

                    </table>

                </div>

                )

            } )

        }

        </div>




    );

};


export default AllLocations;

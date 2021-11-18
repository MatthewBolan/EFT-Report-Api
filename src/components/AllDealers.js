import React, {useState, useEffect} from 'react';

import axios from 'axios';






const AllDealers = () => {


    const [allDealers, setAllDealers] = useState([])







    useEffect( () => {
        
        const options = {

            method: 'GET',

            url: 'https://escape-from-tarkov.p.rapidapi.com/dealers',

            headers: {

            'x-rapidapi-host': 'escape-from-tarkov.p.rapidapi.com',

            'x-rapidapi-key': '6e730a037bmsh634f4682eec1e61p15dc45jsn18e7ef735328'

            }

        };
        
        axios.request(options)
        
        .then(response=>{

            console.log(response.data);

            setAllDealers(response.data)

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

                                <th scope="col">Alias</th>

                                <th scope="col">Real Name</th>

                                <th scope="col">Biography</th>

                                <th scope="col">Origin</th>

                                

                                </tr>

                        </thead>

                    </table>

        {

                allDealers.map( (dealer, x) => {

                return (

                <div key = {x}>


                    <table className="table table-dark table-bordered table-hover align-middle">

                        <tbody>

                                <tr>
                                        <td key = {x}> {dealer.name} </td>

                                        <td key = {x}> {dealer.real_name} </td>

                                        <td key = {x}> {dealer.biography} </td>

                                        <td key = {x}> {dealer.origin}</td>

                                        

                                        

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


export default AllDealers;
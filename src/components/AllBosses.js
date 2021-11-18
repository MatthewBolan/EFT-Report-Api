import React, {useState, useEffect} from 'react';

import axios from 'axios';






const AllBosses = () => {


    const [allBosses, setAllBosses] = useState([])







    useEffect( () => {
        
        const options = {

            method: 'GET',

            url: 'https://escape-from-tarkov.p.rapidapi.com/bosses',

            headers: {

            'x-rapidapi-host': 'escape-from-tarkov.p.rapidapi.com',

            'x-rapidapi-key': '6e730a037bmsh634f4682eec1e61p15dc45jsn18e7ef735328'

            }

        };
        
        axios.request(options)
        
        .then(response=>{

            console.log(response.data);

            setAllBosses(response.data)

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

                                <th scope="col">Images</th>

                                <th scope="col">Followers</th>

                                <th scope="col">Spawn Chance</th>

                                <th scope="col">Location</th>

                                </tr>

                        </thead>

                    </table>

        {

            allBosses.map( (boss, x) => {

                return (

                <div key = {x}>


                    <table className="table table-dark table-bordered table-hover align-middle">

                        <tbody>

                                <tr>
                                        <td key = {x}> {boss.name} </td>

                                        <td key = {x}> <img src={boss.image} alt="Boss Img" height="250px" width="250px" /> </td>

                                        <td key = {x}> {boss.followers} </td>

                                        <td key = {x}> {boss.spawn_chance_percentage}% </td>

                                        <td key = {x}> {boss.location.name} </td>

                                        

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


export default AllBosses;
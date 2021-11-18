import React, {useState, useEffect} from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';




const Ammunition762x39 = () => {



    const [allAmmunition762x39, setAllAmmunition762x39] = useState([])







    useEffect( () => {

        const options = {

            method: 'GET',

            url: 'https://escape-from-tarkov.p.rapidapi.com/items/ammunitions/7.62x39',

            headers: {

            'x-rapidapi-host': 'escape-from-tarkov.p.rapidapi.com',

            'x-rapidapi-key': '6e730a037bmsh634f4682eec1e61p15dc45jsn18e7ef735328'

            }

        };



        axios.request(options)

        .then(response=>{

            console.log(response.data);

            setAllAmmunition762x39(response.data)

        })
        
        .catch(function (error) {

            console.error(error);
        });


    }, [] )








    return (

        <div>

        <Link to="/ammunitiontypes" className="btn btn-secondary my-3" > Ammunitions / Calibers </Link> | <Link to="/" className="btn btn-primary my-3" > DashBoard </Link>


        <table className="table table-dark table-bordered">

                        <thead>

                                <tr>

                                <th scope="col">Name</th>

                                <th scope="col">Damage</th>

                                <th scope="col">Penetration Power</th>

                                <th scope="col">Armor Damage</th>

                                <th scope="col">Fragmentation Chance</th>

                                <th scope="col">Ricochet Chance</th>

                                <th scope="col">Speed</th>

                                <th scope="col">Special Effects</th>

                                <th scope="col">Sold By</th>


                                </tr>

                        </thead>

                    </table>

        {

                allAmmunition762x39.map( (ammunition, x) => {

                return (

                <div key = {x}>


                    <table className="table table-dark table-bordered table-hover align-middle">

                        <tbody>

                                <tr>

                                        <td key = {x}> {ammunition.name} </td>

                                        <td key = {x}> {ammunition.damage} </td>

                                        <td key = {x}> {ammunition.penetration_power} </td>

                                        <td key = {x}> {ammunition.armor_damage} </td>

                                        <td key = {x}> {ammunition.fragmentation_chance} </td>

                                        <td key = {x}> {ammunition.ricochet_chance} </td>

                                        <td key = {x}> {ammunition.speed} </td>

                                        <td key = {x}> {ammunition.special_effects} </td>

                                        <td key = {x}> {ammunition.sold_by} </td>

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


export default Ammunition762x39;
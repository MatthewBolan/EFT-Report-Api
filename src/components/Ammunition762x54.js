import React, {useState, useEffect} from 'react';

import axios from 'axios';

import { Link } from 'react-router-dom';




const Ammunition762x54 = () => {



    const [allAmmunition762x54, setAllAmmunition762x54] = useState([])







    useEffect( () => {

        const options = {

            method: 'GET',

            url: 'https://escape-from-tarkov.p.rapidapi.com/items/ammunitions/7.62x54',

            headers: {

            'x-rapidapi-host': 'escape-from-tarkov.p.rapidapi.com',

            'x-rapidapi-key': ''

            }

        };



        axios.request(options)

        .then(response=>{

            console.log(response.data);

            setAllAmmunition762x54(response.data)

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

                allAmmunition762x54.map( (ammunition, x) => {

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


export default Ammunition762x54;

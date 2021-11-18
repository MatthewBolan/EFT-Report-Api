import React, {useState, useEffect} from 'react';

import axios from 'axios';

import {Link} from "react-router-dom";





const AllAmmunitionTypes = () => {



    const [allAmmunitionTypes, setAllAmmunitionTypes] = useState([])







    useEffect( () => {

        const options = {

            method: 'GET',

            url: 'https://escape-from-tarkov.p.rapidapi.com/items/ammunitions',

            headers: {

            'x-rapidapi-host': 'escape-from-tarkov.p.rapidapi.com',

            'x-rapidapi-key': ''

            }

        };



        axios.request(options)

        .then(response=>{

            console.log(response.data);

            setAllAmmunitionTypes(response.data)

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

                                <th scope="col">Caliber</th>

                                

                                

                                </tr>

                        </thead>

                    </table>

        {

                allAmmunitionTypes.map( (ammunition, x) => {

                return (

                

                <div key = {x}>


                    <table className="table table-dark table-bordered table-hover align-middle">

                        <tbody>

                                <tr>

                                        <td key = {x}> {ammunition.name} </td>

                                        <td key = {x}> {ammunition.caliber} </td>

                                </tr>
        
                        </tbody>

                    </table>

                </div>
                

                )

            } )

        }
                <Link to="/ammunition762x25" className="btn btn-secondary my-3" > 7.62x25 Types</Link> | <Link to="/ammunition762x39" className="btn btn-secondary my-3" > 7.62x39 Types</Link> | <Link to="/ammunition762x51" className="btn btn-secondary my-3" > 7.62x51 Types</Link> | <Link to="/ammunition762x54" className="btn btn-secondary my-3" > 7.62x54 Types</Link> | <Link to="/ammunition9x18" className="btn btn-secondary my-3" > 9x18 Types</Link> | <Link to="/ammunition9x19" className="btn btn-secondary my-3" > 9x19 Types</Link> | <Link to="/ammunition9x21" className="btn btn-secondary my-3" > 9x21 Types</Link> | <Link to="/ammunition9x39" className="btn btn-secondary my-3" > 9x39 Types</Link> | <Link to="/ammunition46x30" className="btn btn-secondary my-3" > 4.6x30 Types</Link> | <Link to="/ammunition57x28" className="btn btn-secondary my-3" > 5.7x28 Types</Link> | <Link to="/ammunition545x39" className="btn btn-secondary my-3" > 5.45x39 Types</Link> | <Link to="/ammunition556x45" className="btn btn-secondary my-3" > 5.56x45 Types</Link> | <Link to="/ammunition366" className="btn btn-secondary my-3" > .366 Types</Link> | <Link to="/ammunition127x55" className="btn btn-secondary my-3" > 12.7x55 Types</Link> | <Link to="/ammunition127x108" className="btn btn-secondary my-3" > 12.7x108 Types</Link> | <Link to="/ammunition12x70" className="btn btn-secondary my-3" > 12x70 Types</Link> | <Link to="/ammunition20x70" className="btn btn-secondary my-3" > 20x70 Types</Link>

        </div>




    );

};


export default AllAmmunitionTypes;

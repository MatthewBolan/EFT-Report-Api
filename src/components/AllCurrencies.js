import React, {useState, useEffect} from 'react';

import axios from 'axios';






const AllCurrencies = () => {


    const [allCurrencies, setAllCurrencies] = useState([])







    useEffect( () => {
        
        const options = {

            method: 'GET',

            url: 'https://escape-from-tarkov.p.rapidapi.com/currencies',

            headers: {

            'x-rapidapi-host': 'escape-from-tarkov.p.rapidapi.com',

            'x-rapidapi-key': ''

            }

        };
        
        axios.request(options)
        
        .then(response=>{

            console.log(response.data);

            setAllCurrencies(response.data)

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

                                <th scope="col">Abbreviation</th>

                                <th scope="col">Symbol</th>

                                

                                

                                </tr>

                        </thead>

                    </table>

        {

                allCurrencies.map( (currency, x) => {

                return (

                <div key = {x}>


                    <table className="table table-dark table-bordered table-hover align-middle">

                        <tbody>

                                <tr>
                                        <td key = {x}> {currency.name} </td>

                                        <td key = {x}> {currency.abbreviation} </td>

                                        <td key = {x}> {currency.symbol} </td>

                                        

                                        

                                        

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


export default AllCurrencies;

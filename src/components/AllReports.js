import React, {useState, useEffect} from 'react';

import axios from 'axios';

import {Link} from "react-router-dom";





const AllReports = (props) => {


    const [allReports, setAllPets] = useState([])







    useEffect( () => {

        axios.get("http://localhost:8000/api/reports")

        .then(response => {

            console.log("response when getting all reports ---->", response)

            setAllPets(response.data.results)

        })

        .catch (error => console.log("error --->", error))

    }, [props.formSubmitted] )







    return (

        <div className="my-5">

        <Link to="/bosses" className="btn btn-secondary my-3" > Bosses </Link> | <Link to="/dealers" className="btn btn-secondary my-3" > Dealers </Link> | <Link to="/currencies" className="btn btn-secondary my-3" > Currencies </Link> | <Link to="/locations" className="btn btn-secondary my-3" > Locations </Link> | <Link to="/ammunitiontypes" className="btn btn-secondary my-3" > Ammunitions / Calibers </Link>

        <table className="table table-dark table-bordered">

                        <thead>

                                <tr>

                                <th scope="col">Name</th>

                                <th scope="col" >Image</th>

                                <th scope="col" >Uploaded Image</th>

                                <th scope="col">Action</th>

                                </tr>

                        </thead>

                    </table>

        {

                allReports.map( (report, x) => {

                return (

                <div>


                    <table className="table table-dark table-bordered table-hover align-middle">

                        <tbody>

                                <tr>
                                        <td key = {x}> <Link to = {`/report/${report._id}`} > {report.name} </Link> </td>

                                        <td key = {x}> <img src={report.reportPicUrl} alt="Report Img" height="250px" width="250px" /> </td>

                                        <td key = {x}> <img src={`http://localhost:8000/${report.reportUplPic}`} alt="Report Upl Img" height="250px" width="250px" /> </td>

                                        <td> <Link to = {`/edit/${report._id}`} className="btn btn-warning" >Edit</Link> </td>

                                    

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


export default AllReports;
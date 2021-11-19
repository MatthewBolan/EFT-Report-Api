import React, {useEffect, useState} from 'react';

import { useParams } from "react-router";

import axios from 'axios';


import { useHistory } from 'react-router-dom';




const ReportDetails = () => {


    const { id } = useParams();

    const history = useHistory();



    const [reportInfo, setReportInfo] = useState({})


    useEffect( () => {

        axios.get(`http://localhost:8000/api/report/${id}`)

        .then( response => {

            console.log("response when getting report details!", response)

            setReportInfo(response.data.results)

        })

        .catch(error => console.log(error))

    }, [] )


    const deleteReport = () => {

        console.log('Deleting Product ID ---->', id)

        axios.delete(`http://localhost:8000/api/report/delete/${id}`)

        .then ( response => {

            console.log("response when deleting report details!", response)

            history.push("/")

        })

        .catch(error => console.log(error))

    }


    return (

        <div>

            <h1 className="my-3"> <u> EFT Report Details </u> </h1>

            <h2 className="my-5" > <u>Name</u>: {reportInfo.name}  </h2>

            <div className="card-body bg-dark">

            <p className="card-text"> <u>Type</u>: {reportInfo.type}</p>

            <p className="card-text"> <u> Description</u>: {reportInfo.description}</p>

            <p className="card-text my-5"><img src={reportInfo.reportPicUrl} alt="Report Img" height="500px" width="500px" /></p>

            <p className="card-text">

                <iframe width="750" height="750"src={reportInfo.reportVidUrl}></iframe>

            </p>


            <button onClick = {deleteReport} className="btn btn-danger my-5"> Delete Report </button>

            </div>

        </div>

    );

};

export default ReportDetails;
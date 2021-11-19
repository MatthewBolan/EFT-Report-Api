import React, {useEffect, useState} from 'react';

import axios from 'axios';

import { useParams } from "react-router";



import { useHistory } from 'react-router';



const EditReportForm = (props) => { 

    const { id } = useParams();

    const history = useHistory();



    const [formInfo, setFormInfo] = useState ({

        name:"",

        type:"",
        
        description:"",
        
        reportPicUrl:"",

        reportVidUrl:""

    })


    useEffect( () => {

        axios.get(`http://localhost:8000/api/report/${id}`)

        .then( response => {

            console.log("response when editing report details!", response)

            setFormInfo(response.data.results)


        })

        .catch(error => console.log(error))

    }, [] )




    const changeHandler = (event) => {

        console.log("Changing the form!")

            setFormInfo({

                ...formInfo,

                [event.target.name]: event.target.value

            })

    }



    const submitHandler = (event) => {

        event.preventDefault()

        axios.put(`http://localhost:8000/api/report/update/${id}`, formInfo)

            .then(response => {

                console.log("response when updating report details", response)

                history.push("/")

            })

            .catch( error => console.log(error))

    }




    return (

        <div>

            <h2 className="my-3" > <u> Edit EFT Report </u>: {formInfo.name} </h2>

        <form onSubmit = {submitHandler}>


            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3" > Name:</label>

                <input onChange={changeHandler} type="text" name="name" id="" className="form-control my-3" value={formInfo.name} />


            </div>



            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3"> Type:</label>

                <input onChange={changeHandler} type="text" name="type" id="" className="form-control my-3" value={formInfo.type} />


            </div>



            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3"> Description: </label>

                <input onChange={changeHandler} type="text" name="description" id="" className="form-control my-3" value={formInfo.description} />

            </div>
            

            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3"> Image ( Link / Url ): </label>

                <input onChange={changeHandler} type="text" name="reportPicUrl" id="" className="form-control my-3" value={formInfo.reportPicUrl} />

            </div>

            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3"> Video ( Embed Src Url ONLY ): </label>

                <input onChange={changeHandler} type="text" name="reportVidUrl" id="" className="form-control my-3" value={formInfo.reportVidUrl} />

            </div>

                <input type="submit"  value="Edit Report" className="btn btn-success my-5" />


        </form>

        </div>


    );

};

export default EditReportForm;
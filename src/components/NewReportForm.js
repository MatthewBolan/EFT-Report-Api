import React, {useState} from 'react';

import axios from 'axios';

import { useHistory } from 'react-router-dom';


const NewReportForm = (props) => { 

    const history = useHistory();




    const [formInfo, setFormInfo] = useState ({

        name:"",

        type:"",

        description:""

    })



    const [formErrors, setFormErrors] = useState ({

        name:"",

        type:"",

        description:"",

        reportPicUrl:""

    })



    const changeHandler = (event) => {

        console.log("Changing the form!")

            setFormInfo({

                ...formInfo,

                [event.target.name]: event.target.value

            })

        

    }



    const submitHandler = (event) => {

        event.preventDefault()

        axios.post("http://localhost:8000/api/report/create", formInfo)

        .then(response => {

            console.log(response)

            if(response.data.error){

                setFormErrors(response.data.error.errors)

            }else{

            props.setFormSubmitted(!props.formSubmitted)

            setFormInfo({

                name:"",

                type:"",
        
                description:"",

                reportPicUrl:""
        
        
            })

            setFormErrors({

                name:"",

                type:"",
        
                description:""
        
            })

            history.push("/")

        }


        })

        .catch(error => console.log("Error submitting the post request --->", error))

    }




    return (

        <div>

        <h2 className="my-3"> More Info The Better! </h2>

        <form onSubmit = {submitHandler}>


            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3" >Report Name:</label>

                <input onChange={changeHandler} type="text" name="name" id="" className="form-control my-3" value={formInfo.name} />

                <p className="text-danger mx-3" > {formErrors.name?.message} </p>

            </div>



            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3">Report Type:</label>

                <input onChange={changeHandler} type="text" name="type" id="" className="form-control my-3" value={formInfo.type} />

                <p className="text-danger mx-3" > {formErrors.type?.message} </p>

            </div>



            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3">Report Description: </label>

                <textarea onChange={changeHandler} type="text" rows="5" name="description" id="" className="form-control my-3" value={formInfo.description} />

                <p className="text-danger mx-3" > {formErrors.description?.message} </p>

            </div>


            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3">Report Image Link / Url: </label>

                <input onChange={changeHandler} type="text" name="reportPicUrl" id="" className="form-control my-3" value={formInfo.reportPicUrl} />

            </div>


            <input type="submit"  value="Add Report" className="btn btn-success my-5" />



        </form>

        </div>


    );

};

export default NewReportForm;
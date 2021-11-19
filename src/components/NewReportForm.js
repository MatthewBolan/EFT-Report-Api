import React, {useState} from 'react';

import axios from 'axios';

import { useHistory } from 'react-router-dom';


const NewReportForm = (props) => { 

    const history = useHistory();




    const [formInfo, setFormInfo] = useState ({

        name:"",

        type:"",

        description:"",

        reportPicUrl:"",

        reportVidUrl: ""

    })



    const [formErrors, setFormErrors] = useState ({

        name:"",

        type:"",

        description:""

        

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

                reportPicUrl:"",

                reportVidUrl: ""
        
        
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

        <div className="w-50">

        <h2 className="my-3"> <u> EFT Report Form </u> </h2>

        <form onSubmit = {submitHandler}>


            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3" >Name:</label>

                <input onChange={changeHandler} type="text" name="name" id="" className="form-control my-3" value={formInfo.name} />

                <p className="text-danger mx-3" > {formErrors.name?.message} </p>

            </div>



            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3">Type:</label>

                <input onChange={changeHandler} type="text" name="type" id="" className="form-control my-3" value={formInfo.type} />

                <p className="text-danger mx-3" > {formErrors.type?.message} </p>

            </div>



            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3">Description: </label>

                <textarea onChange={changeHandler} type="text" rows="5" name="description" id="" className="form-control my-3" value={formInfo.description} />

                <p className="text-danger mx-3" > {formErrors.description?.message} </p>

            </div>


            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3">Image ( Link / Url ): </label>

                <input onChange={changeHandler} type="text" name="reportPicUrl" id="" className="form-control my-3" value={formInfo.reportPicUrl} />

            </div>


            <div className="d-flex form-group my-3 align-items-center">

                <label className="mx-3">Video ( Embed Src Url ONLY ): </label>

                <input onChange={changeHandler} type="text" name="reportVidUrl" id="" className="form-control my-3" value={formInfo.reportVidUrl} />

            </div>

            

            <input type="submit"  value="Add Report" className="btn btn-success my-5" />



        </form>

            

                <div className="card-body bg-dark my-5 " id="videoinfo">

                    <p>

                        <u> Video ( Embed Src Url) Instructions / Example </u>

                        <li className="my-5"> Go to the video you'd like to select </li>

                        <li className="my-5"> (Click) Share </li>

                        <li className="my-5"> (Click) Embed </li>

                        <li className="my-5"> (Copy) The Video Embed Src Url </li>

                        <li className="my-5"> (Paste) The Video Embed Src Url Into The Appropriate Form Field</li>

                        <u className="mx-5"> EXAMPLE </u>

                        <li className="my-5">  iframe width="560" height="315" src=" <u> COPY THE VIDEO EMBED SRC URL WITHIN THESE DOUBLE QUOTATION'S </u> " title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen iframe </li>

                    </p>


                </div>

            

        </div>

        


    );

};

export default NewReportForm;
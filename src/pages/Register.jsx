import React from 'react';
import { useNavigate } from "react-router-dom";

// const shootSignin=async()=>{
//     try{
//         const orderUrl = "/dashboard";
//     }
//     catch(error){
//         console.log(error)

//     }

// };

const Register = () => {
    const navigate = useNavigate();

    const sayHello = () => 
    {

        navigate('/Comment');
    }

    // const gotoComment = () => {
    //     navigate('/Comment');
    // }


    return (
        <div>
            <form>

                <div class="form-outline mb-4">
                    <input type="email" id="form2Example1" class="form-control" />
                    <label class="form-label" for="form2Example1">Email address</label>
                </div>


                <div class="form-outline mb-4">
                    <input type="password" id="form2Example2" class="form-control" />
                    <label class="form-label" for="form2Example2">Password</label>
                </div>
                <div class="row mb-4">
                    <div class="col d-flex justify-content-center">

                        <div class="form-check">
                            <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                            <label class="form-check-label" for="form2Example31"> Remember me </label>
                        </div>

                    </div>
                    <div class="col">

                        <a href="/Dashboard">Forgot password?</a>
                    </div>
                </div>



                <button type="button" class="btn btn-primary btn-block mb-4" onClick={sayHello}>Sign in</button>
                {/* <button onClick={gotoComment}>Comment page</button> */}
                {/* <a href="/Dashboard">Sign up</a> */}
                <div class="text-center">
                    <p>Not a member? <a href="/Product">Register</a></p>
                    {/* <p>or sign up with:</p> */}
                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-google"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-twitter"></i>
                    </button>

                    <button type="button" class="btn btn-link btn-floating mx-1">
                        <i class="fab fa-github"></i>
                    </button>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-8">
                            <h6>hello</h6>
                            {/* <Register /> */}
                        </div>
                        <div class="col-lg-4">
                            <h6>hello</h6>
                        </div>

                    </div>
                </div>

            </form>





        </div>
    );
};

export default Register;
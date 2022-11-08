import React, { Component } from 'react';
import { useNavigate } from "react-router-dom";
export default class Product extends Component {


    // const Product = () => {

    state = {
        value: "Enter First Name"
    };
    handleChange = e => {
        this.setState({ value: e.target.value })
    };
    render() {
        const sayHello = () => {
            alert("Submit Page");

            // navigate('/Comment');
        }
        return (
            <div>
                <form>
                    <div class="form-outline mb-4">

                        <h2 className='reg'>Registration Here</h2>
                    </div>

                    <div class="form-outline mb-4">
                        <input type="text" value={this.state.value}
                            onChange={this.handleChange} />
                    </div>
                    <div class="form-outline mb-4">
                        <input type="text" defaultValue="Enter Second Name"
                        />
                    </div>

                    <div class="form-outline mb-4">
                        <input type="text" defaultValue="Enter Last Name" />
                    </div>
                    <div class="form-outline mb-4">
                        <input type="text" defaultValue="Enter Email here" />
                    </div>
                    <div class="form-outline mb-4">
                        <input type="text" defaultValue="Password" />
                    </div>
                    <button type="button" class="btn btn-primary btn-block mb-4" onClick={sayHello}>Sign in</button>



                </form>


            </div >
        );
        // };
    }
}


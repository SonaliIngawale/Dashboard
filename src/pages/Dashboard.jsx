import React from 'react';
import Register from './Register';
import { FaCircleNotch } from "react-icons/fa";
import { AiTwotoneSetting } from "react-icons/ai"
import { FaPuzzlePiece } from "react-icons/fa"
import { AiTwotoneSchedule } from "react-icons/ai"
import { GiNetworkBars } from "react-icons/gi"

// import img from '../../src/images/'

const Dashboard = () => {
    return (
        // <div>
        //     <div class="firstrow">
        //         <div class="row_4">
        //             <div class="col-sm-5 col-md-6">10,000</div>
        //             <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">Total Organized Registered</div>
        //         </div>
        //         <div class="row_4">
        //             <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
        //             <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">Total Organized Registered</div>
        //         </div>
        //         <div class="row_4">
        //             <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
        //             <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
        //         </div>
        //     </div>
        //     <div class="container text-center">
        //         <div class="row_1">
        //             <div class="col_1">
        //                 <h6>10000</h6>
        //             </div>
        //             <div class="col_1">
        //                 <h6>1,23,090</h6>
        //             </div>
        //         </div>
        //         {/* <div class="row">
        //             <div class="col_1">
        //                 <h6>200</h6>
        //             </div>
        //     </div> */}
        //         <div class="col_2">
        //             <h6>10,000</h6>
        //         </div>

        //     </div>
        //     <div class="container text-center">
        //         <div class="row">
        //             <div class="col__2">
        //                 <h6>10000</h6>
        //             </div>
        //             <div class="col__2">
        //                 <h6>1,23,090</h6>
        //             </div>
        //         </div>
        //         <div class="row">
        //             <div class="col__2">
        //                 <h6>200</h6>
        //             </div>
        //         </div>

        //     </div>
        //     <div class="container text-center">
        //         <div class="row">

        //         </div>
        //         <div class="col_3">
        //             <h6>40,000</h6>
        //         </div>
        //     </div>
        // </div>


        <div class="grid-container">
            <div class="item1">
                <div class="col_1">
                    <FaCircleNotch align="center" size={50}></FaCircleNotch>
                    <p className='icon'>
                        <AiTwotoneSetting></AiTwotoneSetting>
                    </p>
                    <p>10,000</p>
                    <h6>Total Organization Required</h6>
                </div>
                {/* <div class="vl"></div> */}
                <div class="col_1">
                    <FaCircleNotch size={50}></FaCircleNotch>
                    <p className='icon'>
                        <AiTwotoneSetting></AiTwotoneSetting>
                    </p>
                    <p>10,000</p>
                    <h6>Total Organization Required</h6>
                </div>
                <div class="col_1">
                    <FaCircleNotch size={50}></FaCircleNotch>
                    <p className='icon'>
                        <AiTwotoneSetting></AiTwotoneSetting>
                    </p>
                    <p>10,000</p>
                    <h6>Total Organization Required</h6>
                </div>

            </div>
            <div class="item2">
                { <h6 className='goto'>Registration</h6>}
                { <img src={process.env.PUBLIC_URL + "/graph.png"} alt='fresh' width="250px"/> }
            </div>
            <div class="item3"><h6>Candidates Registration</h6>
             <h6 className='color1'>TOTAL Candidate</h6>
            <h6>4586</h6>
            
            
            </div>
            <div class="item4">
                <p className='digit'>
                    <b>198</b>
                </p>
                <h5 class="compentenci">Compentencies Avaliable</h5>
                <h6 class="color">payment the material of product</h6>
                <h6 class="color1">FOR GOOD BUSSINESS FUTURE</h6>
                <hr></hr>
                <h6 class="color">payment the material of product</h6>
                <h6 class="color1">FOR GOOD BUSSINESS FUTURE</h6>
                <hr></hr>

            </div>
            <div class="item5">
                <p className='goto'>
                    <b>Goto</b>
                </p>
                <div class="col_1">
                    <FaPuzzlePiece align="center" size={50}></FaPuzzlePiece>
                    <h6>Update environment</h6>
                </div>
                <div class="col_1">
                    <AiTwotoneSchedule size={50}></AiTwotoneSchedule>
                    <h6>Schedular</h6>
                </div>
                <GiNetworkBars size={50}></GiNetworkBars>
                <h6>Report</h6>
                
            </div>
            <div class="item6">
                <p className='digit'>
                    <b>10</b>
                </p>
                <h5 class="compentenci">Log</h5>
                <h6 class="color">Request Received For Enrollment</h6>
                <h6 class="color1">Capgimini</h6>
                <h6><a class="link" href="/register">check</a></h6>
                <hr></hr>
                <h6 class="color">payment the material of product</h6>
                <h6 class="color1">FOR GOOD BUSSINESS FUTURE</h6>
                <h6><a class="link" href="/register">check</a></h6>
                <hr></hr>
            </div>
        </div>

    );
};

export default Dashboard;


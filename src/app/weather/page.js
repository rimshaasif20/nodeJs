"use client"
import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from '../Layout.module.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  async function getWeatherForecast() {
    try {
      const response = await axios.get(
        "http://api.weatherapi.com/v1/current.json?key= 51203a7a53c8482ca9891503230908&q=London"
      );
      setWeatherData(response.data);
      console.log("Data",response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getWeatherForecast();
  }, []);

  if (weatherData) {
    return (
      <div className={styles.main}>
       <div className="  d-flex justify-content-center align-items-center text-white  shadow-4-strong"
              >
      
  <div className=" border-0" >
                <div className="text-center mt-4 ">
                    <p className="h2 mt-5 mb-4" >{weatherData.location.name}</p>
                  <p className="mb-3" >{weatherData.current.condition.text}</p>
                  <p className="display-1 " >{weatherData.current.temp_c}°C</p>
                   <p className="" >{weatherData.current.temp_f}°F</p>
                    <span className="">
                      Pressure: <span >{weatherData.current.pressure_mb}</span>
                   </span>
                     <span className="">|</span>
                    
                     <span className="">
                       Humidity: <span >{weatherData.current.humidity}°C</span>
                     </span>
                   </div>
                   <div className=" p-4 border-top border-bottom mb-5">
                    <div className="row text-center">
                 <p>Country: {weatherData.location.country}</p>
                   <p>{weatherData.location.region}</p>
                     <p>Date|Time: {weatherData.location.localtime}</p>
                  </div>
              </div>
               <span className="sp">
                      <p  > Wind Direction:  "{weatherData.current.wind_dir}"</p>
                     
                      <p>Wind Degree:     "{weatherData.current.wind_degree}°"</p>
                    </span>
                 </div>
                  
       </div>
    </div>
     
                


    
  //         <div className="row d-flex justify-content-center align-items-center  " style={{ overflowX: "hidden",
  // width: "100%", marginRight:" 0 "}}>
  //           <div className="col-md-9 col-lg-7 col-xl-5 " style={{ width: "100%", height: "100%", marginRight: "0" }}>
  //             <div
  //               id="wrapper-bg"
  //               className=" text-white bg-image shadow-4-strong"
  //               style={{ backgroundImage: "url(https://i.gifer.com/srG.gif)", objectFit: "cover",  backgroundRepeat: "no-repeat", backgroundSize: "cover",marginRight: "0"  }}
  //             >
                
  //               <div className="card-header p-4 border-0" >
  //                 <div className="text-center mb-3">
  //                   <p className="h2 mb-2" id="wrapper-name">{weatherData.location.name}</p>
  //                   <p className="mb-2" id="wrapper-description">{weatherData.current.condition.text}</p>
  //                   <p className="display-1 mb-1" id="wrapper-temp">{weatherData.current.temp_c}°C</p>
  //                    <p className="mb-1" id="wrapper-description">{weatherData.current.temp_f}°F</p>
  //                   <span className="">
  //                     Pressure: <span id="wrapper-pressure">{weatherData.current.pressure_mb}</span>
  //                   </span>
  //                   <span className="m-2">|</span>
  //                   <span className="">
  //                     Humidity: <span id="wrapper-humidity">{weatherData.current.humidity}°C</span>
  //                   </span>
  //                 </div>
  //               </div>

  //               <div className=" p-4 border-top border-bottom mb-5">
  //                 <div className="row text-center">
  //                   <p>Country: {weatherData.location.country}</p>
  //                   <p>{weatherData.location.region}</p>
  //                    <p>Date|Time: {weatherData.location.localtime}</p>
  //                 </div>
  //               </div>

               
  //               <div className="card-body p-3">
  //                 <div className="row align-items-center ">
  //                    <span className="">
  //                     <p id="wrapper-pressure" > Wind Direction:"{weatherData.current.wind_dir}"</p>
                     
  //                     <p id="wrapper-pressure">Wind Degree:"{weatherData.current.wind_degree}°"</p>
  //                   </span>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
     
      
    
    );
  } else {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    );
  }
};

export default Weather;
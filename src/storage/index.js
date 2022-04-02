
import { tasksMockData } from "./tasksMockdata";

export const updateStorage = (data) => {
    const jsonData = JSON.stringify(data);
    localStorage.setItem('columnsList', jsonData);
  };
  
  export const fetchStorage = () => {
  //   if(localStorage.getItem('columnsList')){
  //   const data = localStorage.getItem('columnsList');
  //   return JSON.parse(data) ?? [];}
  // else{
    console.log("🚀 ~ file: index.js ~ line 16 ~ fetchStorage ~ tasksMockData", tasksMockData)
    return  tasksMockData;
  // }
    
  
  }
  ;

  export const Storage = () => {
      if(localStorage.getItem('columnsList')){
      const data = localStorage.getItem('columnsList');
      return JSON.parse(data) ?? [];}
  }
    // else{
    //   console.log("🚀 ~ file: index.js ~ line 16 ~ fetchStorage ~ tasksMockData", tasksMockData)
    //   return  tasksMockData;
    // }
 

 
// localStorage.setItem("ajax_requests", JSON.stringify(requests));

// then when you want to add additional requests into localStorage
// var requests = JSON.parse(localStorage.getItem("ajax_requests"));
// requests[reqId] = reqObj;
/** Api Endpoints */

// monthly stock endpoints
export const getStockMonthlyUpdates= async stockName =>{
    const response = await fetch(`http://localhost:8080/stock/monthly/${stockName}`);
    const responseData= await response.json();
    console.log("API--");
    console.log(responseData);
    return  responseData;
}
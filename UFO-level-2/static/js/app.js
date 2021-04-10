// from data.js
var tableData = data;

// YOUR CODE HERE!

// Selct all the inputs from the ul lists
var inputField = d3.selectAll('input') ;
//var formField = d3.select('form')
var button = d3.select("#filter-btn")

//create a event handler for each inoput field
inputField.on('change' , filterUFOdata) ;
//formField.on('submit', filterUFOdata) ;
button.on('click', filterUFOdata) ;

//create a function to return filtered data on an event
function filterUFOdata () {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // get user input values to filter data  
    var datetime = d3.select('#datetime').property('value') ;

    //get city value 
    var city = d3.select('#city').property('value') ;

    //get state value 
    var state = d3.select('#state').property('value') ;

    //get city value 
    var country = d3.select('#country').property('value') ;

    //get city value 
    var shape = d3.select('#shape').property('value') ;
    
    
    //Filter data based on the user input
    if(datetime !== "" && city =="" && state == "") {
       var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
       var filterdData = filteredByDate ; 
      
        //print to console
        console.log('datetime:' , datetime) ;
        console.log('data:' , filterdData) ;
        }
    // filter data by city on filterdby date table
    else if(datetime != "" && city != "") {
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDatecity = filteredByDate.filter( ufoObj => ufoObj.city === city) ;
        filterdData = filteredByDatecity ;

        //print to console
        console.log('datetime and city:' , datetime , city) ;
        console.log('data:' , filterdData) ;
        }
    // Render table by city of date not provided
    else if (city != "" && datetime == ""){
        var filteredBycity = tableData.filter( ufoObj => ufoObj.city === city) ;
        filterdData = filteredBycity ;  
        
        //print to console
        console.log('city:' , city) ;
        console.log('data:' , filterdData) ; 
    }

    // filter data by state on filterdby date table when city not given
    else if(datetime != "" && city == "" && state != "") {
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredBycity = filteredByDate.filter( ufoObj => ufoObj.state === state) ;
        filterdData = filteredBycity ;

        //print to console
        console.log('datetime and state:' , datetime , state) ;
        console.log('data:' , filterdData) ;
        }
    // Render table by state on  of date not provided
    else if (state != "" && city != "" && datetime == ""){
        var filteredByCityState = filteredBycity.filter( ufoObj => ufoObj.state === state) ;
        filterdData = filteredByCityState ;  
        
        //print to console
        console.log('date and city and state:' , date, city, state) ;
        console.log('data:' , filterdData) ; 
    }
    // Render table by date and city not provided
    else if (state != "" && city == "" && datetime == ""){
        var filteredByState = tableData.filter( ufoObj => ufoObj.state === state) ;
        filterdData = filteredByState ;  
        
        //print to console
        console.log('state:' , state) ;
        console.log('data:' , filterdData) ; 
    }
    //Render table by date,city,state and country
       else if (datetime != "" && city != "" && state != "" && country != ""){
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDatecity = filteredByDate.filter( ufoObj => ufoObj.city === city) ;
        var filteredByDatecityState = filteredByDatecity.filter( ufoObj => ufoObj.state === state) 
        var filteredByDatecityStateCountry = filteredByDatecityState.filter( ufoObj => ufoObj.country === country)
        filterdData = filteredByDatecityStateCountry ;  
    }
    //Render table by city,state and country
    else if (datetime == "" && city != "" && state != "" && country != ""){
        var filteredBycity = tableData.filter( ufoObj => ufoObj.city === city) ;
        var filteredBycityState = filteredBycity.filter( ufoObj => ufoObj.state === state) 
        var filteredBycityStateCountry = filteredBycityState.filter( ufoObj => ufoObj.country === country)
        filterdData = filteredBycityStateCountry ;  
    }

    //Render table by state and country
    else if (datetime == "" && city == "" && state != "" && country != ""){
        var filteredByState = tableData.filter( ufoObj => ufoObj.state === state) 
        var filteredByStateCountry = filteredByState.filter( ufoObj => ufoObj.country === country)
        filterdData = filteredByStateCountry ;  
        }
    //Render table by country
    else if (datetime == "" && city == "" && state == "" && country != ""){
    var filteredByCountry = tableData.filter( ufoObj => ufoObj.country === country)
    filterdData = filteredByCountry ;  
    }
    //Render table by date and country
    else if (datetime != "" && city == "" && state == "" && country != ""){
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDateCountry = filteredByDate.filter( ufoObj => ufoObj.country === country);
        filterdData = filteredByDateCountry ;  
        }
    //Render table by date ,state and country
    else if (datetime != "" && city == "" && state != "" && country != ""){
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDateState = filteredByDate.filter( ufoObj => ufoObj.state === state)
        var filteredByDateStateCountry = filteredByDateState.filter( ufoObj => ufoObj.country === country);
        filterdData = filteredByDateStateCountry ;  
        }
    //Render table by date,city,state, country and shape
    else if (datetime != "" && city != "" && state != "" && country != "" && shape != ""){
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDatecity = filteredByDate.filter( ufoObj => ufoObj.city === city) ;
        var filteredByDatecityState = filteredByDatecity.filter( ufoObj => ufoObj.state === state) ;
        var filteredByDatecityStateCountry = filteredByDatecityState.filter( ufoObj => ufoObj.country === country);
        var filteredByDatecityStateCountryShape = filteredByDatecityStateCountry.filter( ufoObj => ufoObj.shape === shape);
        filterdData = filteredByDatecityStateCountryShape ;  
    }
    //Render table by date, state, country and shape
    else if (datetime != "" && city == "" && state != "" && country != "" && shape != ""){
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDateState = filteredByDate.filter( ufoObj => ufoObj.state === state) 
        var filteredByDateStateCountry = filteredByDateState.filter( ufoObj => ufoObj.country === country) ;
        var filteredByDateStateCountryShape = filteredByDateStateCountry.filter( ufoObj => ufoObj.shape === shape) ;
        filterdData = filteredByDateStateCountryShape ;  
    }
    //Render table by date, country and shape
    else if (datetime != "" && city == "" && state == "" && country != "" && shape != ""){
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDateCountry = filteredByDate.filter( ufoObj => ufoObj.country === country) ;
        var filteredByDateCountryShape = filteredByDateCountry.filter( ufoObj => ufoObj.shape === shape) ;
        filterdData = filteredByDateCountryShape ;  
    }
    //Render table by date and shape
    else if (datetime != "" && city == "" && state == "" && country == "" && shape != ""){
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDateShape = filteredByDate.filter( ufoObj => ufoObj.shape === shape) ;
        filterdData = filteredByDateShape ;
    }
    //Render table by city,state, country and shape
    else if (datetime == "" && city != "" && state != "" && country != "" && shape != ""){
        var filteredBycity = tableData.filter( ufoObj => ufoObj.city === city) ;
        var filteredBycityState = filteredBycity.filter( ufoObj => ufoObj.state === state) ;
        var filteredBycityStateCountry = filteredBycityState.filter( ufoObj => ufoObj.country === country);
        var filteredBycityStateCountryShape = filteredBycityStateCountry.filter( ufoObj => ufoObj.shape === shape) ;
        filterdData = filteredBycityStateCountryShape ;  
    }

    //Render table by state , country and shape
    else if (datetime == "" && city == "" && state != "" && country != "" && shape != ""){
        var filteredByState = tableData.filter( ufoObj => ufoObj.state === state) ;
        var filteredByStateCountry = filteredByState.filter( ufoObj => ufoObj.country === country);
        var filteredByStateCountryShape = filteredByStateCountry.filter( ufoObj => ufoObj.shape === shape) ;
        filterdData = filteredByStateCountryShape ;  
        }
    //Render table by country and shape
    else if (datetime == "" && city == "" && state == "" && country != "" && shape != ""){
        var filteredByCountry = tableData.filter( ufoObj => ufoObj.country === country) ;
        var filteredByCountryShape = filteredByCountry.filter( ufoObj => ufoObj.shape === shape) ;
        filterdData = filteredByCountryShape ;  
        }
    //Render table by shape
    else if (datetime == "" && city == "" && state == "" && country == "" && shape != ""){
        var filteredByShape = tableData.filter( ufoObj => ufoObj.shape === shape) ;
        filterdData = filteredByShape ;  
        }
    


    // render the table based on the selection
    //----------------------------------------
    //create a row in tbody for each object
    var tableBody = d3.select('tbody')
    d3.select('tbody').html("");
    // create a row and insert data by calling createRowCell function
    CreateRowCell(filterdData , tableBody) ;    

}

//function to create a row and cell with data
//---------------------------------------------//
function CreateRowCell(filterdData , tableBody) {
    
    filterdData.forEach( ufoObj => {
        var tableRow = tableBody.append('tr') ;

    //create a cell (td) and insert values in it
        Object.values(ufoObj).forEach(ufoObjValue => {
        tableRow.append('td').text(ufoObjValue) ;        
        });
    });
}



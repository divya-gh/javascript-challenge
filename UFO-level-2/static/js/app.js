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
    
    // get user input for following fields
    //-----------------------------------//
    //get datetime value
    var datetime = d3.select('#datetime').property('value') ;

    //get city value 
    var city = d3.select('#city').property('value') ;

    //get state value 
    var state = d3.select('#state').property('value') ;

    //get city value 
    var country = d3.select('#country').property('value') ;

    //get city value 
    var shape = d3.select('#shape').property('value') ;
    
    
    //Filter by date 
    if(datetime !== "" && city =="" && state == "" && country == "" && shape == "") {
       var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
       var filterdData = filteredByDate ; 
        }
    
    // filter by date and city
    else if(datetime != "" && city != "" && state == "" && country == "" && shape == "") {
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDatecity = filteredByDate.filter( ufoObj => ufoObj.city === city) ;
        filterdData = filteredByDatecity ;
        }
    // Filter by just city
    else if (city != "" && datetime == "" && state == "" && country == "" && shape == ""){
        var filteredBycity = tableData.filter( ufoObj => ufoObj.city === city) ;
        filterdData = filteredBycity ;  
    }

    // filter by date and state
    else if(datetime != "" && city == "" && state != "" && country == "" && shape == "") {
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDateState = filteredByDate.filter( ufoObj => ufoObj.state === state) ;
        filterdData = filteredByDateState ;
        }
    // filter by date, city and state
    else if(datetime != "" && city != "" && state != "" && country == "" && shape == "") {
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredBycity = filteredByDate.filter( ufoObj => ufoObj.city === city) ;
        var filteredByDateCityState = filteredBycity.filter( ufoObj => ufoObj.state === state) ;
        filterdData = filteredByDateCityState ;
        }
    // Filter by city and state
    else if (state != "" && city != "" && datetime == "" && country == "" && shape == ""){
        var filteredBycity = tableData.filter( ufoObj => ufoObj.city === city) ;
        var filteredByCityState = filteredBycity.filter( ufoObj => ufoObj.state === state) ;
        filterdData = filteredByCityState ;  
    }
    // Filter by state
    else if (state != "" && city == "" && datetime == "" && country == "" && shape == ""){
        var filteredByState = tableData.filter( ufoObj => ufoObj.state === state) ;
        filterdData = filteredByState ;  
    }
    //Render table by date,city,state and country
       else if (datetime != "" && city != "" && state != "" && country != "" && shape == ""){
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDatecity = filteredByDate.filter( ufoObj => ufoObj.city === city) ;
        var filteredByDatecityState = filteredByDatecity.filter( ufoObj => ufoObj.state === state) 
        var filteredByDatecityStateCountry = filteredByDatecityState.filter( ufoObj => ufoObj.country === country)
        filterdData = filteredByDatecityStateCountry ;  
    }
    //Render table by date,city and country
    else if (datetime != "" && city != "" && state == "" && country != "" && shape == ""){
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDatecity = filteredByDate.filter( ufoObj => ufoObj.city === city) ;
        var filteredByDatecityCountry = filteredByDatecity.filter( ufoObj => ufoObj.country === country)
        filterdData = filteredByDatecityCountry ;  
    }
    //Render table by city,state and country
    else if (datetime == "" && city != "" && state != "" && country != "" && shape ==""){
        var filteredBycity = tableData.filter( ufoObj => ufoObj.city === city) ;
        var filteredBycityState = filteredBycity.filter( ufoObj => ufoObj.state === state) 
        var filteredBycityStateCountry = filteredBycityState.filter( ufoObj => ufoObj.country === country)
        filterdData = filteredBycityStateCountry ;  
    }

    //Render table by state and country
    else if (datetime == "" && city == "" && state != "" && country != "" && shape ==""){
        var filteredByState = tableData.filter( ufoObj => ufoObj.state === state) 
        var filteredByStateCountry = filteredByState.filter( ufoObj => ufoObj.country === country)
        filterdData = filteredByStateCountry ;  
        }
    //Render table by country
    else if (datetime == "" && city == "" && state == "" && country != "" && shape == ""){
    var filteredByCountry = tableData.filter( ufoObj => ufoObj.country === country)
    filterdData = filteredByCountry ;  
    }
    //Render table by date and country
    else if (datetime != "" && city == "" && state == "" && country != "" && shape == ""){
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDateCountry = filteredByDate.filter( ufoObj => ufoObj.country === country);
        filterdData = filteredByDateCountry ;  
        }
    //Render table by date ,state and country
    else if (datetime != "" && city == "" && state != "" && country != "" && shape == ""){
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
    //Render table by date, city and shape
    else if (datetime != "" && city != "" && state == "" && country == "" && shape != ""){
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDatecity = filteredByDate.filter( ufoObj => ufoObj.city === city) ;
        var filteredByDatecityShape = filteredByDatecity.filter( ufoObj => ufoObj.shape === shape);
        filterdData = filteredByDatecityShape ;  
    }
    //Render table by date, city, country and shape
    else if (datetime != "" && city != "" && state == "" && country != "" && shape != ""){
     var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
     var filteredByDatecity = filteredByDate.filter( ufoObj => ufoObj.city === city) ;
     var filteredByDatecityCountry = filteredByDatecity.filter( ufoObj => ufoObj.country === country);
     var filteredByDatecityCountryShape = filteredByDatecityCountry.filter( ufoObj => ufoObj.shape === shape);
     filterdData = filteredByDatecityCountryShape ;  
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
    //Render table by date, state and shape
    else if (datetime != "" && city == "" && state != "" && country == "" && shape != ""){
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === datetime) ;
        var filteredByDateState = filteredByDate.filter( ufoObj => ufoObj.state === state) 
        var filteredByDateStateShape = filteredByDateState.filter( ufoObj => ufoObj.shape === shape) ;
        filterdData = filteredByDateStateShape ;
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
    //Render table by state and shape
    else if (datetime == "" && city == "" && state != "" && country == "" && shape != ""){
        var filteredByState = tableData.filter( ufoObj => ufoObj.state === state) ;
        var filteredByStateShape = filteredByState.filter( ufoObj => ufoObj.shape === shape) ;
        filterdData = filteredByStateShape ;  
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
    //Render table by city and shape
    else if (datetime == "" && city != "" && state == "" && country == "" && shape != ""){
        var filteredBycity = tableData.filter( ufoObj => ufoObj.city === city) ;
        var filteredByCityShape = filteredBycity.filter( ufoObj => ufoObj.shape === shape) ;
        filterdData = filteredByCityShape ;  
         }
    //Filter data based on the user input
    if(datetime == "" && city =="" && state == "" && country == "" && shape == "") {
        var filterdData = [] ; 
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
    tableBody.append('br') ;
    nextRow = tableBody.append('tr').attr('class' , 'text-center bg-info h4') ;
    nextRow.append('td').attr('colspan' , '5').text(`Total UFO Sightings :`) ;
    nextRow.append('td').attr('colspan' , '1').attr('class' , 'text-left').text(filterdData.length) ;
}



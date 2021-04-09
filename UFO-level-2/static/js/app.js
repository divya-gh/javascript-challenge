// from data.js
var tableData = data;

// YOUR CODE HERE!

// Selct all the inputs from the ul lists
var inputField = d3.selectAll('input') ;

//create a event handler for each inoput field
inputField.on('change' , filterUFOdata)

//create a function to return filtered data on an event
function filterUFOdata () {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // select the id
    var thisAttr = d3.select(this).attr('id')

    // select value from the input    
    var inputValue = d3.select(this).property('value') ;
       
    if(thisAttr === 'datetime'){
        // Filter the values based on the user input
        var filteredByDate = tableData.filter( ufoObj => ufoObj.datetime === inputValue) ;
        var filterdData = filteredByDate ;
    }
        
    else if(thisAttr === 'city') {
        d3.select('tbody').html("")

        var filteredBycity = tableData.filter( ufoObj => ufoObj.city === inputValue) ;
        var filterdData = filteredBycity ;
            //console.log(filteredBycity)

        }
    else if(thisAttr === 'state') {
        d3.select('tbody').html("")
        var filteredByState = tableData.filter( ufoObj => ufoObj.state === inputValue) ;
        var filterdData = filteredByState ;
        }
    else if(thisAttr === 'country') {
        d3.select('tbody').html("")
        var filteredByCountry = tableData.filter( ufoObj => ufoObj.country === inputValue) ;
        var filterdData = filteredByCountry ;
        }
    else if(thisAttr === 'shape') {
        d3.select('tbody').html("")
        var filteredByShape = tableData.filter( ufoObj => ufoObj.shape === inputValue) ;
        var filterdData = filteredByShape ;
        }
    
    // render the table based on the selection
    //----------------------------------------
    //create a row in tbody for each object
    var tableBody = d3.select('tbody')
    
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



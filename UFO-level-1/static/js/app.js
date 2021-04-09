// Assign the data from `data.js` to a descriptive variable
var tableData = data;

//Check to see the data
//console.log(tableData)

// select the button in D3 that submits a date
var button = d3.select('#filter-btn') ;

//Select a form that is submitted when date is entered
var formInput = d3.select('form') ;



// Complete the event handler function for the form and the button
function createUFOTable() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    //refresh table so that it populates new user search
    d3.select('tbody').html("")

    // Get user entered date-value from the inputField
    var inputValue = d3.select('.form-control').property('value') ;

    //check to see if user input is fetched
    console.log('User Input value' , inputValue) ;

    // Now that you have input date from the user, filter the date from the data set
    var filteredData = tableData.filter( UFOSightingObj => UFOSightingObj.datetime === inputValue) ;

    //check to see if filtered data matches the user input
    console.log('User Input value' , filteredData) ;

    //Now that we have filtered data, create rows in tbody
    var tableBody = d3.select('tbody') ;

    //create a row and assign object values in each cell(td)
    filteredData.forEach(ufoData_obj => {
        var tableRow = tableBody.append('tr') ;
        
        // create td cell and insert ufo details into it
        Object.values(ufoData_obj).forEach(ufoObjValue => {
            var cell = tableRow.append('td') ;
            cell.text(ufoObjValue) ;

        })
    })




}


//call the event handlers for above controls
button.on('click', createUFOTable) ;
formInput.on('submit' , createUFOTable) ;
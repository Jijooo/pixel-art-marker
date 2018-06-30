
let tableCanvas = $("#pixelCanvas");
let cells = $(".cells");

//Calling the makeGrid function
function makeGrid(col,row) {
    //Check if inputs are within grid drawing range
    if (col>100||row>100){
        alert("Size too large, choose smaller size(100 by 100 maximum)")
    } else{
        //Draw the height of the grid if the values are within range and create columns
        for (y=0; y<col; ++y){
            tableCanvas.append("<tr></tr>");
        }
        //Add rows to the grid
        for (x=0; x<row; ++x){
            $("tr").append("<td class='cells'></td>");
        }    
    }
    
}

//To refreshes the grid before a new one is created by the makeGrid function once new dimensions are supplied by the user
function refreshGrid(){
    $("tr").remove();
}


//Calling on the sizePicker fuction to save the value inputs by user
$("#sizePicker").submit(function(event){
    //To obtain the height of the grid
    var h=$("#inputHeight").val();
    //To obtain the weight/width of the grid
    var w=$("#inputWeight").val();

    //Tell the webpage to refresh and create a new grid each time the submit button is clicked
    refreshGrid();
    
    //Passe the height and weight to the makeGrid function
    makeGrid(parseInt(h),parseInt(w));
    
    //Activity listener for the event(click) function
    $('.cells').click(function(event){
        //set the colour selection tool
        color = $('#colorPicker').val();
        
        // Check if there exists a style attribute
        if ($(event.target).attr('style')){
            // Remove the color style attribute if it exists
            $(event.target).removeAttr('style')
        
        }else{
            // Input color style attribute on selection of cell
            $(event.target).css('background-color',color )
        }
    });
    // Function to prevent default submission of page
    event.preventDefault();
});

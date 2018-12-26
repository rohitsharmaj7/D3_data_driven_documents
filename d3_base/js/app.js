var input = d3.select("input");      //selects the input box
var preview = d3.select(".preview"); /*selects the preview class and stores the variable 
                                       in variable preview.*/
var body=d3.select("body");
body.style("background-color","black");
d3.select("h1").style("color","white");

d3.select("#new-note")              //selects the form having id new-note 
    .on("submit", function() {      //when we submit the form,callback function starts
      d3.event.preventDefault();    //prevents the default behaviour of the form
      d3.select("#notes")           //selects the major div containing all the notes
        .append("p")                //appends the new 'p' tag to the existing notes
          .classed("note", true)    //add the class note to the newly added 'p' tag
          .text(input.property("value")); //gets the value of text written in input box 
                                          //and inserts the value of the text in 'p' tag.
      input.property("value", "");  //sets the value empty in input box
      setPreview("");               //calls the setPreview function.
    })

/* function of the button having class REMOVE: Through this button we are removing the 
   all elements from the notes.*/
d3.select(".remove")           //selects the button having class remove
    .on("click", function() {  //when button is clicked,callback function starts
      d3.selectAll(".note")    //selects the elements with class note
          .remove();           //removes them
    });
//END OF THE FUNCTIONING OF THE REMOVE BUTTON. 

/* function of the button having class lucky: Through this button we are 
   changing the font size of the added notes randomly*/
d3.select(".lucky")           //selecting the button having class lucky
  .on("click", function() {   //on clicking this function callback function is triggered
    d3.selectAll(".note")     //elements having class note are selected, styling is given to them 
        .style("font-size", function() {
          return Math.random() * 100 + "px";
        });
  });
// END OF FUNCTIONING OF THE LUCKY BUTTON

// When we start writing on the input box
input.on("input", function() {
  var val = d3.event.target.value; //stores value of text in variable val 
  setPreview(val);                 //calls function setpreview
})

function setPreview(val) {
  preview
      .classed("hide", val === "") //If value is empty hides the preview
      .text(val);                  //else show the preview with text passed inside
}
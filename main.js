// console.log("This is for event-listeners")

// TARGET ID //
 // CREATED VARIABLE THAT TARGETS THIS ELEMT ON THE DOM //
const button = document.querySelector('#main-btn');
// EXTRA PART LATER IN CLASS. TARGETING NEW DIV //
const container = document.querySelector('#container');


// button.addEventListener('click', () => {
//   console.log('YOU CLICKED ME!');
// }) // //

// button.addEventListener('click', (e) => {
//   console.log(`YOU CLICKED ME ${e.target.id}!`);
//   console.log(e);
// }) // NOT RESUABLE BECAUSE WE TARGETED A SPECIFIC BUTTON //

// create a function that uses a callback to use this on another button //

const whatIsTheId = (e) => {
  console.log(`YOU CLICKED ${e.target.id}!`);
  // added extra logic based on what you clicked later in lesson // THIS IS MANIPULATING THE DOM!!! //
  // TARGET IS LOOKING FOR BUTTON THAT I CLICKED //

  if (e.target.id === 'main-btn') {
    container.innerHTML = 'You clicked the MAIN BUTTON';
  } else {
    container.innerHTML = 'You clicked the OTHER BUTTON';
  }
}

button.addEventListener('click', whatIsTheId); // Now we have a function that we can use on multiple ids //

// add an event listen to other button and on the other click run whatIsTheID // // Target `other-btn` and on click, run whatIsTheId //

const button2 = document.querySelector(`#other-btn`);

button2.addEventListener('click', whatIsTheId); // added event listner // 
// CAN CREATE FUNCTION THAT RUNS AS AN EVENT HAPPENS// YOU CAN PASS IT AN ANNOYNMOUS FUNCTION HARDCODED THAT HAPPENED ON THE CLICK, OR PASS IT A CB WHICH IS ANOTHER FUNCTION THAT IS ON YOUR JS FILES. WE CAN TARGET AN EVENT ON THOSE //
 // USUALLY YOU WANT ALL YOUR EVENT SELECTORS AT TOP OF FILE //

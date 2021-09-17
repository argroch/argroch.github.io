// Click function controls
$(document).ready(function(){
  $('#start_activity').click(function(){
    $('#choice_area').addClass('invisible');
    $('#activity_area').removeClass('invisible');
  });

  $('#return_to_choices').click(function(){
    $('#activity_area').addClass('invisible');
    $('#choice_area').removeClass('invisible');
  })
 });

// Bored API url
const api_url = "https://www.boredapi.com/api/activity";

async function getapi(url) {
  // Storing response
  const response = await fetch(url);
  
  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideSpinner();
  }
  show(data);
}

// Calling that async function
$('#suggest_activity').click(function(){
  $(this).addClass('invisible');
  $('#refresh_return').removeClass('invisible');
  $('#loading').removeClass('invisible');
  getapi(api_url);
})

// Clicking to refresh the activity
$('#refresh_activity').click(function(){
  getapi(api_url);
})

// Hide loading spinner
function hideSpinner() {
  document.getElementById('loading').style.display = 'none';
}

// Displaying the API data with HTML
function show(data) {
  // First, setting variable 'price' to a set of dollar signs
  // Depending on the price scale from Bored API, only certain
  // dollar signs will be in black, to signify it the cost is high or low
  // If the data result returns 0 for price, we'll just say it's "Free!"
  let price = ``;

  if (data["price"] == 0) {
    price = `<span>Free!</span>`
  } else if (data["price"] > 0 && data["price"] <= 0.25) {
    price = `<span><i class="fas fa-dollar-sign gray-dollar"></i><i class="fas fa-dollar-sign gray-dollar"></i><i class="fas fa-dollar-sign gray-dollar"></i><i class="fas fa-dollar-sign"></i></span>`
  } else if (data["price"] > 0.25 && data["price"] <= 0.5) {
    price = `<span><i class="fas fa-dollar-sign gray-dollar"></i><i class="fas fa-dollar-sign gray-dollar"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></span>`
  } else if (data["price"] > 0.5 && data["price"] <= 0.75) {
    price = `<span><i class="fas fa-dollar-sign gray-dollar"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></span>`
  } else {
    price = `<span><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i><i class="fas fa-dollar-sign"></i></span>`
  }

  // Next, setting certain icons to represent activity categories
  let categories = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]

  let icon = ``;

  switch(data["type"]) {
    case "education":
      // some icon
      break;
    case "recreational":
      // some icon
      break;
    case "social":
      // some icon
      break;
    case "diy":
      // some icon
      break;
    case "charity":
      // some icon
      break;
    case "cooking":
      // some icon
      break;
    case "relaxation":
      // some icon
      break;
    case "music":
      // some icon
      break;
    case "busywork":
      // some icon
      break;
    default:
      // default icon
  }

  // Variable holding what is to be displayed from Bored API data result
  let activityDisplay = 
    `<div id="activity_card" class="card">
      <h2>${data["activity"]} </h2>
      <p><small><strong>Category:</strong></small> "${data["type"].charAt(0).toUpperCase() + data["type"].slice(1)}"</p>
      <p><small><strong>No. of Participants:</strong></small> ${data["participants"]}</p> 
      <p><small><strong>Cost:</strong></small> ${price}</p>          
    </div>`;

  // Setting innerHTML as tab variable
  document.getElementById("display_activity").innerHTML = activityDisplay;
}
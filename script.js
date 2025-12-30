function addRecommendation() {
  // Get the text from textarea
  let recommendationText = document.getElementById("new_recommendation").value;

  // Only add if text is not empty
  if (recommendationText.trim() !== "") {
    
    // Get recommendations container
    let recommendations = document.getElementById("all_recommendations");

    // Create a new div
    let newDiv = document.createElement("div");
    newDiv.className = "recommendation";

    // Add content with quotes
    newDiv.innerHTML = `<span>&#8220;</span>
                        ${recommendationText}
                        <span>&#8221;</span>`;

    // Add new recommendation to the list
    recommendations.appendChild(newDiv);

    // Clear textarea
    document.getElementById("new_recommendation").value = "";

    // Show popup
    showPopup(true);
  }
}


function showPopup(bool) {
  if (bool) {
    document.getElementById('popup').style.visibility = 'visible'
  } else {
    document.getElementById('popup').style.visibility = 'hidden'
  }
}

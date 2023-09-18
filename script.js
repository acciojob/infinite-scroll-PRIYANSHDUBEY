document.addEventListener("DOMContentLoaded", function () {
  // Initial number of list items
  var initialItemCount = 10;
  // Number of items to add when reaching the end
  var itemsToAdd = 2;
  
  // Function to add a list item
  function addListItem() {
    var ul = document.getElementById("myList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode("List Item"));
    ul.appendChild(li);
  }
  
  // Add the initial list items
  for (var i = 0; i < initialItemCount; i++) {
    addListItem();
  }
  
  // Event listener to check if user has reached the end of the list
  document.addEventListener("scroll", function () {
    var ul = document.getElementById("myList");
    var lastLi = ul.lastElementChild;
    
    // Check if the last list item is in the viewport
    if (isInViewport(lastLi)) {
      // Add more items when the user reaches the end
      for (var i = 0; i < itemsToAdd; i++) {
        addListItem();
      }
    }
  });
  
  // Function to check if an element is in the viewport
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }
});

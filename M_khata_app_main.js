let singlePageElements = document.getElementsByClassName("single_view");

for (let i = 0; i < singlePageElements.length; i++) {
    // Add an onclick event to each element
    singlePageElements[i].onclick = function() {
        window.location.href = "Customer_Detail_page.html";
    };
}

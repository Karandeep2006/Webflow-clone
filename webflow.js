const circle = document.getElementById("circle");
const questionmark = document.getElementById("questionmark");
const changer = document.getElementById("changer");
const contentquestion = document.getElementById("contentquestion");
// material inside the nav bar ..................
const marketinside = document.getElementById("marketinside");
const productinside = document.getElementById("productinside");
const resourceinside = document.getElementById("resourceinside");
// nav bar .............................
const marketplace = document.getElementById("marketplace");
const resource = document.getElementById("resource");
const product = document.getElementById("product");
// nav bar buttons ..............................
const loginbtn = document.getElementById("loginbtn");
const contactbtn = document.getElementById("contactbtn");
const getstarted = document.getElementById("getstarted");
const made = document.getElementById("made");
// search bar ..............................
const searchbar = document.getElementById("searchbar");
const input = document.getElementById("input");
const originalBorder = getComputedStyle(searchbar).border;
// const input = searchbar.querySelector('input'); // Assuming input is inside searchbar
const searchButton = searchbar.querySelector('.search-button');
const sectionbuttons = document.getElementById("sectionbuttons");
// inside
const inside = document.getElementById("inside");
const productoptions = document.getElementById("productoptions");
// showmore
const showMoreButton = document.getElementById("showMoreButton");
changer.addEventListener("click", () => {
    if (circle.style.left === "16px") {
        circle.style.left = "0px";
        changer.style.backgroundColor = "";

    } else {
        circle.style.left = "16px";
        changer.style.backgroundColor = "#146ef5";
    }

});
let timeout;
questionmark.addEventListener("mouseenter", () => {
    timeout = setTimeout(() => {
        contentquestion.style.opacity = "1";
        contentquestion.style.visibility = "visible";
    }, 500);
}),
    questionmark.addEventListener("mouseleave", () => {
        clearTimeout(timeout)
        contentquestion.style.opacity = "0";
        contentquestion.style.visibility = "hidden";
    });

marketplace.addEventListener("click", () => {
    if (marketinside.style.display === "flex") {
        marketinside.style.display = "none";

    } else {
        marketinside.style.display = "flex";

    }
}) 
resource.addEventListener("click", () => {
    if (resourceinside.style.display === "flex") {
        resourceinside.style.display = "none";

    } else {
        resourceinside.style.display = "flex";

    }
}) 
product.addEventListener("click", () => {
    if (productinside.style.display === "flex") {
        productinside.style.display = "none";

    } else {
        productinside.style.display = "flex";
    }
})  
const buttons = [
    { id: "loginbtn", hoverColor: "rgb(235, 234, 234)", defaultColor: "white" },
    { id: "contactbtn", hoverColor: "rgb(235, 234, 234)", defaultColor: "white" },
    { id: "getstarted", hoverColor: "#3d8afd", defaultColor: "#146ef5" }
];

buttons.forEach(button => {
    const btn = document.getElementById(button.id);
    btn.addEventListener("mouseenter", () => btn.style.backgroundColor = button.hoverColor);
    btn.addEventListener("mouseleave", () => btn.style.backgroundColor = button.defaultColor);
});
made.addEventListener("mouseenter", () => {
    made.style.backgroundColor = "rgb(204, 202, 202)";
});
made.addEventListener("mouseleave", () => {
    made.style.backgroundColor = "white";
});

input.addEventListener('focus', () => {
    searchbar.style.border = "1px solid #146ef5";
});

// Event listener for clicks anywhere on the document
document.addEventListener('click', (event) => {
    // Check if the click is outside the searchbar or on the search button
    if (!searchbar.contains(event.target) || event.target === searchButton) {
        // Restore original border
        searchbar.style.border = originalBorder;
    }
});
// Select all buttons with the id "downbuttons"
const downButtons = document.querySelectorAll("#downbuttons");

// Add event listeners to change background color on mouse enter
// Select all buttons with the class "downbuttons"
// const downButtons = document.querySelectorAll(".downbuttons");

// Add event listeners to change background color on mouse enter
downButtons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        // Remove background from all buttons
        downButtons.forEach(btn => {
            btn.style.backgroundColor = "";
            btn.style.color = "";
        });

        // Add blue background to the hovered button
        button.style.backgroundColor = "rgb(204, 202, 202)";
        button.style.color = "black";
    });

    // Optional: Add mouseleave to reset all buttons if needed
    button.addEventListener("mouseleave", () => {
        button.style.backgroundColor = "";
        button.style.color = "";
    });
});
const pro = document.getElementById("pro");
const proooo = document.getElementById("proooo");
proooo.addEventListener("click", () => {
    if (productoptions.style.display === "flex") {
        productoptions.style.display = "none";
    } else {
        productoptions.style.display = "flex";
    }
})
proooo.addEventListener("mouseenter", () => {    
    pro.style.backgroundColor = "rgb(242, 241, 241)";
});
proooo.addEventListener("mouseleave", () => {
    pro.style.backgroundColor = "";
});
const showcasebtn = document.getElementById("showcasebtn");
showcasebtn.addEventListener("mouseenter", () => {
    showcasebtn.style.backgroundColor = "#3d8afd";
});
showcasebtn.addEventListener("mouseleave", () => {
    showcasebtn.style.backgroundColor = "";
});
showMoreButton.addEventListener("mouseenter", () => {
    showMoreButton.style.backgroundColor = "rgb(204, 202, 202)";
});
showMoreButton.addEventListener("mouseleave", () => {
    showMoreButton.style.backgroundColor = "";
});
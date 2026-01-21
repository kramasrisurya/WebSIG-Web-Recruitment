var masterToggle = document.getElementById('master-toggle');
var maxInput = document.getElementById('max-input');
var counterDisplay = document.getElementById('counter-display');
var colorBox = document.getElementById('color-box');
var actionBtn = document.getElementById('action-btn');

var count = 0;

var colors = ["red", "blue", "green", "yellow", "orange", "purple"];

masterToggle.addEventListener('change', function() {
    if (masterToggle.checked) {
        actionBtn.disabled = false;
    } else {
        actionBtn.disabled = true;
        count = 0;
        counterDisplay.innerText = "Count: 0";
        colorBox.style.backgroundColor = "white";
    }
});

actionBtn.addEventListener('click', function() {
    var maxValue = maxInput.value;

    if (count < maxValue) {
        count = count + 1;
        counterDisplay.innerText = "Count: " + count;
        
        var colorIndex = count % colors.length; 
        colorBox.style.backgroundColor = colors[colorIndex];
    } else {
        alert("Max value reached!");
    }
});
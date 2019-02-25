(function () {
"use strict";

// global Vars
var divCoffees = document.querySelector('#coffees');
var submitButton = document.querySelector('#submit');
var submitButton2 = document.querySelector('#submit2');
var roastSelection = document.querySelector('#roast-selection');
var input1 = document.querySelector('#roast-selection2');
var input2 = document.querySelector('#coffeeName');
var input3 = document.querySelector('#coffeSelect');

// array of coffee objects
var coffees = [
    {id: 1, name: 'Light City', roast: 'light'},
    {id: 2, name: 'Half City', roast: 'light'},
    {id: 3, name: 'Cinnamon', roast: 'light'},
    {id: 4, name: 'City', roast: 'medium'},
    {id: 5, name: 'American', roast: 'medium'},
    {id: 6, name: 'Breakfast', roast: 'medium'},
    {id: 7, name: 'High', roast: 'dark'},
    {id: 8, name: 'Continental', roast: 'dark'},
    {id: 9, name: 'New Orleans', roast: 'dark'},
    {id: 10, name: 'European', roast: 'dark'},
    {id: 11, name: 'Espresso', roast: 'dark'},
    {id: 12, name: 'Viennese', roast: 'dark'},
    {id: 13, name: 'Italian', roast: 'dark'},
    {id: 14, name: 'French', roast: 'dark'},
];

// events
submitButton.addEventListener('click', updateCoffees);
submitButton2.addEventListener('click', updateCoffees);
input3.addEventListener('keyup', function () {
    console.log(coffees);
    divCoffees.innerHTML = renderCoffees(coffees);
});

//displaying coffees into html
divCoffees.innerHTML = renderCoffees(coffees.reverse());

//start of functions
function updateCoffees(e) {
    e.preventDefault(); // don't submit the form, we just want to update the data
    var selectedRoast = roastSelection.value;
    var selectedRoast2 = input1;
    var coffeeName = input2;
    var filteredCoffees = [];
    if(selectedRoast2.value === 'light' && input2.value !== ''){
        coffees.push({name: coffeeName.value, roast: selectedRoast2.value});
        coffeeName.value = '';
    } else if(selectedRoast2.value === 'medium' && input2.value !== ''){
        coffees.splice(9, 0, {name: coffeeName.value, roast: selectedRoast2.value});
        coffeeName.value = '';
    } else if(selectedRoast2.value === 'dark' && input2.value !== ''){
        coffees.unshift({name: coffeeName.value, roast: selectedRoast2.value});
        coffeeName.value = '';
    }

    coffees.forEach(function(coffee) {
            if (coffee.roast === selectedRoast) {
                filteredCoffees.push(coffee);
            } else if (document.getElementById('roast-selection').value === 'all') {
                filteredCoffees.push(coffee);
            }
    });
    divCoffees.innerHTML = renderCoffees(filteredCoffees);
}

function renderCoffees(coffees) {
    var html = '';
    for(var i = coffees.length - 1; i >= 0; i--) {
        if(input3.value === '') {
            html += renderCoffee(coffees[i]);
        } else if(input3.value.toLowerCase().charAt(0) === coffees[i].name.toLowerCase().charAt(0) && input3.value.charAt(1) === ''){
            html += renderCoffee(coffees[i]);
        } else if(input3.value.toLowerCase().charAt(0) === coffees[i].name.toLowerCase().charAt(0) && input3.value.charAt(1) === coffees[i].name.charAt(1) && input3.value.charAt(2) === ''){
            html += renderCoffee(coffees[i]);
        } else if(input3.value.toLowerCase().charAt(0) === coffees[i].name.toLowerCase().charAt(0) && input3.value.charAt(1) === coffees[i].name.charAt(1) && input3.value.charAt(2) === coffees[i].name.charAt(2) && input3.value.charAt(3) === '') {
            html += renderCoffee(coffees[i]);
        }  else if(input3.value.toLowerCase().charAt(0) === coffees[i].name.toLowerCase().charAt(0) && input3.value.charAt(1) === coffees[i].name.charAt(1) && input3.value.charAt(2) === coffees[i].name.charAt(2) && input3.value.charAt(3) === coffees[i].name.charAt(3) && input3.value.charAt(4) === '') {
            html += renderCoffee(coffees[i]);
        } else if(input3.value.toLowerCase().charAt(0) === coffees[i].name.toLowerCase().charAt(0) && input3.value.charAt(1) === coffees[i].name.charAt(1) && input3.value.charAt(2) === coffees[i].name.charAt(2) && input3.value.charAt(3) === coffees[i].name.charAt(3)
            && input3.value.charAt(4) === coffees[i].name.charAt(4) && input3.value.charAt(5) === '') {
            html += renderCoffee(coffees[i]);
        } else if(input3.value.toLowerCase().charAt(0) === coffees[i].name.toLowerCase().charAt(0) && input3.value.charAt(1) === coffees[i].name.charAt(1) && input3.value.charAt(2) === coffees[i].name.charAt(2) && input3.value.charAt(3) === coffees[i].name.charAt(3)
            && input3.value.charAt(4) === coffees[i].name.charAt(4) && input3.value.charAt(5) === coffees[i].name.charAt(5) && input3.value.charAt(6) === '') {
            html += renderCoffee(coffees[i]);
        } else if(input3.value.toLowerCase().charAt(0) === coffees[i].name.toLowerCase().charAt(0) && input3.value.charAt(1) === coffees[i].name.charAt(1) && input3.value.charAt(2) === coffees[i].name.charAt(2) && input3.value.charAt(3) === coffees[i].name.charAt(3)
            && input3.value.charAt(4) === coffees[i].name.charAt(4) && input3.value.charAt(5) === coffees[i].name.charAt(5) && input3.value.charAt(6) === coffees[i].name.charAt(6) &&
            input3.value.charAt(7) === '') {
            html += renderCoffee(coffees[i]);
        } else if(input3.value.toLowerCase().charAt(0) === coffees[i].name.toLowerCase().charAt(0) && input3.value.charAt(1) === coffees[i].name.charAt(1) && input3.value.charAt(2) === coffees[i].name.charAt(2) && input3.value.charAt(3) === coffees[i].name.charAt(3)
            && input3.value.charAt(4) === coffees[i].name.charAt(4) && input3.value.charAt(5) === coffees[i].name.charAt(5) && input3.value.charAt(6) === coffees[i].name.charAt(6) && input3.value.charAt(7) === coffees[i].name.charAt(7) &&
            input3.value.charAt(8) === '') {
            html += renderCoffee(coffees[i]);
        }
    }
    return html;
}

function renderCoffee(coffee) {
    var html = '<div class="col-md-6" id="coffees">';
    // html += '<li>' + coffee.id + '</li>';
    html += '<span id="coffeeNames">' + coffee.name + '</span>' + ' : ' + '<span id="cofferoast">' + coffee.roast + '</span>';
    // html += '<div>' + coffee.roast + '</div>';
    html += '</div>';

    return html;
}


})();



//Budget Controller--> data model
var budgetController = (function() {

    // lots of objects so we create function constructors for creating objects
    var expense = function(id, value, description) {
        this.id = id;
        this.value = value;
        this.description = description;
    }
    var income = function(id, value, description) {
        this.id = id;
        this.value = value;
        this.description = description;
    }

    var data = {
        allItems: {
            allEx: [],
            allInc: [],
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }





})();

//UI controller
var UIController = (function() {
    var DOM = {
        type: '.add__type',
        description: '.add__description',
        value: '.add__value',
        add: '.add__btn'
    }

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOM.type).value,
                description: document.querySelector(DOM.description).value,
                value: document.querySelector(DOM.value).value,
            }
        },
        getDOM: function() {
            return DOM;
        }
    }
})();

// Global App Controller
//this controller needs to connect with other two and make changes.
var controller = (function(budgetControl, uiControl) {
    var addItem = function() {
        // this button is to add or subtract the expense.
        // which is given by the input (value,desc,+ or -)
        //1) get the input
        var input = uiControl.getInput();
        console.log(input);
        //2) add item to the budget controller
        //3) add item to UI
        //4) calculate the budget
        //5) update the UI
    }
    var setUpEvents = function() {
        var DOM = uiControl.getDOM();
        document.querySelector(DOM.add).addEventListener('click', addItem);
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13) {
                addItem;
            }
        })
    }

    return {
        init: function() {
            console.log('Application started--');
            setUpEvents();
        }
    }

})(budgetController, UIController);

controller.init();
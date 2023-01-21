
// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.innerHTML = count
}

// 1. Create a function, save(), which logs out the count when it's called

// 1. Grab the save-el paragrah and store it in a variable called saveEl

function save() {

        // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    // 3. Render the variable in the saveEl using innerText
    // NB: Make sure to not delete the existing content of the paragraph

    let previousEl = count + " - "
    saveEl.innerHTML += previousEl

    // Reset the counter to 0 once the save button has been clicked

    count = 0
    countEl.innerHTML = 0

}

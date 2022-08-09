//setting date of event
let current_day = new Date()
let event_day = new Date()
event_day.setFullYear(2022, 6, 3);

let difference =current_day.getTime() - event_day.getTime()
difference = difference / (1000 * 3600 * 24)
console.log(difference);


//special colors
let color_vars = ["#fadde1ff", "#ffc4d6ff", "#ffa6c1ff", "#ff87abff",  "#ff97b7ff", "#ffacc5ff", "#ffcad4ff", "#f4acb7ff"]
// console.log(color_vars_length);

/*
//not in use
//indexing random numbers

const random = (array,selector,min,max) => {
    index = Math.floor(Math.random() * (max-min)) +min

    // console.log(color_vars[index]);
    document.querySelector(selector).style.color = array[index]
}
//for number
window.setInterval( ()=> {random(color_vars,'#days_elapsed span',0,7)}, 1000)
// //for event date
window.setInterval(() => {random(color_vars,'#event_day span',0,7)}, 1000)
 */

//dynamic heart color
const special = (min,max) => {
    index = Math.floor(Math.random() * (max-min)) +min

    document.querySelector('#heart-container').style.setProperty('--primary-background-color', color_vars[index])
}

window.setInterval(() => {special(0,7)}, 1000)

//quote displayer

const quotes = ['I LOVE YOU', 'I MISS YOU', 'I THINK ABOUT YOU', 'YOYIC IS THE BEST']
console.log(quotes.length);

const random = (min,max_array_length) => {
    index = Math.floor(Math.random() * (max_array_length-min)) +min

    // console.log(color_vars[index]);
    return index
}


document.querySelector('#quotes button').onclick = () => {
    // console.log('boop');
    document.querySelector('#quotes>p').style.display = 'unset'

    document.querySelector('#quotes span').textContent = quotes[random(0, quotes.length)]
}

//printing the result to html
//event day
document.querySelector('#event_day span').textContent = `${event_day.toDateString()}`

//since event day
document.querySelector('#days_elapsed  span').textContent += " "+difference + " days"

//currrent day
document.querySelector('#current_day span').textContent += current_day.toDateString()

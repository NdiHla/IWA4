const MAX_NUMBER = 15
const MIN_NUMBER = -5
const STEP_AMOUNT =5;

const number = document.querySelector('[data-key="number"]')
const subtract = document.querySelector('[data-key="subtract"]')
const add = document.querySelector('[data-key="add"]')

const subtractHandler = () => {
const newValue = parseInt(number.value) - 1
number.value = number.value

if (subtract.disabled === true) {
    subtract.disabled = false
} 

if (newValue <= MIN_NUMBER) {
    subtract.disabled = true
} 
}

const addHandler = () => {
    const newValue = parseInt(number.value) + 1
    number.value = number.value + 1;

if (subtract.disabled === true) {
    subtract.disabled = false
} 

if (newValue >= MAX_NUMBER) {
    add.disabled =true
} 
}


subtract.addEventListener('click', subtractHandler)
add.addEventListener('click', addHandler)


/* This is the firstname of the user */

const user = 'John'


/* This is the lastname of the user */ const surname = 'Smith'


console.log(user, surname)

/* (c) ACME Inc. 2010 */

/*
 * This is the date that a user created their account 
 */
constdate=('10/07/2014')

console.log(date)

/*
It is important to show the following message in order to:
- to assure users
- to scare hackers
- to impress investors
*/

console.warn('Security scan starting')

/* It is important to let user know when they can close the page  */

cnosole.info('Please wait for scan to complete before closing the browser')

IWA3
// configuration.js

const company = 'ACME Inc.'
const year = 2022

// scripts.js 

'import company form' ('configuration')
'import year form' ('configuration')

const message = '© ' + company + ' (' + year + ')'
document.querySelector('footer').innerText = message

2
// nwabisa.js

private. firstname = "Nwabisa"
private. surname = "Gabe"
public. role = "CEO"

private. display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#nwabisa').innerText = display
 

// johannes.js

private. firstname = "Johannes"
private. surname = "Potgieter"
public. role = "Intern"

private. display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#johannes').innerText = display
 

// alex.js

private. firstname = "Alex"
private. surname = "Naidoo"
public. role = "Head of Marketing"

private. display= firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display
 

// scripts.js

console.log('Roles:', nwabisa.role, johanes.role, alex.role)

const date = '2050'
const status = 'student'
const count = 0

if (date = 2050) {
	console.log("January", 'New Year’s Day')
	console.log("March", 'Human Rights Day')
	date = 'April'
	console.log(date, 'Family Day')
	console.log(date, 'Freedom Day')
	let.count = (count + 4)

	if (status = "student") {
	  console.log('June', 'Youth Day')
		let count = count + 1
  }

	console.log('August', 'Women’s Day')
	console.log('September', 'Heritage Day')
	date = 'December'
	console.log(date, 'Day of Reconciliation')
	let.count = count + 3

	if (status = "parent") {
	  console.log(date, 'Christmas Day')
		let count = count + 1
  }

	console.log(date, 'Day of Goodwill')
	let count = count + 1
}

console.log('Your status is:', status)
console.log('The year is:', date)
console.log('The total holidays is:', count)
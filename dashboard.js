// 1. Count the number of records in the "Current Quarter Details" table.
var numberOfRows = document.querySelectorAll('tbody > tr')
console.log(numberOfRows.length)

// 2. Set each dashboard image to different images, one for each season. Make sure you also set the alt="" attribute with an appropriate description.

var diffImages = document.querySelectorAll('.placeholders img')
    diffImages[0].src="http://unsplash.it/400?image=1083"
    diffImages[0].setAttribute('alt', 'Image One')
    diffImages[1].src="http://unsplash.it/400?image=1082"
    diffImages[0].setAttribute('alt', 'Image Two')
    diffImages[2].src="http://unsplash.it/400?image=1081"
    diffImages[0].setAttribute('alt', 'Image Three')
    diffImages[3].src="http://unsplash.it/400?image=1079"
    diffImages[0].setAttribute('alt', 'Image Four')
// console.log(diffImages)

// 3. Below each dashboard image, there's a season/quarter name. Below those, there are three dots. Replace those three dots with a randomly generated number formatted as currency, like $12,589.00.

var test = document.querySelectorAll('.placeholder span')
test[0].innerHTML= ('$' + Math.round(Math.random() * 100000))
test[1].innerHTML= ('$' + Math.round(Math.random() * 100000))
test[2].innerHTML= ('$' + Math.round(Math.random() * 100000))
test[3].innerHTML= ('$' + Math.round(Math.random() * 100000))



// 4. Change the currently selected left side menu item from Overview to Reports.

var navMenu = document.querySelectorAll('.nav-sidebar > li')
navMenu[0].classList.remove('active');
navMenu[1].classList.add('active');
console.dir(navMenu)

// 5. Set the default search input value to "Q4 sales".

var searchBar = document.querySelector('.navbar-form input')
searchBar.value = 'Q4 sales'


// 6. Add the "table-hover" class to the table. See the Bootstrap table docs.
//Ask about this one, and where to find the attributes that have been set
    var tableHover = document.querySelector('.table-striped')
    tableHover.setAttribute('class', 'table table-hover')



// 7. Add the "success" class to the 7th - 10th row of the table, like: <tr class="success">...</tr>

var rowSuccess = document.querySelectorAll('table > tbody > tr')
rowSuccess[6].classList.add('success')
rowSuccess[7].classList.add('success')
rowSuccess[8].classList.add('success')
rowSuccess[9].classList.add('success')

// 8. Change the table header names to: ID, First Name, Last Name, Department, Client.

var newHeaders = document.querySelectorAll('thead > tr > th')
newHeaders[0].innerHTML= 'ID'
newHeaders[1].innerHTML= 'First Name'
newHeaders[2].innerHTML= 'Last Name'
newHeaders[3].innerHTML= 'Department'
newHeaders[4].innerHTML= 'Client'

// 9. Make an array of objects, each object representing a single row in the table. Remove the commas from the ID column and convert it to an actual Number data type. Example: [{id: 1001, firstName: 'Lorem', lastName: 'ipsum', department: 'dolor', client: 'sit'}]
var list = []
var makeArray = document.querySelectorAll('tbody > tr')
makeArray.forEach(function(tr){
    var numberID = Number(tr.children[0].innerHTML.replace(',', ''))
    var firstName = tr.children[1].innerHTML;
    var lastName = tr.children[2].innerHTML;
    var department = tr.children[3].innerHTML;
    var client = tr.children[4].innerHTML;
    var rowObject = {
        id: numberID,
        firstName: firstName,
        lastName: lastName,
        department: department,
        client: client,
    }
    list.push(rowObject)
})

console.log(list)



// 10. Make each word in the table capitalized.

var upperCaseWords = document.querySelectorAll('tbody td');
upperCaseWords.forEach(function(foo){
    foo.classList.add('text-capitalize')
})

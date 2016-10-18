var body = document.body
console.log(body)

var h1 = document.body.childNodes[1]
console.log(h1)

var helloWorld = h1.innerHTML
console.log(helloWorld)

h1.innerHTML = 'Hello Universe'

console.dir(h1) //gives us a directory


var helloH1 = document.getElementById('hello')
console.log(helloH1)

var navItems = document.getElementsByClassName('nav-item')
console.log(navItems)

var navItems = document.querySelectorAll('body *')
console.log(navItems)

var navItems = document.querySelectorAll('.nav-item')
console.log(navItems)

var helloH1 = document.querySelectorAll('#hello')
console.log(helloH1)

//Convert Nodelist to an Array data type
console.log(Array.from(navItems).includes('li'))
navItems.forEach(function(navItem){
navItem.addEventListener('mouseover', function(e) {
    e.target.classList.add('red')
})
    .addEventListener('mouseover', function(e) {
    e.target.classList.add('red')
})

navItems.forEach(function(navItem){
    navItem.addEventListener('mouseover', function(e) {
        e.target.classList.add('red');
    })
    navItem.addEventListener('click', function(e) {
        e.target.remove();
    })
})


var navItems = document.querySelectorAll('.nav-item')
navItems.forEach(function(navItem) {
    console.log(navItem.id)
    console.log(navItem.tagName)
    console.log(navItem.className)
    console.log(navItem.getAttribute('title'))
    console.log(navItem.getAttribute('title', 'Foo'))
    console.log(navItem.getAttribute('data-details'))
    console.log(navItem.innerHTML)
    navItem.innerHTML ='<a href="http://google.com">' + navItem.getAttribute('data-details') + '</a>'
    console.log(navItem.innerHTML)
})

var searchInput = document.getElementById('search')
var searchInput = document.querySelector('#search')


searchInput.setAttribute('value', 'pizza parties in my area')
searchInput.value = 'movies near me'

alert(searchInput.value)
alert(searchInput.getAttribute('value'))
//both of these do the same thing

// navItems.forEach(function(navItem) {
//     // console.dir(navItem)
//     // console.log(navItem.nodeName)
//     if (navItem.tagName == 'LI' && navItem.classList.contains('active')) {
//         // navItem.style.color = 'red'
//         navItem.classList.add('red')
//     }
// })

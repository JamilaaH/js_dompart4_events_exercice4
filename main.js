let boite = document.querySelector('#box');
boite.style = "width:200px ;height:200px ; border:  solid 2px black; "

boite.addEventListener('mousedown', () => {
    boite.style = "width:200px ;height:200px ; border:  solid 2px black; border-radius: 50% ; background-color: red ; transition: 5s"
})
boite.addEventListener('mouseup', () => {
    boite.style = "width:200px ;height:200px ; border:  solid 2px black; transition: 5s"
})
const array = ['image_1.jpg', 'image_2.jpg' , 'image_3.jpg']
const arrow_rigth = document.getElementById('Right')
const arrow_left = document.getElementById('Left')
const image = document.getElementById('image')
let count = 0
let length = array.length-1
arrow_rigth.addEventListener('click' , ()=>{
     if(count <  length){
        count++;
        image.src = array[0+count];
     } else {
        image.src = array[0]
        count = 0
     }
 })
 arrow_left.addEventListener('click',()=>{
    if(count === 0){
        image.src = array[length]
        count = length
    } else {
        count--;
        image.src = array[count]
    }
 })

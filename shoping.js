let form=document.querySelector('#form');
let names=document.querySelector("#name")
let age=document.querySelector("#age")
let details=document.querySelector("#details")
let email=document.querySelector("#email")
let table=document.querySelector("table");
let tr=document.querySelectorAll(' .tbody tr ');
let num='1'
let tbody=document.querySelector('.tbody')
let btn=document.querySelector("#btn")
// addEvent..............
form.addEventListener('submit',function(event){
  event.preventDefault()
  if(names.value=='' || age.value=='' || details.value=='' || email.value==''){
      alert('please input the file name!')
    return table;
  }
 tbody.innerHTML+= `
  <tr class='removes'>
    <td class='no'>${num++}</td>
    <td>${names.value} ${names.value=''}</td>
    <td>${age.value}${age.value=''}</td>
    <td>${details.value}${details.value=''}</td>
    <td>${email.value}${email.value=''}</td>
  </tr>`

})


arr=['ECE','IT','CSE','EEE']

arr.forEach(val => {
    const opt=document.createElement('option')
    opt.textContent=val
    opt.value=val
    document.getElementById('branch').appendChild(opt)
});


const input=[{name : 'Vicky', age : 15},{name : 'manoj', age : 16},{name : 'Sakthivel', age : 17},
{name : 'Yogo', age : 18},{name : 'Vijay', age : 19}]

const ages = input.filter(x=>x.age>15)
console.log(ages)
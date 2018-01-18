
$(()=>{

  let person ="";
  
$.ajax({
  url: 'http://rest.learncode.academy/api/adamws33/friends', 
  type: 'GET'
}).done( (data)=>{
  console.log(data)
  $('#form').submit((e) =>{
    e.preventDefault();
    let custInput=$('#input').val();
    hey(data[custInput]);
  })
  function hey(person){
    let who=`Hello I am ${person.first} ${person.last} my email is ${person.email}.`;
    console.log(who);
  }
})
})



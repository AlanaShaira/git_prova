var TodoList = function(){
var doc=document;
var todos=[

  'call doctor' ,
  'call doctor2' ,
  'call doctor3' ,
];

var createLi=function(text){

  var li= doc.createElement('li');
  li.appendChild(doc.createTextNode(text));
  return li;
}

return{

  getTodos : function(){

    return todos;
  },

    addTodos : function(todo){

    todos.push(todo);
  },

  createLi: createLi
}


};
//quando il dom sarà pronto si può eseguire la funzione

document.addEventListener('DOMContentLoaded',function(){


var doc=document;
var li;
var todoText;
var myApp= TodoList();
var todoList=doc.querySelector('#todo');
var todos=myApp.getTodos();
var todoInput=doc.querySelector('#todo');

/*for(var i=0; i < todos.length; i++){

li +='<li> '+todos[i]+ ' </li>';

}


 todoList.innerHTML=li;*/

 //oppure

 todos.forEach(function(todo){

li=doc.createElement('li');
todoText=doc.createTextNode(todo);
li.appendChild(todoText);
todoList.appendChild(li);
});


todoInput.addEventListener('keypress',function(e){

if(e.code==="Enter" && e.target.value && e.target.value.length>=3){

var todo=e.target.value;
myApp.addTodos(todo);
e.target.value= '';

var li=myApp.createLi(todo);

var li=doc.createElement('li');
li.appendChild(doc.createTextNode(todo));

todoList.insertBefore(li,todoList.firstElementChild.nextElementSibling);









//console.log(myApp.getTodos());


}



});

});

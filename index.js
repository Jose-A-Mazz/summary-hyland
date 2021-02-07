let topics = document.querySelector('.topic-section ul');
let h3_array = document.querySelectorAll('h3');
showingTopics();

function showingTopics (){
  for(i=0; i<h3_array.length; i++){
    let one_h3 = h3_array[i];
    let new_li = document.createElement('li');
    let new_a = document.createElement('a');
    new_li.innerHTML = new_a;
    new_a.innerText = one_h3.innerHTML;
    new_a.setAttribute('href','#'+one_h3.id);
    topics.appendChild(new_li);
    new_li.appendChild(new_a);

  }
}

let a_array = document.querySelectorAll('a');
a_array.forEach(function(a){
  a.addEventListener('click', function(){
    this.style.color = 'purple';
  })
});

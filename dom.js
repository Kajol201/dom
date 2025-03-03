const sec=document.querySelectorAll('section');
for(const x of sec){
    x.style.backgroundColor="green";

}

const ko=document.createElement('section');
const li1=document.createElement('h1');
li1.innerText='Tui sudhu amar';
ko.appendChild(li1);
const so=document.getElementById('notun');
so.appendChild(ko);

const juu=document.createElement('section');
juu.innerHTML=

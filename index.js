
const newDiv = document.createElement('div');
const newH1 = document.createElement('h1');
const newP = document.createElement('p');

newH1.innerText = 'SESHADHRI';  
newP.innerText = 'Welcome to my profile page.';

newDiv.appendChild(newH1);
newDiv.appendChild(newP);

document.body.appendChild(newDiv);


newDiv.style.backgroundColor = '#f0f0f0';
newDiv.style.padding = '20px';
newDiv.style.borderRadius = '10px';
newDiv.style.margin = '20px';
newDiv.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.1)';

newH1.style.color = '#ff5733';
newH1.style.fontSize = '2em';
newH1.style.marginBottom = '10px';

newP.style.color = '#333';
newP.style.fontSize = '1em';


newDiv.onmouseover = function () {
    newDiv.style.backgroundColor = '#e0e0e0';
};
newDiv.onmouseout = function () {
    newDiv.style.backgroundColor = '#f0f0f0';
};

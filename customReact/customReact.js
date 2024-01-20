// Custom React
import { React } from 'react';
/*
//customRender -> how this method will work?
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.chidren;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
}
const reactElement = {
  type: "a",
  props: {
    href: "https://google.com",
    target: "_blank",
  },
  chidren: "Click me to visit Google",
};
const mainContainer = document.getElementById("root"); //getting id from html file

//Method to render to injecting in root (div)
customRender(reactElement, mainContainer);
//(what,where)


*/
function customRender(reactElement, container) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML=reactElement.chidren;
  domElement.setAttribute("href", reactElement.props.href);
  domElement.setAttribute("target", reactElement.props.target);
  container.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  chidren: "Click me !!",
};
// const mainContainer = document.getElementById("root");

customRender(reactElement, mainContainer);

 const anotherElement = React.createElement(
  "a",
  {href:"https://www.google.com",target: "_blank"},
  "Click me "
 )
 ReactDOM.createRoot(document.getElementById('root')).
 render(
  anotherElement
 )
const myheading=document.querySelector("h1");
myheading.textContent="hello world";

/*let a="a";
if(a===a)
{
    alert("i love tiger");
}
else
{
    alert("i not");
}

document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

  document.querySelector("img").addEventListener("click",function(){
    alert("this is tiger");
  });*/

  const myimg=document.querySelector("img");
  myimg.onclick = ()=>{   
      const mysrc=myimg.getAttribute("src");
     

    if(mysrc==="image/tiger.jpeg" )
    {
        alert("horse");
        myimg.setAttribute("src","image/horse.jpg");
    }
    else
    {
      alert("lion");
      myimg.setAttribute("src","image/lion.avif");
    }
  };

  let mybtn=document.querySelector("button");
  let myHeading = document.querySelector("h1");

  function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, "+myName;
  }
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  let button=document.querySelector("Button");
  button.onclick = () => {
    setUserName();
  };

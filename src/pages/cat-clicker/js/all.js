"use strict";function shuffle(e){for(var t,n,m=e.length;m;)n=Math.floor(Math.random()*m--),t=e[m],e[m]=e[n],e[n]=t}var numImgs=7,numImgsAvail=6,numImgsAvailCounter=1,catNames=["Whiskers","Buttons","Mr. Wilkinson","James Bond","Ms. Patterson","Kronk","Titan"],catNameCounter=0;shuffle(catNames);var iDisCon=document.createElement("div");iDisCon.id="image-container",iDisCon.innerHTML="";var mDisCon=document.createElement("div");mDisCon.id="menu-container",document.getElementById("menu").innerHTML="";var mTitle=document.createElement("h2");mTitle.id="menu-title",mTitle.innerHTML="MENU",mDisCon.appendChild(mTitle);for(var i=0;numImgs>i;i++){var v=i+1,clicks=0,imgBox=document.createElement("div"),img=document.createElement("img"),label=document.createElement("h4"),counter=document.createElement("h3"),imgsrc="images/image-"+numImgsAvailCounter+".jpg";imgBox.className="imgBox",imgBox.id="imgBox"+v,img.className="clicker-image",img.setAttribute("alt","Clicker Image "+v+", Hong Kong Web developer"),img.setAttribute("src",imgsrc),label.className="image-label",label.textContent=catNames[catNameCounter],counter.id="img"+v,counter.className="imgCounter",counter.innerHTML=0,imgBox.appendChild(img),imgBox.appendChild(label),imgBox.appendChild(counter),imgBox.addEventListener("click",function(e){return function(){document.getElementById(e).innerHTML++}}(counter.id)),window.addEventListener("keydown",function(e){return function(){document.getElementById(e).parentElement.classList.contains("active")&&document.getElementById(e).innerHTML++}}(counter.id));var menuItem=document.createElement("div"),menuImg=document.createElement("img");menuImg.className="menu-item-image",menuImg.setAttribute("alt","Menu Item Image "+v+", Hong Kong Web developer"),menuImg.setAttribute("src",imgsrc),menuItem.appendChild(menuImg),menuItem.addEventListener("click",function(e){return function(){document.getElementById(e).parentElement.classList.contains("active")||(document.getElementsByClassName("active")[0].classList.toggle("active"),document.getElementById(e).parentElement.classList.toggle("active"))}}(counter.id)),numImgsAvail>numImgsAvailCounter?numImgsAvailCounter++:numImgsAvailCounter=1,catNameCounter<catNames.length-1?catNameCounter++:(catNameCounter=0,shuffle(catNames)),mDisCon.appendChild(menuItem),iDisCon.appendChild(imgBox)}iDisCon.firstChild.classList.toggle("active"),document.getElementById("menu").appendChild(mDisCon),document.getElementById("display-container").appendChild(iDisCon);
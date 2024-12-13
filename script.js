//your code here
   // Query the div elements
   let div1 = document.querySelector("#div1");
   let div2 = document.querySelector("#div2");
   let div3 = document.querySelector("#div3");
   let div4 = document.querySelector("#div4");
   let div5 = document.querySelector("#div5");
   let div6 = document.querySelector("#div6");
   
   // Handle the drag start event
   document.ondragstart = function(event) {
     if(event.target.id.startsWith("div")){
     event.dataTransfer.setData("image/id", event.target.id);
     console.log("drag started")}
       
   };
   
   // Handle the drag over event
   document.ondragover = function(event) {
    if(event.target.id.startsWith("div"))
    {
     event.preventDefault();  
     console.log("draged over") 
    }
   }
   
   // Handle the drop event
   document.ondrop = function(event) {
     console.log(event)
     const draggedId = event.dataTransfer.getData("image/id");
     const targetId = event.target.id;
     console.group(targetId)
   
     // Only process the drop if it is on a valid target
     if (targetId.startsWith("div")) {
       const draggedElement = document.getElementById(draggedId);
       const targetElement = document.getElementById(targetId);
   
       // Swap the background images
       const tempBackground = draggedElement.style.backgroundImage;
       console.log(tempBackground);
       draggedElement.style.backgroundImage = targetElement.style.backgroundImage;
       console.log(targetElement);
       targetElement.style.backgroundImage = tempBackground;
     }
   };
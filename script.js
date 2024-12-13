document.addEventListener('DOMContentLoaded', () => {
  // Handle the drag start event
  document.ondragstart = function(event) {
      if (event.target.id.startsWith("div")) {
          event.dataTransfer.setData("image/id", event.target.id);
          // console.log("drag started");
      }
  };

  // Handle the drag over event
  document.ondragover = function(event) {
      if (event.target.id.startsWith("div")) {
          event.preventDefault();
          // console.log("dragged over");
      }
  };

  // Handle the drop event
  document.ondrop = function(event) {
      event.preventDefault();
      // console.log("drop event", event);

      const draggedId = event.dataTransfer.getData("image/id");
      const targetId = event.target.id;

      // Only process the drop if it is on a valid target
      if (targetId.startsWith("div")) {
          const draggedElement = document.getElementById(draggedId);
          const targetElement = document.getElementById(targetId);

          // Swap the background images
          const tempBackground = draggedElement.style.backgroundImage;
          console.log(`Temp background: ${tempBackground}`);
          draggedElement.style.backgroundImage = targetElement.style.backgroundImage;
          console.log(`Target element background: ${targetElement.style.backgroundImage}`);
          targetElement.style.backgroundImage = tempBackground;
      }
  };
});

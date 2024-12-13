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

          // Get the background image URL
          const draggedBackground = window.getComputedStyle(draggedElement).backgroundImage;
          const targetBackground = window.getComputedStyle(targetElement).backgroundImage;
          
          // Log for debugging
          console.log(`Dragged background: ${draggedBackground}`);
          console.log(`Target background: ${targetBackground}`);

          // Swap the background images
          draggedElement.style.backgroundImage = targetBackground;
          targetElement.style.backgroundImage = draggedBackground;
      }
  };
});

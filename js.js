window.addEventListener("load", () => {
    
    var sound = document.querySelectorAll("audio")
    var pads = document.querySelectorAll(".pads div")
    var visual = document.querySelector(".visual")
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#606bd3",
        "#60c2d3"
      ]

    pads.forEach((pad, index) => {
        pad.addEventListener("click", function() {
          sound[index].currentTime = 0;
          sound[index].play();
          createBubbles(index);
        });
      });
    
      const createBubbles = index => {
        //Create bubbles
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function() {
          visual.removeChild(this);
        });
      };
});
          var target = document.querySelector(".target"); // get the text from the target element
      var textArray = target.textContent.split(""); // split the text into an array of single characters
      target.textContent = ""; 
      for (var i = 0; i < textArray.length; i++) {
        target.innerHTML += "<span>" + textArray[i] + "</span>"; // add each character as a span
      }

      let char = 0; 
      let timer = setInterval(onTick, 50);

      function onTick() {
        const span = target.querySelectorAll("span")[char]; // get the next span
        span.classList.add("fade"); // add the fade class
        char++; 
        if (char === textArray.length) { // if we've reached the end of the array
          complete(); // stop the timer
          return; // exit the function 
        }
      }

      function complete() {
        clearInterval(timer); // stop the timer
        timer = null;
      }

      // This function is for the dropdown menu, but it will only be present to click when the screen is smaller
      document.addEventListener("click", function (event) {
        let btn = document.getElementById("btn"); // get the button
        let targetEl = event.target; // get the element that was clicked
        do {
          if (targetEl == btn) {
            if (!btn.classList.contains("whenClicked"))
              document
                .querySelector(".dropdown-content")
                .classList.add("whenClicked");
            return;
          }
          targetEl = targetEl.parentNode;
        } while (targetEl);

        document
          .querySelector(".dropdown-content")
          .classList.remove("whenClicked");
      });

      // Redirects to the user's default mail app to send an email
      function redirect() {
        var answer = window.confirm("Do you want to send an email?");
        if (answer){
          window.location.href = "mailto:matthew.mcclain08@icloud.com";
        }
      }
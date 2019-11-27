chrome.runtime.onMessage.addListener(function(request) {
  switch(request) {
    case "fixScrolling":
      let bodyElem = document.getElementsByTagName("body")[0]
      let htmlElem = document.getElementsByTagName("html")[0]
      console.log(bodyElem)
      console.log(htmlElem)
      let elems = [bodyElem, htmlElem]

      for(let i = 0; i<elems.length; i++){
        elems[i].style.overflowY = "auto"
        elems[i].style.overflow = "auto"
      }
      break;

    case "bruteForce":
      // Get all elements that have a style attribute
      var elms = document.querySelectorAll("*[style]");

       // Loop through them
       Array.prototype.forEach.call(elms, function(elm) {
         // Get the overflow value
         var oflw = elm.style.overflow || "";
         var oflwY = elm.style.overflowY || "";

         // Remove all whitespace, make it all lower case
         oflw = oflw.replace(/\s/g, "").toLowerCase();
         oflwY = oflwY.replace(/\s/g, "").toLowerCase();

         if( (oflw != "") || (oflw != "auto")){
           elm.style.overflow = "auto"
         }
         if( (oflwY != "") || (oflwY != "auto")){
           elm.style.overflowY = "auto"
         }

      });
      break;
    default:
      // default code
  }







})

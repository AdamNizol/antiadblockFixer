chrome.runtime.onMessage.addListener(function(request) {
  let bodyElem = document.getElementsByTagName("body")[0]
  let htmlElem = document.getElementsByTagName("html")[0]

  switch(request) {
    case "fixScrolling":

      console.log(bodyElem)
      console.log(htmlElem)
      let elems = [bodyElem, htmlElem]

      for(let i = 0; i<elems.length; i++){
        elems[i].style.setProperty("overflowY", "auto", "important")
        elems[i].style.setProperty("overflow", "auto", "important")
      }
      break;

    case "bruteForce":
      // Get all elements that have a style attribute
      var elms = document.querySelectorAll("*");
      elms = Array.prototype.slice.call(elms)

      let htmlElemPos = window.getComputedStyle(htmlElem, null).getPropertyValue("position") || "";
      htmlElemPos = htmlElemPos.replace(/\s/g, "").toLowerCase();
      console.log(htmlElemPos)
      console.log(htmlElemPos == "fixed")
      if(htmlElemPos == "fixed"){
        htmlElem.style.setProperty("position", "absolute", "important")
      }
      elms.push(htmlElem);

       // Loop through them
       Array.prototype.forEach.call(elms, function(elm) {
         // Get the overflow value
         var oflw = window.getComputedStyle(elm, null).getPropertyValue("overflow") || "";
         var oflwY = window.getComputedStyle(elm, null).getPropertyValue("overflowY") || "";

         // Remove all whitespace, make it all lower case
         oflw = oflw.replace(/\s/g, "").toLowerCase();
         oflwY = oflwY.replace(/\s/g, "").toLowerCase();

         //console.log(oflw)

         if( (oflw != "") || (oflw != "auto")){
           elm.style.setProperty("overflow", "auto", "important")
         }
         if( (oflwY != "") || (oflwY != "auto")){
           elm.style.setProperty("overflowY", "auto", "important")
         }

         let pos = window.getComputedStyle(elm, null).getPropertyValue("position") || "";
         let zIndex = window.getComputedStyle(elm, null).getPropertyValue("z-index") || "";

         //console.log(zIndex)
         //console.log(pos)
         if(zIndex > 600 && pos == "fixed"){
           elm.parentNode.removeChild(elm);
         }

      });
      break;
    default:
      // default code
  }







})

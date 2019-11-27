chrome.runtime.onMessage.addListener(function(request) {
  let bodyElem = document.getElementsByTagName("body")[0]
  let htmlElem = document.getElementsByTagName("html")[0]

  var elms = document.querySelectorAll("*");
  elms = Array.prototype.slice.call(elms)

  let htmlElemPos = window.getComputedStyle(htmlElem, null).getPropertyValue("position") || "";
  htmlElemPos = htmlElemPos.replace(/\s/g, "").toLowerCase();

  if(htmlElemPos == "fixed"){
    htmlElem.style.setProperty("position", "absolute", "important")
  }
  elms.push(htmlElem);

   // Loop through them
   Array.prototype.forEach.call(elms, function(elm) {
     if(elm.tagName.toLowerCase() == "div" || elm.tagName.toLowerCase() == "section" || elm.tagName.toLowerCase() == "html" || elm.tagName.toLowerCase() == "body"){
       // Get the overflow value
       var oflw = window.getComputedStyle(elm, null).getPropertyValue("overflow") || "";
       var oflwY = window.getComputedStyle(elm, null).getPropertyValue("overflowY") || "";

       // Remove all whitespace, make it all lower case
       oflw = oflw.replace(/\s/g, "").toLowerCase();
       oflwY = oflwY.replace(/\s/g, "").toLowerCase();


       if( (oflw != "") || (oflw != "auto")){
         elm.style.setProperty("overflow", "auto", "important")
       }
       if( (oflwY != "") || (oflwY != "auto")){
         elm.style.setProperty("overflowY", "auto", "important")
       }

       let pos = window.getComputedStyle(elm, null).getPropertyValue("position") || "";
       let zIndex = window.getComputedStyle(elm, null).getPropertyValue("z-index") || "";

       if(zIndex > 600 && pos == "fixed"){
         elm.parentNode.removeChild(elm);
       }
     }


  });
})

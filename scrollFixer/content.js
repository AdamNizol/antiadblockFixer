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
     let allowedTags = ["div", "section", "html", "body"];
     if( (allowedTags.includes( elm.tagName.toLowerCase() )) && elm.offsetHeight > (screen.height*0.5) && elm.offsetWidth > (screen.width*0.5) ){

       // Get the overflow value
       var oflw = window.getComputedStyle(elm, null).getPropertyValue("overflow") || "";
       var oflwY = window.getComputedStyle(elm, null).getPropertyValue("overflow-y") || "";

       // Remove all whitespace, make it all lower case
       oflw = oflw.replace(/\s/g, "").toLowerCase();
       oflwY = oflwY.replace(/\s/g, "").toLowerCase();

       if(oflw == "hidden"){
         elm.style.setProperty("overflow", "auto", "important")
       }
       if( oflwY == "hidden" ){
         elm.style.setProperty("overflow-y", "auto", "important")
       }
     }

     //remove overlay
     let pos = window.getComputedStyle(elm, null).getPropertyValue("position") || "";
     let zIndex = window.getComputedStyle(elm, null).getPropertyValue("z-index") || "";

     blackListIds = [
       "gateway-content"
     ]
     blackListClasses = [
       "tp-modal",
       "tp-backdrop"
     ]

     classBlackListed = false;
     for(let i = 0; i< blackListClasses.length; i++){
       if (elm.classList.contains(blackListClasses[i]) ){
         classBlackListed = true;
       }
     }


     if( (zIndex > 600 && pos == "fixed") || (blackListIds.includes(elm.id)) || classBlackListed ){
       elm.parentNode.removeChild(elm);
     }


  });
})

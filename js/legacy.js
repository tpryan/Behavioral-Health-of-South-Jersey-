function ready(cb) {
   /in/.test(document.readyState) // in = loadINg
      ? setTimeout('ready('+cb+')', 9)
      : cb();
}
 
ready(function() {
   // grab something from the DOM
});

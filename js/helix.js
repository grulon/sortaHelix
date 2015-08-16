(function helix() {
  var context = myCanvas.getContext('2d');
  var animate_button = document.getElementById('animate_button');
  var stop_button = document.getElementById('stop_button');
  var reset_button=document.getElementById('reset_button');
  var count_field = document.getElementById('rect_qty');
  var x=0, y=0, width = myCanvas.width, height = myCanvas.height;
  var offset = 0;
  var interval;

  function drawManyRectangles(){
    // debugger;  //used debugger to see what 'this' keyword returned ... fyi it was animate_button
  	//var n = f.value;
  	width = 40;
  	height = 20;


    var redraw = function(){
      clear();
      for (var i=0; i < count_field.value; i++) {
    		x = i/10 * myCanvas.width + offset;
        y = i/10 * myCanvas.height + offset;
    		context.fillRect(x, y, width, height);
    	 }
       offset++;
    };
    stop();
    interval= setInterval(redraw, 20);
  }

  function stop() {
    clearInterval(interval);
  }

  function clear() {
      context.clearRect(0, 0, myCanvas.width, myCanvas.height);
  }
  animate_button.onclick = drawManyRectangles;
  stop_button.onclick = stop;
  reset_button.onclick = function(){
    offset = 0;
    clear();
    count_field.focus();
    count_field.select();
    //document.getElementById('rect_qty').value = 20;
  };
})();

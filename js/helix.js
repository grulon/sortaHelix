(function helix() {
  var context = myCanvas.getContext('2d');
  var animate_button = document.getElementById('animate_button');
  var stop_button = document.getElementById('stop_button');
  var reset_button=document.getElementById('reset_button');
  var count_field = document.getElementById('rect_qty');
  var rect_width = document.getElementById('rect_width');
  var rect_height = document.getElementById('rect_height');
  var x=0, y=0, width = myCanvas.width, height = myCanvas.height;
  var offset = 0;
  var interval;
  var grd = context.createLinearGradient(0,0,width,height);
  grd.addColorStop(0,"red");
  grd.addColorStop(.5,"orange");
  grd.addColorStop(1,"blue");
  context.fillStyle = grd;
  //context.fillRect(10,10,width,height);

  function drawManyRectangles(){
    // debugger;  //used debugger to see what 'this' keyword returned ... fyi it was animate_button
  	context.fillRect(0,0,width,height);
    width = rect_width.value;
  	height = rect_height.value;

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

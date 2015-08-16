(function helix() {
  var context = myCanvas.getContext('2d');
  var f = document.querySelector('form');

  //var count_field = document.getElementById('rect_qty');
  //var rect_width = document.getElementById('rect_width');
  //var rect_height = document.getElementById('rect_height');
  var x=0, y=0, width = myCanvas.width, height = myCanvas.height;
  var offset = 0;
  var interval;
  f.n.focus();
  var grd = context.createLinearGradient(0,0,width,height);
  grd.addColorStop(0,"red");
  grd.addColorStop(.5,"orange");
  grd.addColorStop(1,"blue");
  context.fillStyle = grd;
  //context.fillRect(10,10,width,height);

  function drawManyRectangles(ev){
    ev.preventDefault();
    // debugger;  //used debugger to see what 'this' keyword returned ... fyi it was animate_button
  	context.fillRect(0,0,width,height);
    width = f.w.value;
  	height = f.h.value;

    var redraw = function(){
      clear();
      for (var i=0; i < f.n.value; i++) {
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
  f.onsubmit = drawManyRectangles;

  f.stop.onclick = stop;

  f.reset.onclick = function(){
    offset = 0;
    clear();
    f.n.focus();
    f.n.select();
    //document.getElementById('rect_qty').value = 20;
  };
})();

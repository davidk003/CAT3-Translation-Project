class Transform {
    constructor(ctx) {
      this.ctx = ctx;
      this.s = 1;
      this.dx = 0;
      this.dy = 0;
    }
    
    scale(s) {
      this.ctx.scale(s, s);
      this.s *= 1 / s;
      this.dx *= 1 / s;
      this.dy *= 1 / s;
    }
    
    translate(dx, dy) {
      this.ctx.translate(dx, dy);
      this.dx -= dx;
      
  class Transform {
    constructor(ctx) {
      this.ctx = ctx;
      this.s = 1;
      this.dx = 0;
      this.dy = 0;
    }
    
    scale(s) {
      this.ctx.scale(s, s);
      this.s *= 1 / s;
      this.dx *= 1 / s;
      this.dy *= 1 / s;
    }
    
    translate(dx, dy) {
      this.ctx.translate(dx, dy);
      this.dx -= dx;
      this.dy -= dy;
    }
    
    transform({ x, y }) {
      return {
        x: this.s * x + this.dx,
        y: this.s * y + this.dy
      };
    }
  }
  
  class PanAndZoom {
    constructor(canvas, draw) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.onDraw = draw;
      this.transform = new Transform(this.ctx);
      
      this.canvas.addEventListener('wheel', e => this.onWheel(e));
      this.canvas.addEventListener('mousedown', e => this.onMouseDown(e));
      this.canvas.addEventListener('mousemove', e => this.onMouseMove(e));
      this.canvas.addEventListener('mouseup', e => this.onMouseUp(e));
      
      this.draw();
    }
    
    draw() {
      this.onDraw(this.ctx, this.transform);
    }
  
    mouseOffset(e) {
      return {
        x: e.pageX - this.canvas.offsetLeft,
        y: e.pageY - this.canvas.offsetTop
      };
    }
  
    onMouseDown(e, ctx) {
      e.preventDefault();
      e.stopPropagation();
  
      this.dragStart = this.transform.transform(this.mouseOffset(e));
      this.dragging = true;
    }
  
    onMouseMove(e, ctx) {
      e.preventDefault();
      e.stopPropagation();
  
      if (!this.dragging) {
        return;
      }
  
      const offset = this.mouseOffset(e);
      const dragEnd = this.transform.transform(offset);
      const dx = dragEnd.x - this.dragStart.x;
      const dy = dragEnd.y - this.dragStart.y;

      this.transform.translate(dx, dy);
      this.draw();
      this.dragStart = this.transform.transform(offset);
    }
  
    onMouseUp(e, ctx) {
      e.preventDefault();
      e.stopPropagation();
  
      this.dragging = false;
    }
  
    onWheel(e, ctx) {
      e.preventDefault();
      e.stopPropagation();
  
      const offset = this.mouseOffset(e);
      const zoomCenter = this.transform.transform(offset);
      const factor = Math.sign(e.deltaY) > 0 ? 0.9 : 1.1;
  
      this.transform.translate(zoomCenter.x, zoomCenter.y);
      this.transform.scale(factor);
      this.transform.translate(-zoomCenter.x, -zoomCenter.y);

      this.draw();
    }
  }
  
  function clearCanvas(ctx, transform) {
    const { x: left, y: top } = transform.transform({ x: 0, y: 0 });
    const { x: right, y: bottom } = transform.transform({ x: ctx.canvas.width, y: ctx.canvas.height });
    const width = Math.abs(right - left);
    const height = Math.abs(bottom - top);
    ctx.fillStyle = 'black';
    ctx.fillRect(left, top, width, height);
  }
  
  function drawCircle(ctx) {
    starLocs.forEach((loc => {  ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(loc[0], loc[1], loc[2], 0, Math.PI * 2);
        ctx.fill();}))
  }
  
  function draw(ctx, transform) {
    clearCanvas(ctx, transform);
    drawCircle(ctx);

  }
  
  function run() {
    const canvas = document.getElementById('cnv');
    const panAndZoom = new PanAndZoom(canvas, draw);
  }
  
  document.addEventListener('DOMContentLoaded', run);
      this.dy -= dy;
    }
    
    transform({ x, y }) {
      return {
        x: this.s * x + this.dx,
        y: this.s * y + this.dy
      };
    }
  }
  
  class PanAndZoom {
    constructor(canvas, draw) {
      this.canvas = canvas;
      this.ctx = this.canvas.getContext('2d');
      this.onDraw = draw;
      this.transform = new Transform(this.ctx);
      
      this.canvas.addEventListener('wheel', e => this.onWheel(e));
      this.canvas.addEventListener('mousedown', e => this.onMouseDown(e));
      this.canvas.addEventListener('mousemove', e => this.onMouseMove(e));
      this.canvas.addEventListener('mouseup', e => this.onMouseUp(e));
      
      this.draw();
    }
    
    draw() {
      this.onDraw(this.ctx, this.transform);
    }
  
    mouseOffset(e) {
      return {
        x: e.pageX - this.canvas.offsetLeft,
        y: e.pageY - this.canvas.offsetTop
      };
    }
  
    onMouseDown(e, ctx) {
      e.preventDefault();
      e.stopPropagation();
  
      this.dragStart = this.transform.transform(this.mouseOffset(e));
      this.dragging = true;
    }
  
    onMouseMove(e, ctx) {
      e.preventDefault();
      e.stopPropagation();
  
      if (!this.dragging) {
        return;
      }
  
      const offset = this.mouseOffset(e);
      const dragEnd = this.transform.transform(offset);
      const dx = dragEnd.x - this.dragStart.x;
      const dy = dragEnd.y - this.dragStart.y;

      this.transform.translate(dx, dy);
      this.draw();
      this.dragStart = this.transform.transform(offset);
    }
  
    onMouseUp(e, ctx) {
      e.preventDefault();
      e.stopPropagation();
  
      this.dragging = false;
    }
  
    onWheel(e, ctx) {
      e.preventDefault();
      e.stopPropagation();
  
      const offset = this.mouseOffset(e);
      const zoomCenter = this.transform.transform(offset);
      const factor = Math.sign(e.deltaY) > 0 ? 0.9 : 1.1;
  
      this.transform.translate(zoomCenter.x, zoomCenter.y);
      this.transform.scale(factor);
      this.transform.translate(-zoomCenter.x, -zoomCenter.y);

      this.draw();
    }
  }
  
  function clearCanvas(ctx, transform) {
    const { x: left, y: top } = transform.transform({ x: 0, y: 0 });
    const { x: right, y: bottom } = transform.transform({ x: ctx.canvas.width, y: ctx.canvas.height });
    const width = Math.abs(right - left);
    const height = Math.abs(bottom - top);
    ctx.fillStyle = 'black';
    ctx.fillRect(left, top, width, height);
  }
  
  function drawCircle(ctx) {
    starLocs.forEach((loc => {  ctx.beginPath();
        ctx.fillStyle = "white";
        ctx.arc(loc[0], loc[1], loc[2], 0, Math.PI * 2);
        ctx.fill();}))
  }
  
  function draw(ctx, transform) {
    clearCanvas(ctx, transform);
    drawCircle(ctx);
  }
  
  function run() {
    const canvas = document.getElementById('cnv');
    const panAndZoom = new PanAndZoom(canvas, draw);
  }
  
  document.addEventListener('DOMContentLoaded', run);
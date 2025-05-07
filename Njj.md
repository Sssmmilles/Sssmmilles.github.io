let currentColor = 'black';
function toggleStartMenu() {
  const menu = document.getElementById('startMenu');
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
}
function toggleWindow(id) {
  const win = document.getElementById(id);
  win.style.display = win.style.display === 'block' ? 'none' : 'block';
}
function closeWindow(id) {
  document.getElementById(id).style.display = 'none';
}
function setColor(color) {
  currentColor = color;
}
const canvas = document.getElementById('paintCanvas');
if (canvas) {
  const ctx = canvas.getContext('2d');
  canvas.addEventListener('mousedown', function(e) {
    canvas.isDrawing = true;
    ctx.beginPath();
    ctx.moveTo(e.offsetX, e.offsetY);
  });
  canvas.addEventListener('mousemove', function(e) {
    if (canvas.isDrawing) {
      ctx.strokeStyle = currentColor;
      ctx.lineTo(e.offsetX, e.offsetY);
      ctx.stroke();
    }
  });
  canvas.addEventListener('mouseup', () => canvas.isDrawing = false);
}

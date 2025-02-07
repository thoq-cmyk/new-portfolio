var q = document.getElementById("matrix"),
  s = window.screen,
  w = (q.width = s.width),
  h = (q.height = s.height),
  p = Array(256).join(1).split(""),
  c = q.getContext("2d"),
  m = Math;

setInterval(function () {
  c.fillStyle = "rgba(0, 0, 0, 0.05)"; // Fixed rgba syntax
  c.fillRect(0, 0, w, h);
  c.fillStyle = "rgba(0, 255, 0, 1)"; // Green color for matrix characters

  p = p.map(function (v, i) {
    var r = m.random();
    var str = String.fromCharCode(m.floor(2720 + r * 22)); // Random character generation
    c.fillText(str, i * 10, v); // Draw the character

    v += 10; // Move the character down the screen

    return v > 768 + r * 1e4 ? 0 : v; // Reset when character reaches the bottom
  });
}, 33);

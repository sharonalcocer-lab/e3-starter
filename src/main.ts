const portrait = document.querySelector<HTMLDivElement>("#portrait")!;
const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
face.setAttribute("viewBox", "0 0 200 200");
face.setAttribute("role", "img");
face.setAttribute(
  "aria-label",
  "A nervous character covered in dense freckles",
);

const head = document.createElementNS("http://www.w3.org/2000/svg", "ellipse");
head.setAttribute("cx", "100");
head.setAttribute("cy", "100");
head.setAttribute("rx", "78");
head.setAttribute("ry", "86");
head.setAttribute("fill", "#f3cf87");
head.setAttribute("stroke", "#302c29");
head.setAttribute("stroke-width", "4");
face.append(head);

const leftEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
leftEye.setAttribute("cx", "72");
leftEye.setAttribute("cy", "82");
leftEye.setAttribute("rx", "6");
leftEye.setAttribute("ry", "9");
leftEye.setAttribute("fill", "#302c29");
face.append(leftEye);

const rightEye = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "ellipse",
);
rightEye.setAttribute("cx", "128");
rightEye.setAttribute("cy", "82");
rightEye.setAttribute("rx", "6");
rightEye.setAttribute("ry", "9");
rightEye.setAttribute("fill", "#302c29");
face.append(rightEye);

const nose = document.createElementNS("http://www.w3.org/2000/svg", "line");
nose.setAttribute("x1", "100");
nose.setAttribute("y1", "96");
nose.setAttribute("x2", "96");
nose.setAttribute("y2", "112");
nose.setAttribute("stroke", "#302c29");
nose.setAttribute("stroke-width", "4");
nose.setAttribute("stroke-linecap", "round");
face.append(nose);

const mouth = document.createElementNS("http://www.w3.org/2000/svg", "line");
mouth.setAttribute("x1", "75");
mouth.setAttribute("y1", "137");
mouth.setAttribute("x2", "125");
mouth.setAttribute("y2", "137");
mouth.setAttribute("stroke", "#302c29");
mouth.setAttribute("stroke-width", "4");
mouth.setAttribute("stroke-linecap", "round");
face.append(mouth);

// for (let i = 0; i < 12; i++) {
//   const angle = (i / 12) * Math.PI * 2;
//   const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
//   dot.setAttribute("cx", String(100 + 86 * Math.cos(angle)));
//   dot.setAttribute("cy", String(100 + 86 * Math.sin(angle)));
//   dot.setAttribute("r", "3");
//   dot.setAttribute("fill", "#563b67");
//   face.append(dot);
// }

//freckles loop
for (let i = 0; i < 105; i++) {
  const step = (i * 37) % 35;
  let xCoord = 0;
  const yCoord = 98 + (i * 13 + step * 2) % 20;

  //separating the freckles on both cheeks
  if (i < 52) {
    xCoord = 52 + (i * 7 + step * 3) % 36;
  } else {
    xCoord = 112 + (i * 7 + step * 3) % 36;
  }

  const freckle = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle",
  );
  freckle.setAttribute("cx", String(xCoord));
  freckle.setAttribute("cy", String(yCoord));
  freckle.setAttribute("r", "1.3");
  freckle.setAttribute("fill", "#794c1e");
  face.append(freckle);
}

portrait.append(face);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of face.getAnimations()) animation.cancel();
  face.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});

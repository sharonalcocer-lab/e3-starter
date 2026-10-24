import sweatUrl from "./assets/sweat.png?no-inline";
import bubbleUrl from "./assets/bubble.png?no-inline";

const portrait = document.querySelector<HTMLDivElement>("#portrait")!;

const spin = document.querySelector<HTMLButtonElement>("#spin")!;

// The prototype grew inline. Keep it this way until the refactoring checkpoint.
function buildFace(): SVGSVGElement {
  const face = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  face.setAttribute("viewBox", "0 0 200 200");
  face.setAttribute("role", "img");
  face.setAttribute(
    "aria-label",
    "A nervous face with hand drawn sweat drops and a speech bubble image",
  );

  const head = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "ellipse",
  );
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

  //I hand drew the two drawings (bubble.png and sweat.png)
  const sweat1 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  sweat1.setAttribute("href", sweatUrl);
  sweat1.setAttribute("x", "33");
  sweat1.setAttribute("y", "50");
  sweat1.setAttribute("width", "35");
  sweat1.setAttribute("height", "35");
  face.append(sweat1);

  const sweat2 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  sweat2.setAttribute("href", sweatUrl);
  sweat2.setAttribute("x", "145");
  sweat2.setAttribute("y", "60");
  sweat2.setAttribute("width", "35");
  sweat2.setAttribute("height", "35");
  face.append(sweat2);

  const sweat3 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  sweat3.setAttribute("href", sweatUrl);
  sweat3.setAttribute("x", "110");
  sweat3.setAttribute("y", "20");
  sweat3.setAttribute("width", "35");
  sweat3.setAttribute("height", "35");
  face.append(sweat3);

  const sweat4 = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  sweat4.setAttribute("href", sweatUrl);
  sweat4.setAttribute("x", "75");
  sweat4.setAttribute("y", "35");
  sweat4.setAttribute("width", "35");
  sweat4.setAttribute("height", "35");
  face.append(sweat4);

  const bubbleImage = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "image",
  );
  bubbleImage.setAttribute("href", bubbleUrl);
  bubbleImage.setAttribute("x", "130");
  bubbleImage.setAttribute("y", "15");
  bubbleImage.setAttribute("width", "50");
  bubbleImage.setAttribute("height", "50");
  face.append(bubbleImage);

  return face;
}

const activeFace = buildFace();

portrait.append(activeFace);

spin.addEventListener("click", () => {
  // Restart rather than accumulate simultaneous animations on repeated clicks.
  for (const animation of activeFace.getAnimations()) animation.cancel();
  activeFace.animate(
    [{ transform: "rotate(0deg)" }, { transform: "rotate(360deg)" }],
    { duration: 800, easing: "ease-in-out" },
  );
});

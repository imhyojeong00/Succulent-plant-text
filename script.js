const IMAGE_CONFIG = {
  A: { scale: 0.69, offsetY: 0 },
  B: { scale: 1.0, offsetY: 0 },
  C: { scale: 1.5, offsetY: 0 },
  D: { scale: 1.3, offsetY: 0 },
  E: { scale: 1.35, offsetY: 0 },
  F: { scale: 1.1, offsetY: 0 },
  G: { scale: 2.1, offsetY: 0 },
  H: { scale: 1.3, offsetY: 0 },
  I: { scale: 1.3, offsetY: 0 },
  J: { scale: 1.0, offsetY: 0 },
  K: { scale: 1.6, offsetY: 0 },
  L: { scale: 1.5, offsetY: 0 },
  M: { scale: 1.28, offsetY: 0 },
  N: { scale: 1.22, offsetY: 0 },
  O: { scale: 1.3, offsetY: 0 },
  P: { scale: 1.5, offsetY: 0 },
  Q: { scale: 1.3, offsetY: 0 },
  R: { scale: 2.39, offsetY: 0 },
  S: { scale: 1.95, offsetY: 0 },
  T: { scale: 1.0, offsetY: 0 },
  U: { scale: 0.95, offsetY: 0 },
  V: { scale: 1.2, offsetY: 0 },
  W: { scale: 1.6, offsetY: 0 },
  X: { scale: 1.6, offsetY: 0 },
  Y: { scale: 1.0, offsetY: 0 },
  Z: { scale: 1.0, offsetY: 0 },

  A1: { scale: 0.9, isMutant: true },
  A2: { scale: 1.0, isMutant: true },
  A3: { scale: 1.2, isMutant: true },
  A4: { scale: 1.3, isMutant: true },
  A5: { scale: 1.4, isMutant: true },
  A6: { scale: 1.6, isMutant: true },
  A7: { scale: 1.7, isMutant: true },
  A8: { scale: 1.9, isMutant: true },

  A_STACK1: { scale: 0.6, isMutant: true },
  A_STACK2: { scale: 0.6, isMutant: true },
  A_STACK3: { scale: 0.6, isMutant: true },
  A_STACK4: { scale: 0.6, isMutant: true },
  A_STACK5: { scale: 0.6, isMutant: true },

  Q1: { scale: 0.8, isMutant: true },
  IC_INTER: { scale: 1.3, isMutant: true },
  AK_INTER: { scale: 1.3, isMutant: true },
  AK_INTER1: { scale: 1.9, offsetY: -50, isMutant: true },
  AB_INTER: { scale: 1.3, offsetY: -10, isMutant: true },
  AC_COMBO: { scale: 1.8, isMutant: true },
  AC_INTER1: { scale: 1.5, offsetY: -60, isMutant: true },
  RANDOM_CHAR: { scale: 0.93, isMutant: true },
  DT_INTER: { scale: 1.4, offsetY: -5, isMutant: true },
  HT_INTER: { scale: 0.7, isMutant: true },
  DT_DELAYED: { scale: 2.9, offsetY: -90, isMutant: true },

  K_INTER1: { scale: 0.9, isMutant: true },
  K_INTER2: { scale: 1.3, isMutant: true },
  K_INTER3: { scale: 1.9, isMutant: true },

  W1: { scale: 1.0, isMutant: true },
  W2: { scale: 1.1, isMutant: true },
  W3: { scale: 1.0, isMutant: true },
  W4: { scale: 0.9, isMutant: true },
  W5: { scale: 1.2, isMutant: true },
  W6: { scale: 1.0, isMutant: true },
  W7: { scale: 1.3, isMutant: true },
  W8: { scale: 1.7, isMutant: true },
  W9: { scale: 2.0, isMutant: true },

  Z2: { scale: 1.0, isMutant: true },
  ECHEVERIA_MASTER: { scale: 2.8, isMutant: true }
};

const IMAGE_FALLBACK_MAP = {
  AC_INTER1: "AC_COMBO",
  W5: "W4",
  Z2: "Z",
  DT_DELAYED: "DT_INTER"
};

const SPECIES_MAP = {
  A: "에케베리아 치와와엔시스 / Echeveria chihuahuensis",
  B: "홍포도 / Graptoveria Amethorum",
  C: "황금세덤 / Sedum acre",
  D: "천탑 / Crassula capitella",
  E: "수련 / Echeveria Suryeon",
  F: "러블리 로즈 / Graptoveria Lovely Rose",
  G: "루비틴트 / Sedum Ruby Tint",
  H: "비스코사 / Haworthiopsis viscosa",
  I: "옵투사 / Haworthia cymbiformis var. obtusa",
  J: "트리코디아데마 덴섬 / Trichodiadema densum",
  K: "황금사 / Mammillaria elongata",
  L: "하월시아 교배종 / Haworthia hyb.",
  M: "십이지권 / Haworthiopsis attenuata",
  N: "백화기린 / Euphorbia mammillaris cv. variegata",
  O: "가스테리아 백복륜금 / Gasteria White Variegated",
  P: "에케베리아 환엽 버밀리언",
  Q: "가스테리아 그라실리스 / Gasteria armstrongii",
  R: "원종 프리티금 / Echeveria cv. Rezry",
  S: "아미산 / Euphorbia gabizan",
  T: "오층탑 / Haworthia hyb. Manda",
  U: "리톱스 / Lithops",
  V: "리톱스 / Lithops",
  W: "리톱스 군생",
  X: "왕서각 꽃 / Stapelia",
  Y: "왕서각 / Stapelia",
  Z: "왕서각 군생",

  A1: "A sequence mutant",
  A2: "A sequence mutant",
  A3: "A sequence mutant",
  A4: "A sequence mutant",
  A5: "A sequence mutant",
  A6: "A sequence mutant",
  A7: "A sequence mutant",
  A8: "A sequence mutant",

  A_STACK1: "A vertical stack mutant",
  A_STACK2: "A vertical stack mutant",
  A_STACK3: "A vertical stack mutant",
  A_STACK4: "A vertical stack mutant",
  A_STACK5: "A vertical stack mutant",

  AB_INTER: "에케베리아 홍포도 변이종 / Echeveria chihuahuensis mut.",
  AC_COMBO: "A-C hybridized mutant",
  AC_INTER1: "A-C derived mutant",
  AK_INTER: "A-K intermediate mutant",
  AK_INTER1: "A-K derived mutant",
  IC_INTER: "I-C intermediate mutant",
  DT_INTER: "D-T intermediate mutant",
  HT_INTER: "H-T intermediate mutant",
  DT_DELAYED: "D-T delayed mutant",
  Q1: "Q derived mutant",
  RANDOM_CHAR: "random generated mutant",

  K_INTER1: "K diagonal mutant",
  K_INTER2: "K diagonal mutant",
  K_INTER3: "K diagonal mutant",

  W1: "W derived cluster",
  W2: "W derived cluster",
  W3: "W derived cluster",
  W4: "W derived cluster",
  W5: "W derived cluster",
  W6: "W derived cluster",
  W7: "W derived cluster",
  W8: "W derived cluster",
  W9: "W derived cluster",

  Z2: "Z derived cluster",
  ECHEVERIA_MASTER: "Echeveria master cluster"
};

const GENETIC_MAP = {
  A: { x: 190, y: -200 },
  B: { x: 220, y: -170 },
  C: { x: 70, y: -80 },
  D: { x: 30, y: -50 },
  E: { x: 160, y: -220 },
  F: { x: 240, y: -190 },
  G: { x: 100, y: -60 },
  H: { x: 140, y: -40 },
  I: { x: 160, y: -20 },
  J: { x: -70, y: 120 },
  K: { x: 300, y: 200 },
  L: { x: 190, y: 100 },
  M: { x: 70, y: 150 },
  N: { x: -150, y: 150 },
  O: { x: 210, y: 70 },
  P: { x: 280, y: -160 },
  Q: { x: 180, y: 120 },
  R: { x: 200, y: -230 },
  S: { x: -110, y: 180 },
  T: { x: 230, y: 90 },
  U: { x: -170, y: 220 },
  V: { x: 110, y: -20 },
  W: { x: -200, y: 240 },
  X: { x: -250, y: 180 },
  Y: { x: -270, y: 160 },
  Z: { x: -230, y: 200 }
};

const REQUIRED_FOR_MASTER = [
  "A",
  "AB_INTER",
  "AC_COMBO",
  "DT_INTER",
  "B",
  "R",
  "P",
  "E",
  "F"
];

const START_X = 25000;
const START_Y = 25000;

/*
  엔터 후 새 줄의 x 이동 거리.
  기존 900은 너무 멀어서 260으로 줄임.
  더 붙이고 싶으면 180~220 정도로 낮추면 됨.
*/
const LINE_GAP_X = 260;

const imageCache = {};

let stage;
let input;
let distLog;
let angleLog;

let collectedSet = new Set();
let masterSpawned = false;

let lastKey = null;
let lastPos = { x: START_X, y: START_Y };
let growthAngle = -90;

let wCounter = 0;
let aCounter = 0;
let zCounter = 0;
let firstASequenceSpawned = false;

let receiptRecords = [];
let typedHistory = [];

let committedSequence = "";
let currentInputSnapshot = "";
let activeTimers = [];

let currentLineIndex = 0;
let currentLineStartX = START_X;

let rebuildFrameId = null;

window.addEventListener("DOMContentLoaded", init);

async function init() {
  stage = document.getElementById("render-stage");
  input = document.getElementById("succulent-input");
  distLog = document.getElementById("dist-val");
  angleLog = document.getElementById("angle-val");

  if (!stage || !input) {
    console.error("필수 요소를 찾지 못했습니다.");
    return;
  }

  input.disabled = true;
  input.placeholder = "LOADING PLANTS...";

  document.getElementById("save-btn")?.addEventListener("click", captureFullStage);
  document.getElementById("decode-btn")?.addEventListener("click", toggleMutantOnly);
  document.getElementById("receipt-btn")?.addEventListener("click", toggleReceipt);
  document.getElementById("receipt-close")?.addEventListener("click", closeReceipt);
  document.getElementById("receipt-download")?.addEventListener("click", downloadReceipt);
  document.getElementById("coord-toggle")?.addEventListener("click", toggleCoordinateLayer);

  createCoordinateLayer();

  await preloadImages();

  input.disabled = false;
  input.placeholder = "TYPE A-Z";

  input.addEventListener("keydown", handleKeydown);
  input.addEventListener("input", handleInput);

  input.focus();

  moveCamera(START_X, START_Y + window.innerHeight * 0.2, "auto");

  console.log("Cluster System ready");
}

async function preloadImages() {
  const names = Object.keys(IMAGE_CONFIG);

  await Promise.all(
    names.map((name) => {
      return new Promise((resolve) => {
        const img = new Image();

        img.decoding = "async";
        img.loading = "eager";
        img.fetchPriority = "high";

        img.onload = async () => {
          try {
            if (img.decode) await img.decode();
          } catch (e) {}

          imageCache[name] = img;
          resolve();
        };

        img.onerror = () => {
          const fallbackName = IMAGE_FALLBACK_MAP[name];

          if (fallbackName) {
            const fallback = new Image();

            fallback.decoding = "async";
            fallback.loading = "eager";
            fallback.fetchPriority = "high";

            fallback.onload = async () => {
              try {
                if (fallback.decode) await fallback.decode();
              } catch (e) {}

              imageCache[name] = fallback;
              resolve();
            };

            fallback.onerror = () => {
              console.warn("이미지 로드 실패:", name);
              imageCache[name] = img;
              resolve();
            };

            fallback.src = `./images/${fallbackName}.png`;
          } else {
            console.warn("이미지 로드 실패:", name);
            imageCache[name] = img;
            resolve();
          }
        };

        img.src = `./images/${name}.png`;
      });
    })
  );
}

function handleKeydown(e) {
  if (e.key === "Enter") {
    e.preventDefault();

    const normalizedCurrent = normalizeInput(input.value);

    if (input.value !== normalizedCurrent) {
      input.value = normalizedCurrent;
    }

    currentInputSnapshot = normalizedCurrent;
    committedSequence += currentInputSnapshot + "\n";
    currentInputSnapshot = "";
    input.value = "";

    requestRebuild();
    updateDataLog(0, 90, false);
    return;
  }

  /*
    중요 수정:
    엔터를 친 뒤에는 이전 줄 글자가 input.value에 보이지 않음.
    그래서 input이 비어 있는 상태에서 Backspace를 누르면
    committedSequence의 마지막 글자나 줄바꿈을 직접 지우도록 함.
    즉, 전에 써둔 글자도 Backspace로 지우면 이미지가 함께 사라짐.
  */
  if (e.key === "Backspace" && input.value.length === 0 && committedSequence.length > 0) {
    e.preventDefault();

    committedSequence = committedSequence.slice(0, -1);
    currentInputSnapshot = "";

    requestRebuild();
    updateDataLog(0, 90, false);
    return;
  }
}

function handleInput(e) {
  const normalized = normalizeInput(e.target.value);

  if (e.target.value !== normalized) {
    e.target.value = normalized;
  }

  currentInputSnapshot = normalized;
  requestRebuild();
}

function normalizeInput(value) {
  return value.toUpperCase().replace(/[^A-Z?+]/g, "");
}

function requestRebuild() {
  if (rebuildFrameId !== null) {
    cancelAnimationFrame(rebuildFrameId);
  }

  rebuildFrameId = requestAnimationFrame(() => {
    rebuildFrameId = null;
    rebuildFromSequence(committedSequence + currentInputSnapshot);
  });
}

function clearActiveTimers() {
  activeTimers.forEach((id) => clearTimeout(id));
  activeTimers = [];
}

function scheduleNode(callback, delay, instant = false) {
  if (instant) {
    callback();
    return;
  }

  const timerId = setTimeout(() => {
    callback();
    activeTimers = activeTimers.filter((id) => id !== timerId);
  }, delay);

  activeTimers.push(timerId);
}

function resetRuntimeState() {
  clearActiveTimers();

  currentLineIndex = 0;
  currentLineStartX = START_X;

  lastKey = null;
  lastPos = { x: START_X, y: START_Y };
  growthAngle = -90;

  wCounter = 0;
  aCounter = 0;
  zCounter = 0;
  firstASequenceSpawned = false;

  collectedSet.clear();
  masterSpawned = false;

  receiptRecords = [];
  typedHistory = [];

  if (stage) {
    stage.querySelectorAll(".succulent-node").forEach((node) => node.remove());
  }
}

function rebuildFromSequence(sequence) {
  resetRuntimeState();

  for (const token of sequence) {
    if (token === "\n") {
      processLineBreak(true);
    } else {
      processCharacter(token, true);
    }
  }

  updateReceiptIfOpen();
  moveCamera(lastPos.x, lastPos.y, "auto");
}

function processLineBreak(isRebuild = false) {
  typedHistory.push("\n");

  currentLineIndex += 1;

  /*
    엔터 후 너무 옆으로 가지 않도록 LINE_GAP_X를 작게 사용.
    새 줄은 기존 글자를 지우지 않고,
    첫 시작점 근처로 돌아와서 다시 위로 쌓임.
  */
  currentLineStartX = START_X + currentLineIndex * LINE_GAP_X;

  lastPos = {
    x: currentLineStartX,
    y: START_Y
  };

  lastKey = null;
  growthAngle = -90;

  wCounter = 0;
  aCounter = 0;
  zCounter = 0;
  firstASequenceSpawned = false;

  if (!isRebuild) {
    moveCamera(currentLineStartX, START_Y, "auto");
  }
}

function processCharacter(char, instant = false) {
  typedHistory.push(char);

  if (char === "?") {
    renderRandomNode("RANDOM_CHAR", char);
    checkMasterLogic("RANDOM_CHAR");
    lastKey = "?";
    wCounter = 0;
    aCounter = 0;
    zCounter = 0;
    return;
  }

  if (GENETIC_MAP[char] || char === "+") {
    if ((lastKey === "D" && char === "T") || (lastKey === "T" && char === "D")) {
      renderDTSequence(char, instant);
      checkMasterLogic("DT_INTER");
    }

    if ((lastKey === "H" && char === "T") || (lastKey === "T" && char === "H")) {
      renderIntermediateNode("HT_INTER", char);
      checkMasterLogic("HT_INTER");
    }

    if ((lastKey === "I" && char === "C") || (lastKey === "C" && char === "I")) {
      renderIntermediateNode("IC_INTER", char);
      checkMasterLogic("IC_INTER");
    }

    if ((lastKey === "A" && char === "C") || (lastKey === "C" && char === "A")) {
      renderACSequence(char, instant);
      checkMasterLogic("AC_COMBO");
    }

    if ((lastKey === "A" && char === "K") || (lastKey === "K" && char === "A")) {
      renderAKSequence(char, instant);
      checkMasterLogic("AK_INTER");
    }

    if ((lastKey === "A" && char === "B") || (lastKey === "B" && char === "A")) {
      renderIntermediateNode("AB_INTER", char);
      checkMasterLogic("AB_INTER");
    }

    if (char === "W") {
      handleWVariant(char);
    } else if (char === "Z" && lastKey === "Z") {
      handleZVariant(char);
    } else if (char === "A" && lastKey === "A") {
      handleAVariant(char);
      checkMasterLogic("A");
    } else {
      processTyping(char);

      if (char === "A" && !firstASequenceSpawned) {
        firstASequenceSpawned = true;
        renderAHorizontalSequence(lastPos.x, lastPos.y, char, instant);
      }

      if (char === "K") renderKDiagonalSequence(char, instant);
      if (char === "Q") renderQSequence(lastPos.x, lastPos.y, char, instant);

      checkMasterLogic(char);

      if (char !== "A") aCounter = 0;
      if (char !== "W") wCounter = 0;
      if (char !== "Z") zCounter = 0;
    }
  }
}

function getDistanceAndAngle(prevChar, currentChar) {
  let distance = 0;
  let angle = 90;

  if (
    prevChar &&
    GENETIC_MAP[prevChar] &&
    GENETIC_MAP[currentChar] &&
    currentChar !== prevChar
  ) {
    const p1 = GENETIC_MAP[prevChar];
    const p2 = GENETIC_MAP[currentChar];

    distance = Math.sqrt(
      Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2)
    );

    if (distance < 60) angle = 90;
    else if (distance < 140) angle = 75;
    else if (distance < 240) angle = 60;
    else if (distance < 350) angle = 45;
    else if (distance < 500) angle = 30;
    else angle = 15;
  }

  return { distance, angle };
}

function processTyping(char) {
  const prevChar = lastKey;
  const { distance, angle } = getDistanceAndAngle(prevChar, char);
  const { nX, nY, rot } = calculateCoords(distance, angle, char === lastKey);

  createSucculentElement(char, nX, nY, rot, char, prevChar, distance, angle);

  lastPos = { x: nX, y: nY };
  moveCamera(nX, nY, "auto");
  updateDataLog(distance, angle, char === lastKey);
  lastKey = char;
}

function renderAHorizontalSequence(baseX, baseY, sourceInput = "A", instant = false) {
  const spacing = 230;
  const aImages = ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8"];

  for (let i = 0; i < aImages.length; i++) {
    scheduleNode(() => {
      createSucculentElement(
        aImages[i],
        baseX + spacing * (i + 1),
        baseY,
        0,
        sourceInput,
        "A",
        null,
        null
      );
    }, 120 * (i + 1), instant);
  }
}

function handleAVariant(sourceInput = "A") {
  aCounter = (aCounter % 5) + 1;
  const imgName = `A_STACK${aCounter}`;
  const nY = lastPos.y - 95;

  createSucculentElement(imgName, lastPos.x, nY, 0, sourceInput, "A", 0, 90);

  lastPos = { x: lastPos.x, y: nY };
  moveCamera(lastPos.x, nY, "auto");

  lastKey = "A";
  wCounter = 0;
  zCounter = 0;
}

function handleZVariant(sourceInput = "Z") {
  zCounter = (zCounter % 2) + 1;
  const imgName = zCounter === 1 ? "Z2" : "Z";
  const nX = lastPos.x + 120;
  const nY = lastPos.y + 20;

  createSucculentElement(imgName, nX, nY, 0, sourceInput, "Z", 0, 90);

  lastPos = { x: nX, y: nY };
  moveCamera(nX, nY, "auto");

  lastKey = "Z";
  wCounter = 0;
  aCounter = 0;
}

function renderACSequence(sourceInput = "C", instant = false) {
  renderIntermediateNode("AC_COMBO", sourceInput);

  scheduleNode(() => {
    createSucculentElement(
      "AC_INTER1",
      lastPos.x,
      lastPos.y - 120,
      0,
      sourceInput,
      "A/C",
      null,
      null
    );
  }, 500, instant);
}

function renderAKSequence(sourceInput = "K", instant = false) {
  createSucculentElement(
    "AK_INTER",
    lastPos.x,
    lastPos.y - 70,
    0,
    sourceInput,
    "A/K",
    null,
    null
  );

  scheduleNode(() => {
    createSucculentElement(
      "AK_INTER1",
      lastPos.x,
      lastPos.y - 140,
      0,
      sourceInput,
      "A/K",
      null,
      null
    );
  }, 500, instant);
}

function renderQSequence(baseX, baseY, sourceInput = "Q", instant = false) {
  scheduleNode(() => {
    createSucculentElement(
      "Q1",
      baseX + 180,
      baseY,
      0,
      sourceInput,
      "Q",
      null,
      null
    );
  }, 250, instant);
}

function renderDTSequence(sourceInput = "T", instant = false) {
  createSucculentElement(
    "DT_INTER",
    lastPos.x,
    lastPos.y - 70,
    0,
    sourceInput,
    "D/T",
    null,
    null
  );

  scheduleNode(() => {
    createSucculentElement(
      "DT_DELAYED",
      lastPos.x,
      lastPos.y - 90,
      0,
      sourceInput,
      "D/T",
      null,
      null
    );
    checkMasterLogic("DT_DELAYED");
  }, 800, instant);
}

function renderKDiagonalSequence(sourceInput = "K", instant = false) {
  const angle = Math.atan2(GENETIC_MAP.K.y, GENETIC_MAP.K.x);
  const kImages = ["K_INTER1", "K_INTER2", "K_INTER3"];

  for (let i = 0; i < 3; i++) {
    scheduleNode(() => {
      const nX = lastPos.x + Math.cos(angle) * 195 * (i + 1);
      const nY = lastPos.y + Math.sin(angle) * 195 * (i + 1);

      createSucculentElement(
        kImages[i],
        nX,
        nY,
        0,
        sourceInput,
        "K",
        null,
        null
      );
    }, 120 * (i + 1), instant);
  }
}

function handleWVariant(sourceInput = "W") {
  let imgName;
  let nX;
  let nY;

  if (lastKey !== "W") {
    wCounter = 0;
    imgName = "W";
    const coords = calculateCoords(0, 90, false);
    nX = coords.nX;
    nY = coords.nY;
  } else {
    wCounter = (wCounter % 9) + 1;
    imgName = `W${wCounter}`;
    nX = lastPos.x;
    nY = lastPos.y - 80;
  }

  createSucculentElement(imgName, nX, nY, 0, sourceInput, lastKey, 0, 90);

  lastPos = { x: nX, y: nY };
  moveCamera(nX, nY, "auto");

  lastKey = "W";
  checkMasterLogic("W");
  aCounter = 0;
  zCounter = 0;
}

function renderIntermediateNode(imgName, sourceInput = "-") {
  createSucculentElement(
    imgName,
    lastPos.x + Math.random() * 60 - 30,
    lastPos.y - 70,
    0,
    sourceInput,
    lastKey,
    null,
    null
  );
}

function renderRandomNode(imgName, sourceInput = "?") {
  createSucculentElement(
    imgName,
    window.scrollX + Math.random() * window.innerWidth,
    window.scrollY + Math.random() * window.innerHeight,
    Math.random() * 360,
    sourceInput,
    lastKey,
    null,
    null
  );
}

function createSucculentElement(
  imgName,
  x,
  y,
  rot,
  sourceInput = "-",
  prevInput = "-",
  distance = null,
  angle = null
) {
  if (!stage) return;

  const node = document.createElement("div");
  node.className = "succulent-node";

  const config = IMAGE_CONFIG[imgName] || {
    scale: 1.0,
    offsetY: 0,
    isMutant: false
  };

  node.classList.add(config.isMutant ? "mutant-type" : "normal-type");

  node.style.zIndex =
    imgName.includes("INTER") || imgName === "DT_DELAYED"
      ? 9000
      : Math.floor(5000 - (y - START_Y));

  recordReceipt(imgName, x, y, rot, sourceInput, prevInput, distance, angle, config);

  const cachedImg = imageCache[imgName];
  const img = cachedImg ? cachedImg.cloneNode(false) : new Image();

  const baseWidth = 320 * config.scale;

  img.decoding = "async";
  img.loading = "eager";
  img.fetchPriority = "high";

  img.style.width = `${baseWidth}px`;
  img.style.height = "auto";
  img.draggable = false;

  node.style.left = `${x - baseWidth / 2}px`;
  node.style.top = `${y - baseWidth / 2 + (config.offsetY || 0)}px`;
  node.style.transform = `rotate(${rot}deg)`;

  img.onerror = () => {
    const fallbackName = IMAGE_FALLBACK_MAP[imgName] || "A";

    if (img.dataset.fallbackTried === "true") {
      img.style.display = "none";
      node.innerHTML = `<span style="color:#000; font-size:10px; background:#fff; border:1px solid red;">Missing: ${imgName}</span>`;
      console.warn("Missing image:", imgName);
      return;
    }

    img.dataset.fallbackTried = "true";
    img.src = imageCache[fallbackName]?.src || `./images/${fallbackName}.png`;
    console.warn(`Missing image: ${imgName}. Fallback to ${fallbackName}.`);
  };

  if (!cachedImg) {
    img.src = `./images/${imgName}.png`;
  }

  node.appendChild(img);
  stage.appendChild(node);
}

function recordReceipt(imgName, x, y, rot, sourceInput, prevInput, distance, angle, config) {
  const genetic = GENETIC_MAP[sourceInput] || GENETIC_MAP[imgName] || null;

  receiptRecords.push({
    no: receiptRecords.length + 1,
    input: sourceInput,
    previous: prevInput || "-",
    image: imgName,
    species: SPECIES_MAP[imgName] || SPECIES_MAP[sourceInput] || imgName,
    type: config.isMutant ? "MUTANT / HYBRIDIZED" : "BASE",
    geneticX: genetic ? genetic.x : "-",
    geneticY: genetic ? genetic.y : "-",
    distance: distance === null ? "-" : Math.round(distance),
    angle: angle === null ? "-" : `${angle}°`,
    stageX: Math.round(x - START_X),
    stageY: Math.round(START_Y - y),
    rotation: `${Math.round(rot)}°`
  });

  updateReceiptIfOpen();
}

function buildReceiptText() {
  const lines = [];
  const inputSequence = typedHistory.join("").replace(/\n/g, " ↵ ");

  lines.push("==========================================");
  lines.push("        SUCCULENT GENETIC RECEIPT");
  lines.push("==========================================");
  lines.push(`INPUT SEQUENCE : ${inputSequence || "-"}`);
  lines.push(`TOTAL RECORDS  : ${receiptRecords.length}`);
  lines.push(`DATE           : ${new Date().toLocaleString()}`);
  lines.push("------------------------------------------");

  receiptRecords.forEach((item) => {
    lines.push(`#${String(item.no).padStart(3, "0")}`);
    lines.push(`TYPE      : ${item.type}`);
    lines.push(`INPUT     : ${item.input}`);
    lines.push(`PREVIOUS  : ${item.previous}`);
    lines.push(`IMAGE     : ${item.image}`);
    lines.push(`SPECIES   : ${item.species}`);
    lines.push(`GENETIC   : x ${item.geneticX}, y ${item.geneticY}`);
    lines.push(`DISTANCE  : ${item.distance}`);
    lines.push(`ANGLE     : ${item.angle}`);
    lines.push(`POSITION  : x ${item.stageX}, y ${item.stageY}`);
    lines.push(`ROTATION  : ${item.rotation}`);
    lines.push("------------------------------------------");
  });

  lines.push("          END OF GERMINATION");
  lines.push("==========================================");

  return lines.join("\n");
}

function updateReceiptIfOpen() {
  const panel = document.getElementById("receipt-panel");
  const content = document.getElementById("receipt-content");

  if (!panel || !content) return;

  if (panel.classList.contains("show")) {
    content.textContent = buildReceiptText();
    content.scrollTop = content.scrollHeight;
  }
}

function toggleReceipt() {
  const panel = document.getElementById("receipt-panel");
  const content = document.getElementById("receipt-content");

  if (!panel || !content) return;

  if (panel.classList.contains("show")) {
    panel.classList.remove("show");
  } else {
    content.textContent = buildReceiptText();
    panel.classList.add("show");
    content.scrollTop = content.scrollHeight;
  }
}

function closeReceipt() {
  const panel = document.getElementById("receipt-panel");
  if (panel) panel.classList.remove("show");
}

function downloadReceipt() {
  const text = buildReceiptText();

  const blob = new Blob([text], {
    type: "text/plain;charset=utf-8"
  });

  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `succulent_genetic_receipt_${Date.now()}.txt`;
  link.click();

  URL.revokeObjectURL(link.href);
}

function calculateCoords(dist, angle, isSame) {
  const step = 108;
  const sameStep = 72;

  if (lastKey === null) {
    growthAngle = -90;

    return {
      nX: lastPos.x,
      nY: lastPos.y,
      rot: 0
    };
  }

  if (isSame) {
    const side = Math.sin(typedHistory.length * 1.7) > 0 ? 1 : -1;
    const curve = Math.sin(typedHistory.length * 0.9) * 14;

    return {
      nX: lastPos.x + side * sameStep,
      nY: lastPos.y - 26 + curve * 0.15,
      rot: side * 7
    };
  }

  const geneticInfluence = Math.max(8, Math.min(42, angle * 0.42));
  const wave = Math.sin(typedHistory.length * 0.82) * 9;
  const side = Math.cos(typedHistory.length * 1.13) > 0 ? 1 : -1;

  growthAngle += side * geneticInfluence * 0.18 + wave * 0.35;
  growthAngle = Math.max(-128, Math.min(-52, growthAngle));

  const rad = (growthAngle * Math.PI) / 180;

  return {
    nX: lastPos.x + Math.cos(rad) * step,
    nY: lastPos.y + Math.sin(rad) * step,
    rot: growthAngle + 90
  };
}

function moveCamera(x, y, behavior = "auto") {
  window.scrollTo({
    left: x - window.innerWidth / 2,
    top: y - window.innerHeight * 0.35,
    behavior
  });
}

function updateDataLog(dist, angle, isSame) {
  if (!distLog || !angleLog) return;

  distLog.innerText = isSame ? "CLUSTER" : `${Math.round(dist)}mm`;
  angleLog.innerText = isSame ? "GROWTH" : `${angle}°`;
}

async function captureFullStage() {
  const nodes = [...document.querySelectorAll(".succulent-node")];

  if (nodes.length === 0) return;

  const saveBtn = document.getElementById("save-btn");

  if (saveBtn) {
    saveBtn.disabled = true;
    saveBtn.textContent = "...";
  }

  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;

  nodes.forEach((node) => {
    const left = parseFloat(node.style.left);
    const top = parseFloat(node.style.top);
    const img = node.querySelector("img");

    const width = img ? img.offsetWidth : 600;
    const height = img ? img.offsetHeight : 600;

    minX = Math.min(minX, left);
    minY = Math.min(minY, top);
    maxX = Math.max(maxX, left + width);
    maxY = Math.max(maxY, top + height);
  });

  const padding = 300;
  const captureWidth = Math.ceil(maxX - minX + padding * 2);
  const captureHeight = Math.ceil(maxY - minY + padding * 2);

  const captureBox = document.createElement("div");

  captureBox.style.position = "fixed";
  captureBox.style.left = "-99999px";
  captureBox.style.top = "0";
  captureBox.style.width = `${captureWidth}px`;
  captureBox.style.height = `${captureHeight}px`;
  captureBox.style.background = "#ffffff";
  captureBox.style.overflow = "hidden";

  nodes.forEach((node) => {
    const clone = node.cloneNode(true);

    const originalLeft = parseFloat(node.style.left);
    const originalTop = parseFloat(node.style.top);

    clone.style.left = `${originalLeft - minX + padding}px`;
    clone.style.top = `${originalTop - minY + padding}px`;

    captureBox.appendChild(clone);
  });

  document.body.appendChild(captureBox);

  await new Promise((resolve) => requestAnimationFrame(resolve));

  try {
    if (typeof html2canvas === "undefined") {
      console.error("html2canvas가 로드되지 않았습니다.");
      return;
    }

    const canvas = await html2canvas(captureBox, {
      backgroundColor: "#ffffff",
      useCORS: true,
      scale: 1
    });

    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `succulent_${Date.now()}.png`;
    link.click();
  } catch (err) {
    console.error("Save failed:", err);
  } finally {
    captureBox.remove();

    if (saveBtn) {
      saveBtn.disabled = false;
      saveBtn.textContent = "↓";
    }
  }
}

function toggleMutantOnly() {
  stage.classList.toggle("only-mutant-view");

  const btn = document.getElementById("decode-btn");
  if (!btn) return;

  btn.textContent = stage.classList.contains("only-mutant-view")
    ? "[NORMAL VIEW]"
    : "[MUTANT VIEW]";
}

function checkMasterLogic(name) {
  collectedSet.add(name);

  if (masterSpawned) return;

  const ready = REQUIRED_FOR_MASTER.every((item) => collectedSet.has(item));

  if (ready) {
    masterSpawned = true;
    createSucculentElement(
      "ECHEVERIA_MASTER",
      lastPos.x,
      lastPos.y - 240,
      0,
      "MASTER",
      "SYSTEM",
      null,
      null
    );
  }
}

function toggleCoordinateLayer() {
  const coordLayer = document.getElementById("coord-layer");
  const btn = document.getElementById("coord-toggle");

  if (!coordLayer || !btn) return;

  coordLayer.classList.toggle("show");
  btn.classList.toggle("active");
}

function createCoordinateLayer() {
  const coordLayer = document.getElementById("coord-layer");

  if (!coordLayer) return;

  coordLayer.innerHTML = "";

  const spacing = 220;
  const labelSpacing = 1000;
  const stageSize = 50000;

  for (let x = 0; x <= stageSize; x += spacing) {
    const line = document.createElement("div");
    line.className = "coord-line vertical";

    if (x === START_X) {
      line.classList.add("coord-axis");
    }

    line.style.left = `${x}px`;
    line.style.top = "0px";
    coordLayer.appendChild(line);

    if (x % labelSpacing === 0) {
      const label = document.createElement("div");
      label.className = "coord-label";
      label.style.left = `${x + 5}px`;
      label.style.top = `${START_Y + 8}px`;
      label.innerText = `x ${x - START_X}`;
      coordLayer.appendChild(label);
    }
  }

  for (let y = 0; y <= stageSize; y += spacing) {
    const line = document.createElement("div");
    line.className = "coord-line horizontal";

    if (y === START_Y) {
      line.classList.add("coord-axis");
    }

    line.style.left = "0px";
    line.style.top = `${y}px`;
    coordLayer.appendChild(line);

    if (y % labelSpacing === 0) {
      const label = document.createElement("div");
      label.className = "coord-label";
      label.style.left = `${START_X + 8}px`;
      label.style.top = `${y + 5}px`;
      label.innerText = `y ${START_Y - y}`;
      coordLayer.appendChild(label);
    }
  }
}

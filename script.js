/** [1. 이미지 설정 및 변이종/마스터 판정 테이블] **/
const IMAGE_CONFIG = {
    'A': { scale: 0.6, offsetY: 0 },
    'B': { scale: 1.18, offsetY: 0 },
    'C': { scale: 1.5, offsetY: 0 },
    'D': { scale: 1.15, offsetY: 0 },
    'E': { scale: 1.35, offsetY: 0 },
    'F': { scale: 1.1, offsetY: 0 },
    'G': { scale: 1.9, offsetY: 0 },
    'H': { scale: 1.3, offsetY: 0 },
    'I': { scale: 1.3, offsetY: 0 },
    'J': { scale: 0.9, offsetY: 0 },
    'K': { scale: 1.7, offsetY: 0 },
    'L': { scale: 1.5, offsetY: 0 },
    'M': { scale: 1.28, offsetY: 0 },
    'N': { scale: 1.22, offsetY: 0 },
    'O': { scale: 1.3, offsetY: 0 },
    'P': { scale: 1.46, offsetY: 0 },
    'Q': { scale: 1.3, offsetY: 0 },
    'R': { scale: 2.39, offsetY: 0 },
    'S': { scale: 1.95, offsetY: 0 },
    'T': { scale: 0.9, offsetY: 0 },
    'U': { scale: 0.95, offsetY: 0 },
    'V': { scale: 1.15, offsetY: 0 },
    'W': { scale: 1.6, offsetY: 0 },
    'X': { scale: 1.6, offsetY: 0 },
    'Y': { scale: 0.8, offsetY: 0 },
    'Z': { scale: 1.0, offsetY: 0 },

    // --- A 입력 후 옆으로 일렬 생성되는 8종 이미지 ---
    'A1': { scale: 0.9, offsetY: 0, isMutant: true },
    'A2': { scale: 1.0, offsetY: 0, isMutant: true },
    'A3': { scale: 1.2, offsetY: 0, isMutant: true },
    'A4': { scale: 1.3, offsetY: 0, isMutant: true },
    'A5': { scale: 1.4, offsetY: 0, isMutant: true },
    'A6': { scale: 1.6, offsetY: 0, isMutant: true },
    'A7': { scale: 1.7, offsetY: 0, isMutant: true },
    'A8': { scale: 1.9, offsetY: 0, isMutant: true },

    // --- A 반복 입력 후 위로 뻗어가는 5종 이미지 ---
    'A_STACK1': { scale: 0.6, offsetY: 0, isMutant: true },
    'A_STACK2': { scale: 0.6, offsetY: 0, isMutant: true },
    'A_STACK3': { scale: 0.6, offsetY: 0, isMutant: true },
    'A_STACK4': { scale: 0.6, offsetY: 0, isMutant: true },
    'A_STACK5': { scale: 0.6, offsetY: 0, isMutant: true },

    // --- 추가 이미지 ---
    'Q1': { scale: 0.6, offsetY: 0, isMutant: true },
    'IC_INTER': { scale: 1.3, offsetY: 0, isMutant: true },
    'AK_INTER': { scale: 1.3, offsetY: 0, isMutant: true },
    'AK_INTER1': { scale: 1.7, offsetY: -50, isMutant: true },

    // --- 변이종(isMutant: true) ---
    'AB_INTER': { scale: 1.3, offsetY: -10, isMutant: true }, 
    'AC_COMBO': { scale: 1.8, offsetY: 0, isMutant: true },
    'RANDOM_CHAR': { scale: 0.93, offsetY: 0, isMutant: true },
    'DT_INTER': { scale: 1.4, offsetY: -5, isMutant: true },
    'HT_INTER': { scale: 1.2, offsetY: 0, isMutant: true },

    // --- K 입력 후 대각선으로 이어지는 3종 이미지 ---
    'K_INTER1': { scale: 0.9, offsetY: 0, isMutant: true },
    'K_INTER2': { scale: 1.3, offsetY: 0, isMutant: true },
    'K_INTER3': { scale: 1.9, offsetY: 0, isMutant: true },

    // --- D/T 연속 입력 후 DT_INTER 위에 시간차로 이어 붙는 이미지 ---
    'IMAGE_CONFIG': { scale: 2.9, offsetY: -90, isMutant: true },

    'W1': { scale: 1.0, offsetY: 0, isMutant: true }, 
    'W2': { scale: 1.1, offsetY: 0, isMutant: true }, 
    'W3': { scale: 1.0, offsetY: 0, isMutant: true }, 
    'W4': { scale: 0.9, offsetY: 0, isMutant: true },
    'W5': { scale: 1.2, offsetY: 0, isMutant: true }, 
    'W6': { scale: 1.0, offsetY: 0, isMutant: true },
    'W7': { scale: 1.1, offsetY: 0, isMutant: true },
    'W8': { scale: 1.2, offsetY: 0, isMutant: true },
    'W9': { scale: 1.3, offsetY: 0, isMutant: true },

    // --- 최종 마스터 개체 ---
    'ECHEVERIA_MASTER': { scale: 2.8, offsetY: 0, isMutant: true }
};

const GENETIC_MAP = {
    'A': {x: 190, y: -200}, 'B': {x: 220, y: -170}, 'C': {x: 70, y: -80},
    'D': {x: 30, y: -50},   'E': {x: 160, y: -220}, 'F': {x: 240, y: -190},
    'G': {x: 100, y: -60},  'H': {x: 140, y: -40},  'I': {x: 160, y: -20},
    'J': {x: -70, y: 120},  'K': {x: 300, y: 200},  'L': {x: 190, y: 100},
    'M': {x: 70, y: 150},   'N': {x: -150, y: 150}, 'O': {x: 210, y: 70},
    'P': {x: 280, y: -160}, 'Q': {x: 180, y: 120},  'R': {x: 200, y: -230},
    'S': {x: -110, y: 180}, 'T': {x: 230, y: 90},   'U': {x: -170, y: 220},
    'V': {x: 110, y: -20},  'W': {x: -200, y: 240}, 'X': {x: -250, y: 180},
    'Y': {x: -270, y: 160}, 'Z': {x: -230, y: 200}
};

const REQUIRED_FOR_MASTER = ['A', 'AB_INTER', 'AC_COMBO', 'DT_INTER', 'B', 'R', 'P', 'E', 'F'];
let collectedSet = new Set();
let masterSpawned = false;

let stage, input, distLog, angleLog;
const START_X = 25000;
const START_Y = 25000; 
let lastKey = null;
let lastPos = { x: START_X, y: START_Y };
let wCounter = 0;
let aCounter = 0;
let firstASequenceSpawned = false;

window.onload = () => {
    stage = document.getElementById('render-stage');
    input = document.getElementById('succulent-input');
    distLog = document.getElementById('dist-val');
    angleLog = document.getElementById('angle-val');

    document.getElementById('save-btn')?.addEventListener('click', captureFullStage);
    document.getElementById('decode-btn')?.addEventListener('click', toggleMutantOnly);
    input?.addEventListener('keydown', handleKeydown);
    input?.addEventListener('input', handleInput);

    moveCamera(START_X, START_Y + (window.innerHeight * 0.2), 'instant');
};

function toggleMutantOnly() {
    const isDecoding = stage.classList.toggle('only-mutant-view');
    const btn = document.getElementById('decode-btn');
    if (btn) btn.innerText = isDecoding ? "[ENCODE]" : "[DECODE]";
}

function checkMasterLogic(imgName) {
    if (REQUIRED_FOR_MASTER.includes(imgName)) {
        collectedSet.add(imgName);
    }

    if (collectedSet.size === REQUIRED_FOR_MASTER.length && !masterSpawned) {
        masterSpawned = true;
        const nX = lastPos.x + 220;
        const nY = lastPos.y - 120;
        createSucculentElement('ECHEVERIA_MASTER', nX, nY, 0);
    }
}

function handleKeydown(e) {
    if (e.key === 'Enter') {
        input.value = '';
        lastKey = null;
        lastPos = { x: START_X, y: START_Y };
        wCounter = 0;
        aCounter = 0;
        firstASequenceSpawned = false;
        collectedSet.clear();
        masterSpawned = false;
        updateDataLog(0, 0, false);
        moveCamera(START_X, START_Y + (window.innerHeight * 0.2), 'smooth');
    }

    if (e.key.toLowerCase() === 'h' && document.activeElement !== input) {
        stage.classList.toggle('hide-succulent');
    }
}

function handleInput(e) {
    const char = e.target.value.toUpperCase().slice(-1);
    
    if (char === "?") { 
        renderRandomNode("RANDOM_CHAR"); 
        checkMasterLogic("RANDOM_CHAR");
        lastKey = "?"; 
        wCounter = 0;
        aCounter = 0;
        return; 
    }
    
    if (GENETIC_MAP[char] || char === "+") {
        if ((lastKey === 'D' && char === 'T') || (lastKey === 'T' && char === 'D')) {
            renderDTSequence();
            checkMasterLogic("DT_INTER");
        }

        if ((lastKey === 'H' && char === 'T') || (lastKey === 'T' && char === 'H')) {
            renderIntermediateNode("HT_INTER");
            checkMasterLogic("HT_INTER");
        }

        if ((lastKey === 'I' && char === 'C') || (lastKey === 'C' && char === 'I')) {
            renderIntermediateNode("IC_INTER");
            checkMasterLogic("IC_INTER");
        }
        
        if ((lastKey === 'A' && char === 'C') || (lastKey === 'C' && char === 'A')) {
            renderACSequence();
            checkMasterLogic("AC_COMBO");
        }

        if ((lastKey === 'A' && char === 'K') || (lastKey === 'K' && char === 'A')) {
            renderAKSequence();
            checkMasterLogic("AK_INTER");
        }
        
        if ((lastKey === 'A' && char === 'B') || (lastKey === 'B' && char === 'A')) {
            renderIntermediateNode("AB_INTER"); 
            checkMasterLogic("AB_INTER");
        }

        if (char === 'W') {
            handleWVariant();
        } else if (char === 'A' && lastKey === 'A') {
            handleAVariant();
            checkMasterLogic('A');
        } else {
            processTyping(char);

            if (char === 'A' && !firstASequenceSpawned) {
                firstASequenceSpawned = true;
                renderAHorizontalSequence(lastPos.x, lastPos.y);
            }

            if (char === 'K') {
                renderKDiagonalSequence();
            }

            if (char === 'Q') {
                renderQSequence(lastPos.x, lastPos.y);
            }

            checkMasterLogic(char);

            if (char !== 'A') {
                aCounter = 0;
            }

            wCounter = 0;
        }
    }
}

function renderAHorizontalSequence(baseX, baseY) {
    const spacing = 230;

    const aImages = [
        'A1',
        'A2',
        'A3',
        'A4',
        'A5',
        'A6',
        'A7',
        'A8'
    ];

    for (let i = 0; i < aImages.length; i++) {
        setTimeout(() => {
            const nX = baseX + spacing * (i + 1);
            const nY = baseY;

            createSucculentElement(aImages[i], nX, nY, 0);
        }, 300 * (i + 1));
    }
}

function handleAVariant() {
    aCounter = (aCounter % 5) + 1;

    const imgName = `A_STACK${aCounter}`;
    const nX = lastPos.x;
    const nY = lastPos.y - 95;

    createSucculentElement(imgName, nX, nY, 0);
    lastPos = { x: nX, y: nY };
    moveCamera(nX, nY, 'smooth');
    lastKey = 'A';
    wCounter = 0;
}

function renderACSequence() {
    const nX = lastPos.x + (Math.random() * 60 - 30);
    const nY = lastPos.y - 70;

    createSucculentElement('AC_INTER', nX, nY, 0);

    setTimeout(() => {
        createSucculentElement('AC_INTER1', nX, nY - 120, 0);
    }, 1200);
}

function renderAKSequence() {
    const nX = lastPos.x + (Math.random() * 60 - 30);
    const nY = lastPos.y - 70;

    createSucculentElement('AK_INTER', nX, nY, 0);

    setTimeout(() => {
        createSucculentElement('AK_INTER1', nX, nY - 140, 0);
    }, 1000);
}

function renderQSequence(baseX, baseY) {
    setTimeout(() => {
        createSucculentElement('Q1', baseX + 180, baseY, 0);
    }, 500);
}

function renderDTSequence() {
    const nX = lastPos.x + (Math.random() * 60 - 30);
    const nY = lastPos.y - 70;

    createSucculentElement('DT_INTER', nX, nY, 0);

    setTimeout(() => {
        createSucculentElement('IMAGE_CONFIG', nX, nY - 90, 0);
    }, 3000);
}

function renderKDiagonalSequence() {
    const kVector = GENETIC_MAP['K'];
    const angle = Math.atan2(kVector.y, kVector.x);
    const spacing = 195;

    const kImages = [
        'K_INTER1',
        'K_INTER2',
        'K_INTER3'
    ];

    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const nX = lastPos.x + Math.cos(angle) * spacing * (i + 1);
            const nY = lastPos.y + Math.sin(angle) * spacing * (i + 1);

            createSucculentElement(kImages[i], nX, nY, 0);
        }, 300 * (i + 1));
    }
}

function handleWVariant() {
    let imgName, nX, nY;

    if (lastKey !== 'W') {
        wCounter = 0; 
        imgName = 'W';
        const coords = calculateCoords(0, 90, false);
        nX = coords.nX; 
        nY = coords.nY;
    } else {
        wCounter = (wCounter % 9) + 1; 
        imgName = `W${wCounter}`;
        nX = lastPos.x; 
        nY = lastPos.y - 80;
    }

    createSucculentElement(imgName, nX, nY, 0);
    lastPos = { x: nX, y: nY };
    moveCamera(nX, nY, 'smooth');
    lastKey = 'W';
    checkMasterLogic('W');
    aCounter = 0;
}

function renderSpecialNode(imgName) {
    const nX = lastPos.x + (Math.random() * 80 - 40);
    const nY = lastPos.y - 100;
    createSucculentElement(imgName, nX, nY, 0);
}

function processTyping(char) {
    let distance = 0, angle = 90;
    let isSame = (char === lastKey);

    if (lastKey && GENETIC_MAP[lastKey] && GENETIC_MAP[char] && !isSame) {
        const p1 = GENETIC_MAP[lastKey], p2 = GENETIC_MAP[char];
        distance = Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));

        if (distance < 60) angle = 90;
        else if (distance < 140) angle = 75;
        else if (distance < 240) angle = 60;
        else if (distance < 350) angle = 45;
        else if (distance < 500) angle = 30;
        else angle = 15;
    }

    renderNode(char, distance, angle, isSame);
    updateDataLog(distance, angle, isSame);
    lastKey = char;
}

function renderNode(char, dist, angle, isSame) {
    const { nX, nY, rot } = calculateCoords(dist, angle, isSame);
    createSucculentElement(char, nX, nY, rot);
    lastPos = { x: nX, y: nY };
    moveCamera(nX, nY, 'smooth');
}

function renderIntermediateNode(imgName) {
    const nX = lastPos.x + (Math.random() * 60 - 30);
    const nY = lastPos.y - 70; 
    createSucculentElement(imgName, nX, nY, 0);
}

function renderRandomNode(imgName) {
    const nX = window.scrollX + (Math.random() * window.innerWidth);
    const nY = window.scrollY + (Math.random() * window.innerHeight);
    const rot = Math.random() * 360;
    createSucculentElement(imgName, nX, nY, rot);
}

function createSucculentElement(imgName, x, y, rot) {
    if (!stage) return;
    
    const node = document.createElement('div');
    node.className = 'succulent-node';

    const config = IMAGE_CONFIG[imgName] || { scale: 1.0, offsetY: 0, isMutant: false };
    
    node.classList.add(config.isMutant ? 'mutant-type' : 'normal-type');

    if (imgName.includes('INTER')) {
        node.style.zIndex = 999999;
    } else {
        node.style.zIndex = Math.floor(5000 - (y - START_Y));
    }

    const img = document.createElement('img');
    img.src = `./images/${imgName}.png`;

    img.onload = () => {
        const baseWidth = 320 * config.scale; 
        img.style.width = baseWidth + "px";
        img.style.height = "auto";
        node.style.left = `${x - (baseWidth / 2)}px`; 
        node.style.top = `${y - (img.offsetHeight / 2) + config.offsetY}px`; 
    };

    img.onerror = () => {
        node.remove();
    };

    node.style.transform = `rotate(${rot}deg)`;
    node.appendChild(img);
    stage.appendChild(node);
}

function calculateCoords(dist, angle, isSame) {
    let nX, nY, rot;
    const vSpace = 100; 
    const hSpace = 160; 

    if (isSame) {
        const side = (Math.random() > 0.5) ? 1 : -1;
        nX = lastPos.x + (hSpace * side);
        nY = lastPos.y + (Math.random() * 40 - 20);
        rot = (Math.random() * 16 - 8);
    } else {
        const rad = (angle * Math.PI) / 180;
        const dir = (Math.random() > 0.5) ? 1 : -1;
        nX = lastPos.x + Math.cos(rad) * vSpace * dir;
        nY = lastPos.y - Math.sin(rad) * vSpace;
        rot = (90 - angle) * dir;
    }

    return { nX, nY, rot };
}

function moveCamera(x, y, behavior) {
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    window.scrollTo({ 
        left: x - (viewportWidth / 2), 
        top: y - (viewportHeight * 0.35), 
        behavior: behavior 
    });
}

function updateDataLog(dist, angle, isSame) {
    if (!distLog || !angleLog) return;

    distLog.innerText = isSame ? "CLUSTER" : Math.round(dist) + "mm";
    angleLog.innerText = isSame ? "HORIZON" : angle + "°";
}

function captureFullStage() {
    const nodes = document.querySelectorAll('.succulent-node');

    if (nodes.length === 0) return;
    
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;

    nodes.forEach(node => {
        const left = parseFloat(node.style.left);
        const top = parseFloat(node.style.top);

        if (left < minX) minX = left;
        if (top < minY) minY = top;
        if (left + 600 > maxX) maxX = left + 600; 
        if (top + 600 > maxY) maxY = top + 600;
    });

    const margin = 450; 

    html2canvas(stage, {
        useCORS: true, 
        backgroundColor: '#ffffff',
        x: minX - margin, 
        y: minY - margin, 
        width: (maxX - minX) + (margin * 2), 
        height: (maxY - minY) + (margin * 2),
        scale: 1, 
        scrollX: 0, 
        scrollY: 0, 
        windowWidth: 50000, 
        windowHeight: 50000
    }).then(canvas => {
        const link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = `succulent_garden_${Date.now()}.png`;
        link.click();
    });
}
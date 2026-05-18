/* ============================================================
   رسالة من مستقبلك · 2027
   script.js
   ============================================================ */

/* ---------- Messages ---------- */
const MESSAGES = [
  "في 2027 ستشكر نفسك لأنك لم تستسلم في هذه اللحظة بالذات.",
  "النسخة القادمة منك أكثر هدوءًا مما تتخيل الآن.",
  "شيء كنت تقلق منه كثيرًا لن يعود مهمًا بعد فترة قصيرة.",
  "ستكتشف أن بعض التأخير كان حماية لم تفهمها وقتها.",
  "في يوم عادي جدًا ستبدأ أفضل مرحلة في حياتك.",
  "أنت أقرب مما تعتقد. أقرب بكثير.",
  "هناك نسخة منك في 2027 فخورة بك أكثر مما تتوقع.",
  "بعض القرارات التي خفت منها ستصبح أجمل ما اتخذته.",
  "الأشياء التي تحبها اليوم ستقودك إلى مكان لم تتوقعه.",
  "لن تتذكر اسم هذا القلق بعد سنتين.",
  "الصبر الذي تمارسه الآن يبني شيئًا تجهله حتى الآن.",
  "أنت في 2027 لا تندم على أي لحظة تحسّنت فيها.",
  "الخطأ الذي تعتقد أنه كبير جدًا سيصبح قصة تحكيها بابتسامة.",
  "هناك شخص في طريقه إليك سيفهمك بشكل لم تعرفه من قبل.",
  "شيء واحد ستفعله قريبًا سيغير الكثير.",
  "أكثر ما يقلقك الآن هو أقل ما ستفكر فيه لاحقًا.",
  "أنت لم تضيّع وقتك. كنت تتعلم.",
  "الوقت الذي تظن أنه ضاع كان يصنع منك نسخة أفضل.",
  "في 2027 ستنظر للخلف وتقول: كان ذلك ضروريًا.",
  "الشيء الذي تنتظره منذ فترة لم يتأخر — كان يُكمّل نفسه.",
  "أنت لا تعلم كم أثّرت في أشخاص لم يخبروك.",
  "راحتك ليست كسلًا. هي جزء من الطريق.",
  "في يوم ما ستقرأ هذه اللحظة وتعرف لماذا كانت مهمة.",
  "شجاعة صغيرة واحدة الآن ستفتح بابًا لم تره بعد.",
  "الطريق الذي بدا خاطئًا أوصلك بالضبط إلى هنا.",
  "لن تندم على كل مرة اخترت فيها نفسك.",
  "أنت في 2027 لا تبحث عن ما تبحث عنه الآن — وجدته.",
  "الهدوء الذي تتمناه موجود فيك، لم تستخرجه بعد.",
  "ستفاجأ بما ستفعله خلال السنتين القادمتين.",
  "كل شيء يأخذ وقته. أنت لا تتأخر.",
  "الشيء الذي يجعلك مختلفًا هو بالضبط ما ستنجح به.",
  "بعض الأبواب أُغلقت لأن هناك أبوابًا أفضل في انتظارك.",
  "في 2027 أنت لا تتمنى أن تعود — تتمنى أن تستمر.",
  "ستجد نفسك في مكان يناسبك تمامًا وكأنه كان ينتظرك.",
  "الأفكار التي لا تجرؤ على قولها الآن ستصبح مشاريعك يومًا ما.",
  "أنت أكثر قدرة مما تسمح لنفسك بأن تصدقه.",
  "خذ نفسًا. المرحلة القادمة أخف مما تتخيلها.",
  "الأيام التي لم تفعل فيها شيئًا كانت تجمع طاقة.",
  "أنت لم تُبدأ متأخرًا. البداية كانت في الوقت المناسب تمامًا.",
  "هناك شيء كنت تريده كثيرًا في الماضي لم تحصل عليه — الآن أنت شاكر أنك لم تحصل عليه.",
  "أنت في 2027 تعيش بهدوء لم تكن تعرف أنه ممكن.",
  "ستشعر يومًا ما بأن كل شيء في مكانه. هذا اليوم يقترب.",
  "التعب الذي تحمله الآن لن يكون ثقيلًا إلى الأبد.",
  "لا تقارن طريقك بطريق أحد. أنت تسير نحو شيء مختلف تمامًا.",
  "في 2027 أنت تفعل شيئًا كنت تتمناه من بعيد.",
  "أكثر ما ستفتخر به لاحقًا هو أنك لم تتوقف.",
  "الناس الذين يفهمونك فعلًا موجودون. لم تلتقِ بهم جميعًا بعد.",
  "شيء صغير ستفعله قريبًا سيبدو كبيرًا جدًا بعد سنتين.",
  "الإحساس بأنك لا تتقدم هو أكثر ما يكذب عليك.",
  "أنت تحمل قدرات لم تحتج لها بعد — وقتها سيأتي.",
  "في 2027 أصبح ما كان يؤلمك شيئًا يقوّيك.",
  "لا تحكم على الفصل الحالي وكأنه نهاية القصة.",
  "ستفهم لاحقًا لماذا كانت هذه الفترة ضرورية بالضبط.",
  "شيء تعلمته في الصمت سيظهر في وقت مثالي.",
  "أنت تتطور حتى في اللحظات التي لا تشعر فيها بذلك.",
  "في 2027 أنت محاط بأشخاص يستحقون تواجدهم في حياتك.",
  "القلق الذي تحمله الآن لا يعكس ما سيحدث — بل ما تخاف أن يحدث.",
  "أنت أذكى مما تظن وأقوى مما تثبت لنفسك.",
  "كل خطوة بطيئة كانت أفضل من عدم المشي.",
  "ستأتي لحظة ستشعر فيها أن كل شيء كان يسير بشكل صحيح.",
  "الفضول الذي تشعر به الآن هو بوصلتك — اتبعه.",
  "في 2027 أنت لا تتحدث بنفس الطريقة عن نفسك.",
  "بعض المنعطفات الصعبة هي اختصارات في طريق طويل.",
  "أنت لا تحتاج أن تعرف كل شيء الآن. الوضوح يأتي بالحركة.",
  "الشيء الذي تنتظره يشق طريقه إليك الآن.",
  "ستكتشف أن نسختك القادمة أكثر إيمانًا بنفسها.",
  "في 2027 لا يوجد ما تندم عليه — يوجد ما تتعلمه.",
  "قرار صغير ستتخذه قريبًا سيغير جزءًا كبيرًا من حياتك.",
  "التحمّل الذي لا يراه أحد يُبنى في الخفاء ويظهر في الضوء.",
  "أنت تبني شيئًا حقيقيًا حتى في الأيام التي لا تبدو مثمرة.",
  "في 2027 أنت أخف. أخف بكثير مما أنت عليه الآن.",
  "ستُفاجأ بكيف تبدو الأمور مختلفة بعد أن تنام وتستيقظ غدًا.",
  "ما تخاف منه غالبًا أقل إيلامًا مما تتوقع.",
  "أنت في مرحلة البناء، ليس الانهيار — الفرق دقيق لكنه حقيقي.",
  "الرسالة الحقيقية من مستقبلك هي: استمر."
];

/* ---------- State ---------- */
let usedIndices = [];
let currentMessage = '';

/* ---------- DOM References ---------- */
const screenHome    = document.getElementById('screen-home');
const screenLoading = document.getElementById('screen-loading');
const screenMessage = document.getElementById('screen-message');
const btnReceive    = document.getElementById('btn-receive');
const btnAnother    = document.getElementById('btn-another');
const btnCopy       = document.getElementById('btn-copy');
const btnShare      = document.getElementById('btn-share');
const btnSave       = document.getElementById('btn-save');
const btnBack       = document.getElementById('btn-back');
const msgText       = document.getElementById('msg-text');
const loadingText   = document.getElementById('loading-text');
const visitCount    = document.getElementById('visit-count');
const welcomeOverlay = document.getElementById('welcome-overlay');
const welcomeClose  = document.getElementById('welcome-close');
const toast         = document.getElementById('toast');

/* ---------- Stars ---------- */
(function initStars() {
  const canvas = document.getElementById('stars-canvas');
  const ctx    = canvas.getContext('2d');
  let stars    = [];

  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
    buildStars();
  }

  function buildStars() {
    stars = [];
    const count = Math.floor((canvas.width * canvas.height) / 4200);
    for (let i = 0; i < count; i++) {
      stars.push({
        x:       Math.random() * canvas.width,
        y:       Math.random() * canvas.height,
        r:       Math.random() * 1.2 + 0.2,
        alpha:   Math.random() * 0.7 + 0.1,
        speed:   Math.random() * 0.004 + 0.001,
        phase:   Math.random() * Math.PI * 2
      });
    }
  }

  function draw(ts) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (const s of stars) {
      const a = s.alpha * (0.55 + 0.45 * Math.sin(ts * s.speed + s.phase));
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(200,210,255,${a})`;
      ctx.fill();
    }
    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
})();

/* ---------- Screens ---------- */
function showScreen(target) {
  const all = [screenHome, screenLoading, screenMessage];
  all.forEach(s => {
    if (s === target) {
      s.classList.remove('exit');
      s.classList.add('active');
    } else {
      s.classList.remove('active');
      s.classList.add('exit');
      setTimeout(() => s.classList.remove('exit'), 500);
    }
  });
}

/* ---------- Random non-repeating message ---------- */
function getRandomMessage() {
  if (usedIndices.length >= MESSAGES.length) usedIndices = [];
  let idx;
  do { idx = Math.floor(Math.random() * MESSAGES.length); }
  while (usedIndices.includes(idx));
  usedIndices.push(idx);
  return MESSAGES[idx];
}

/* ---------- Typewriter effect ---------- */
function typewrite(element, text, speed = 38) {
  return new Promise(resolve => {
    element.innerHTML = '';
    
    let i = 0;

    function step() {
      if (i < text.length) {
        element.textContent += text[i];
        i++;
        setTimeout(step, speed + (Math.random() * 20 - 10));
      } else {
        resolve();
      }
    }

    step();
  });
}

/* ---------- Loading sequence ---------- */
const loadingPhrases = [
  'جاري الاتصال بمستقبلك…',
  'تحديد الإحداثيات الزمنية…',
  'فك تشفير الرسالة…',
  'جاهزة للإرسال…'
];

async function runLoading() {
  showScreen(screenLoading);
  let idx = 0;
  const interval = setInterval(() => {
    idx = (idx + 1) % loadingPhrases.length;
    loadingText.style.opacity = '0';
    setTimeout(() => {
      loadingText.textContent = loadingPhrases[idx];
      loadingText.style.opacity = '1';
    }, 200);
  }, 700);

  await delay(2800);
  clearInterval(interval);
}

/* ---------- Show message ---------- */
async function receiveMessage() {
  await runLoading();
  currentMessage = getRandomMessage();
  msgText.textContent = '';
  showScreen(screenMessage);
  await delay(400);
  await typewrite(msgText, currentMessage, 42);

  // Subtle vibration on mobile
  if (navigator.vibrate) navigator.vibrate([30, 15, 30]);

  // Increment counter
  incrementCounter();
}

/* ---------- LocalStorage counter ---------- */
function incrementCounter() {
  const key = 'future_msg_count';
  const n = (parseInt(localStorage.getItem(key) || '0', 10)) + 1;
  localStorage.setItem(key, n);
  updateVisitUI(n);
}

function updateVisitUI(n) {
  if (!visitCount) return;
  if (n > 1) {
    visitCount.textContent = `استلمت ${n} رسائل من مستقبلك حتى الآن`;
  }
}

/* ---------- First visit welcome ---------- */
function checkFirstVisit() {
  const key  = 'future_msg_seen';
  const seen = localStorage.getItem(key);
  const count = parseInt(localStorage.getItem('future_msg_count') || '0', 10);
  updateVisitUI(count);
  if (!seen) {
    welcomeOverlay.classList.remove('hidden');
    localStorage.setItem(key, '1');
  }
}

welcomeClose?.addEventListener('click', () => {
  welcomeOverlay.classList.add('fade-out');
  setTimeout(() => welcomeOverlay.classList.add('hidden'), 500);
});

/* ---------- Action Buttons ---------- */
btnReceive.addEventListener('click', receiveMessage);

btnAnother.addEventListener('click', () => {
  receiveMessage();
});

btnBack.addEventListener('click', () => {
  showScreen(screenHome);
});

btnCopy.addEventListener('click', () => {
  const text = `"${currentMessage}"\n\n— رسالة من مستقبلي في 2027\n🔮 احصل على رسالتك: [رابط الموقع]`;
  navigator.clipboard.writeText(text).then(() => {
    showToast('تم النسخ ✓');
    flashBtn(btnCopy);
  }).catch(() => showToast('تعذّر النسخ'));
});

btnShare.addEventListener('click', async () => {
  const shareText = `"${currentMessage}"\n\n— رسالة من مستقبلي في 2027 🔮`;

  if (navigator.share) {
    try {
      await navigator.share({
        title: 'رسالة من مستقبلي في 2027',
        text:  shareText,
        url:   window.location.href
      });
    } catch (_) { /* user cancelled */ }
  } else {
    // Fallback: copy to clipboard
    navigator.clipboard.writeText(shareText).then(() => {
      showToast('تم نسخ الرسالة للمشاركة ✓');
    });
  }
});

/* ---------- Save as image ---------- */
btnSave.addEventListener('click', () => saveAsImage());

async function saveAsImage() {
  const card = document.getElementById('msg-card');

  // Use html2canvas if available, else fallback to manual canvas draw
  if (window.html2canvas) {
    const canvas = await html2canvas(card, { backgroundColor: '#0d1120', scale: 2 });
    downloadCanvas(canvas);
    return;
  }

  // Manual canvas fallback
  const W = 900, H = 520;
  const canvas = document.createElement('canvas');
  canvas.width = W; canvas.height = H;
  const ctx = canvas.getContext('2d');

  // Background gradient
  const bg = ctx.createLinearGradient(0, 0, W, H);
  bg.addColorStop(0, '#0d0a1e');
  bg.addColorStop(1, '#080c14');
  ctx.fillStyle = bg;
  ctx.roundRect(0, 0, W, H, 24);
  ctx.fill();

  // Top accent line
  const line = ctx.createLinearGradient(0, 0, W, 0);
  line.addColorStop(0, 'transparent');
  line.addColorStop(0.5, '#a78bfa');
  line.addColorStop(1, 'transparent');
  ctx.strokeStyle = line;
  ctx.lineWidth = 1.5;
  ctx.beginPath();
  ctx.moveTo(40, 1); ctx.lineTo(W - 40, 1);
  ctx.stroke();

  // From label
  ctx.fillStyle = '#a78bfa';
  ctx.font = '600 14px Cairo, sans-serif';
  ctx.textAlign = 'right';
  ctx.direction = 'rtl';
  ctx.fillText('من: أنت · 2027', W - 48, 60);

  // Message text
  ctx.fillStyle = '#e8eaf0';
  ctx.font = '400 26px Cairo, sans-serif';
  ctx.textAlign = 'right';
  ctx.direction = 'rtl';
  wrapText(ctx, currentMessage, W - 48, 130, W - 96, 42);

  // Signature
  ctx.fillStyle = 'rgba(232,234,240,0.4)';
  ctx.font = '300 15px Cairo, sans-serif';
  ctx.fillText('— نسختك القادمة', W - 48, H - 48);

  // Watermark
  ctx.fillStyle = 'rgba(167,139,250,0.5)';
  ctx.font = '600 13px Cairo, sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText('رسالة من مستقبلك · 2027', 48, H - 48);

  downloadCanvas(canvas);
}

function wrapText(ctx, text, x, y, maxWidth, lineHeight) {
  const words = text.split(' ');
  let line = '';
  for (let i = 0; i < words.length; i++) {
    const testLine = line + words[i] + ' ';
    if (ctx.measureText(testLine).width > maxWidth && i > 0) {
      ctx.fillText(line.trim(), x, y);
      line = words[i] + ' ';
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, y);
}

function downloadCanvas(canvas) {
  const a = document.createElement('a');
  a.download = 'رسالة-من-مستقبلك-2027.png';
  a.href = canvas.toDataURL('image/png');
  a.click();
  showToast('تم حفظ الصورة ✓');
}

/* ---------- Toast ---------- */
let toastTimer;
function showToast(msg) {
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2400);
}

/* ---------- Flash button feedback ---------- */
function flashBtn(btn) {
  btn.classList.add('success');
  setTimeout(() => btn.classList.remove('success'), 1800);
}

/* ---------- Utility ---------- */
function delay(ms) { return new Promise(r => setTimeout(r, ms)); }

/* ---------- Init ---------- */
showScreen(screenHome);
checkFirstVisit();

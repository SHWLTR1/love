document.addEventListener("DOMContentLoaded", () => {
    const page1 = document.getElementById("page-1");
    const page2 = document.getElementById("page-2");
    const startBtn = document.getElementById("start-journey-btn");
    const bgMusic = document.getElementById("bg-music");
    
    const envelopeWrapper = document.getElementById("envelope-wrapper");
    const envHint = document.getElementById("env-hint");
    const goToCertBtn = document.getElementById("go-to-cert-btn");
    
    const certificateArea = document.getElementById("certificate-area");
    const downloadBtn = document.getElementById("download-cert-btn");

    // ==========================================
    // 1. الكتابة التدريجية الاحترافية في الصفحة الأولى
    // ==========================================
    const messageText = `كل رحلة عظيمة تبدأ بخطوة، واليوم تقفين على قمةٍ صنعتِها بجهدك وصبرك.. ليس هذا مجرد تخرج عادي، بل بداية لحلمٍ أكبر ومستقبلٍ يليق بكِ. 🌹 مبارك لكِ يا مهندسة قلبي 🌹`;
    const typingElement = document.getElementById("typing-text");
    let charIndex = 0;

    function startTypingEffect() {
        if (!typingElement) return;
        if (charIndex < messageText.length) {
            typingElement.innerHTML += messageText.charAt(charIndex);
            charIndex++;
            setTimeout(startTypingEffect, 40); // سرعة متزنة وممتازة للكتابة
        }
    }
    
    startTypingEffect();

    // ==========================================
    // 2. الانتقال من الصفحة الأولى إلى الثانية
    // ==========================================
    startBtn.addEventListener("click", () => {
        // تشغيل الموسيقى الهادئة بالخلفية
        if (bgMusic) {
            bgMusic.volume = 0.3;
            bgMusic.play().catch(e => console.log("تفاعل صوتي مطلوب"));
        }

        // إطلاق احتفالية كونفيتي أولى
        triggerCelebrationConfetti();

        // حركة انتقال سلسة وتلاشي
        page1.style.transition = "opacity 0.5s ease";
        page1.style.opacity = "0";

        setTimeout(() => {
            page1.classList.add("hidden");
            page2.classList.remove("hidden");
        }, 500);
    });

    // ==========================================
    // 3. فتح الظرف وعرض الزر بدون اختفاء الرسالة
    // ==========================================
    envelopeWrapper.addEventListener("click", () => {
        if (!envelopeWrapper.classList.contains("open")) {
            envelopeWrapper.classList.add("open");
            envHint.classList.add("hidden"); // إخفاء تلميح الضغط

            // إطلاق كونفيتي خفيف بمناسبة فتح الرسالة
            confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

            // إظهار زر الانتقال إلى الشهادة الرقمية بعد فتح الرسالة بالكامل لكي تقرأها
            setTimeout(() => {
                goToCertBtn.classList.remove("hidden");
            }, 1200);
        }
    });

    // ==========================================
    // 4. الانتقال إلى الشهادة الخرافية
    // ==========================================
    goToCertBtn.addEventListener("click", () => {
        // تفجير ألعاب نارية وكونفيتي ضخم جداً للشهادة
        triggerMassiveConfetti();

        // إخفاء منطقة الظرف بجمالية وثبات
        const envelopeArea = document.getElementById("envelope-area");
        envelopeArea.style.transition = "opacity 0.5s ease";
        envelopeArea.style.opacity = "0";

        setTimeout(() => {
            envelopeArea.classList.add("hidden");
            certificateArea.classList.remove("hidden");
        }, 500);
    });

    // ==========================================
    // 5. حفظ وتنزيل الشهادة الرقمية كصورة فائقة الجودة
    // ==========================================
    downloadBtn.addEventListener("click", () => {
        const certElement = document.getElementById("digital-certificate");
        
        html2canvas(certElement, {
            backgroundColor: "#070b12",
            scale: 3, // دقة تصوير فائقة لتبدو حادة وفخمة جداً في الاستوديو
            useCORS: true
        }).then(canvas => {
            const link = document.createElement("a");
            link.download = "شهادة_فخر_المهندسة_زينب.png";
            link.href = canvas.toDataURL("image/png");
            link.click();
        });
    });

    // دالات الكونفيتي المخصصة للاحتفالات الفاخرة
    function triggerCelebrationConfetti() {
        confetti({ particleCount: 150, spread: 80, origin: { y: 0.6 }, colors: ['#dfb76c', '#ffffff', '#ff4d6d'] });
    }

    function triggerMassiveConfetti() {
        var duration = 4 * 1000;
        var end = Date.now() + duration;

        (function frame() {
            confetti({ particleCount: 5, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#dfb76c', '#ffffff', '#00f2fe'] });
            confetti({ particleCount: 5, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#dfb76c', '#ffffff', '#00f2fe'] });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }
});
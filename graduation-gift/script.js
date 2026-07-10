document.addEventListener("DOMContentLoaded", () => {
    const page1 = document.getElementById("page-1") || document.querySelector(".container:not(.hidden)");
    
    // تأمين عمل زر ابدئي الرحلة بدون الانتقال لصفحة أخرى
    const startBtn = document.getElementById("start") || document.getElementById("start-journey-btn");
    
    if (startBtn) {
        startBtn.onclick = (e) => {
            e.preventDefault();
            
            // تشغيل الألعاب النارية
            confetti({
                particleCount: 220,
                spread: 180,
                origin: { y: 0.6 }
            });

            // تحويل تفاعلي: بدلاً من الانتقال لصفحة 404، نفتح الهدية فوراً
            setTimeout(() => {
                // إذا كان هناك مودال (نافذة الهدية) في الصفحة افتحه مباشرة
                const modal = document.getElementById("giftModal");
                if (modal) {
                    modal.style.display = "flex";
                    document.body.style.overflow = "hidden";
                } else {
                    alert("مبارك التخرج للمهندسة زينب! ❤️");
                }
            }, 1000);
        };
    }
});

// دالة إغلاق نافذة الهدية
function closeGift(){
    const modal = document.getElementById("giftModal");
    if(modal){
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// إغلاق عند الضغط خارج البطاقة
window.onclick = function(event) {
    const modal = document.getElementById("giftModal");
    if (event.target == modal) {
        closeGift();
    }
}

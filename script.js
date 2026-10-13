// ===== گرفتن المان‌ها =====
const urlInput = document.getElementById('urlInput');
const browserFrame = document.getElementById('browserFrame');
const welcomeScreen = document.getElementById('welcomeScreen');
const backBtn = document.getElementById('backBtn');
const forwardBtn = document.getElementById('forwardBtn');
const refreshBtn = document.getElementById('refreshBtn');
const homeBtn = document.getElementById('homeBtn');
const searchBtn = document.getElementById('searchBtn');
const menuBtn = document.getElementById('menuBtn');
const quickLinks = document.querySelectorAll('.quick-links a');

// ===== تابع رفتن به آدرس =====
function navigateTo(input) {
    let url = input.trim();
    if (!url) return;

    // اگه شبیه آدرس باشه (نقطه داره)، به عنوان URL بازش کن
    // وگرنه، برو از گوگل سرچ کن (فعلاً - بعداً موتور خودمون رو می‌ذاریم)
    if (url.includes('.') && !url.includes(' ')) {
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            url = 'https://' + url;
        }
    } else {
        // جستجو در گوگل (موقت)
        url = 'https://www.google.com/search?q=' + encodeURIComponent(url);
    }

    // مخفی کردن صفحه خوش‌آمدگویی و نمایش iframe
    welcomeScreen.style.display = 'none';
    browserFrame.style.display = 'block';
    browserFrame.src = url;
    urlInput.value = url;
}

// ===== رویدادها =====

// Enter در نوار آدرس
urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        navigateTo(urlInput.value);
    }
});

// دکمه جستجو
searchBtn.addEventListener('click', () => {
    navigateTo(urlInput.value);
});

// دکمه رفرش
refreshBtn.addEventListener('click', () => {
    if (browserFrame.style.display === 'block') {
        browserFrame.src = browserFrame.src;
    }
});

// دکمه خانه
homeBtn.addEventListener('click', () => {
    browserFrame.style.display = 'none';
    welcomeScreen.style.display = 'flex';
    browserFrame.src = 'about:blank';
    urlInput.value = '';
});

// دکمه‌های عقب و جلو (فعلاً محدود در وب)
backBtn.addEventListener('click', () => {
    try {
        browserFrame.contentWindow.history.back();
    } catch (e) {
        alert('⚠️ در نسخه وب به دلیل محدودیت امنیتی، دکمه‌های عقب/جلو محدود هستند.\nدر نسخه ویندوز کامل کار خواهند کرد!');
    }
});

forwardBtn.addEventListener('click', () => {
    try {
        browserFrame.contentWindow.history.forward();
    } catch (e) {
        alert('⚠️ در نسخه وب به دلیل محدودیت امنیتی، دکمه‌های عقب/جلو محدود هستند.\nدر نسخه ویندوز کامل کار خواهند کرد!');
    }
});

// لینک‌های سریع
quickLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        navigateTo(link.dataset.url);
    });
});

// دکمه منو (فعلاً placeholder)
menuBtn.addEventListener('click', () => {
    alert('📋 منو - به زودی اضافه می‌شود!');
});
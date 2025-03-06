const likeBtn = document.getElementById('like-btn');
const commentBtn = document.getElementById('comment-btn');
const commentInput = document.getElementById('comment-input');
const followBtn = document.getElementById('follow-btn');
const video = document.getElementById('video-player');
const videoTitle = document.getElementById('video-title');

// قائمة بأسماء الفيديوهات
const videoNames = ["اسم الفيديو 1", "اسم الفيديو 2", "اسم الفيديو 3"];
const videoSources = ["videos/video1.mp4", "videos/video2.mp4", "videos/video3.mp4"];
let currentVideoIndex = 0;

// تغيير اسم الفيديو عند تغيير الفيديو
function updateVideo() {
    video.src = videoSources[currentVideoIndex];
    videoTitle.textContent = videoNames[currentVideoIndex];
    video.load();  // تحميل الفيديو الجديد
    video.play();  // تشغيل الفيديو الجديد
}

// تحديث الفيديو بعد انتهاء الفيديو الحالي
video.addEventListener('ended', function() {
    currentVideoIndex = (currentVideoIndex + 1) % videoNames.length; // التبديل بين الفيديوهات
    updateVideo();
});

// تحميل الفيديو الأول
updateVideo();

// تأثير الإعجاب
likeBtn.addEventListener('click', () => {
    likeBtn.classList.toggle('liked');
});

// إضافة تعليق
commentBtn.addEventListener('click', () => {
    const comment = commentInput.value;
    if(comment) {
        alert(`تم إضافة تعليق: ${comment}`);
    }
});

// تغيير حالة المتابعة
followBtn.addEventListener('click', () => {
    followBtn.textContent = followBtn.textContent === 'متابعة' ? 'إلغاء المتابعة' : 'متابعة';
});

// إظهار التحميل عند تحميل الفيديو
video.addEventListener('canplay', () => {
    document.getElementById('loading').style.display = 'none';
});

// إظهار الخلفية المتحركة أثناء تحميل الفيديو
video.addEventListener('loadstart', () => {
    document.getElementById('loading').style.display = 'flex';
});

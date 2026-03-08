// ==========================================
// ফাইল: member/firebase-config.js
// কাজ: ফায়ারবেস এবং ImgBB কনফিগারেশন
// ==========================================

// ১. ফায়ারবেস কনফিগারেশন (আপনার দেওয়া ID)
const firebaseConfig = {
    apiKey: "AIzaSyAsXATdEEYbgLUVjR3yqexy_JtuQ6I6mMo",
    authDomain: "sonali-fundation.firebaseapp.com",
    projectId: "sonali-fundation",
    storageBucket: "sonali-fundation.firebasestorage.app",
    messagingSenderId: "167946300872",
    appId: "1:167946300872:web:bc3c21dbdc5adda5a0a4fd",
    measurementId: "G-34YFW23JR9"
};

// ২. ImgBB API Key (আপনার দেওয়া Key)
const IMGBB_API_KEY = "8162739127c52b219b2e17d2c6373d55";

// ৩. ফায়ারবেস অ্যাপ ইনিশিলাইজ করা
// (HTML ফাইলে স্ক্রিপ্ট লোড করার পর এই ভেরিয়েবলগুলো গ্লোবালি পাওয়া যাবে)
firebase.initializeApp(firebaseConfig);

// ৪. অথেনটিফিকেশন এবং ডাটাবেজ ভেরিয়েবল এক্সপোর্ট
const auth = firebase.auth();
const db = firebase.firestore();

// ৫. কনসোল লগ (চেক করার জন্য)
console.log("Firebase Config Loaded Successfully");
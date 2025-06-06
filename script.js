// Import Firebase modules
import { auth, googleProvider, db } from './firebase-config.js';
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    signOut,
    onAuthStateChanged,
    updateProfile
} from 'firebase/auth';
import { 
    doc, 
    setDoc, 
    getDoc,
    collection,
    addDoc,
    query,
    where,
    getDocs,
    orderBy,
    limit
} from 'firebase/firestore';

// Global state
let currentUser = null;

// DOM Elements
const authModal = document.getElementById('authModal');
const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const loginFormElement = document.getElementById('loginFormElement');
const signupFormElement = document.getElementById('signupFormElement');

// Auth buttons
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const mobileLoginBtn = document.getElementById('mobileLoginBtn');
const mobileSignupBtn = document.getElementById('mobileSignupBtn');
const logoutBtn = document.getElementById('logoutBtn');
const mobileLogoutBtn = document.getElementById('mobileLogoutBtn');

// Google sign in buttons
const googleSignIn = document.getElementById('googleSignIn');
const googleSignUp = document.getElementById('googleSignUp');

// Form switchers
const showSignup = document.getElementById('showSignup');
const showLogin = document.getElementById('showLogin');

// User profile elements
const userProfile = document.getElementById('userProfile');
const mobileUserProfile = document.getElementById('mobileUserProfile');
const userName = document.getElementById('userName');
const mobileUserName = document.getElementById('mobileUserName');

// Navigation elements
const authNavLinks = document.getElementById('authNavLinks');
const mobileAuthLinks = document.getElementById('mobileAuthLinks');
const mobileAuthButtons = document.getElementById('mobileAuthButtons');

// Close modal
document.querySelector('.close').addEventListener('click', () => {
    authModal.style.display = 'none';
});

// Close modal when clicking outside
window.addEventListener('click', (e) => {
    if (e.target === authModal) {
        authModal.style.display = 'none';
    }
});

// Show login modal
function showLoginModal() {
    authModal.style.display = 'block';
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
}

// Show signup modal
function showSignupModal() {
    authModal.style.display = 'block';
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
}

// Event listeners for auth buttons
loginBtn?.addEventListener('click', showLoginModal);
signupBtn?.addEventListener('click', showSignupModal);
mobileLoginBtn?.addEventListener('click', showLoginModal);
mobileSignupBtn?.addEventListener('click', showSignupModal);

// Form switchers
showSignup?.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'none';
    signupForm.style.display = 'block';
});

showLogin?.addEventListener('click', (e) => {
    e.preventDefault();
    loginForm.style.display = 'block';
    signupForm.style.display = 'none';
});

// Show error message
function showError(message, formType = 'login') {
    const form = formType === 'login' ? loginForm : signupForm;
    let errorDiv = form.querySelector('.error-message');
    
    if (!errorDiv) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message';
        form.insertBefore(errorDiv, form.querySelector('form'));
    }
    
    errorDiv.textContent = message;
}

// Show success message
function showSuccess(message, formType = 'login') {
    const form = formType === 'login' ? loginForm : signupForm;
    let successDiv = form.querySelector('.success-message');
    
    if (!successDiv) {
        successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        form.insertBefore(successDiv, form.querySelector('form'));
    }
    
    successDiv.textContent = message;
}

// Clear messages
function clearMessages(formType = 'login') {
    const form = formType === 'login' ? loginForm : signupForm;
    const errorDiv = form.querySelector('.error-message');
    const successDiv = form.querySelector('.success-message');
    
    if (errorDiv) errorDiv.remove();
    if (successDiv) successDiv.remove();
}

// Set loading state
function setLoading(button, loading = true) {
    if (loading) {
        button.classList.add('loading');
        button.disabled = true;
    } else {
        button.classList.remove('loading');
        button.disabled = false;
    }
}

// Login with email and password
loginFormElement?.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearMessages('login');
    
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    const submitBtn = e.target.querySelector('button[type="submit"]');
    
    setLoading(submitBtn, true);
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        authModal.style.display = 'none';
        showSuccess('Successfully signed in!', 'login');
    } catch (error) {
        console.error('Login error:', error);
        showError(getErrorMessage(error.code), 'login');
    } finally {
        setLoading(submitBtn, false);
    }
});

// Sign up with email and password
signupFormElement?.addEventListener('submit', async (e) => {
    e.preventDefault();
    clearMessages('signup');
    
    const name = document.getElementById('signupName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const submitBtn = e.target.querySelector('button[type="submit"]');
    
    if (password.length < 6) {
        showError('Password must be at least 6 characters long', 'signup');
        return;
    }
    
    setLoading(submitBtn, true);
    
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        
        // Update user profile with name
        await updateProfile(userCredential.user, {
            displayName: name
        });
        
        // Create user document in Firestore
        await setDoc(doc(db, 'users', userCredential.user.uid), {
            name: name,
            email: email,
            createdAt: new Date(),
            photoURL: userCredential.user.photoURL || null
        });
        
        authModal.style.display = 'none';
        showSuccess('Account created successfully!', 'signup');
    } catch (error) {
        console.error('Signup error:', error);
        showError(getErrorMessage(error.code), 'signup');
    } finally {
        setLoading(submitBtn, false);
    }
});

// Google sign in
googleSignIn?.addEventListener('click', async () => {
    setLoading(googleSignIn, true);
    
    try {
        const result = await signInWithPopup(auth, googleProvider);
        
        // Create user document if it doesn't exist
        const userDoc = await getDoc(doc(db, 'users', result.user.uid));
        if (!userDoc.exists()) {
            await setDoc(doc(db, 'users', result.user.uid), {
                name: result.user.displayName,
                email: result.user.email,
                createdAt: new Date(),
                photoURL: result.user.photoURL
            });
        }
        
        authModal.style.display = 'none';
    } catch (error) {
        console.error('Google sign in error:', error);
        showError(getErrorMessage(error.code), 'login');
    } finally {
        setLoading(googleSignIn, false);
    }
});

// Google sign up
googleSignUp?.addEventListener('click', async () => {
    setLoading(googleSignUp, true);
    
    try {
        const result = await signInWithPopup(auth, googleProvider);
        
        // Create user document
        await setDoc(doc(db, 'users', result.user.uid), {
            name: result.user.displayName,
            email: result.user.email,
            createdAt: new Date(),
            photoURL: result.user.photoURL
        });
        
        authModal.style.display = 'none';
    } catch (error) {
        console.error('Google sign up error:', error);
        showError(getErrorMessage(error.code), 'signup');
    } finally {
        setLoading(googleSignUp, false);
    }
});

// Logout
async function handleLogout() {
    try {
        await signOut(auth);
        showSection('home');
    } catch (error) {
        console.error('Logout error:', error);
    }
}

logoutBtn?.addEventListener('click', handleLogout);
mobileLogoutBtn?.addEventListener('click', handleLogout);

// Auth state observer
onAuthStateChanged(auth, (user) => {
    currentUser = user;
    updateUIForAuthState(user);
});

// Update UI based on auth state
function updateUIForAuthState(user) {
    if (user) {
        // User is signed in
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        mobileAuthButtons.style.display = 'none';
        
        userProfile.style.display = 'flex';
        mobileUserProfile.style.display = 'block';
        authNavLinks.style.display = 'flex';
        mobileAuthLinks.style.display = 'block';
        
        const displayName = user.displayName || user.email.split('@')[0];
        userName.textContent = displayName;
        mobileUserName.textContent = displayName;
        
        // Update profile page
        const profileName = document.getElementById('profileName');
        const profileEmail = document.getElementById('profileEmail');
        if (profileName) profileName.textContent = user.displayName || 'User';
        if (profileEmail) profileEmail.textContent = user.email;
        
        // Show dashboard by default for authenticated users
        if (window.location.hash === '' || window.location.hash === '#home') {
            showSection('dashboard');
        }
    } else {
        // User is signed out
        loginBtn.style.display = 'inline-flex';
        signupBtn.style.display = 'inline-flex';
        mobileAuthButtons.style.display = 'block';
        
        userProfile.style.display = 'none';
        mobileUserProfile.style.display = 'none';
        authNavLinks.style.display = 'none';
        mobileAuthLinks.style.display = 'none';
        
        // Redirect to home if on protected pages
        const currentSection = getCurrentSection();
        if (['dashboard', 'groups', 'wishlists', 'profile', 'settings'].includes(currentSection)) {
            showSection('home');
        }
    }
}

// Get error message
function getErrorMessage(errorCode) {
    switch (errorCode) {
        case 'auth/user-not-found':
            return 'No account found with this email address.';
        case 'auth/wrong-password':
            return 'Incorrect password.';
        case 'auth/email-already-in-use':
            return 'An account already exists with this email address.';
        case 'auth/weak-password':
            return 'Password should be at least 6 characters.';
        case 'auth/invalid-email':
            return 'Invalid email address.';
        case 'auth/popup-closed-by-user':
            return 'Sign-in popup was closed. Please try again.';
        default:
            return 'An error occurred. Please try again.';
    }
}

// Get current section
function getCurrentSection() {
    const hash = window.location.hash.substring(1);
    return hash || 'home';
}

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn?.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Navigation functionality
function showSection(sectionId) {
    // Check if user is authenticated for protected pages
    const protectedPages = ['dashboard', 'groups', 'wishlists', 'profile', 'settings'];
    if (protectedPages.includes(sectionId) && !currentUser) {
        showLoginModal();
        return;
    }
    
    // Hide all sections
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show hero and features by default (home)
    const hero = document.querySelector('.hero');
    const features = document.querySelector('.features');
    const footer = document.querySelector('.footer');
    
    if (sectionId === 'home') {
        hero.style.display = 'flex';
        features.style.display = 'block';
        footer.style.display = 'block';
    } else {
        hero.style.display = 'none';
        features.style.display = 'none';
        footer.style.display = 'none';
        
        // Show specific section
        const targetSection = document.getElementById(sectionId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }
    
    // Update active nav link
    updateActiveNavLink(sectionId);
    
    // Close mobile menu
    mobileMenu.classList.remove('active');
    
    // Update URL hash
    window.history.pushState({}, '', `#${sectionId}`);
}

function updateActiveNavLink(activeSection) {
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to current section links
    const activeLinks = document.querySelectorAll(`[href="#${activeSection}"]`);
    activeLinks.forEach(link => {
        link.classList.add('active');
    });
}

// Handle navigation clicks
document.addEventListener('click', (e) => {
    if (e.target.matches('a[href^="#"]') || e.target.closest('a[href^="#"]')) {
        e.preventDefault();
        const link = e.target.matches('a[href^="#"]') ? e.target : e.target.closest('a[href^="#"]');
        const href = link.getAttribute('href');
        const sectionId = href.substring(1);
        showSection(sectionId);
    }
});

// Handle browser back/forward buttons
window.addEventListener('popstate', (e) => {
    const hash = window.location.hash.substring(1) || 'home';
    showSection(hash);
});

// Hero get started button
const heroGetStarted = document.getElementById('heroGetStarted');
heroGetStarted?.addEventListener('click', () => {
    if (currentUser) {
        showSection('wishlists');
    } else {
        showSignupModal();
    }
});

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash.substring(1) || 'home';
    showSection(hash);
});

// Smooth scroll behavior for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to navbar
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.9)';
    }
});

// Add intersection observer for section highlighting
const observerOptions = {
    root: null,
    rootMargin: '-50% 0px -50% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const sectionId = entry.target.id;
            updateActiveNavLink(sectionId);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section[id]').forEach(section => {
    observer.observe(section);
});

// Add hover effects to cards
document.querySelectorAll('.card, .feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Add click handlers for buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', (e) => {
        // Skip if it's an auth button
        if (button.id && button.id.includes('login') || button.id.includes('signup') || button.id.includes('logout')) {
            return;
        }
        
        // Add ripple effect
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s linear;
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation to CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add scroll reveal animation
const revealElements = document.querySelectorAll('.feature-card, .card, .settings-card');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

revealElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    revealObserver.observe(element);
});

console.log('Optana app initialized with Firebase authentication');

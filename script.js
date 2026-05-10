// MISSION_CONTROL // SCRIPT_INIT

document.addEventListener('DOMContentLoaded', () => {
    console.log("SYSTEM_STATUS: ONLINE");

    // TACTICAL HOVER: ELEMENT REACTION
    const cards = document.querySelectorAll('.ops-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Subtle neon glow follow effect
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // GRUNGE ELEMENT DRIFT
    const grungeElements = document.querySelectorAll('.grunge-svg');
    
    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        grungeElements.forEach((el, index) => {
            const speed = (index + 1) * 20;
            const x = (mouseX - 0.5) * speed;
            const y = (mouseY - 0.5) * speed;
            el.style.transform = `translate(${x}px, ${y}px) rotate(${x}deg)`;
        });
    });

    // SECTION OBSERVER: ANIMATE ON SCROLL
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        observer.observe(section);
    });

    // PROGRESS BAR ANIMATION
    setTimeout(() => {
        const progressFill = document.getElementById('progress-fill');
        const percentVal = document.getElementById('percent-val');
        const targetPercent = 66; // (166 / 252) * 100
        
        progressFill.style.width = `${targetPercent}%`;
        
        // Counter animation for percentage
        let current = 0;
        const duration = 1500; // Match CSS transition
        const increment = targetPercent / (duration / 16);
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= targetPercent) {
                percentVal.textContent = targetPercent;
                clearInterval(timer);
            } else {
                percentVal.textContent = Math.floor(current);
            }
        }, 16);
    }, 500);
});

// MODAL DATA & LOGIC
const journalData = {
    1: {
        title: "WEEK 1: DESIGN_INIT",
        img: "assets/weeks/week1.jpg",
        intel: "I was tasked with designing graphic templates and promotional posters for the company’s official Facebook page. Additionally, I supervised and mentored Grade 12 Work Immersion students from Culianan National High School. Initially, I faced a learning curve in effectively communicating with the younger immersion students and developing my graphic design skills.",
        achievements: "Successfully explored Canva's advanced features to create original designs. Provided guidance and shared my academic journey with the work immersion students, helping them navigate their first workplace experience.",
        skills: ["Digital Content Creation", "Mentorship & Leadership", "Interpersonal Communication", "Adaptability"],
        insights: "Realized that being a professional in the tech industry requires high adaptability. Soft skills are just as crucial as technical ones when training junior team members."
    },
    2: {
        title: "WEEK 2: UI_UX_ITERATION",
        img: "assets/weeks/week2.jpg",
        intel: "Building on Week 1, I spent the week advancing the design and layout of my assigned visual projects. I completed the initial project designs and presented them for supervisor review. Feedback highlighted areas for further refinement, allowing me to iterate and improve the final output to meet government information system standards.",
        achievements: "Completed full high-fidelity mockups. Managed task workflows for immersion students, breaking down system requirements into manageable assignments for the team.",
        skills: ["UI/UX Design", "Iterative Prototyping", "Technical Leadership", "Receptiveness to Feedback"],
        insights: "Applied Systems Analysis principles by translating abstract requirements into concrete task workflows. Learned that professional development is an iterative process where flaws are essential data points."
    },
    3: {
        title: "WEEK 3: UPSKILLING",
        img: "assets/weeks/week3.jpg",
        intel: "A demanding yet fulfilling week characterized by specialized training on the evolution of startups and the strategic application of Generative AI. I also assisted with inventory management in an unfamiliar facility, which required rapid adaptation to complex logistical requirements under a tight timeframe.",
        achievements: "Awarded 'Best Pitch' in the cohort during the startup competition for 'FreshFlow'. Our team topped the Prompt Engineering Challenge with the highest scores.",
        skills: ["Prompt Engineering", "Startup Pitching", "AI Integration", "Rapid Problem-Solving"],
        insights: "Observed that professional success requires a balance of high-level innovation and operational discipline. AI integration is no longer optional; it's an imperative for remaining competitive."
    },
    4: {
        title: "WEEK 4: GATEPASS_SECURITY",
        img: "assets/weeks/placeholder.jpg",
        intel: "Primary responsibilities shifted to software optimization. I focused on refactoring the Gate Pass Management System, specifically implementing an anti-deletion feature for enhanced security. I also served as a Technical Moderator during the 'Tech Her Way' seminar, managing real-time audience interaction.",
        achievements: "Transitioned the Gate Pass system from a static to a flexible timing model. Improved QR scanning accuracy through technical fine-tuning of the camera module settings.",
        skills: ["Backend Refactoring", "Security Engineering", "Hardware Optimization", "Technical Event Moderation"],
        insights: "System reliability and UX are deeply linked; a secure system must also remain high-performing. Stable infrastructure is the backbone of community engagement initiatives."
    },
    5: {
        title: "WEEK 5: SYSTEM_HARDENING",
        img: "assets/weeks/placeholder.jpg",
        intel: "Led the development of robust encryption protocols for the Gate Pass system. A major architectural decision was made this week: I decided to pivot away from face recognition to prioritize core system stability, as the computational requirements were compromising performance.",
        achievements: "Achieved 100% completion rate for anti-deletion and encryption modules. Improved system security by an estimated 95% while finalizing the database schema.",
        skills: ["Encryption Protocols", "Database Mapping", "Modular Programming", "Architectural Problem-Solving"],
        insights: "Learned that 'feature complete' means being audit-ready. Security protocols should not hinder the end-user's workflow. Aligning technical output with institutional needs is key."
    },
    6: {
        title: "WEEK 6: REAL_WORLD_CHECK",
        img: "assets/weeks/placeholder.jpg",
        intel: "Spent the week in a 'demo and fix' loop with my supervisor. Most of my time was spent showing security features and cleaning up the interface to make it easier for staff to use. This was a critical phase of simplifying technical choices to match how the office actually operates.",
        achievements: "Reached 80% total system completion. Fixed 12 high-priority bugs discovered during supervisor evaluation, significantly smoothing the dashboard experience.",
        skills: ["System Testing", "UI Tweaking", "Active Listening", "Agile Adaptation"],
        insights: "The 'Real World' Check: 100% finished on a laptop doesn't mean 100% finished for the user. Feedback is a reality check that requires developer flexibility."
    },
    7: {
        title: "WEEK 7: CREATIVE_PROD",
        img: "assets/weeks/week7.jpg",
        intel: "Priority shifted to creative production for the DICT Summer Bootcamp. I designed professional slide decks and official promotional assets while balancing small tweaks to the Gate Pass system to keep it functional for final review.",
        achievements: "Designed the full promotional suite for the May Summer Bootcamp. Finished the bulk of training materials, including interactive slides for upcoming student sessions.",
        skills: ["Graphic Design", "Technical Writing", "Information Hierarchy", "Multitasking"],
        insights: "Learned how to highlight the most important info in a presentation so the audience doesn't get overwhelmed. Bridging the gap between technical services and community outreach."
    },
    8: {
        title: "WEEK 8: RESOURCE_SPEAKER",
        img: "assets/weeks/week8.jpg",
        intel: "Stepped into a leadership role as a resource speaker. I conducted a live training session on Prompt Engineering and AI Ethics for an adult audience. This involved managing the presentation flow, engaging with the audience, and providing practical demos of AI tools.",
        achievements: "Successfully completed my first-ever training session as a lead speaker. Managed a live 'dry run' that turned into a full-scale lecture for community members.",
        skills: ["Public Speaking", "Resource Management", "Technical Coaching", "Leadership"],
        insights: "Moving from developer to speaker allowed me to see the direct impact of my work. Realized I'm capable of leading a room and explaining complex concepts to diverse audiences."
    },
    9: {
        title: "WEEK 9: MENTORSHIP",
        img: "assets/weeks/week9.jpg",
        intel: "Conducted a specialized training session at ZPPSU focused on the Ethical Use of Generative AI. I acted as a mentor, offering 'big brother' advice on academic integrity and demonstrate how to use AI responsibly to enhance learning.",
        achievements: "Delivered a high-impact session to a large group of future college students. Completed all 252 hours of internship requirements and finalized all final project reports.",
        skills: ["Community Mentorship", "Instructional Design", "Engagement & Facilitation", "Final Report Preparation"],
        insights: "Learned that technical knowledge is more effective when delivered with empathy. IT professionals are empowered not just by code, but by how they empower the community."
    }
};

function openModal(weekId) {
    const data = journalData[weekId];
    if (!data) return;

    const modal = document.getElementById('mission-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="modal-image-container">
            <img src="${data.img}" alt="${data.title}" class="modal-img-large" onerror="this.parentElement.style.display='none'">
        </div>
        <h2 class="modal-week-title">${data.title}</h2>
        
        <div class="modal-section">
            <h3><span class="accent-text">//</span> THE HAPPENINGS</h3>
            <p>${data.intel}</p>
        </div>

        <div class="modal-section">
            <h3><span class="accent-text">//</span> MISSION ACCOMPLISHED</h3>
            <p>${data.achievements}</p>
        </div>

        <div class="modal-section">
            <h3><span class="accent-text">//</span> INSIGHTS GAINED</h3>
            <p>${data.insights}</p>
        </div>

        <div class="modal-section">
            <h3><span class="accent-text">//</span> SKILLS DEPLOYED</h3>
            <div class="modal-skills-list">
                ${data.skills.map(skill => `<span class="modal-skill-item">${skill}</span>`).join('')}
            </div>
        </div>
    `;

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    const modal = document.getElementById('mission-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close on background click
window.onclick = (event) => {
    const modal = document.getElementById('mission-modal');
    if (event.target == modal) {
        closeModal();
    }
};
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
        intel: "This week marked the beginning of my journey at DICT. I focused on mastering Canva's professional suite to create high-impact promotional materials. Mentoring Grade 12 students was a highlight, allowing me to practice leadership while refining my own design eye. We worked on templates that are now part of DICT's official social media asset library.",
        achievements: "Successfully delivered 5 original poster templates and provided academic guidance to 10+ work immersion students. Established a streamlined workflow for digital asset creation.",
        skills: ["Graphic Design", "Leadership", "Mentorship", "Canva Pro"]
    },
    2: {
        title: "WEEK 2: UI_UX_ITERATION",
        img: "assets/weeks/week2.jpg",
        intel: "Transitioned from static graphics to UI/UX thinking. I spent the week iterating on interface layouts based on direct feedback from the technical supervisor. This phase taught me the importance of 'user-first' design—it's not just about looking good, but about intuitive navigation. Every pixel was scrutinized to meet professional standards.",
        achievements: "Completed full high-fidelity mockups for the project dashboard. Reduced interface friction by implementing user feedback loops during the design process.",
        skills: ["UI/UX Design", "Iterative Prototyping", "User Feedback Analysis", "Figma/Canva"]
    },
    3: {
        title: "WEEK 3: UPSKILLING",
        img: "assets/weeks/week3.jpg",
        intel: "A pivot week into advanced technologies. I dove deep into Prompt Engineering to see how AI can augment the developer workflow. The week culminated in a high-stakes startup pitching competition where we presented 'FreshFlow'. Applying AI to our business model gave us a competitive edge that resonated with the judges.",
        achievements: "Awarded 'Best Pitch' in the cohort. Successfully integrated AI-generated components into our startup business model and presentation.",
        skills: ["Prompt Engineering", "Startup Pitching", "AI Strategy", "Public Speaking"]
    },
    4: {
        title: "WEEK 4: GATEPASS_SECURITY",
        img: "assets/weeks/placeholder.jpg",
        intel: "The challenge moved to backend security. I was tasked with refactoring the Gate Pass Management System. The goal was simple but difficult: ensure no data could be accidentally deleted by unauthorized users. I also worked on optimizing the camera scanning logic to ensure reliable QR/Face recognition under various lighting conditions.",
        achievements: "Implemented a robust anti-deletion module and improved QR scanning reliability by 40% through hardware-software optimization.",
        skills: ["Backend Refactoring", "Security Systems", "QR Integration", "Logic Optimization"]
    },
    5: {
        title: "WEEK 5: SYSTEM_HARDENING",
        img: "assets/weeks/placeholder.jpg",
        intel: "Focused on making the system bulletproof. I implemented encryption modules for all sensitive logs and mapped the database structure for better performance. We decided to pivot away from face recognition to focus on absolute data integrity—a decision that prioritized security over 'flashy' features.",
        achievements: "Achieved 100% encryption coverage for system logs. Finalized the database schema for the hardened Gate Pass system.",
        skills: ["Encryption", "Database Mapping", "SQL Security", "PHP Backend"]
    },
    6: {
        title: "WEEK 6: REAL_WORLD_CHECK",
        img: "assets/weeks/placeholder.jpg",
        intel: "Testing the system in the wild. I worked closely with non-technical staff to see how they interacted with the dashboard. This was a reality check—features I thought were easy were actually confusing for them. I spent the week simplifying the interface and fixing critical bugs found during these live tests.",
        achievements: "Successfully simplified the UI for non-tech users. Fixed 12 high-priority bugs discovered during supervisor evaluation.",
        skills: ["User Testing", "Bug Fixing", "Agile Adaptation", "Quality Assurance"]
    },
    7: {
        title: "WEEK 7: CREATIVE_PROD",
        img: "assets/weeks/week7.jpg",
        intel: "Back to the creative side for the DICT Summer Bootcamp. I had to balance my 'programmer brain' with my 'designer brain' to create assets that were both technically accurate and visually engaging. This week was about information hierarchy—making sure the most important bootcamp details popped in every social media asset.",
        achievements: "Designed the full promotional suite for the DICT Summer Bootcamp. Managed the deployment of social media assets across multiple platforms.",
        skills: ["Information Hierarchy", "Social Media Marketing", "Graphic Production", "Brand Consistency"]
    },
    8: {
        title: "WEEK 8: RESOURCE_SPEAKER",
        img: "assets/weeks/week8.jpg",
        intel: "A major milestone: I transitioned from developer to technical resource speaker. I led a live training session on Prompt Engineering and AI Ethics for an adult audience. Explaining complex AI concepts to people from diverse backgrounds required a deep understanding of the subject and strong communication skills.",
        achievements: "Conducted my first-ever technical seminar as a lead speaker. Received a 95% positive feedback rating from the 30+ attendees.",
        skills: ["Technical Training", "AI Ethics", "Public Speaking", "Communication"]
    },
    9: {
        title: "WEEK 9: MENTORSHIP",
        img: "assets/weeks/week9.jpg",
        intel: "The final stretch. I led a specialized training session at ZPPSU focused on responsible AI use. This week was about giving back—sharing the knowledge I've gained throughout the 252 hours with the next generation of students. It was the perfect way to bridge technical expertise with community mentorship as I finalized my outputs.",
        achievements: "Delivered a high-impact workshop at ZPPSU. Successfully completed all 252 hours of internship requirements and finalized final project reports.",
        skills: ["Community Mentorship", "Workshop Facilitation", "Instructional Design", "Final Report Preparation"]
    }
};

function openModal(weekId) {
    const data = journalData[weekId];
    if (!data) return;

    const modal = document.getElementById('mission-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <img src="${data.img}" alt="${data.title}" class="modal-img-large" onerror="this.style.display='none'">
        <h2>${data.title}</h2>
        <h3>THE HAPPENINGS</h3>
        <p>${data.intel}</p>
        <h3>MISSION_ACCOMPLISHED</h3>
        <p>${data.achievements}</p>
        <h3>SKILLS_DEPLOYED</h3>
        <div class="modal-skills-list">
            ${data.skills.map(skill => `<span class="modal-skill-item">${skill}</span>`).join('')}
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
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
});

// MODAL DATA & LOGIC
const journalData = {
    1: {
        title: "WEEK 1: DESIGN_INIT",
        intel: "Technical Skills Developed: Expanded my proficiency in digital content creation by exploring Canva’s advanced features. I learned how to conceptualize and design professional templates and promotional posters for the company’s Facebook page, effectively translating basic requirements into polished visual assets despite having limited prior design experience.",
        achievements: "Highlight: I further explored Canva's advanced features to create original designs. Additionally, I provided guidance and shared my academic journey with the work immersion students from Culianan National High School.",
        skills: ["Digital Content Creation", "Mentorship", "Interpersonal Communication", "Adaptability"]
    },
    2: {
        title: "WEEK 2: UI_UX_ITERATION",
        intel: "Technical Skills Developed: Advanced from basic Canva functionality to professional UI/UX layout design. Developed an iterative workflow for refining visual assets and mockups based on specific project requirements and technical constraints.",
        achievements: "Highlight: I completed the initial project designs and presented them for supervisor review. Feedback provided valuable insights into my design gaps, allowing me to iterate and improve the final output.",
        skills: ["UI/UX Design", "Technical Leadership", "Task Management", "Prototyping"]
    },
    3: {
        title: "WEEK 3: PROMPT_ENGINEERING",
        intel: "Technical Skills Developed: Mastered Prompt Engineering techniques to optimize AI outputs, resulting in a top-tier score during competitive challenges. Additionally, I refined my UI/UX design workflow using Canva, transitioning from basic templates to professional project mockups.",
        achievements: "Highlight: Secured top-tier scores in Prompt Engineering Challenge. Delivered a high-impact startup pitch that was recognized as the most effective in the cohort.",
        skills: ["Prompt Engineering", "AI Integration", "Public Speaking", "Startup Pitching"]
    },
    4: {
        title: "WEEK 4: GATEPASS_SECURITY",
        intel: "Technical Skills Developed: Backend Logic Refactoring and Security Engineering. Implementing an anti-deletion feature and optimizing camera quality for the Gate Pass System deepened my understanding of data integrity and hardware-software integration.",
        achievements: "Highlight: Successfully refactored the core logic of the Gate Pass Management System to transition from a static to a flexible timing model. Served as a Technical Moderator during the 'Tech Her Way' seminar.",
        skills: ["Backend Refactoring", "Security Engineering", "Hardware Integration", "Technical Moderation"]
    },
    5: {
        title: "WEEK 5: SYSTEM_HARDENING",
        intel: "Technical Skills Developed: Mastering Security Engineering and Hardware Optimization. By implementing an anti-deletion feature and encryption, I deepened my understanding of data integrity and backend protection.",
        achievements: "Highlight: Achieved 100% completion rate for the anti-deletion and encryption modules, ensuring total data integrity for all access logs. Improved system security by an estimated 95%.",
        skills: ["Security Engineering", "Encryption", "Database Mapping", "SQL/PHP"]
    },
    6: {
        title: "WEEK 6: REAL_WORLD_CHECK",
        intel: "The 'Real World' Check: I learned that 100% finished on my laptop doesn't mean 100% finished for the user. Feedback is a reality check. Flexibility: I got better at pivoting. Simplicity is King: Fancy features don't matter if the basic system isn't easy to use daily.",
        achievements: "Highlight: Hit 80% completion on the system. Fixed critical bugs in the dashboard identified during supervisor evaluation, significantly improving the user experience for non-tech staff.",
        skills: ["System Testing", "UI Tweaking", "Active Listening", "Agile Adaptation"]
    },
    7: {
        title: "WEEK 7: CREATIVE_PROD",
        intel: "Brand Consistency: Working on the Summer Bootcamp posters taught me how important consistent colors and fonts are for making an event look professional. Information Hierarchy: I learned how to highlight the most important info in a presentation.",
        achievements: "Highlight: Designed the full set of social media assets for the May Summer Bootcamp. Balanced creative production with software maintenance while preparing interactive slide decks for workshops.",
        skills: ["Graphic Design", "Technical Writing", "Project Planning", "Information Hierarchy"]
    },
    8: {
        title: "WEEK 8: RESOURCE_SPEAKER",
        intel: "Public Speaking Confidence: I learned that I’m capable of leading a room and holding the attention of an adult audience. Impact of AI Literacy: Seeing the audience’s reaction taught me how important it is to teach the ethical side of technology.",
        achievements: "Highlight: Successfully conducted first-ever training session as a resource speaker on Prompt Engineering and AI Ethics. Managed a live 'dry run' that turned into a full lecture for community members.",
        skills: ["Public Speaking", "Technical Coaching", "Ethics in AI", "Resource Management"]
    },
    9: {
        title: "WEEK 9: MENTORSHIP",
        intel: "Mentorship & Influence: I learned that technical knowledge is more effective when delivered with empathy and personal advice. Educational Responsibility: Shaping how the next generation of students thinks about academic integrity.",
        achievements: "Highlight: Delivered high-impact training to ZPPSU students on responsible AI use. Effectively bridged the gap between complex AI technology and practical student life as a reliable resource speaker.",
        skills: ["Community Mentorship", "Instructional Design", "Engagement", "Facilitation"]
    }
};

function openModal(weekId) {
    const data = journalData[weekId];
    if (!data) return;

    const modal = document.getElementById('mission-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <h2>${data.title}</h2>
        <h3>LEARNING_OUTCOMES</h3>
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
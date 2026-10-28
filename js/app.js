/**
 * FITTC REPUBLIC - Gym & Diet Clinic Interactive Engine
 * Location: 3rd Floor, Newtech La Gracia, Crossings Republik, Ghaziabad
 * Instagram: @fittc_republic
 */

// Gym Configuration & Official Contact
const GYM_CONFIG = {
  name: "FITTC REPUBLIC",
  subtitle: "Gym & Diet Clinic",
  location: "3rd Floor, Newtech La Gracia Mall, Plot C3, Crossings Republik, Ghaziabad",
  whatsappNumber: "919871250900", // Official Gym WhatsApp number
  instagram: "fittc_republic",
  instagramUrl: "https://www.instagram.com/fittc_republic/?hl=en",
  hours: {
    weekdayOpen: 6, // 6:00 AM
    weekdayClose: 22.5, // 10:30 PM
    sundayOpen: 14, // 2:00 PM
    sundayClose: 21 // 9:00 PM
  }
};

// 1. Live Studio Class Schedule Data
const CLASS_SCHEDULE = [
  { id: 1, day: "mon", title: "Zumba Dance Fiesta", trainer: "Coach Priya (Licensed Zumba Pro)", time: "07:30 AM - 08:30 AM", type: "zumba", intensity: "High Energy", spots: 4 },
  { id: 2, day: "mon", title: "Power Yoga & Flexibility", trainer: "Yogi Ananya", time: "09:00 AM - 10:00 AM", type: "yoga", intensity: "Mind & Core", spots: 6 },
  { id: 3, day: "mon", title: "HIIT & Functional Core", trainer: "Master Vikram", time: "06:30 PM - 07:30 PM", type: "hiit", intensity: "Extreme Burn", spots: 3 },
  { id: 4, day: "mon", title: "MMA Striking & Boxing", trainer: "Coach Amit (Pro Fighter)", time: "08:00 PM - 09:00 PM", type: "mma", intensity: "Combat Cardio", spots: 5 },

  { id: 5, day: "tue", title: "Pilates & Core Sculpt", trainer: "Coach Priya", time: "08:00 AM - 09:00 AM", type: "yoga", intensity: "Core Tone", spots: 5 },
  { id: 6, day: "tue", title: "Cross-Functional Bootcamp", trainer: "Master Vikram", time: "06:30 PM - 07:30 PM", type: "hiit", intensity: "Full Body Burn", spots: 4 },
  { id: 7, day: "tue", title: "Bollywood Cardio Blast", trainer: "Coach Priya", time: "07:30 PM - 08:30 PM", type: "zumba", intensity: "High Fun & Fat Loss", spots: 2 },

  { id: 8, day: "wed", title: "Ashtanga Flow Yoga", trainer: "Yogi Ananya", time: "07:00 AM - 08:00 AM", type: "yoga", intensity: "Mobility & Strength", spots: 8 },
  { id: 9, day: "wed", title: "Kickboxing & Conditioning", trainer: "Coach Amit", time: "06:30 PM - 07:30 PM", type: "mma", intensity: "Combative", spots: 4 },
  { id: 10, day: "wed", title: "Zumba Party Beats", trainer: "Coach Priya", time: "07:30 PM - 08:30 PM", type: "zumba", intensity: "High Cardio", spots: 5 },

  { id: 11, day: "thu", title: "Metabolic HIIT Circuit", trainer: "Master Vikram", time: "07:30 AM - 08:30 AM", type: "hiit", intensity: "Fat Annihilation", spots: 3 },
  { id: 12, day: "thu", title: "Power Yoga Balance", trainer: "Yogi Ananya", time: "06:30 PM - 07:30 PM", type: "yoga", intensity: "Deep Stretch", spots: 7 },
  { id: 13, day: "thu", title: "MMA Bag Work & Drills", trainer: "Coach Amit", time: "08:00 PM - 09:00 PM", type: "mma", intensity: "Pro Conditioning", spots: 4 },

  { id: 14, day: "fri", title: "Zumba Glow Hour", trainer: "Coach Priya", time: "07:30 AM - 08:30 AM", type: "zumba", intensity: "Cardio Fiesta", spots: 3 },
  { id: 15, day: "fri", title: "Full Body HIIT Knockout", trainer: "Master Vikram", time: "06:30 PM - 07:30 PM", type: "hiit", intensity: "High Intensity", spots: 5 },
  { id: 16, day: "fri", title: "Combat MMA Sparring Drills", trainer: "Coach Amit", time: "07:30 PM - 08:30 PM", type: "mma", intensity: "Tactical Stamina", spots: 3 },

  { id: 17, day: "sat", title: "Weekend Warrior HIIT & Core", trainer: "Master Vikram", time: "08:30 AM - 09:30 AM", type: "hiit", intensity: "Mega Burn", spots: 6 },
  { id: 18, day: "sat", title: "Super Zumba Dance Marathon", trainer: "Coach Priya", time: "10:00 AM - 11:00 AM", type: "zumba", intensity: "All Levels Fun", spots: 8 },
  { id: 19, day: "sat", title: "Evening Yin Yoga & De-stress", trainer: "Yogi Ananya", time: "06:30 PM - 07:30 PM", type: "yoga", intensity: "Therapeutic & Relax", spots: 10 },

  { id: 20, day: "sun", title: "Sunday Recovery & Deep Mobility", trainer: "Yogi Ananya", time: "04:00 PM - 05:00 PM", type: "yoga", intensity: "Full Recovery", spots: 12 },
  { id: 21, day: "sun", title: "Boxing Technique Workshop", trainer: "Coach Amit", time: "05:30 PM - 06:45 PM", type: "mma", intensity: "Skills & Agility", spots: 6 }
];

// 2. Demo Leads Store (Gym Owner Demo Proof)
let gymLeads = JSON.parse(localStorage.getItem('fittc_leads')) || [
  { name: "Aman Sharma", phone: "98182XXXXX", goal: "Weight Loss (Diet Clinic)", time: "10 mins ago", passId: "VIP-9482" },
  { name: "Ritu Verma", phone: "97110XXXXX", goal: "Zumba & Yoga Classes", time: "25 mins ago", passId: "VIP-9481" },
  { name: "Gaurav Malhotra", phone: "99583XXXXX", goal: "Muscle Building & Strength", time: "1 hour ago", passId: "VIP-9480" }
];

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  initLiveGymStatus();
  initClassSchedule();
  initBmiCalculator();
  initPricingToggle();
  initLeadModals();
  initOwnerCrmDemo();
  initWhatsAppFloating();
  initMobileNav();
});

// A. Live Gym Status Clock
function initLiveGymStatus() {
  const statusEl = document.getElementById('liveGymStatus');
  if (!statusEl) return;

  const now = new Date();
  const day = now.getDay(); // 0 is Sunday
  const currentHour = now.getHours() + now.getMinutes() / 60;

  let isOpen = false;
  let statusText = "";

  if (day === 0) { // Sunday
    if (currentHour >= GYM_CONFIG.hours.sundayOpen && currentHour < GYM_CONFIG.hours.sundayClose) {
      isOpen = true;
      statusText = "OPEN NOW (Sunday: Closes 9:00 PM)";
    } else {
      statusText = "CLOSED NOW (Opens Sunday 2:00 PM)";
    }
  } else { // Mon - Sat
    if (currentHour >= GYM_CONFIG.hours.weekdayOpen && currentHour < GYM_CONFIG.hours.weekdayClose) {
      isOpen = true;
      statusText = "OPEN NOW (Mon-Sat: Closes 10:30 PM)";
    } else {
      statusText = "CLOSED NOW (Opens 6:00 AM Mon-Sat)";
    }
  }

  statusEl.innerHTML = `
    <span class="live-dot" style="${!isOpen ? 'background-color: #ef4444; box-shadow: 0 0 10px #ef4444;' : ''}"></span>
    <span>${statusText}</span>
  `;
  if (!isOpen) {
    statusEl.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    statusEl.style.color = '#f87171';
    statusEl.style.backgroundColor = 'rgba(239, 68, 68, 0.1)';
  }
}

// B. Interactive Class Schedule
let currentScheduleDay = "mon";
let currentScheduleCat = "all";

function initClassSchedule() {
  const dayPills = document.querySelectorAll('.day-pill');
  const catPills = document.querySelectorAll('.cat-pill');

  dayPills.forEach(pill => {
    pill.addEventListener('click', () => {
      dayPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      currentScheduleDay = pill.dataset.day;
      renderClasses();
    });
  });

  catPills.forEach(pill => {
    pill.addEventListener('click', () => {
      catPills.forEach(c => c.classList.remove('active'));
      pill.classList.add('active');
      currentScheduleCat = pill.dataset.cat;
      renderClasses();
    });
  });

  renderClasses();
}

function renderClasses() {
  const container = document.getElementById('classesListContainer');
  if (!container) return;

  const filtered = CLASS_SCHEDULE.filter(item => {
    const dayMatch = item.day === currentScheduleDay;
    const catMatch = currentScheduleCat === "all" || item.type === currentScheduleCat;
    return dayMatch && catMatch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-secondary); background: rgba(255,255,255,0.02); border-radius: 12px;">
        <p>No studio classes scheduled for this category on this day.</p>
        <p style="font-size: 0.85rem; margin-top: 6px; color: var(--primary);">The general gym strength & cardio floor is open from 6:00 AM to 10:30 PM!</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="class-card">
      <div class="class-card-header">
        <div class="class-time-tag">
          <svg width="18" height="18" fill="none" stroke="currentColor" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke-width="2"></circle><path d="M12 6v6l4 2" stroke-width="2" stroke-linecap="round"></path></svg>
          ${item.time}
        </div>
        <span class="class-type-badge">${item.type.toUpperCase()}</span>
      </div>
      <h4 class="class-name">${item.title}</h4>
      <div class="class-trainer">
        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke-width="2"></path><circle cx="9" cy="7" r="4" stroke-width="2"></circle></svg>
        ${item.trainer}
      </div>
      <div class="class-meta-row">
        <span>Intensity: <strong style="color: #fff;">${item.intensity}</strong></span>
        <span class="spots-badge">⚡ ${item.spots} free spots left</span>
      </div>
      <button class="btn btn-ghost btn-sm" style="margin-top: 14px; width: 100%; border-color: rgba(203, 243, 13, 0.3);" onclick="openPassModalWithClass('${item.title}', '${item.time}')">
        Book Free Trial Spot
      </button>
    </div>
  `).join('');
}

// C. Interactive BMI & Clinical Nutrition Goal Calculator
function initBmiCalculator() {
  const weightSlider = document.getElementById('calcWeight');
  const heightSlider = document.getElementById('calcHeight');
  const goalSelect = document.getElementById('calcGoal');
  const genderRadios = document.querySelectorAll('input[name="calcGender"]');

  if (!weightSlider || !heightSlider) return;

  function updateCalculations() {
    const weight = parseFloat(weightSlider.value);
    const heightCm = parseFloat(heightSlider.value);
    const goal = goalSelect ? goalSelect.value : 'fatloss';

    document.getElementById('weightDisplay').textContent = `${weight} kg`;
    document.getElementById('heightDisplay').textContent = `${heightCm} cm`;

    // Calculate BMI = weight (kg) / (height (m))^2
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);

    const bmiValEl = document.getElementById('bmiValueDisplay');
    const bmiBadgeEl = document.getElementById('bmiCategoryBadge');
    const caloriesEl = document.getElementById('caloriesDisplay');
    const proteinEl = document.getElementById('proteinDisplay');

    if (bmiValEl) bmiValEl.textContent = bmi;

    // BMI Category Badge
    let catText = "Healthy Weight";
    let catColor = "#22c55e"; // Green
    if (bmi < 18.5) {
      catText = "Underweight";
      catColor = "#38bdf8";
    } else if (bmi >= 18.5 && bmi < 24.9) {
      catText = "Healthy Weight";
      catColor = "#22c55e";
    } else if (bmi >= 25 && bmi < 29.9) {
      catText = "Overweight";
      catColor = "#f59e0b";
    } else {
      catText = "Obese Range (Diet Recommended)";
      catColor = "#ef4444";
    }

    if (bmiBadgeEl) {
      bmiBadgeEl.textContent = catText;
      bmiBadgeEl.style.backgroundColor = `${catColor}20`;
      bmiBadgeEl.style.color = catColor;
    }

    // Basal Metabolic Rate & Target Calories
    let baseCals = 22 * weight; // approx maintenance base
    let targetCalories = baseCals;
    let targetProteinGrams = Math.round(weight * 1.8);

    if (goal === 'fatloss') {
      targetCalories = Math.round(baseCals * 0.8);
      targetProteinGrams = Math.round(weight * 2.0); // higher protein to preserve lean muscle
    } else if (goal === 'muscle') {
      targetCalories = Math.round(baseCals * 1.15);
      targetProteinGrams = Math.round(weight * 2.2);
    } else if (goal === 'pcod' || goal === 'diabetes') {
      targetCalories = Math.round(baseCals * 0.85);
      targetProteinGrams = Math.round(weight * 1.7);
    }

    if (caloriesEl) caloriesEl.textContent = `${targetCalories} kcal`;
    if (proteinEl) proteinEl.textContent = `${targetProteinGrams}g`;
  }

  weightSlider.addEventListener('input', updateCalculations);
  heightSlider.addEventListener('input', updateCalculations);
  if (goalSelect) goalSelect.addEventListener('change', updateCalculations);
  genderRadios.forEach(r => r.addEventListener('change', updateCalculations));

  // WhatsApp Diet Consultation Trigger
  const waDietBtn = document.getElementById('btnSendDietToWa');
  if (waDietBtn) {
    waDietBtn.addEventListener('click', () => {
      const weight = weightSlider.value;
      const height = heightSlider.value;
      const bmi = document.getElementById('bmiValueDisplay').textContent;
      const goal = goalSelect ? goalSelect.options[goalSelect.selectedIndex].text : 'Fitness';
      const cals = document.getElementById('caloriesDisplay').textContent;

      const message = encodeURIComponent(
        `Hello FITTC REPUBLIC Diet Clinic!\n\nI just evaluated my profile on your website:\n• Height: ${height} cm\n• Weight: ${weight} kg\n• BMI: ${bmi}\n• Target Goal: ${goal}\n• Target Calories: ${cals}\n\nI would like to book my FREE Clinical Nutrition Consultation at your Crossings Republik clinic. Please assist with appointment timing!`
      );
      window.open(`https://wa.me/${GYM_CONFIG.whatsappNumber}?text=${message}`, '_blank');
    });
  }

  updateCalculations();
}

// D. Transparent Pricing Toggle
function initPricingToggle() {
  const billingButtons = document.querySelectorAll('.billing-opt');
  const priceSilver = document.getElementById('priceSilver');
  const priceGold = document.getElementById('priceGold');
  const priceDiamond = document.getElementById('priceDiamond');
  const durationTextElements = document.querySelectorAll('.plan-duration');

  const pricingData = {
    monthly: { silver: "2,499", gold: "3,499", diamond: "4,999", period: "/ month", note: "Standard monthly access" },
    quarterly: { silver: "5,999", gold: "8,499", diamond: "11,999", period: "/ 3 months", note: "Save 20% + Free InBody Scan" },
    annual: { silver: "14,999", gold: "21,999", diamond: "29,999", period: "/ 12 months", note: "Best Value: 40% OFF + 2 Months Extra" }
  };

  billingButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      billingButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const plan = btn.dataset.plan;

      if (priceSilver) priceSilver.textContent = pricingData[plan].silver;
      if (priceGold) priceGold.textContent = pricingData[plan].gold;
      if (priceDiamond) priceDiamond.textContent = pricingData[plan].diamond;

      durationTextElements.forEach(el => {
        el.textContent = pricingData[plan].period;
      });
    });
  });
}

// E. Digital VIP Pass Modal & Lead Generation
function initLeadModals() {
  const modal = document.getElementById('vipPassModal');
  const openButtons = document.querySelectorAll('.js-open-vip-pass');
  const closeButton = document.getElementById('closeVipPassModal');
  const form = document.getElementById('vipPassForm');

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      if (modal) modal.classList.add('open');
    });
  });

  if (closeButton && modal) {
    closeButton.addEventListener('click', () => modal.classList.remove('open'));
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('open');
    });
  }

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('passUserName').value;
      const phone = document.getElementById('passUserPhone').value;
      const goal = document.getElementById('passUserGoal').value;
      const timeSlot = document.getElementById('passUserSlot').value;

      const randomId = "VIP-" + Math.floor(1000 + Math.random() * 9000);

      // Save to demo CRM leads
      gymLeads.unshift({
        name: name,
        phone: phone,
        goal: goal,
        time: "Just now",
        passId: randomId
      });
      localStorage.setItem('fittc_leads', JSON.stringify(gymLeads));
      renderCrmLeads();

      // Show Success Pass in Modal
      const modalBody = document.getElementById('vipModalBody');
      if (modalBody) {
        modalBody.innerHTML = `
          <div style="text-align: center;">
            <div style="width: 60px; height: 60px; background: rgba(203, 243, 13, 0.15); border-radius: 50%; color: var(--primary); display: flex; align-items: center; justify-content: center; margin: 0 auto 16px auto; font-size: 1.8rem;">
              ✓
            </div>
            <h3 style="font-family: var(--font-heading); font-size: 2.2rem; color: #fff; margin-bottom: 6px;">VIP PASS CONFIRMED!</h3>
            <p style="color: var(--text-secondary); font-size: 0.9rem;">Your 1-Day All-Access Pass is generated. Present this at the front desk at La Gracia Mall, Crossings Republik.</p>

            <div class="vip-ticket-preview">
              <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed rgba(255,255,255,0.15); padding-bottom: 12px; margin-bottom: 12px;">
                <span style="font-family: var(--font-heading); font-size: 1.3rem; color: var(--primary);">FITTC REPUBLIC</span>
                <span style="font-size: 0.75rem; background: var(--primary); color: #000; font-weight: 800; padding: 2px 8px; border-radius: 4px;">1-DAY VIP PASS</span>
              </div>
              <div style="text-align: left; font-size: 0.88rem; line-height: 1.8;">
                <div><span style="color: var(--text-muted);">Guest Name:</span> <strong>${name}</strong></div>
                <div><span style="color: var(--text-muted);">Pass ID:</span> <strong style="color: var(--primary);">${randomId}</strong></div>
                <div><span style="color: var(--text-muted);">Focus Goal:</span> <span>${goal}</span></div>
                <div><span style="color: var(--text-muted);">Preferred Timing:</span> <span>${timeSlot}</span></div>
                <div><span style="color: var(--text-muted);">Facility:</span> <span>3rd Floor, Newtech La Gracia Mall</span></div>
              </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px;">
              <a href="https://wa.me/${GYM_CONFIG.whatsappNumber}?text=${encodeURIComponent(`Hi FITTC REPUBLIC team! I just generated my 1-Day VIP Pass on your website.\n\nPass ID: ${randomId}\nName: ${name}\nPhone: ${phone}\nGoal: ${goal}\nSlot: ${timeSlot}\n\nPlease confirm my slot!`)}" target="_blank" class="btn btn-whatsapp" style="width: 100%;">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.299.144.347.491 1.2.534 1.288.043.088.072.19.014.305-.058.115-.087.187-.173.289l-.26.309c-.087.088-.178.184-.076.359.101.174.451.744.968 1.205.666.593 1.227.777 1.401.864.174.088.275.073.377-.044.101-.116.433-.506.549-.68.116-.174.231-.145.39-.087s1.011.477 1.184.564.289.13.332.203c.043.073.043.421-.101.826z"/></svg>
                Send to WhatsApp Desk
              </a>
              <button class="btn btn-ghost" onclick="document.getElementById('vipPassModal').classList.remove('open')">Done</button>
            </div>
          </div>
        `;
      }
    });
  }

  // Also handle Hero Inline Lead Form
  const heroForm = document.getElementById('heroLeadForm');
  if (heroForm) {
    heroForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const name = document.getElementById('heroLeadName').value;
      const phone = document.getElementById('heroLeadPhone').value;
      const goal = document.getElementById('heroLeadGoal').value;
      const randomId = "VIP-" + Math.floor(1000 + Math.random() * 9000);

      gymLeads.unshift({
        name: name,
        phone: phone,
        goal: goal,
        time: "Just now",
        passId: randomId
      });
      localStorage.setItem('fittc_leads', JSON.stringify(gymLeads));
      renderCrmLeads();

      const message = encodeURIComponent(
        `Hi FITTC REPUBLIC Gym & Diet Clinic!\n\nI want to claim my 1-Day VIP Guest Pass:\n• Name: ${name}\n• Phone: ${phone}\n• Fitness Goal: ${goal}\n• VIP Pass Code: ${randomId}\n\nPlease let me know suitable slots today!`
      );
      window.open(`https://wa.me/${GYM_CONFIG.whatsappNumber}?text=${message}`, '_blank');
      heroForm.reset();
      alert(`Success! VIP Pass ${randomId} generated. Opening WhatsApp to confirm your slot with front desk.`);
    });
  }
}

// Helper to open pass modal with class pre-selected
window.openPassModalWithClass = function(className, classTime) {
  const modal = document.getElementById('vipPassModal');
  if (modal) {
    modal.classList.add('open');
    const goalSelect = document.getElementById('passUserGoal');
    if (goalSelect) goalSelect.value = "Group Fitness Class";
    const slotSelect = document.getElementById('passUserSlot');
    if (slotSelect) {
      slotSelect.innerHTML = `<option value="${className} (${classTime})">${className} (${classTime})</option>` + slotSelect.innerHTML;
      slotSelect.value = `${className} (${classTime})`;
    }
  }
};

// F. Gym Owner Pitch CRM Drawer (The Ultimate Closing Tool for Client Pitch)
function initOwnerCrmDemo() {
  const pitchBadge = document.getElementById('clientPitchBadge');
  const drawer = document.getElementById('crmPreviewDrawer');
  const closeBtn = document.getElementById('closeCrmDrawer');

  if (pitchBadge && drawer) {
    pitchBadge.addEventListener('click', () => {
      drawer.classList.toggle('open');
    });
  }

  if (closeBtn && drawer) {
    closeBtn.addEventListener('click', () => {
      drawer.classList.remove('open');
    });
  }

  renderCrmLeads();
}

function renderCrmLeads() {
  const container = document.getElementById('crmLeadsContainer');
  const countBadge = document.getElementById('crmLeadCount');
  if (!container) return;

  if (countBadge) countBadge.textContent = gymLeads.length;

  container.innerHTML = gymLeads.map(lead => `
    <div class="crm-lead-item">
      <div class="crm-lead-name">
        <span>${lead.name}</span>
        <span style="color: var(--primary); font-family: var(--font-heading);">${lead.passId}</span>
      </div>
      <div class="crm-lead-detail">📞 ${lead.phone} • 🎯 ${lead.goal}</div>
      <div style="font-size: 0.7rem; color: var(--text-muted); margin-top: 4px; display: flex; justify-content: space-between;">
        <span>Captured via Website</span>
        <span>${lead.time}</span>
      </div>
    </div>
  `).join('');
}

// G. Floating WhatsApp Assistant
function initWhatsAppFloating() {
  const floatBtn = document.getElementById('floatingWaBtn');
  const chatBubble = document.getElementById('waChatBubble');
  const closeBubble = document.getElementById('closeWaBubble');

  if (floatBtn && chatBubble) {
    floatBtn.addEventListener('click', () => {
      chatBubble.classList.toggle('open');
    });
  }

  if (closeBubble && chatBubble) {
    closeBubble.addEventListener('click', () => {
      chatBubble.classList.remove('open');
    });
  }

  // Preset options inside bubble
  const quickOptions = document.querySelectorAll('.quick-wa-option');
  quickOptions.forEach(opt => {
    opt.addEventListener('click', () => {
      const msg = encodeURIComponent(opt.dataset.msg || opt.textContent.trim());
      window.open(`https://wa.me/${GYM_CONFIG.whatsappNumber}?text=${msg}`, '_blank');
      if (chatBubble) chatBubble.classList.remove('open');
    });
  });
}

// H. Mobile Navigation Drawer
function initMobileNav() {
  const toggle = document.getElementById('mobileNavToggle');
  const menu = document.getElementById('navMenu');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', menu.classList.contains('open'));
    });

    // Close when clicking nav link
    const links = menu.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('open');
      });
    });
  }
}

// // Main JavaScript - Dynamic data loading
// const countriesData = [
//   { icon: "fa-map-marker-alt", name: "Germany", reach: "Tech hubs (Berlin, Munich)", jobs: "IT, Engineering, Healthcare", tag: "Visa sponsorship" },
//   { icon: "fa-globe-americas", name: "Canada", reach: "Toronto, Vancouver", jobs: "Software, Construction", tag: "Express Entry" },
//   { icon: "fa-leaf", name: "Australia", reach: "Sydney, Melbourne", jobs: "Healthcare, IT, Trades", tag: "Skill visa" },
//   { icon: "fa-building", name: "UAE", reach: "Dubai, Abu Dhabi", jobs: "Finance, Hospitality", tag: "Tax-free" },
//   { icon: "fa-chart-line", name: "Singapore", reach: "SE Asia Hub", jobs: "Fintech, AI, Marketing", tag: "Work pass" }
// ];

// const clientsData = [
//   { img: "https://randomuser.me/api/portraits/women/68.jpg", name: "Priya Mehta", company: "Data Analyst @ Berlin Tech", review: "GlobalBridge made my move seamless!" },
//   { img: "https://randomuser.me/api/portraits/men/32.jpg", name: "Carlos Mendez", company: "Project Manager, Toronto", review: "From resume to Canada - amazing support!" },
//   { img: "https://randomuser.me/api/portraits/women/45.jpg", name: "Sarah Johnson", company: "UX Designer, Sydney", review: "Got job in Australia within 3 months!" },
//   { img: "https://randomuser.me/api/portraits/men/75.jpg", name: "Ahmed Rizvi", company: "Finance, Dubai", review: "Thriving in UAE's finance sector!" }
// ];

// function loadCountries() {
//   const grid = document.getElementById('countriesGrid');
//   if (!grid) return;
//   grid.innerHTML = countriesData.map(c => `
//     <div class="country-card">
//       <i class="fas ${c.icon}"></i>
//       <h3>${c.name}</h3>
//       <p><strong>Reach:</strong> ${c.reach}</p>
//       <p><strong>Jobs:</strong> ${c.jobs}</p>
//       <div class="job-tag">${c.tag}</div>
//     </div>
//   `).join('');
// }

// function loadClients() {
//   const grid = document.getElementById('clientsGrid');
//   if (!grid) return;
//   grid.innerHTML = clientsData.map(c => `
//     <div class="client-card">
//       <img src="${c.img}" alt="${c.name}">
//       <h4>${c.name}</h4>
//       <div class="company">${c.company}</div>
//       <p>"${c.review}"</p>
//     </div>
//   `).join('');
// }

// document.addEventListener('DOMContentLoaded', () => {
//   loadCountries();
//   loadClients();
// });

// // // Main JavaScript - Vinayak Overseas
// // const countriesData = [
// //   { icon: "fa-map-marker-alt", name: "Germany", reach: "Berlin, Munich, Frankfurt", jobs: "IT Specialists, Engineers, Nurses", tag: "Visa Sponsorship Ready", opportunities: "500+ jobs" },
// //   { icon: "fa-globe-americas", name: "Canada", reach: "Toronto, Vancouver, Calgary", jobs: "Software Dev, Construction, Healthcare", tag: "Express Entry Partners", opportunities: "800+ jobs" },
// //   { icon: "fa-leaf", name: "Australia", reach: "Sydney, Melbourne, Perth", jobs: "Healthcare, IT, Trades", tag: "Skill Visa Available", opportunities: "600+ jobs" },
// //   { icon: "fa-building", name: "UAE", reach: "Dubai, Abu Dhabi, Sharjah", jobs: "Finance, Hospitality, Aviation", tag: "Tax-Free Income", opportunities: "400+ jobs" },
// //   { icon: "fa-chart-line", name: "Singapore", reach: "Singapore City", jobs: "Fintech, AI, Marketing", tag: "Work Holiday Pass", opportunities: "300+ jobs" },
// //   { icon: "fa-europe", name: "UK", reach: "London, Manchester, Birmingham", jobs: "Tech, Finance, Education", tag: "Skilled Worker Visa", opportunities: "450+ jobs" }
// // ];

// const clientsData = [
//   { img: "https://randomuser.me/api/portraits/women/68.jpg", name: "Priya Mehta", company: "Data Analyst @ Berlin Tech", review: "Vinayak Overseas made my move to Germany seamless! The team was incredibly supportive throughout.", rating: 5 },
//   { img: "https://randomuser.me/api/portraits/men/32.jpg", name: "Carlos Mendez", company: "Project Manager, Toronto", review: "From resume prep to landing a role in Canada - they supported every step. Highly recommended!", rating: 5 },
//   { img: "https://randomuser.me/api/portraits/women/45.jpg", name: "Sarah Johnson", company: "UX Designer, Sydney", review: "I got my dream job in Australia within 3 months. Their country specialists truly understand local markets.", rating: 5 },
//   { img: "https://randomuser.me/api/portraits/men/75.jpg", name: "Ahmed Rizvi", company: "Finance Manager, Dubai", review: "Professional, fast, and reliable. Thanks to Vinayak Overseas, I'm thriving in UAE's finance sector.", rating: 5 },
//   { img: "https://randomuser.me/api/portraits/women/33.jpg", name: "Emily Wong", company: "Software Engineer, Singapore", review: "The best overseas consultancy I've worked with. They handled everything from visa to accommodation.", rating: 5 }
// ];

// function loadCountries() {
//   const grid = document.getElementById('countriesGrid');
//   if (!grid) return;
  
//   grid.innerHTML = countriesData.map(country => `
//     <div class="country-card">
//       <i class="fas ${country.icon}"></i>
//       <h3>${country.name}</h3>
//       <p><strong>📍 Reach:</strong> ${country.reach}</p>
//       <p><strong>💼 Jobs:</strong> ${country.jobs}</p>
//       <p><strong>📊 Openings:</strong> ${country.opportunities}</p>
//       <div class="job-tag">${country.tag}</div>
//     </div>
//   `).join('');
// }

// function loadClients() {
//   const grid = document.getElementById('clientsGrid');
//   if (!grid) return;
  
//   grid.innerHTML = clientsData.map(client => `
//     <div class="client-card">
//       <img src="${client.img}" alt="${client.name}">
//       <h4>${client.name}</h4>
//       <div class="company">${client.company}</div>
//       <div class="rating">
//         ${'★'.repeat(client.rating)}${'☆'.repeat(5-client.rating)}
//       </div>
//       <p>"${client.review}"</p>
//     </div>
//   `).join('');
// }

// // Smooth scroll for all anchor links
// document.addEventListener('DOMContentLoaded', () => {
//   loadCountries();
//   loadClients();
  
//   // Add active class to nav links on scroll
//   const sections = document.querySelectorAll('section');
//   const navLinks = document.querySelectorAll('.nav-options a');
  
//   window.addEventListener('scroll', () => {
//     let current = '';
//     sections.forEach(section => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;
//       if (scrollY >= (sectionTop - 200)) {
//         current = section.getAttribute('id');
//       }
//     });
    
//     navLinks.forEach(link => {
//       link.classList.remove('active');
//       if (link.getAttribute('href') === `#${current}`) {
//         link.classList.add('active');
//       }
//     });
//   });
// });

// // ================= COUNTRIES DATA =================
// const countriesData = [
//   {
//     name: "Macau",
//     image: "assets/Macau.jpg",
//     jobs: "Hospitality, Casino, Service",
//     salary: "$1200 - $3000",
//     tag: "Reach Available"
//   },
//   {
//     name: "Mauritius",
//     image: "assets/Mauritius.jpg",
//     jobs: "Hotel, Tourism",
//     salary: "$800 - $2000",
//     tag: "Reach with Job"
//   },
//   {
//     name: "Malaysia",
//     image: "assets/Malaysia.jpg",
//     jobs: "Factory, IT, Service",
//     salary: "$1000 - $2500",
//     tag: "Reach with Job"
//   },
//   {
//     name: "Singapore",
//     image: "assets/Singapore.jpg",
//     jobs: "IT, Marketing",
//     salary: "$2000 - $5000",
//     tag: "Work Permit"
//   },
//   {
//     name: "Russia",
//     image: "assets/Russia.jpg",
//     jobs: "Construction",
//     salary: "$1000 - $3000",
//     tag: "Reach with Job"
//   },
//   {
//     name: "Azerbaijan",
//     image: "assets/Azerbaijan.jpg",
//     jobs: "Oil, Construction",
//     salary: "$1200 - $2800",
//     tag: "Reach with Job"
//   },
//   {
//     name: "Schengen",
//     image: "assets/europe.jpg",
//     jobs: "Hotel, Warehouse",
//     salary: "€1200 - €3500",
//     tag: "Work Permit"
//   },
//   {
//     name: "Canada",
//     image: "assets/canada.jpg",
//     jobs: "IT, Construction",
//     salary: "$3000 - $6000",
//     tag: "Reach Available"
//   },
//   {
//     name: "Australia",
//     image: "assets/australia.jpg",
//     jobs: "Healthcare",
//     salary: "$3500 - $7000",
//     tag: "Reach Available"
//   },
//   {
//     name: "USA",
//     image: "assets/usa.jpg",
//     jobs: "IT, Hospitality",
//     salary: "$4000 - $8000",
//     tag: "Reach Available"
//   },
//   {
//     name: "New Zealand",
//     image: "assets/nz.jpg",
//     jobs: "Farming",
//     salary: "$3000 - $5000",
//     tag: "Work Permit"
//   },
//   {
//     name: "Portugal",
//     image: "assets/portugal.jpg",
//     jobs: "Hotel, Driving",
//     salary: "€1000 - €2500",
//     tag: "Work Permit"
//   }
// ];

// // ================= FLAG FUNCTION =================
// function getFlag(country) {
//   const flags = {
//     "Macau": "🇲🇴",
//     "Mauritius": "🇲🇺",
//     "Malaysia": "🇲🇾",
//     "Singapore": "🇸🇬",
//     "Russia": "🇷🇺",
//     "Azerbaijan": "🇦🇿",
//     "Schengen": "🇪🇺",
//     "Canada": "🇨🇦",
//     "Australia": "🇦🇺",
//     "USA": "🇺🇸",
//     "New Zealand": "🇳🇿",
//     "Portugal": "🇵🇹"
//   };
//   return flags[country] || "🌍";
// }

// // ================= LOAD COUNTRIES =================
// function loadCountries() {
//   const grid = document.getElementById("countriesGrid");
//   if (!grid) return;

//   grid.innerHTML = countriesData.map(c => `
//     <div class="country-card">

//       <img src="${c.image}" class="country-img" />

//       <div class="country-content">
//         <h3>${getFlag(c.name)} ${c.name}</h3>

//         <p><strong>Jobs:</strong> ${c.jobs}</p>
//         <p><strong>Salary:</strong> ${c.salary}</p>

//         <span class="job-tag">${c.tag}</span>
//       </div>

//     </div>
//   `).join("");
// }

// // ================= INIT =================
// document.addEventListener("DOMContentLoaded", () => {
//   loadCountries();
// });


// ================= COUNTRIES DATA =================
const countriesData = [
  { name: "Macau", image: "assets/macau.jpg", jobs: "Hospitality, Casino", salary: "$1200 - $3000", tag: "Reach Available" },
  { name: "Mauritius", image: "assets/mauritius.jpg", jobs: "Hotel, Tourism", salary: "$800 - $2000", tag: "Reach with Job" },
  { name: "Malaysia", image: "assets/malaysia.jpg", jobs: "Factory, IT", salary: "$1000 - $2500", tag: "Reach with Job" },
  { name: "Singapore", image: "assets/singapore.jpg", jobs: "IT, Marketing", salary: "$2000 - $5000", tag: "Work Permit" },
  { name: "Russia", image: "assets/russia.jpg", jobs: "Construction", salary: "$1000 - $3000", tag: "Reach with Job" },
  { name: "Azerbaijan", image: "assets/azerbaijan.jpg", jobs: "Oil, Construction", salary: "$1200 - $2800", tag: "Reach with Job" },
  { name: "Schengen", image: "assets/Schengen.jpg", jobs: "Hotel, Warehouse", salary: "€1200 - €3500", tag: "Work Permit" },
  { name: "Canada", image: "assets/canada.jpg", jobs: "IT, Construction", salary: "$3000 - $6000", tag: "Reach Available" },
  { name: "Australia", image: "assets/australia.jpg", jobs: "Healthcare", salary: "$3500 - $7000", tag: "Reach Available" },
  { name: "USA", image: "assets/usa.jpg", jobs: "IT, Hospitality", salary: "$4000 - $8000", tag: "Reach Available" },
  { name: "New Zealand", image: "assets/nz.jpg", jobs: "Farming", salary: "$3000 - $5000", tag: "Work Permit" },
  { name: "Portugal", image: "assets/portugal.jpg", jobs: "Hotel, Driving", salary: "€1000 - €2500", tag: "Work Permit" }
];

// ================= CLIENTS DATA =================
const clientsData = [
  {
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Priya Mehta",
    company: "Germany",
    review: "Got job in Germany within 2 months. Very smooth process!",
    rating: 5
  },
  {
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Rahul Verma",
    company: "Canada",
    review: "From interview to visa everything handled perfectly.",
    rating: 5
  },
  {
    img: "https://randomuser.me/api/portraits/women/45.jpg",
    name: "Neha Sharma",
    company: "Australia",
    review: "Amazing support, got job in 3 months.",
    rating: 5
  },
  {
    img: "https://randomuser.me/api/portraits/men/75.jpg",
    name: "Imran Khan",
    company: "Dubai",
    review: "Professional and fast service. Highly recommended.",
    rating: 5
  }
];

// ================= FLAGS =================
function getFlag(country) {
  const flags = {
    "Macau": "🇲🇴",
    "Mauritius": "🇲🇺",
    "Malaysia": "🇲🇾",
    "Singapore": "🇸🇬",
    "Russia": "🇷🇺",
    "Azerbaijan": "🇦🇿",
    "Schengen": "🇪🇺",
    "Canada": "🇨🇦",
    "Australia": "🇦🇺",
    "USA": "🇺🇸",
    "New Zealand": "🇳🇿",
    "Portugal": "🇵🇹"
  };
  return flags[country] || "🌍";
}

// ================= LOAD COUNTRIES =================
function loadCountries() {
  const grid = document.getElementById("countriesGrid");
  if (!grid) return;

  grid.innerHTML = countriesData.map(c => `
    <div class="country-card">
      <img src="${c.image}" class="country-img" />

      <div class="country-content">
        <h3>${getFlag(c.name)} ${c.name}</h3>
        <p><strong>Jobs:</strong> ${c.jobs}</p>
        <p><strong>Salary:</strong> ${c.salary}</p>
        <span class="job-tag">${c.tag}</span>
      </div>
    </div>
  `).join("");
}

// ================= LOAD CLIENTS =================
function loadClients() {
  const grid = document.getElementById("clientsGrid");
  if (!grid) return;

  grid.innerHTML = clientsData.map(c => `
    <div class="client-card">
      <img src="${c.img}" alt="${c.name}">
      <h4>${c.name}</h4>
      <div class="company">${c.company}</div>

      <div class="rating">
        ${"★".repeat(c.rating)}${"☆".repeat(5 - c.rating)}
      </div>

      <p>"${c.review}"</p>
    </div>
  `).join("");
}

// ================= INIT =================
document.addEventListener("DOMContentLoaded", () => {
  loadCountries();
  loadClients();
});
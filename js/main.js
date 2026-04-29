
const countriesData = [
  { name: "Macau", image: "assets/macau.jpg", jobs: "Hospitality, Casino", salary: "$1200 - $3000", tag: "Reach Available" },
  { name: "Mauritius", image: "assets/Mauritius.jpg", jobs: "Hotel, Tourism", salary: "$800 - $2000", tag: "Reach with Job" },
  { name: "Malaysia", image: "assets/Malaysia.jpg", jobs: "Factory, IT", salary: "$1000 - $2500", tag: "Reach with Job" },
  { name: "Singapore", image: "assets/Singapore.jpg", jobs: "IT, Marketing", salary: "$2000 - $5000", tag: "Work Permit" },
  { name: "Russia", image: "assets/Russia.jpg", jobs: "Construction", salary: "$1000 - $3000", tag: "Reach with Job" },
  { name: "Azerbaijan", image: "assets/Azerbaijan.jpg", jobs: "Oil, Construction", salary: "$1200 - $2800", tag: "Reach with Job" },
  { name: "Schengen", image: "assets/Schengen.jpg", jobs: "Hotel, Warehouse", salary: "€1200 - €3500", tag: "Work Permit" },
  { name: "Canada", image: "assets/Canada.jpg", jobs: "IT, Construction", salary: "$3000 - $6000", tag: "Reach Available" },
  { name: "Australia", image: "assets/Australia.jpg", jobs: "Healthcare", salary: "$3500 - $7000", tag: "Reach Available" },
  { name: "USA", image: "assets/USA.jpg", jobs: "IT, Hospitality", salary: "$4000 - $8000", tag: "Reach Available" },
  { name: "New Zealand", image: "assets/nz.jpg", jobs: "Farming", salary: "$3000 - $5000", tag: "Work Permit" },
  { name: "Portugal", image: "assets/Portugal.jpg", jobs: "Hotel, Driving", salary: "€1000 - €2500", tag: "Work Permit" }
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
const reviews = [
  {
    name: "Giulia",
    date: "2024-04-15",
    stars: 5,
    category: "servizio",
    text: "Servizio eccellente! Staff disponibile e veloce. Consigliatissimo."
  },
  {
    name: "Marco",
    date: "2024-04-10",
    stars: 3,
    category: "prodotto",
    text: "Il prodotto era buono, ma la spedizione ha tardato di 5 giorni."
  },
  {
    name: "Laura",
    date: "2024-03-25",
    stars: 4,
    category: "struttura",
    text: "Struttura pulita, posizione strategica, ma il Wi-Fi era debole."
  },
  {
    name: "Davide",
    date: "2024-03-20",
    stars: 2,
    category: "servizio",
    text: "Esperienza deludente. Il supporto clienti non ha risposto."
  }
];

const reviewContainer = document.getElementById('reviews');

function renderReviews(filtered = reviews) {
  reviewContainer.innerHTML = '';
  filtered.forEach(r => {
    reviewContainer.innerHTML += `
      <div class="review">
        <div class="meta"><strong>${r.name}</strong> - ${r.date}</div>
        <div class="stars">${'★'.repeat(r.stars)}${'☆'.repeat(5 - r.stars)}</div>
        <p>${r.text}</p>
      </div>
    `;
  });
}

renderReviews();

// Filtro dinamico
document.getElementById("filterStars").addEventListener("change", () => {
  applyFilters();
});
document.getElementById("filterDate").addEventListener("change", () => {
  applyFilters();
});
document.getElementById("filterCategory").addEventListener("change", () => {
  applyFilters();
});

function applyFilters() {
  let stars = document.getElementById("filterStars").value;
  let date = document.getElementById("filterDate").value;
  let category = document.getElementById("filterCategory").value;

  let filtered = reviews.filter(r => {
    let starsMatch = stars === "all" || r.stars == stars;
    let categoryMatch = category === "all" || r.category === category;
    return starsMatch && categoryMatch;
  });

  filtered.sort((a, b) => {
    return date === "latest"
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  renderReviews(filtered);
}

document.getElementById("loadMore").addEventListener("click", () => {
  alert("Qui potresti caricare altre recensioni dal backend o API.");
});

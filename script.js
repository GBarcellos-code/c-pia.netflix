// Simulação de busca na barra de pesquisa
document.getElementById("search-bar").addEventListener("keyup", (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const allItems = document.querySelectorAll(".carousel-item p");
  
    allItems.forEach(item => {
      if (item.textContent.toLowerCase().includes(searchTerm)) {
        item.parentElement.style.display = "block";
      } else {
        item.parentElement.style.display = "none";
      }
    });
  });
  
  // Link para "Minha Conta" funciona como redirecionamento
  document.getElementById("account-link").addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = "account.html";
  });

// Faz a rolagem do mouse mover o carrossel na horizontal
const carousels = document.querySelectorAll(".carousel-container");

carousels.forEach((carousel) => {
  carousel.addEventListener('wheel', (event) => {
    event.preventDefault(); // Impede a rolagem vertical padrão
    carousel.scrollLeft += event.deltaY; // Move horizontalmente com o movimento do scroll
  });
});

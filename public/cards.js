function showCards(cardId) {
  var cardSections = document.querySelectorAll(".cards");
  cardSections.forEach(function (section) {
    if (section.id === cardId) {
      section.style.display = "block";
    } else {
      section.style.display = "none";
    }
  });
}

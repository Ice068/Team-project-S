function flipCard(card){
  card.classList.toggle("flip");
}

function goPage(event, page){
  event.stopPropagation(); // ป้องกันไม่ให้การ์ดพลิกซ้ำ
  window.location.href = page;
}

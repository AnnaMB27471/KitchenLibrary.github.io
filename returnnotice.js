document.getElementById("rentalForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const startDate = new Date(document.getElementById("startDate").value);
  const email = document.getElementById("email").value;

  // Add 14 days (two weeks)
  const returnDate = new Date(startDate);
  returnDate.setDate(returnDate.getDate() + 14);

  document.getElementById("returnDate").textContent =
    "Your rental return date is: " + returnDate.toDateString() });

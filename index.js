document.getElementById("queryForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const queryData = new URLSearchParams(formData);

  console.log("📤 Submitting query:", queryData.toString());

  fetch("https://script.google.com/macros/s/AKfycbyIlJttIYWswT4-dgtYAHkHnZqVuaUpskOxCbuPAnOPLU3LiCk4Blgzn5-4Fj0LaCL5Gw/exec", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded" // 👈 force correct type
    },
    body: queryData.toString()
  })
  .then(res => res.text())
  .then(response => {
    console.log("✅ Response from server:", response);
    alert("Submitted!");
    form.reset();
  })
  .catch(err => {
    console.error("❌ Fetch error:", err);
    alert("Submission failed!");
  });
});

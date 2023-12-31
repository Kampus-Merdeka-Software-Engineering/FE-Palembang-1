//function Show Password
function myFunction() {
  var x = document.getElementById("myinput1");
  var y = document.getElementById("myinput2");

  if (x.type === "password" && y.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}

// go to Another Page for Sign In Button
document.addEventListener("DOMContentLoaded", function() {
            // Mengatur onclick event untuk tombol "Sign In"
            document.getElementById("btnsignIn").onclick = function() {
                window.location.href = "signIn.html";
            };
        });
  

// script.js Handle Register
// script.js
document
  .getElementById("register-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const firstname = document.getElementById("firstName").value;
    const lastname = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("myinput1").value;
    const confirmPassword = document.getElementById("myinput2").value;

    // Buat permintaan HTTP POST ke endpoint registrasi di backend
    fetch("https://backend-group1-production.up.railway.app/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        password,
        confirmPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle respons dari backend di sini
        // Misalnya, tampilkan pesan sukses atau pesan kesalahan
        if (data.message === "User registered successfully") {
          alert("Registrasi berhasil! Silakan login.");
           const signupButton = document.getElementById("signupBtn");
          
          // Menambahkan class ke elemen tombol login
          signupButton.classList.add("signupbtn");

          window.location.href = "signIn.html";
        } else {
          alert("Registrasi gagal. Silakan coba lagi.");
        }
      })
      .catch((error) => {
        // Handle kesalahan jika terjadi selama permintaan
        console.error("Terjadi kesalahan:", error);
      });
  });

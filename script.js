function sendMail() {
    var params = {
        from_name: document.getElementById("fullName").value,
        email_id: document.getElementById("email_id").value,
        message: document.getElementById("message").value
    }
    emailjs.send("service_vnl4knj", "template_08z386x", params).then(function (res) {
        alert("Your Email Sent Successfully!");
    })
}
$('.cover').paroller();

$("#contact-form").submit((e) => {
  e.preventDefault();
  let myEmail = "jibm_82@yahoo.com.mx";
  let name = $("#name").val().trim();
  let email = $("#email").val().trim();
  let message = $("#message").val().trim();
  let emailBody = `Name: ${name}
    Email: ${email}
    Message: ${message}
  `;

  Email.send(
    myEmail,
    myEmail,
    `New contact form message from ${name} - ${email}`,
    message,
    { token: "659fd5c2-77ab-4c22-ab73-27050299be9b" }
  );
});
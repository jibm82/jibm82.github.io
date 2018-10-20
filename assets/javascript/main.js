$('.cover').paroller();

$("#contact-form").submit((e) => {
  e.preventDefault();

  const form = $(e.currentTarget);

  if (!form.hasClass("disabled")) {
    form.addClass("disabled");

    let myEmail = "jibm_82@yahoo.com.mx";

    let name = $("#name").val().trim();
    let email = $("#email").val().trim();
    let message = $("#message").val().trim();

    Email.send(
      myEmail,
      myEmail,
      `New contact form message from ${name} - ${email}`,
      message,
      {
        token: "68497cd5-c484-4aab-9818-0154648a69c5",
        callback: function done(message) {
          $(".form-control").val("");
          swal({
            type: "success",
            title: "Message sent!",
            text: "Thank you for contact me, I will get back to you ASAP!"
          });
          form.removeClass("disabled");
        }
      }
    );
  }
});


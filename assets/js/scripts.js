// $(document).ready(function(){
//   // Add smooth scrolling to all links in navbar + footer link
//   $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
//
//     // Prevent default anchor click behavior
//     event.preventDefault();
//
//     // Store hash
//     var hash = this.hash;
//
//     // Using jQuery's animate() method to add smooth page scroll
//     // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
//     $('html, body').animate({
//       scrollTop: $(hash).offset().top
//     }, 900, function(){
//
//       // Add hash (#) to URL when done scrolling (default click behavior)
//       window.location.hash = hash;
//     });
//   });
//
//   // Slide in elements on scroll
//   $(window).scroll(function() {
//     $(".slideanim").each(function(){
//       var pos = $(this).offset().top;
//
//       var winTop = $(window).scrollTop();
//         if (pos < winTop + 600) {
//           $(this).addClass("slide");
//         }
//     });
//   });
// })
$(document).ready(function(){
  $('#feedback_submit').on('click', function(e) {
    e.preventDefault();
    var formdata = $('#feedback_form').serialize();
    console.log(formdata);
    // var feedbackdata = {
    //   name: $("#feedback_name").val(),
    //   email: $("#feedback_email").val(),
    //   comments: $("#feedback_comments").val()
    // };
    //console.log('feedback data sent ! /n Name: ' + name + ', /n Email: ' + email + ', /n Comments: ' + comments);
    $.ajax({
        type: "POST",
        url: "send-feedback.php",
        data: formdata,
        success: function(){
          console.log('data sent successfully !');
          $('.info_msg').addClass('alert alert-info').fadeIn(4000).css('display', 'block').html('Your feedback was submitted successfully !');
          setTimeout(function() {
            $('.info_msg').removeClass('alert alert-info').fadeOut(4000).css('display', 'none');
          }, 5000);

        },
        error: function() {
          console.log('error in sending data !');
          $('.info_msg').addClass('alert alert-danger').fadeIn(4000).css('display', 'block').html('Error submitting feedback !');
          setTimeout(function() {
            $('.info_msg').removeClass('alert alert-info').fadeOut(4000).css('display', 'none');
          }, 5000);
        }
    });
  });
})

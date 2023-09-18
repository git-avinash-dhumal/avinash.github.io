// /**
// * PHP Email Form Validation - v3.6
// * URL: https://bootstrapmade.com/php-email-form/
// * Author: BootstrapMade.com
// */
// (function () {
//   "use strict";

//   let forms = document.querySelectorAll('.php-email-form');

//   forms.forEach( function(e) {
//     e.addEventListener('submit', function(event) {
//       event.preventDefault();

//       let thisForm = this;

//       let action = thisForm.getAttribute('action');
//       let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
//       if( ! action ) {
//         displayError(thisForm, 'The form action property is not set!');
//         return;
//       }
//       thisForm.querySelector('.loading').classList.add('d-block');
//       thisForm.querySelector('.error-message').classList.remove('d-block');
//       thisForm.querySelector('.sent-message').classList.remove('d-block');

//       let formData = new FormData( thisForm );

//       if ( recaptcha ) {
//         if(typeof grecaptcha !== "undefined" ) {
//           grecaptcha.ready(function() {
//             try {
//               grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
//               .then(token => {
//                 formData.set('recaptcha-response', token);
//                 php_email_form_submit(thisForm, action, formData);
//               })
//             } catch(error) {
//               displayError(thisForm, error);
//             }
//           });
//         } else {
//           displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
//         }
//       } else {
//         php_email_form_submit(thisForm, action, formData);
//       }
//     });
//   });

//   function php_email_form_submit(thisForm, action, formData) {
//     fetch(action, {
//       method: 'POST',
//       body: formData,
//       headers: {'X-Requested-With': 'XMLHttpRequest'}
//     })
//     .then(response => {
//       if( response.ok ) {
//         return response.text();
//       } else {
//         throw new Error(`${response.status} ${response.statusText} ${response.url}`); 
//       }
//     })
//     .then(data => {
//       thisForm.querySelector('.loading').classList.remove('d-block');
//       if (data.trim() == 'OK') {
//         thisForm.querySelector('.sent-message').classList.add('d-block');
//         thisForm.reset(); 
//       } else {
//         throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
//       }
//     })
//     .catch((error) => {
//       displayError(thisForm, error);
//     });
//   }

//   function displayError(thisForm, error) {
//     thisForm.querySelector('.loading').classList.remove('d-block');
//     thisForm.querySelector('.error-message').innerHTML = error;
//     thisForm.querySelector('.error-message').classList.add('d-block');
//   }

// })();

jQuery(document).ready(function ($) {
  "use strict";

  (function () {
      // https://dashboard.emailjs.com/admin/account
      emailjs.init('oOjdLqF3gGOKQLQK-');
  })();

  window.onload = function () {
      document.getElementById('contact-form').addEventListener('submit', function (event) {
          event.preventDefault(); // prevent reload

          var f = $(this).find('.form-group'),
              ferror = false,
              emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

          f.children('input').each(function () { // run all inputs

              var i = $(this); // current input
              var rule = i.attr('data-rule');

              if (rule !== undefined) {
                  var ierror = false; // error flag for current input
                  var pos = rule.indexOf(':', 0);
                  if (pos >= 0) {
                      var exp = rule.substr(pos + 1, rule.length);
                      rule = rule.substr(0, pos);
                  } else {
                      rule = rule.substr(pos + 1, rule.length);
                  }

                  switch (rule) {
                      case 'required':
                          if (i.val() === '') {
                              ferror = ierror = true;
                          }
                          break;

                      case 'minlen':
                          if (i.val().length < parseInt(exp)) {
                              ferror = ierror = true;
                          }
                          break;

                      case 'email':
                          if (!emailExp.test(i.val())) {
                              ferror = ierror = true;
                          }
                          break;

                      case 'checked':
                          if (!i.is(':checked')) {
                              ferror = ierror = true;
                          }
                          break;

                      case 'regexp':
                          exp = new RegExp(exp);
                          if (!exp.test(i.val())) {
                              ferror = ierror = true;
                          }
                          break;
                  }
                  i.next('.validate').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
              }
          });
          f.children('textarea').each(function () { // run all inputs

              var i = $(this); // current input
              var rule = i.attr('data-rule');

              if (rule !== undefined) {
                  var ierror = false; // error flag for current input
                  var pos = rule.indexOf(':', 0);
                  if (pos >= 0) {
                      var exp = rule.substr(pos + 1, rule.length);
                      rule = rule.substr(0, pos);
                  } else {
                      rule = rule.substr(pos + 1, rule.length);
                  }

                  switch (rule) {
                      case 'required':
                          if (i.val() === '') {
                              ferror = ierror = true;
                          }
                          break;

                      case 'minlen':
                          if (i.val().length < parseInt(exp)) {
                              ferror = ierror = true;
                          }
                          break;
                  }
                  i.next('.validate').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
              }
          });
          if (ferror) return false;

          var formData = new FormData(this);
          formData.append('service_id', 'service_vsw3yzl');
          formData.append('template_id', 'template_lf8r0d7');
          formData.append('user_id', 'oOjdLqF3gGOKQLQK-');

          $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
              type: 'POST',
              data: formData,
              contentType: false, // auto-detection
              processData: false // no need to parse formData to string
          }).done(function () {
              var this_form = $(this);
              $('.sent-message').show();
              // alert('Your message has been sent. Thank you!');
          }).fail(function (error) {
            $('.error-message').show();
          });
      });
  }
});
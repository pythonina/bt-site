$(document).ready(function () {

    window.tryParseJSONObject = function (jsonString){
      try {
          var o = JSON.parse(jsonString);
  
          if (o && typeof o === "object") {
              return o;
          }
      }
      catch (e) { }
  
      return false;
    };

    if (localStorage.getItem('login')){
        localStorage.removeItem('login');
        const myEl = $(`<div class="toast bg-success text-light rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM15.0524 10.4773C15.2689 10.2454 15.2563 9.88195 15.0244 9.6655C14.7925 9.44906 14.4291 9.46159 14.2126 9.6935L11.2678 12.8487L9.77358 11.3545C9.54927 11.1302 9.1856 11.1302 8.9613 11.3545C8.73699 11.5788 8.73699 11.9425 8.9613 12.1668L10.8759 14.0814C10.986 14.1915 11.1362 14.2522 11.2919 14.2495C11.4477 14.2468 11.5956 14.181 11.7019 14.0671L15.0524 10.4773Z" fill="white"/></svg><span id="toast-text" class="mx-2">شما با موفقیت وارد شدید</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
        new bootstrap.Toast(myEl).show();
    } 
  
    if (localStorage.getItem('set_email')){
        localStorage.removeItem('set_email');
        const myEl = $(`<div class="toast bg-success text-light rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM15.0524 10.4773C15.2689 10.2454 15.2563 9.88195 15.0244 9.6655C14.7925 9.44906 14.4291 9.46159 14.2126 9.6935L11.2678 12.8487L9.77358 11.3545C9.54927 11.1302 9.1856 11.1302 8.9613 11.3545C8.73699 11.5788 8.73699 11.9425 8.9613 12.1668L10.8759 14.0814C10.986 14.1915 11.1362 14.2522 11.2919 14.2495C11.4477 14.2468 11.5956 14.181 11.7019 14.0671L15.0524 10.4773Z" fill="white"/></svg><span id="toast-text" class="mx-2">ایمیل شما ثبت شد</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
        new bootstrap.Toast(myEl).show();
    } 
  
    function checkPhone(phone) {
        return phone.match(/^09\d{9}$/); 
    }
    function checkEmail(email) {
        return email.match(/^\S+@\S+\.\S+$/); 
    }

    // interval variable
    let x;

    // Request otp form
    const request_opt_form = $('#RequestOtpForm');
    const request_opt_form_phone = $('#RequestOtpFormPhone');
    request_opt_form.on('submit', function(e){
        e.preventDefault();
        
        // phone
        phone = this.phone.value;

        if (!checkPhone(phone)) {
            const myEl = $(`<div class="toast bg-danger text-light rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM10.7139 9.90158C10.4896 9.67727 10.1259 9.67727 9.90158 9.90158C9.67727 10.1259 9.67727 10.4896 9.90158 10.7139L11.1877 12L9.90158 13.2861C9.67727 13.5104 9.67727 13.8741 9.90158 14.0984C10.1259 14.3227 10.4896 14.3227 10.7139 14.0984L12 12.8123L13.2861 14.0984C13.5104 14.3227 13.8741 14.3227 14.0984 14.0984C14.3227 13.8741 14.3227 13.5104 14.0984 13.2861L12.8123 12L14.0984 10.7139C14.3227 10.4896 14.3227 10.1259 14.0984 9.90158C13.8741 9.67727 13.5104 9.67727 13.2861 9.90158L12 11.1877L10.7139 9.90158Z" fill="white"/></svg><span id="toast-text" class="mx-2">لطفا شماره تلفن را صحیح وارد نمایید</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
            new bootstrap.Toast(myEl).show();
            return;
        }

        localStorage.setItem('phone', phone);

        // ajax
        data = request_opt_form.serialize();
        $.ajax({
            'method': 'POST',
            'url': '',
            'data': data,
            success: function (res, status, xhr) {
                verify_opt_form_code.val('');
                request_opt_form.fadeOut(function(){
                    verify_opt_form.fadeIn().css('display', 'flex');
                    verify_opt_form_code.focus();
                    ttl = parseInt(res.ttl);
                    verify_opt_form_ttl_wrapper.fadeIn();
                    verify_opt_form_ttl.html(ttl);
                    verify_opt_form_ttl_button.attr('disabled', 'disabled');

                    clearInterval(x);
                    x = setInterval(function () {

                        ttl -= 1;
              
                        if (ttl < 1) {
                          clearInterval(x);
                          verify_opt_form_ttl_wrapper.fadeOut();
                          verify_opt_form_ttl_button.removeAttr('disabled');
                        } else {
                            verify_opt_form_ttl.html(ttl)
                        }
                    }, 1000);
                });
                if (xhr.status === 226) {
                    const myEl = $(`<div class="toast bg-warning text-dark rounded-sm-3" role="toast" data-bs-delay="7500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z" fill="#363853" fill-opacity="0.15" stroke="#363853" stroke-width="1.5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5V11.5V15.5Z" fill="#363853" fill-opacity="0.15"/><path d="M12 15.5V11.5" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="9" r="0.5" fill="#363853" fill-opacity="0.15" stroke="#363853" stroke-linecap="round" stroke-linejoin="round"/></svg><span id="toast-text" class="mx-2">لطفا ${res.ttl} ثانیه صبر کنید</span><button type="button" class="btn-close float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(7500).queue(function (){$(this).remove()});
                    new bootstrap.Toast(myEl).show();
                } else {
                    const myEl = $(`<div class="toast bg-success text-light rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM15.0524 10.4773C15.2689 10.2454 15.2563 9.88195 15.0244 9.6655C14.7925 9.44906 14.4291 9.46159 14.2126 9.6935L11.2678 12.8487L9.77358 11.3545C9.54927 11.1302 9.1856 11.1302 8.9613 11.3545C8.73699 11.5788 8.73699 11.9425 8.9613 12.1668L10.8759 14.0814C10.986 14.1915 11.1362 14.2522 11.2919 14.2495C11.4477 14.2468 11.5956 14.181 11.7019 14.0671L15.0524 10.4773Z" fill="white"/></svg><span id="toast-text" class="mx-2">${res.msg}</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
                    new bootstrap.Toast(myEl).show();
                    const myEl2 = $(`<div class="toast bg-success text-light rounded-sm-3" role="toast" data-bs-delay="5000"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM15.0524 10.4773C15.2689 10.2454 15.2563 9.88195 15.0244 9.6655C14.7925 9.44906 14.4291 9.46159 14.2126 9.6935L11.2678 12.8487L9.77358 11.3545C9.54927 11.1302 9.1856 11.1302 8.9613 11.3545C8.73699 11.5788 8.73699 11.9425 8.9613 12.1668L10.8759 14.0814C10.986 14.1915 11.1362 14.2522 11.2919 14.2495C11.4477 14.2468 11.5956 14.181 11.7019 14.0671L15.0524 10.4773Z" fill="white"/></svg><span id="toast-text" class="mx-2">رمز عبور : ${res.otp}</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(6000).queue(function (){$(this).remove()});
                    new bootstrap.Toast(myEl2).show();
                }
            },
            error: function (err) {
                let msg;
                switch (err.status) {
                  case 400:
                    msg = err.responseJSON.msg;
                    break;
                  case 403:
                    msg = 'لطفا مجدد وارد سایت شوید';
                    break;
                  default:
                    msg = 'متاسفیم، خطای سرور';
                    break;
                }
                const myEl = $(`<div class="toast bg-danger text-light rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM10.7139 9.90158C10.4896 9.67727 10.1259 9.67727 9.90158 9.90158C9.67727 10.1259 9.67727 10.4896 9.90158 10.7139L11.1877 12L9.90158 13.2861C9.67727 13.5104 9.67727 13.8741 9.90158 14.0984C10.1259 14.3227 10.4896 14.3227 10.7139 14.0984L12 12.8123L13.2861 14.0984C13.5104 14.3227 13.8741 14.3227 14.0984 14.0984C14.3227 13.8741 14.3227 13.5104 14.0984 13.2861L12.8123 12L14.0984 10.7139C14.3227 10.4896 14.3227 10.1259 14.0984 9.90158C13.8741 9.67727 13.5104 9.67727 13.2861 9.90158L12 11.1877L10.7139 9.90158Z" fill="white"/></svg><span id="toast-text" class="mx-2">${msg}</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
                new bootstrap.Toast(myEl).show();
              }
        })
    })


    // Verify otp form
    const verify_opt_form_code = $('#VerifyOtpFormCode');
    let prev_code = "";
    verify_opt_form_code.on('input', function (e){
        val = this.value;
        if (!val.match((/^[\d]*$/)) || val.length > 5) {
          this.value = prev_code;
          return;
        }
        prev_code = val;
        if (val.length == 5){
            verify_opt_form.trigger('submit');
        }
    })
    
    const verify_opt_form = $('#VerifyOtpForm');
    const verify_opt_form_ttl = $('#VerifyOtpFormTtl');
    const verify_opt_form_ttl_button = $('#VerifyOtpFormTtlButton');
    let can_disable_verify_opt_form_ttl_button = false;
    const verify_opt_form_ttl_wrapper = $('#VerifyOtpFormTtlWrapper');
    verify_opt_form.on('submit', function(e){
        e.preventDefault();
        
        // phone
        phone = localStorage.getItem('phone');
        code = this.code.value;
    
        if (code.length === 0) 
            return;
      
        // ajax
        data = verify_opt_form.serialize() + `&phone=${phone}`;
        url = verify_opt_form.attr('action');

        // disable actions
        if (!verify_opt_form_ttl_button.attr('disabled') == 'disabled') {
            can_disable_verify_opt_form_ttl_button = true;
            verify_opt_form_ttl_button.attr('disabled','disabled');
        } else {
            can_disable_verify_opt_form_ttl_button = false;
        }
        verify_opt_form_back_button.attr('disabled','disabled');
        verify_opt_form_code.attr('disabled','disabled');

        $.ajax({
            'method': 'POST',
            'url': url,
            'data': data,
            success: function (res, status, xhr) {
                if (xhr.status === 226) {
                    localStorage.setItem('code', code)
                    verify_opt_form.fadeOut(function(){
                        verify_password_form.fadeIn().css('display', 'flex');
                        verify_password_form_password.focus();
                    }); 
                } else {
                    localStorage.clear();
                    localStorage.setItem('login', true);
                    location.href = "/?next=home";
                }
            },
            error: function (err) {
                let msg;
                switch (err.status) {
                  case 400:
                    msg = err.responseJSON.msg;
                    break;
                  case 403:
                    msg = 'لطفا مجدد وارد سایت شوید';
                    break;
                  default:
                    msg = 'متاسفیم، خطای سرور';
                    break;
                }
                const myEl = $(`<div class="toast bg-danger text-light rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM10.7139 9.90158C10.4896 9.67727 10.1259 9.67727 9.90158 9.90158C9.67727 10.1259 9.67727 10.4896 9.90158 10.7139L11.1877 12L9.90158 13.2861C9.67727 13.5104 9.67727 13.8741 9.90158 14.0984C10.1259 14.3227 10.4896 14.3227 10.7139 14.0984L12 12.8123L13.2861 14.0984C13.5104 14.3227 13.8741 14.3227 14.0984 14.0984C14.3227 13.8741 14.3227 13.5104 14.0984 13.2861L12.8123 12L14.0984 10.7139C14.3227 10.4896 14.3227 10.1259 14.0984 9.90158C13.8741 9.67727 13.5104 9.67727 13.2861 9.90158L12 11.1877L10.7139 9.90158Z" fill="white"/></svg><span id="toast-text" class="mx-2">${msg}</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
                new bootstrap.Toast(myEl).show();
            },
            complete: function(){
                if (can_disable_verify_opt_form_ttl_button) 
                    verify_opt_form_ttl_button.removeAttr('disabled');

                verify_opt_form_back_button.removeAttr('disabled');
                verify_opt_form_code.removeAttr('disabled');
                verify_opt_form_code.focus();
            }
        })
    })
  
    const verify_password_form = $('#VerifyPasswordForm');
    const verify_password_form_password = $('#VerifyPasswordFormPassword');
    verify_password_form.on('submit', function(e){
        e.preventDefault();
        
        // phone
        phone = localStorage.getItem('phone');
        code = localStorage.getItem('code');

        password = this.password.value;
    
        if (password.length === 0) 
            return;
      
        // ajax
        data = verify_password_form.serialize() + `&code=${code}&phone=${phone}`;
        url = verify_password_form.attr('action');
        $.ajax({
            'method': 'POST',
            'url': url,
            'data': data,
            success: function () {
                localStorage.clear();
                localStorage.setItem('login', true);
                location.href = "/?next=home";
            },
            error: function (err) {
                let msg;
                switch (err.status) {
                  case 400:
                    msg = err.responseJSON.msg;
                    break;
                  case 403:
                    msg = 'لطفا مجدد وارد سایت شوید';
                    break;
                  default:
                    msg = 'متاسفیم، خطای سرور';
                    break;
                }
                const myEl = $(`<div class="toast bg-danger text-light rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM10.7139 9.90158C10.4896 9.67727 10.1259 9.67727 9.90158 9.90158C9.67727 10.1259 9.67727 10.4896 9.90158 10.7139L11.1877 12L9.90158 13.2861C9.67727 13.5104 9.67727 13.8741 9.90158 14.0984C10.1259 14.3227 10.4896 14.3227 10.7139 14.0984L12 12.8123L13.2861 14.0984C13.5104 14.3227 13.8741 14.3227 14.0984 14.0984C14.3227 13.8741 14.3227 13.5104 14.0984 13.2861L12.8123 12L14.0984 10.7139C14.3227 10.4896 14.3227 10.1259 14.0984 9.90158C13.8741 9.67727 13.5104 9.67727 13.2861 9.90158L12 11.1877L10.7139 9.90158Z" fill="white"/></svg><span id="toast-text" class="mx-2">${msg}</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
                new bootstrap.Toast(myEl).show();
              }
        })
    })

    const verify_opt_form_back_button = $('#VerifyOtpFormBackButton');
    verify_opt_form_back_button.on('click', function(){
        verify_opt_form.fadeOut(function(){
            request_opt_form.fadeIn().css('display', 'flex');
            request_opt_form_phone.val('');
            request_opt_form_phone.focus();
        }); 
    })

    const verify_password_form_back_button = $('#VerifyPasswordFormBackButton');
    verify_password_form_back_button.on('click', function(){
        verify_password_form.fadeOut(function(){
            request_opt_form.fadeIn().css('display', 'flex');
            request_opt_form_phone.val('');
            request_opt_form_phone.focus();
        }); 
    })

    
    // Email Login form code Interval
    let xxx;

    const verify_password_form_forget_button = $('#VerifyPasswordFormForgetButton');
    verify_password_form_forget_button.on('click', function(){

        phone = localStorage.getItem('phone');

        // ajax
        data = {
            'csrfmiddlewaretoken': verify_password_form.find('[name=csrfmiddlewaretoken]').val(),
            'phone': phone,
        };
        url = $(this).data('url');
        $.ajax({
            'method': 'POST',
            'url': url,
            'data': data,
            success: function (res, status, xhr) {
                
                ttl_xxx = parseInt(res.ttl);

                html_before = $('<span>فراموشی رمز عبور</span>')
                html_after = $(`<span><span id="VerifyPasswordFormTtl">${ttl_xxx}</span> ثانیه تا ارسال مجدد</span>`);
                
                verify_password_form_forget_button.html(html_after.hide().fadeIn());
                verify_password_form_forget_button.attr('disabled', 'disabled');

                clearInterval(xxx);
                xxx = setInterval(function () {

                    ttl_xxx -= 1;
            
                    if (ttl_xxx < 1) {
                        clearInterval(xxx);
                        verify_password_form_forget_button.html(html_before.fadeIn());
                        verify_password_form_forget_button.removeAttr('disabled');
                    } else {
                        verify_password_form_forget_button.find('#VerifyPasswordFormTtl').html(ttl_xxx);
                    }
                }, 1000);
                if (xhr.status === 226) {
                    const myEl = $(`<div class="toast bg-warning text-dark rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z" fill="#363853" fill-opacity="0.15" stroke="#363853" stroke-width="1.5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5V11.5V15.5Z" fill="#363853" fill-opacity="0.15"/><path d="M12 15.5V11.5" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="9" r="0.5" fill="#363853" fill-opacity="0.15" stroke="#363853" stroke-linecap="round" stroke-linejoin="round"/></svg><span id="toast-text" class="mx-2">لطفا ${res.ttl} ثانیه صبر کنید</span><button type="button" class="btn-close float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
                    new bootstrap.Toast(myEl).show();
                } else {
                    const myEl = $(`<div class="toast bg-success text-light rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM15.0524 10.4773C15.2689 10.2454 15.2563 9.88195 15.0244 9.6655C14.7925 9.44906 14.4291 9.46159 14.2126 9.6935L11.2678 12.8487L9.77358 11.3545C9.54927 11.1302 9.1856 11.1302 8.9613 11.3545C8.73699 11.5788 8.73699 11.9425 8.9613 12.1668L10.8759 14.0814C10.986 14.1915 11.1362 14.2522 11.2919 14.2495C11.4477 14.2468 11.5956 14.181 11.7019 14.0671L15.0524 10.4773Z" fill="white"/></svg><span id="toast-text" class="mx-2">${res.msg}</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
                    new bootstrap.Toast(myEl).show();
                }
            },
            error: function (err) {
                let msg;
                switch (err.status) {
                  case 400:
                    msg = err.responseJSON.msg;
                    break;
                  case 403:
                    msg = 'لطفا مجدد وارد سایت شوید';
                    break;
                  default:
                    msg = 'متاسفیم، خطای سرور';
                    break;
                }
                const myEl = $(`<div class="toast bg-danger text-light rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM10.7139 9.90158C10.4896 9.67727 10.1259 9.67727 9.90158 9.90158C9.67727 10.1259 9.67727 10.4896 9.90158 10.7139L11.1877 12L9.90158 13.2861C9.67727 13.5104 9.67727 13.8741 9.90158 14.0984C10.1259 14.3227 10.4896 14.3227 10.7139 14.0984L12 12.8123L13.2861 14.0984C13.5104 14.3227 13.8741 14.3227 14.0984 14.0984C14.3227 13.8741 14.3227 13.5104 14.0984 13.2861L12.8123 12L14.0984 10.7139C14.3227 10.4896 14.3227 10.1259 14.0984 9.90158C13.8741 9.67727 13.5104 9.67727 13.2861 9.90158L12 11.1877L10.7139 9.90158Z" fill="white"/></svg><span id="toast-text" class="mx-2">${msg}</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
                new bootstrap.Toast(myEl).show();
            },
            complete: function(){
                verify_password_form_password.focus();
            }
        })
    })

    verify_opt_form_ttl_button.on('click', function(){
        request_opt_form.trigger('submit');
    })
  
    // Email form code Interval
    let xx;

    const request_otp_email_form = $('#RequestOtpEmailForm');
    const request_otp_email_form_email = $('#ُRequestOtpEmailFormEmail');
    request_otp_email_form.on('submit', function(e){
        e.preventDefault();
        
        // phone
        email = this.email.value;

        if (!checkEmail(email)) {
            const myEl = $(`<div class="toast bg-danger text-light rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM10.7139 9.90158C10.4896 9.67727 10.1259 9.67727 9.90158 9.90158C9.67727 10.1259 9.67727 10.4896 9.90158 10.7139L11.1877 12L9.90158 13.2861C9.67727 13.5104 9.67727 13.8741 9.90158 14.0984C10.1259 14.3227 10.4896 14.3227 10.7139 14.0984L12 12.8123L13.2861 14.0984C13.5104 14.3227 13.8741 14.3227 14.0984 14.0984C14.3227 13.8741 14.3227 13.5104 14.0984 13.2861L12.8123 12L14.0984 10.7139C14.3227 10.4896 14.3227 10.1259 14.0984 9.90158C13.8741 9.67727 13.5104 9.67727 13.2861 9.90158L12 11.1877L10.7139 9.90158Z" fill="white"/></svg><span id="toast-text" class="mx-2">لطفا ایمیل صحیح وارد نمایید</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
            new bootstrap.Toast(myEl).show();
            return;
        }

        localStorage.setItem('email', email);

        // ajax
        data = request_otp_email_form.serialize();
        $.ajax({
            'method': 'POST',
            'url': '',
            'data': data,
            success: function (res, status, xhr) {
                request_otp_email_form.fadeOut(function(){
                    set_email_form.fadeIn().css('display', 'flex');
                    set_email_form_code.val('');
                    set_email_form_code.focus();
                    ttl_xx = parseInt(res.ttl);
                    set_email_form_ttl_wrapper.fadeIn();
                    set_email_form_ttl.html(ttl_xx);
                    set_email_form_ttl_button.attr('disabled', 'disabled');
    
                    clearInterval(xx);
                    xx = setInterval(function () {
    
                        ttl_xx -= 1;
              
                        if (ttl_xx < 1) {
                          clearInterval(xx);
                          set_email_form_ttl_wrapper.fadeOut();
                          set_email_form_ttl_button.removeAttr('disabled');
                        } else {
                            set_email_form_ttl.html(ttl_xx)
                        }
                    }, 1000);
                });
                if (xhr.status === 226) {
                    const myEl = $(`<div class="toast bg-warning text-dark rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.35288 8.95043C4.00437 6.17301 6.17301 4.00437 8.95043 3.35288C10.9563 2.88237 13.0437 2.88237 15.0496 3.35288C17.827 4.00437 19.9956 6.17301 20.6471 8.95043C21.1176 10.9563 21.1176 13.0437 20.6471 15.0496C19.9956 17.827 17.827 19.9956 15.0496 20.6471C13.0437 21.1176 10.9563 21.1176 8.95044 20.6471C6.17301 19.9956 4.00437 17.827 3.35288 15.0496C2.88237 13.0437 2.88237 10.9563 3.35288 8.95043Z" fill="#363853" fill-opacity="0.15" stroke="#363853" stroke-width="1.5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M12 15.5V11.5V15.5Z" fill="#363853" fill-opacity="0.15"/><path d="M12 15.5V11.5" stroke="#363853" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><circle cx="12" cy="9" r="0.5" fill="#363853" fill-opacity="0.15" stroke="#363853" stroke-linecap="round" stroke-linejoin="round"/></svg><span id="toast-text" class="mx-2">لطفا ${res.ttl} ثانیه صبر کنید</span><button type="button" class="btn-close float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
                    new bootstrap.Toast(myEl).show();
                } else {
                    const myEl = $(`<div class="toast bg-success text-light rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM15.0524 10.4773C15.2689 10.2454 15.2563 9.88195 15.0244 9.6655C14.7925 9.44906 14.4291 9.46159 14.2126 9.6935L11.2678 12.8487L9.77358 11.3545C9.54927 11.1302 9.1856 11.1302 8.9613 11.3545C8.73699 11.5788 8.73699 11.9425 8.9613 12.1668L10.8759 14.0814C10.986 14.1915 11.1362 14.2522 11.2919 14.2495C11.4477 14.2468 11.5956 14.181 11.7019 14.0671L15.0524 10.4773Z" fill="white"/></svg><span id="toast-text" class="mx-2">${res.msg}</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
                    new bootstrap.Toast(myEl).show();
                }
            },
            error: function (err) {
                let msg;
                switch (err.status) {
                    case 400:
                    msg = err.responseJSON.msg;
                    break;
                    case 403:
                    msg = 'لطفا مجدد وارد سایت شوید';
                    break;
                    default:
                    msg = 'متاسفیم، خطای سرور';
                    break;
                }
                const myEl = $(`<div class="toast bg-danger text-light rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM10.7139 9.90158C10.4896 9.67727 10.1259 9.67727 9.90158 9.90158C9.67727 10.1259 9.67727 10.4896 9.90158 10.7139L11.1877 12L9.90158 13.2861C9.67727 13.5104 9.67727 13.8741 9.90158 14.0984C10.1259 14.3227 10.4896 14.3227 10.7139 14.0984L12 12.8123L13.2861 14.0984C13.5104 14.3227 13.8741 14.3227 14.0984 14.0984C14.3227 13.8741 14.3227 13.5104 14.0984 13.2861L12.8123 12L14.0984 10.7139C14.3227 10.4896 14.3227 10.1259 14.0984 9.90158C13.8741 9.67727 13.5104 9.67727 13.2861 9.90158L12 11.1877L10.7139 9.90158Z" fill="white"/></svg><span id="toast-text" class="mx-2">${msg}</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
                new bootstrap.Toast(myEl).show();
            }
        })
    })


    // Verify otp form
    const set_email_form_code = $('#SetEmailFormCode');
    let set_email_form_prev_code = "";
    set_email_form_code.on('input', function (e){
        val = this.value;
        if (!val.match((/^[\d]*$/)) || val.length > 5) {
            this.value = set_email_form_prev_code;
            return;
        }
        set_email_form_prev_code = val;
        if (val.length == 5){
            set_email_form.trigger('submit');
        }
    })


    const set_email_form_ttl = $('#SetEmailFormTtl');
    const set_email_form_ttl_button = $('#SetEmailFormTtlButton');
    const set_email_form_ttl_wrapper = $('#SetEmailFormTtlWrapper');
    const set_email_form = $('#SetEmailForm');
    set_email_form.on('submit', function(e){
        e.preventDefault();
        
        email = localStorage.getItem('email');
        
        // ajax
        url = set_email_form.attr('action');
        data = set_email_form.serialize() + `&email=${email}`;
        $.ajax({
            'method': 'POST',
            'url': url,
            'data': data,
            success: function (res, status, xhr) {
                localStorage.clear();
                localStorage.setItem('login', true);
                location.href = "/?next=home";
            },
            error: function (err) {
                let msg;
                switch (err.status) {
                    case 400:
                    msg = err.responseJSON.msg;
                    break;
                    case 403:
                    msg = 'لطفا مجدد وارد سایت شوید';
                    break;
                    default:
                    msg = 'متاسفیم، خطای سرور';
                    break;
                }
                const myEl = $(`<div class="toast bg-danger text-light rounded-sm-3" role="toast" data-bs-delay="1500"><div class="toast-body"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.02975 3.3437C10.9834 2.88543 13.0166 2.88543 14.9703 3.3437C17.7916 4.00549 19.9945 6.20842 20.6563 9.02975C21.1146 10.9834 21.1146 13.0166 20.6563 14.9703C19.9945 17.7916 17.7916 19.9945 14.9703 20.6563C13.0166 21.1146 10.9834 21.1146 9.02975 20.6563C6.20842 19.9945 4.0055 17.7916 3.3437 14.9703C2.88543 13.0166 2.88543 10.9834 3.3437 9.02974C4.0055 6.20841 6.20842 4.00549 9.02975 3.3437ZM10.7139 9.90158C10.4896 9.67727 10.1259 9.67727 9.90158 9.90158C9.67727 10.1259 9.67727 10.4896 9.90158 10.7139L11.1877 12L9.90158 13.2861C9.67727 13.5104 9.67727 13.8741 9.90158 14.0984C10.1259 14.3227 10.4896 14.3227 10.7139 14.0984L12 12.8123L13.2861 14.0984C13.5104 14.3227 13.8741 14.3227 14.0984 14.0984C14.3227 13.8741 14.3227 13.5104 14.0984 13.2861L12.8123 12L14.0984 10.7139C14.3227 10.4896 14.3227 10.1259 14.0984 9.90158C13.8741 9.67727 13.5104 9.67727 13.2861 9.90158L12 11.1877L10.7139 9.90158Z" fill="white"/></svg><span id="toast-text" class="mx-2">${msg}</span><button type="button" class="btn-close btn-close-white float-start" data-bs-dismiss="toast"></button></div></div>`).appendTo('#toastContainer').delay(2500).queue(function (){$(this).remove()});
                new bootstrap.Toast(myEl).show();
            }
        })

    })

    const set_email_form_back_button = $('#SetEmailFormBackButton');
    set_email_form_back_button.on('click', function(){
        set_email_form.fadeOut(function(){
            request_otp_email_form.fadeIn().css('display', 'flex');
            request_otp_email_form_email.val('');
            request_otp_email_form_email.focus();
        }); 
    })

    
    set_email_form_ttl_button.on('click', function(){
        request_otp_email_form.trigger('submit');
    })
  
});
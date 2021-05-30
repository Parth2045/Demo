$(document).ready(function() {

    setTimeout(function() {
      $(".azure-loader").hide();
      $(".hide-block-onload").show();
    }, 5000);

    $('label[for="checkTermsAndSerives_1"]').html('I agree to <a href="https://www.tryautumn.com/terms-conditions">terms and conditions.</a>');

    const emailfield = document.getElementById("signInName");
    if(emailfield){
        emailfield.addEventListener('keydown', evt => {
            evt = (evt) ? evt : window.event;
            var charCode = (evt.which) ? evt.which : evt.keyCode;
            if(charCode == 9) {
                evt.preventDefault();
                document.getElementById("password").focus();
            }
        });
    }

    $(document).on("click","#continue",function() {
        $('.CheckboxMultiSelect').each(function(index, el) {
            if($(this).find('.attrEntry.validate').find('.error.show').length == 0) {
                $(this).find('.attrEntry').removeClass('validate');
            }    
        });
    });

    // Loader On SingUp and Password Reset Page
    $(document).on("click","button.sendCode, button.verifyCode, button.sendNewCode", function() {
        //  If aria-hidden is true then show loader
        if($(this).attr("aria-hidden") && $(this).hasClass("sendCode") && $("#email").val() && !$("#email").prev().hasClass("show")){
            $("div.working").show();    
        }
    
        if($(this).attr("aria-hidden") && $(this).hasClass("sendNewCode") && $("#email").val() && !$("#email").prev().hasClass("show")){
            $("div.working").show();
        }
        
        if($(this).attr("aria-hidden") && $(this).hasClass("verifyCode") && $("#VerificationCode").val() && !$("#VerificationCode").prev().hasClass("show")){
            $("div.working").show();
        }
    });

});

$(window).ready(function(){
    
    var currentdate = new Date();
    if(currentdate) {

        var dateOfBirth_day     = 0;
        var dateOfBirth_month   = 0;
        var dateOfBirth_year    = 0;

        $('#dateOfBirth_day, #dateOfBirth_month, #dateOfBirth_year, #newPassword, #reenterPassword, #givenName, #surname, #checkTermsAndSerives_1').change(function(){
            validateDateOfBirth();
            if($('.error').hasClass('show')){
                $('#continue').prop('disabled', true);
            } else {
                $('#continue').prop('disabled', false);
            }
        });

        function validateDateOfBirth() {

            dateOfBirth_day     =   $("#dateOfBirth_day option:selected").val();
            dateOfBirth_month   =   $("#dateOfBirth_month option:selected").val();
            dateOfBirth_year    =   $("#dateOfBirth_year option:selected").val();

            if( (dateOfBirth_day > 0) && (dateOfBirth_month > 0) && (dateOfBirth_year > 0) ) {
                // Default Minor Age
                var age = 18;

                // Date From SignUpForm
                var dateObj = new Date();
                dateObj.setFullYear(dateOfBirth_year, dateOfBirth_month-1, dateOfBirth_day-1);
                
                var setDate = new Date();         
                setDate.setFullYear(dateObj.getFullYear() + age, dateOfBirth_month-1, dateOfBirth_day-1);

                if ((currentdate - setDate) > 0){
                    // Above 18
                    $('.DateTimeDropdown').children().find( ".itemLevel" ).html('The date must be between 01-01-1951 and today.');
                    $('.DateTimeDropdown').children().find( ".error" ).removeClass('show');
                    $('#continue').prop('disabled', false);
                }   else    {
                    $('.DateTimeDropdown').children().find( ".itemLevel" ).html('Your age should be 18+.');
                    $('.DateTimeDropdown').children().find( ".error" ).addClass('show');
                    $('#continue').prop('disabled', true);
                }
            } else {
                // alert("Please Select Date.");
            }
        }
    }

});
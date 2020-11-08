$(document).ready(function() {
    var $form = '.registration';
    $($form).submit(function(event) {
        event.preventDefault();
        $.ajax({
            beforeSend: function( xhr ) {
                xhr.overrideMimeType( "text/plain" );
            },
            dataType: 'text',
            contentType: 'text/plain',
            success: function (response) {
                $('.registration').addClass("registration--hidden");
                $('.registration-result')
                    .addClass("registration--active")
                    .addClass("step--success")
                    .removeClass("step--disabled")
                    .removeClass("step--hide-content");;
            },
            error: function (xhr, status, error) {
                console.log(error);
            }
        })
    });
});
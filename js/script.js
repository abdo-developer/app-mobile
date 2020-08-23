// شيفرة wow.js 

$(document).ready(function () {

    var wow = new WOW({
        mobile: false
    });
    wow.init();

    // التحقق من دخل المستخدم
    $(function () {
        $('#FormMail').validate();
    });
});
$(document).ready(function (e) {
    console.log("ready");
    $('#readmore').click(function () {
        var $this = $(this);
        $this.text("Clicked");
        window.location = "RegionViewCC.html";
    });
});
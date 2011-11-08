function appendOption(container, language) {
    $(container).append("<input type='radio' name='longradio' id='" + language.code + "' value='" + language.name + "' /> <label for='" + language.code + "' title='" + language.title + "'>" + language.name + "</label>");
}
function saveLang(lang, name) {
      //  localStorage["language"] = lang;
      self.postMessage(lang);
      console.log(lang+" sent to addon script")
        $("#notice").clearQueue();
        $("#notice").text("Language changed to " + name + "");

        $("#notice").fadeIn().delay(3000).fadeOut();

}

var lang;
self.on('message', function(data){
    lang = data;
    console.log("Recieved initial lang" + data);
});


$(document).ready(function() {
    $.each(primaryIndicLanguages, function(i, v) {
        appendOption("#primaryIndicChoices", v);
    });
    $.each(secondaryIndicLanguages, function(i, v) {
        appendOption("#secondaryIndicChoices", v);
    });
    $(".choiceSet").buttonset();
    $("#showOther").button();
    $("#saveOther").button();
        $(".choiceSet input[type='radio']").change(function() {
        saveLang($(this).attr("id"), $(this).attr("value"));
    });
    $("#otherChoice").val(lang);
    $("#saveOther").click(function() {
        saveLang($("#otherChoice").val(), $("#otherChoice").val());
    });
    $("#" + lang).attr("checked", "checked").button("refresh");
    $("label").removeClass("ui-corner-left").removeClass("ui-corner-right");

    $("#showOther").click(function() {
        if ($("#showOther").text() == "Hide") {
            $("#otherEntry").fadeOut();
            $("#showOther").html("Other&nbsp;Language?");
        } else {
            $("#otherEntry").fadeIn();
            $("#showOther").html("Hide");
        }
    });
    $("#container").fadeIn();
});

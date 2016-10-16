//jquery
$(function() {
    var span = $("span");
    span.each(function(index, element) {
        if(index%2 == 0) {
            $(element).css('color', 'red');
        };    
    });
    //albo $("span:even").css('color','red');

    //dodanie nowego elementu - przyciski
    var paragraphs = $("p");
    paragraphs.each(function(index, element) {
        var button = '<button class "btn" data-tmp="' + index + '">Click me</button>'
        $(element).append(button)
    });

    //dodanie event handlerow
    $("button").click(function() {
        alert($(this).attr("data-tmp"));
    });
});
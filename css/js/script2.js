var json = {
    "fadeInLeft" : [
        $('#prog'),
        $('#info'),
        
    ],
    "fadeInRight" : [
        $('#res'),
        $('#cyber'),
        $('#environnement')
    ],
    "fadeInUp" : [
        $('#one'),
        $('#two'),
        $('#three'),
        $('#four'),
        $('#five'),
        $('#six')
    ]
};

function checkVisible( $elem ) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $elem.offset().top;
    var elemHalfHeight = $elem.height()/2;
    var elemBottom = elemTop + elemHalfHeight;

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() { 
    for( let key in json ) {
        let elements = json[key];
        
        for( let $el of elements ) {
            if( checkVisible( $el ) ) {
                $el.addClass( key + ' animated' );
                $el.removeClass("hidden");
            }
        }
    };
});

$(".c-item.icon").hover( function() {
        $(this).addClass("animated bounce");
    }, function() {
        $(this).removeClass("animated bounce");
    }
);

$('#menu-buttons').click( function() {
    if ($('#menu').is(":visible")) {
        $('#hamburger').show();
        $('#menu, #cross').hide();
    } else {
        $('#hamburger').hide();
        $('#menu, #cross').show();
    }
});

$('#mobile-nav a').click( function() {
    $('#menu, #cross').hide();
    $('#hamburger').show();
});
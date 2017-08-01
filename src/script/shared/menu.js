export default function(){
    console.log('script MENU module loaded');
    var btnMenu = $('.o-header__btn--menu'),
        btnMenuIconMenu = $('*[uk-icon="icon: menu"]'),
        btnMenuIconClose = $('*[uk-icon="icon: close"]'),
        menu = $('.o-menu'),
        overlay = $('.c-overlay--default');

    overlay.hide(); btnMenuIconClose.hide(); closingMenu();

    function openingMenu(){menu.animate({'width':'30vw'}, 1000);}

    function closingMenu(){menu.animate({'width':0}, 1000);}

    function initMenu(){
        overlay.toggle(); btnMenuIconMenu.toggle(); btnMenuIconClose.toggle();

        if( overlay.is(':visible') ){ openingMenu(); }
        if( !overlay.is(':visible') ){ closingMenu(); }
    }



    btnMenu.on('click touch', function(){ initMenu() });
    overlay.on('click touch', function(){ initMenu() });
};
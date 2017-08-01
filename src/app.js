import css from './app.scss';
import Flex from 'flexibility';
import UIkit from 'uikit';
import Icons from 'uikit/dist/js/uikit-icons';
import menu from './script/shared/menu';
import reservation from './script/shared/reservation';

$(document).ready(function () {
    menu();
    reservation();
});

// loads the Icon plugin
UIkit.use(Icons);

// components can be called from the imported UIkit reference
UIkit.formCustom(element, options);
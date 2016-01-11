"use strict";

$(function () {
    /*----------------------------------------------------------------------------*/
    /* Slider */
    /*----------------------------------------------------------------------------*/

    $(".slider").slick();

    /*----------------------------------------------------------------------------*/
    /* Menu */
    /*----------------------------------------------------------------------------*/

    var SHOW_CLASS = "show";

    /* Botão de menu */
    var menu = $("header menu");
    var menuButton = $("header button");

    menuButton.click(function (event) {
        event.stopPropagation();

        menu.toggleClass(SHOW_CLASS);
        menuButton.toggleClass("close");
    });

    /* Submenus */
    var submenus = $("menu ol ol");
    var submenusButton = $("menu ol h1");

    submenusButton.click(function (event) {
        event.stopPropagation();

        var submenu = $(this).siblings("ol");

        if (submenu.hasClass(SHOW_CLASS)) {
            submenu.removeClass(SHOW_CLASS);
            return;
        }

        submenus.removeClass(SHOW_CLASS);
        submenu.addClass(SHOW_CLASS);
    });

    /* Fecha menu ao clicar fora dele */
    $('html').click(function () {
        menuButton.removeClass("close");
        menu.removeClass(SHOW_CLASS);
        submenus.removeClass(SHOW_CLASS);
    });

    $("menu ol, menu ol ol li, .options").click(function (event) {
        event.stopPropagation();
    });

    /*----------------------------------------------------------------------------*/
    /* Tabs */
    /*----------------------------------------------------------------------------*/

    var SELECTED_CLASS = "selected";

    $.each($(".folder"), function () {
        var tabs = $(".tab > ol > li", $(this));
        var content = $(".content > li", $(this));

        /* Expande tudo*/
        function expandAll() {
            $(tabs).removeClass(SELECTED_CLASS);
            $(tabs.get(0)).addClass(SELECTED_CLASS);

            content.addClass(SELECTED_CLASS);
        }

        $("> h1 .more", $(this)).click(expandAll);

        tabs.click(function () {
            tabs.removeClass(SELECTED_CLASS);
            $(this).addClass(SELECTED_CLASS);

            var index = $(this).index();
            
            if (index === 0) {
                expandAll();
                return;
            }

            content.removeClass(SELECTED_CLASS);
            $(content.get(index)).addClass(SELECTED_CLASS);
        });
    });
});

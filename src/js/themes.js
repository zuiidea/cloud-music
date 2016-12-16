App.onPageInit('themes', function (page) {
    $(page.container).find('.color-theme').click(function () {
        var classList = $('body')[0].classList
        for (var i = 0; i < classList.length; i++) {
            if (classList[i].indexOf('theme') === 0)
                classList.remove(classList[i])
        }
        classList.add('theme-' + $(this).attr('data-theme'))
    });
    $(page.container).find('.layout-theme').click(function () {
        var classList = $('body')[0].classList
        for (var i = 0; i < classList.length; i++) {
            if (classList[i].indexOf('layout-') === 0)
                classList.remove(classList[i])
        }
        classList.add('layout-' + $(this).attr('data-theme'))
    })
})

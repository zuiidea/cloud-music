Template7.registerHelper('json_stringify', function (context) {
    return JSON.stringify(context)
})

var App = new Framework7({
    animateNavBackIcon: true,
    precompileTemplates: true,
    template7Pages: true,
    material: true,
    swipePanel: 'left',
    modalButtonOk: "确定",
    modalButtonCancel: "取消",
    tapHold: true
})

var $ = Dom7


var mainView = App.addView('.view-main', {dynamicNavbar: true})
mainView.router.load({url:'page/song.html'})

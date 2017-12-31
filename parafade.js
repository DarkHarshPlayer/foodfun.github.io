$(document).ready(function(){
   var controllerchef = new ScrollMagic.Controller();

   var chefscene = new ScrollMagic.Scene({
       triggerElement:'#chef'
   }).setClassToggle('#chefintro','parafade0').addTo(controllerchef);

   var scene2 = new ScrollMagic.Scene({
       triggerElement:'#chef'
   }).setClassToggle('#img1','parafade1').addTo(controllerchef);

    var scene3 = new ScrollMagic.Scene({
        triggerElement:'#chef'
    }).setClassToggle('#img2','parafade1').addTo(controllerchef);

    var chefscene1 = new ScrollMagic.Scene({
        triggerElement:'#chef'
    }).setClassToggle('#butintro','bupfara').addTo(controllerchef);

});
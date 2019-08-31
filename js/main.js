


(function(){

      $('#itemslider').carousel({ interval: 3000 });
    }());

    (function(){
      $('.carousel-showmanymoveone .item').each(function(){
        var itemToClone = $(this);

        for (var i=1;i<6;i++) {
          itemToClone = itemToClone.next();


          if (!itemToClone.length) {
            itemToClone = $(this).siblings(':first');
          }


          itemToClone.children(':first-child').clone()
            .addClass("cloneditem-"+(i))
            .appendTo($(this));
        }
      });
}());

var ul = $('#popular_recent');
$('#popular_recent>li').on('click', function (event) {
    var a = event.target;
    if(!($(a.parentNode).hasClass('active'))){
        if(a.id == 'tab2'){
            ul.removeClass('tab1');
            ul.addClass('tab2');
        }else if(a.id == 'tab1'){
            ul.removeClass('tab2');
            ul.addClass('tab1');
        }
    }
})

var contactUl = $('#contact_popular_recent');

$('#contact_popular_recent>li').on('click', function (event) {
    var a = event.target;
    if(!($(a.parentNode).hasClass('active'))){
        if(a.id == 'contacttab2'){
            contactUl.removeClass('contacttab1');
            contactUl.addClass('contacttab2');
        }else if(a.id == 'contacttab1'){
            contactUl.removeClass('contacttab2');
            contactUl.addClass('contacttab1');
        }
    }
});

$('#id17').on('change',function () {
    if($('#id17').prop('checked')){
        $('.other_input').focus();
    }
});

$(document).ready(function(){
    if($(window).width() > 763){

    var changeHeight = function(){
        var blockHeight = $('.right_autoHegith').height();
        $('.v8_main3  .left img').css('height', blockHeight);
    }
    $(window).on('resize',function(){
        changeHeight();
    })

    $(window).on('load',function(){
        changeHeight();
    })
    }
})
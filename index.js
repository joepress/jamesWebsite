$(function(){
  $('.col4').mouseenter(function(event){
    var currentImg = $('img', this).attr('src');
    if($(this).find('img').hasClass('topLeft')){
        $('img', this).data('orig', currentImg).attr('src','images/leftLayerImg.jpg');
    }
    else if($(this).find('img').hasClass('topMiddle')){
      $('img', this).data('orig', currentImg).attr('src','images/middleLayerImg.jpg');
    }
    else if($(this).find('img').hasClass('topRight')){
      $('img', this).data('orig', currentImg).attr('src','images/secondVerticle.jpg');
    }
    else if($(this).find('img').hasClass('fourthImg')){
      $('img', this).data('orig', currentImg).attr('src','images/leftLayerImg.jpg');
    }
    else if($(this).find('img').hasClass('fifthImg')){
      $('img', this).data('orig', currentImg).attr('src','images/middleLayerImg.jpg');
    }
    else if($(this).find('img').hasClass('sixthImg')){
      $('img', this).data('orig', currentImg).attr('src','images/secondLong.jpg');
    }
    else if($(this).find('img').hasClass('bottomLeft')){
      $('img', this).data('orig', currentImg).attr('src','images/leftLayerImg.jpg');
    }
    else{
      console.log('There is an Error!!')
    }
  }).mouseleave(function(){
    var original = $('img', this).data('orig');
    $('img', this).attr('src', original)
  })
})

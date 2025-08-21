//when you click for any image in class icons run this function
$('.containner a').attr('target','_blank')
$('.icons img').click(function(){
    //****************************************************-part one (change img) -*****************************************
    //when click any image by use $(this) get the src of path image and put it in variable img
    var img=$(this).attr('src');
    //go to class content inside image put new src after click to appear instead of first image
    $('.content img').attr('src',img);
    //****************************************************-part two (change backGround) -*****************************************
    var bgcolor=$(this).data('bg_color');
    $('.containner').css('background-color',bgcolor);
});


$('.colcon').hide();
// let acc = $('.collapse');
// for(let i = 0;i<acc.length;i++){
//     acc[i].$('.collapse').on(click,function(){
//         this.toggle();
//     });
// }
$('.collapse1').on('click',function(){
$('.colcon1').slideToggle().delay(100);
});
$('.collapse2').on('click',function(){
$('.colcon2').slideToggle().delay(100);
});
$('.collapse3').on('click',function(){
$('.colcon3').toggle().delay(100);
});
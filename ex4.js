$(document).ready(function () {

    console.log('ready');

    // When the page is loading the header fades in from left to the right then it when it is finished the picture of me appears as well.
    $(window).load(function () {
        $("body").animate({
                left: 0,
                opacity: 1},
            800,
            'swing',
            function () {
                $('header h1').animate({
                        left: 20,
                        opacity: 1
                    },
                    1000,
                    'swing'
                );
            });
    });



    // you click on the image the "overlay/text bubble appears over the #stuffInPockets section. Each html and css for the images is different according to which button ou press. I tried making a named function so I would not have to repeat the code over and over for the back. I also wanted to try and make it so that whenever you click on a picture the background shows up ad i just edit the css and html for the each picture #id usb, wallet. But It didn't work out.
    /*function showBubble () {
 
    var center = $('#stuffInPockets').width()/ 2;
        //set the left property for the overlay to the center variable
        $('section#textBubble').css('left', center).animate({
            width: '100%',
            left: '0',
            opacity: 1
        });
}*/
$('#me img').mouseover(function () {
        console.log('me hover');
       
         
    //console.log("hover over img2");
    $(this).attr('src','images/meAngry.gif' ).css('opacity', 1);
   
      });
 
    
     $('#me img').mouseout (function() { //second function
          $(this).attr('src','images/meAngry.gif' ).css('opacity', 0);
     $(this).attr('src', 'images/meWhistling.gif').css('opacity', 1);
   
    });
     
       

  $('nav#close').click(function () {
        console.log('click off');
        $('section#textBubble').css('width', '0px');
        $('section#textBubble').css('visibility', 'hidden');
        $('section#textBubble div h2').css('visibility', 'hidden');
        return false;
    });
   
    
    $('#usb').click(function () {
        console.log('usb click');
           var center = $('#stuffInPockets').width()/ 2;
       
        $('section#textBubble').css('left', center).animate({
            width: '100%',
            left: '0',
            opacity: 1
        },
            200,
            'linear',
                                                            function () {
                $('section#textBubble div').delay(100).animate({
                        left: '0',
                        opacity: 1
                    },
                    1000,
                    'linear'
                                                           );
            
         });         
        $('section#textBubble').css('visibility', 'visible');
        $('section#textBubble div img').css('visibility', 'visible'); 
        $('section#textBubble div h2').html('USB Stick').css('color','#e80f50').css('visibility', 'visible');
        $('section#textBubble div p').html(' My USB is very important to me. I use it to carry around files that can not be uploaded to Google Drive. I always have it with my keys so I don’t forget it at home. It also has a pretty pattern. I hope the clip that attaches it to my keys does not break.').css('color','#e80f50');
    
        return false;
       

    });
    
   
    
    ///////////////
$('#kleenex').click(function () {
        console.log('leenix click');
           var center = $('#stuffInPockets').width()/ 2;
       
        $('section#textBubble').css('left', center).animate({
            width: '100%',
            left: '0',
            opacity: 1
        });
       
        
        $('section#textBubble').css('visibility', 'visible');
    $('section#textBubble div img').css('visibility', 'visible');
        
        $('section#textBubble div h2').html('Kleenex').css('color','#c10101').css('visibility', 'visible');
        $('section#textBubble div p').html(' I tend to get sick when there are drastic weather changes so I wals try to keep some tissues with me. I sometimes even use them as napkins when I forget some at home.They are also good for when you do not get the classes you want during pass times.').css('color','#c10101');
        return false;
       

    });
    
  
    
    ///////////////////
    
     $('#copic').click(function () {
        console.log('usb click');
           var center = $('#stuffInPockets').width()/ 2;
       
        $('section#textBubble').css('left', center).animate({
            width: '100%',
            left: '0',
            opacity: 1
        });
       
        
        $('section#textBubble').css('visibility', 'visible');
        
        $('section#textBubble div h2').html('Copic ').css('color','#ff900a').css('visibility', 'visible');
        $('section#textBubble div p').html(' I like to draw and I have been practicing using Copic markers. I wish I had more time to draw for myself. I don’t use them as much anymore, but I forgot to take this one out of my pencil case.').css('color','#ff900a');
        return false;
       

    });
    
    
    
    
    
     $('#watch').click(function () {
        console.log('watch click');
           var center = $('#stuffInPockets').width()/ 2;
       
        $('section#textBubble').css('left', center).animate({
            width: '100%',
            left: '0',
            opacity: 1
        });
       
        
        $('section#textBubble').css('visibility', 'visible');
        
        $('section#textBubble div h2').html('Watch').css('color','#7916d2').css('visibility', 'visible');
        $('section#textBubble div p').html(' This is my old watch that I got in order to time myself when taking midterms. I got it at Target and it still works even though I can’t wear it anymore.').css('color','#7916d2'); 


        return false;
       

    });
   
  
    
     ////////////////
    
         $('#wallet').click(function () {
        console.log('wallet click');
           var center = $('#stuffInPockets').width()/ 2;
       
        $('section#textBubble').css('left', center).animate({
            width: '100%',
            left: '0',
            opacity: 1
        });
       
          $('section#textBubble').css('visibility', 'visible');
      
        $('section#textBubble div h2').html('Wallet').css('color','#ffd800').css('visibility', 'visible');
        $('section#textBubble div p').html(' This is the wallet that my mom bought me for my birthday. I really like the design on the front as well as it having a lot of slots and places to put your coins. Random people come up to me and say they like it so it must be pretty sweet.').css('color','#9b8400'); 

            return false;
       
    });
    
   
    
});





$(document).ready(function(){
	//box scrolling
	$('.arrowRight').click(function(){
		//console.log('click');
		//var far = $('#container').width();
		var curCont = '#container_' + eval(this.id);
		var pos = $(curCont).scrollLeft() + 200;
		$(curCont).animate({scrollLeft: pos}, 1000, 'easeOutQuad');
	});
	$('.arrowLeft').click(function(){
		//console.log('click');
		/*var far = $('#container').width();
		var pos = $('#container').scrollLeft() - far;*/
		var curCont = String(this.id);
		curCont = curCont.split("_").pop();
		curCont = "#container_" + curCont;
		var pos = $(curCont).scrollLeft() - 200;
		$(curCont).animate({scrollLeft: pos}, 1000, 'easeOutQuad');
	});
});

//feature changing
function changeItem(className){
	//HAIR
	if(className=='hair_1'){
		$( "#hair" ).css( "background-position", "-395px 0px" );
		$( "#hair" ).css( "z-index", "1" );
	}
	if(className=='hair_2'){
		$( "#hair" ).css( "background-position", "-198px 0px" );
	}
	if(className=='hair_3'){
		$( "#hair" ).css( "background-position", "0px 0px" );
		$( "#hair" ).css( "z-index", "1" );
	}
	if(className=='hair_4'){
		$( "#hair" ).css( "background-position", "-590px 0px" );
		$( "#hair" ).css( "z-index", "1" );
	}
	if(className=='hair_5'){
		$( "#hair" ).css( "background-position", "-786px 0px" );
		$( "#hair" ).css( "z-index", "1" );
	}
	if(className=='hair_6'){
		$( "#hair" ).css( "background-position", "-984px 0px" );
		$( "#hair" ).css( "z-index", "5" );
	}
	if(className=='hair_7'){
		$( "#hair" ).css( "background-position", "-1175px 0px" );
		$( "#hair" ).css( "z-index", "5" );
	}
	if(className=='hair_8'){
		$( "#hair" ).css( "background-position", "-1373px 0px" );
		$( "#hair" ).css( "z-index", "5" );
	}
	
	//TOP
	if(className=='top1'){
		$( "#top" ).css( "background-position", "0px 0px" );
		$( "#top" ).css( "z-index", "1" );
	}
	if(className=='top2'){
		$( "#top" ).css( "background-position", "-310px 0px" );
	}
	if(className=='top3'){
		$( "#top" ).css( "background-position", "-622px 0px" );
		$( "#top" ).css( "z-index", "1" );
	}
	if(className=='top4'){
		$( "#top" ).css( "background-position", "-933px 0px" );
		$( "#top" ).css( "z-index", "1" );
	}
	if(className=='top5'){
		$( "#top" ).css( "background-position", "-1245px 0px" );
		$( "#top" ).css( "z-index", "1" );
	}
	if(className=='top6'){
		$( "#top" ).css( "background-position", "-1554px 0px" );
		$( "#top" ).css( "z-index", "4" );
	}
	if(className=='top7'){
		$( "#top" ).css( "background-position", "-1865px 0px" );
		$( "#top" ).css( "z-index", "1" );
	}
	if(className=='top8'){
		$( "#top" ).css( "background-position", "-2178px 0px" );
		$( "#top" ).css( "z-index", "2" );
	}
	
	//BOTTOM
	if(className=='bottom_1'){
		$( "#bottom" ).css( "background-position", "0px 0px" );
		$( "#bottom" ).css( "z-index", "1" );
	}
	if(className=='bottom_2'){
		$( "#bottom" ).css( "background-position", "-306px 0px" );
		$( "#bottom" ).css( "z-index", "1" );
	}
	if(className=='bottom_3'){
		$( "#bottom" ).css( "background-position", "-611px 0px" );
		$( "#bottom" ).css( "z-index", "3" );
	}
	if(className=='bottom_4'){
		$( "#bottom" ).css( "background-position", "-919px 0px" );
		$( "#bottom" ).css( "z-index", "3" );
	}
	if(className=='bottom_5'){
		$( "#bottom" ).css( "background-position", "-1224px 0px" );
		$( "#bottom" ).css( "z-index", "1" );
	}
	if(className=='bottom_6'){
		$( "#bottom" ).css( "background-position", "-1535px 0px" );
		$( "#bottom" ).css( "z-index", "3" );
	}
	if(className=='bottom_7'){
		$( "#bottom" ).css( "background-position", "-1842px 0px" );
		$( "#bottom" ).css( "z-index", "3" );
	}
	if(className=='bottom_8'){
		$( "#bottom" ).css( "background-position", "-2151px 0px" );
		$( "#bottom" ).css( "z-index", "3" );
	}
	
	//SHOES
	if(className=='shoes_1'){
		$( "#shoes" ).css( "background-position", "0px 0px" );
		$( "#shoes" ).css( "z-index", "2" );
	}
	if(className=='shoes_2'){
		$( "#shoes" ).css( "background-position", "-313px 0px" );
		$( "#shoes" ).css( "z-index", "1" );
	}
	if(className=='shoes_3'){
		$( "#shoes" ).css( "background-position", "-626px 0px" );
		$( "#shoes" ).css( "z-index", "1" );
	}
	if(className=='shoes_4'){
		$( "#shoes" ).css( "background-position", "-939px 0px" );
		$( "#shoes" ).css( "z-index", "1" );
	}
	if(className=='shoes_5'){
		$( "#shoes" ).css( "background-position", "-1252px 0px" );
		$( "#shoes" ).css( "z-index", "1" );
	}
}

function reset(){
	$( "#hair" ).css( "background-position", "-395px 0px" );
	
	$( "#top" ).css( "background-position", "0px 0px" );
	
	$( "#bottom" ).css( "background-position", "0px 0px" );
	
	$( "#shoes" ).css( "background-position", "-313px 0px" );
}

/*
//color changing
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
var originalPixels = null;
var currentPixels = null;

var oldImage = null;
var newImage = null;

function getPixels(img)
{
    //$(img).load();
    //newImage = img;
    //if(newImage != oldImage){
    	img = document.getElementById(img);
    	canvas.width = img.width;
    	canvas.height = img.height;

    	ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, 0, 0, img.width, img.height);
    	originalPixels = ctx.getImageData(0, 0, img.width, img.height);
    	currentPixels = ctx.getImageData(0, 0, img.width, img.height);

    	img.onload = null;
    	//console.log('not equal');
    }
    else{console.log('equal'); oldImage = img;}
}

//in case need to convert from Hex to RGB
function hexToRGB(hex)
{
    var long = parseInt(hex.replace(/^#/, ""), 16);
    return {
        R: (long >>> 16) & 0xff,
        G: (long >>> 8) & 0xff,
        B: long & 0xff
    };
}

var currentItem = "";
var lastItem = "";
function changeColor(item)
{
 		currentItem = item;
 		
 		if(currentItem != lastItem){
 			getPixels(item);
 			lastItem = item;
 			//console.log('called');
 		}       
        
        if(!originalPixels) return; // Check if image has loaded
        //var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        var pickedColor = $('#hexVal').val();
        var newColor = hexToRGB(pickedColor);

        for(var I = 0, L = originalPixels.data.length; I < L; I += 4)
        {
            if(currentPixels.data[I + 3] > 0) // If it's not a transparent pixel
            {
                currentPixels.data[I] = originalPixels.data[I] / 255 * newColor.R;
                currentPixels.data[I + 1] = originalPixels.data[I + 1] / 255 * newColor.G;
                currentPixels.data[I + 2] = originalPixels.data[I + 2] / 255 * newColor.B;
            }
        }
        
        ctx.putImageData(currentPixels, 0, 0);
        
        if(item == "shirt"){
        	shirt.src = canvas.toDataURL("image/png");
        }
        if(item == "pants"){
        	pants.src = canvas.toDataURL("image/png");
        }
        
        //console.log('change color');
		
}
*/

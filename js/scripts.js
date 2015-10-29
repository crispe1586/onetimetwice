// JavaScript Document

//colors map
var colors=[];
colors[0] = {name:"GREEN"	,x1:0	,y1:0	,x2:500	,y2:99};
colors[1] = {name:"RED"		,x1:0	,y1:100	,x2:500	,y2:199};
colors[2] = {name:"PINK"	,x1:0	,y1:200	,x2:199	,y2:399};
colors[3] = {name:"YELLOW"	,x1:200	,y1:200	,x2:500	,y2:299};
colors[4] = {name:"BLUE"	,x1:200	,y1:300	,x2:500	,y2:399};
colors[5] = {name:"BROWN"	,x1:0	,y1:400	,x2:500	,y2:500};
	
//selectedcolors
var selectedcolors=[];

$(document).ready(function (e) {	
    
	$('#img_color').click(function (e) {     
		var img = document.getElementById('img_color'); 
		
		//Getting size
		var initwidth=500;
		var initheight=500;
		var width = img.clientWidth;
		var height = img.clientHeight;
		
		//Getting click position
		var posX = $(this).position().left,
            posY = $(this).position().top;
		
		var absposx=e.pageX - posX;
		var absposy=e.pageY - posY;
		var relposx=(initwidth*absposx)/(width);
		var relposy=(initheight*absposy)/(height);
		var selectedcolor=mapcolor(relposx,relposy);
		
		//show label
		$("#colorlabel").html(colors[selectedcolor].name);
		$("#colorlabel").css("left",posX+(colors[selectedcolor].x1*(width/500))+10);
		$("#colorlabel").css("top",posY+(colors[selectedcolor].y1*(height/500))+10);
		$("#colorlabel").show(0).delay(1000).hide(0);
		
		//Add to selected colors list
		selectedcolors.push(selectedcolor);
		});
});

function mapcolor(relposx,relposy){
		var temp;
		colors.forEach(function(element,index) {
    		if(relposx>=element.x1 && relposx<=element.x2 && relposy>=element.y1 && relposy<=element.y2){
				temp=index;
			}
		});
		return temp;
}
function printselectedcolors(){
	var text='';
	selectedcolors.forEach(function(idcolor) {
    		text=text+colors[idcolor].name+'<br>';
		});
	$("#selectedcolors").html(text);
}
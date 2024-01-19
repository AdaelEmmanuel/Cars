canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

greencar_width = 100;
greencar_height= 160;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";

gcx = 100
gcy = 100

function add() {
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image;

	greencar_imgTag = new Image();
	greencar_imgTag.onload = uploadgreencar;
	greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_imgTag, 0, 0, 1000, 600);

}

function uploadgreencar() {
	ctx.drawImage(greencar_imgTag, gcx, gcy, greencar_width, greencar_height);

	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if(gcy >=0){
		gcy = gcy-10;
		uploadBackground();
		uploadgreencar();
	}
}

function down()
{
	if(gcy <600){
		gcy = gcy+10;
		uploadBackground();
		uploadgreencar();
	}
}

function left()
{
	if(gcx >=0){
		gcx = gcx-10;
		uploadBackground();
		uploadgreencar();
	}
}

function right()
{
	if(gcx <1000){
		gcx = gcx+10;
		uploadBackground();
		uploadgreencar();
	}
}
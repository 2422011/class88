var canvas = new fabric.Canvas('my_canvas');
block_image-width = 30;
block_image_height = 30;
player_x = 10;
player_y= 10;

var player_objects ="";
function player_update()
{
   fabric.img.FromURL("player.png" , function.(img)  ){
    player_object = img;

    player_objects.scaletowidth(150);
    player_objects.scaletoheight(140);
    player_objects.set({
    top:player_y
    left:player_x    
    });
    canvas.add(player_object);
   }
}
window.addeventlistener("keydown", my_keydown)
function.keydown(e)
{
   keypressed = e.keycode
   console.log(key_pressed);
   if(e.shiftkey == true && keypressed = "80")
   {
     console.log("p and shift placed together");
      block_image_width + 10;
      block_image_height + 10;
      document.getElementById("current_width").innerHtml = block_image_width;
      document.getElementById("current_height").innerhtml = block_image_height;
   }
   if(e.shiftkey && keypressed = "77")
   {
      console.log ("m and shift pressed together")
      block_image_width + 10;
      block_image_height + 10;
      document.getElementById("current_width").innerHtml = block_image_width;
      document.getElementById("current_height").innerhtml = block_image_height;
   }
   if(keypressed == "38")
   {
      up();
      console.log("up");
   }
   if(keypressed == "40")
   {
      down();
      console.log("down");
   }
   if(keypressed == "37")
   {
      left();
      console.log("left");
   }
  if(keypressed == "39")
   {
     right();
     console.log("right");
   }
   if(keypressed == "87")
   {
    new_image=('wall.jpg')
    console.log=("w");
   }
   if(keypressed == "71")
   {
    new_image=('ground.png')
    console.log=("g");
   }
   if(keypressed == "76")
   {
    new_image=('light_green.png')
    console.log=("l");
   }
   if(keypressed == "84")
   {
    new_image=('trunk.jpg')
    console.log=("t");
   }
   if(keypressed == "87")
   {
    new_image=('roof.jpg')
    console.log=("w");
   }
   if(keypressed == "89")
   {
    new_image=('yellow_wall.png')
    console.log=("w");
   }
   if(keypressed == "68")
   {
    new_image=('dark_green.png')
    console.log=("w");
   }
   if(keypressed == "85")
   {
    new_image=('different.png')
    console.log=("w");
   }
   if(keypressed == "67")
   {
    new_image=('cloud.jpg')
    console.log=("w");
   }
}
function up()
{
   if(player_y>=0)
   {
      player_y = player_y - block_image_height;
      console.log ("block_image_height =" + block_image_height);
      console.log ("when up arrow is pressed,X =" + player_x +", Y =" + player_y);
      canvas.remove(player_object);
      player_update();
      }    
}
function down()
{
   if(player_y>=0)
   {
      player_y = player_y - block_image_height;
      console.log ("block_image_height =" + block_image_height);
      console.log ("when down arrow is pressed,X =" + player_x +", Y =" + player_y);
      canvas.remove(player_object);
      player_update();
      }  
}
function right()
{
   if(player_y>=0)
   {
      player_y = player_y - block_image_height;
      console.log ("block_image_height =" + block_image_height);
      console.log ("when right arrow is pressed,X =" + player_x +", Y =" + player_y);
      canvas.remove(player_object);
      player_update();
      }
}
function left()
{
   if(player_y>=0)
   {
      player_y = player_y - block_image_height;
      console.log ("block_image_height =" + block_image_height);
      console.log ("when left arrow is pressed,X =" + player_x +", Y =" + player_y);
      canvas.remove(player_object);
      player_update();
      }  
}
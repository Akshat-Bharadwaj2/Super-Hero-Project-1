var Canvas= new fabric.Canvas('myCanvas');
block_image_width="30";
block_image_height="30";
player_x="10";
player_y="10";
var player_object="";
function player_update()
fabric.Image.fromURL("player.png",function(IMG) {
{
    player_object=IMG;
    player_object.scaleToWidth(150);
    player_object.scaleToHeight(140);
    player_object.set(
        {
            top:player_x,
            left:player_y
        });

        canvas.add(player_object);

    });
}
}
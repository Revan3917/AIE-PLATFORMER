var enemy = function () {
    this.image = document.createElement("img");
    this.position = new Vector2();
    this.position.set(9 * TILE, 0 * TILE);
    this.width = 159;
    this.height = 163;
    this.offset = new Vector2();
    this.offset.set(-55, -87);
    this.velocity = new Vector2();
    this.falling = true;
    this.jumping = false;
    this.image.src = "Enemy.png";
};


enemy.prototype.draw = function()
{
	context.save();			
		context.translate(this.x, this.y);
		context.rotate(this.rotation);
		context.drawImage(this.image, -this.width/2, -this.height/2);	
	context.restore();	
};
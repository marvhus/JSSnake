// Snake.js

function Snake() {
	this.x = 0;
	this.y = 0;
	this.xSpeed = scale * 1;
	this.ySpeed = 0;

	this.draw = function() {
		ctx.fillStyle = "#00ff50";
		ctx.fillRect(this.x, this.y, scale, scale);
	}

	this.update = function() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
	}

	this.changeDirection = function(direction) {
		switch(direction) {
			case "Up", "w":
				this.xSpeed = 0;
				this.ySpeed = -scale * 1;
				break;
			case "Down", "s":
				this.xSpeed = 0;
				this.ySpeed = scale * 1;
				break;
			case "Left", "a":
				this.xSpeed = -scale * 1;
				this.ySpeed = 0;
				break;
			case "Right", "d":
				this.xSpeed = scale * 1;
				this.ySpeed = 0;
				break;
		}
	}
}
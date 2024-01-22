class jelly{
	constructor(game){
		this.game = game;

        let image = ASSET_MANAGER.getAsset("./jelly.png");
		this.animator = new Animator(image , 0, 0, 800, 600, 48, 30/1000, 0, false, true   );
		this.x = 0;
		this.y = 0;
        this.scale = 1;
		
	};

	update(){
	

	};

	draw(ctx){
        //console.log("Jelly is draw")
				this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
	
	};
}

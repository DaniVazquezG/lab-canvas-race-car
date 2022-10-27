class Obstacle {
    constructor(ctx) {
        this.ctx = ctx
        this.posX = 60
        this.posY = 55
        this.velY = 3

        this.width = 300
        this.height = 20



        this.obstacles = []


    }

    draw() {
        this.ctx.fillRect(this.posX, this.posY, this.width, this.height)
        this.ctx.fillStyle = 'red'
        //const randomWidth = Math.floor(Math.random() * 150)
        this.move()

    }

    move() {
        this.posY += this.velY
    }

    moreObstacles() {
        this.obstacles.push(new Obstacle(this.ctx, this.posX, this.posY, this.widht, this.height))

    }


}

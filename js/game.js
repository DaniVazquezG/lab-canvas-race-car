const Game = {

    name: 'Island Racer',
    author: 'Vani Dázquez',
    version: '10.22',

    fps: 60,
    canvas: undefined,
    ctx: undefined,
    width: 500,
    height: 700,

    car: undefined,
    obstacle: undefined,
    background: undefined,

    intervalId: undefined,







    init() {
        this.canvas = document.querySelector("#canvas")
        this.ctx = this.canvas.getContext("2d")
        this.start()

    },






    start() {
        this.generateAll()
        this.intervalId = setInterval(() => {
            //this.clearObstacles()
            this.background.draw()
            this.car.draw()
            this.obstacle.draw()
            //this.moreObstacles()

        }, 1000 / this.fps)
    },

    generateAll() {
        this.background = new Background(this.ctx, this.width, this.height)
        this.car = new Car(this.ctx, this.width, this.height)
        this.obstacle = new Obstacle(this.ctx, this.width, this.height)
        //this.moreObstacles = new Obstacle(this.ctx, this.width, this.height)
    },

    // clearObstacles() {
    // this.obstacle = this.obstacle.filter((this.obstacle.posX + obstacle.width < this.widht)







}






































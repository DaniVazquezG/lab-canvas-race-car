class Car {
    constructor(ctx, ctxWidth, ctxHeight) {
        this.ctx = ctx
        this.ctxWidth = ctxWidth
        this.ctxHeight = ctxHeight

        this.width = 75
        this.height = 100

        this.posX = ctxWidth / 2 - this.width / 2
        this.posY = ctxHeight - 50 - this.height

        this.carImg = new Image()
        this.carImg.src = "./images/car.png"

        this.setEventListeners()

    }

    draw() {
        this.ctx.drawImage(this.carImg, this.posX, this.posY, this.width, this.height)
    }

    setEventListeners() {
        document.addEventListener('keydown', (e) => {
            console.log(e.code)
            if (e.code === 'ArrowLeft') {
                if (this.posX > 65) this.posX -= 15
            }
            if (e.code === "ArrowRight") {
                if (this.posX < this.ctxWidth - this.width - 65)
                    this.posX += 15

            }
        })

    }

}


class head {
    constructor ({position, xScale, yScale}) {
        this.position = position
        this.xScale = xScale
        this.yScale = yScale
    }
    create() {
        return Body.create({ 
            collisionFilter: { group: group },
            position: this.position,
            label: 'head',
            render: {
                zIndex: 1,
                sprite: {
                    texture: 'img/head_ny.png',
                    xScale: this.xScale,
                    yScale: this.yScale
                }
            },
            isStatic: true
        })
    }
    
    
}
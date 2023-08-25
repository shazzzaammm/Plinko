class Ball {
  constructor(x, y, r, stationary) {
    this.body = Bodies.circle(x, y, r, {
      friction: 0,
      restitution: 1,
      isStatic: stationary,
    });
    World.addBody(world, this.body);
  }

  show() {
    ellipseMode(RADIUS);
    noStroke();
    if (this.body.isStatic) {
      fill(0, 255, 100);
    } else {
      fill(255, 0, 100);
    }
    ellipse(this.body.position.x, this.body.position.y, this.body.circleRadius);
  }
}

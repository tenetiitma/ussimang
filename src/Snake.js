class Snake {
  coordinates = [];
  direction = "u";

  constructor(boardSize) {
    const y = Math.floor(boardSize / 2);
    const x = Math.floor(boardSize / 2);
    const c = y + "-" + x;
    this.coordinates.push(c);

    document.addEventListener("keydown", (e) => {
      switch (e.key) {
        case "ArrowUp":
          this.direction = "u";
          break;
        case "ArrowDown":
          this.direction = "d";
          break;
        case "ArrowLeft":
          this.direction = "l";
          break;
        case "ArrowRight":
          this.direction = "r";
          break;
      }
    });
  }

  getCoordinates() {
    return this.coordinates;
  }

  calculateNewHead(boardSize) {
    let [y, x] = this.coordinates[0].split("-");

    switch (this.direction) {
      case "u":
        if (y == 0) {
          y = boardSize - 1;
        } else {
          y--;
        }
        break;
      case "d":
        if (y == boardSize - 1) {
          y = 0;
        } else {
          y++;
        }
        break;
      case "l":
        if (x == 0) {
          x = boardSize - 1;
        } else {
          x--;
        }
        break;
      case "r":
        if (x == boardSize - 1) {
          x = 0;
        } else {
          x++;
        }
        break;
    }

    return y + "-" + x;
  }

  unshift(c) {
    this.coordinates.unshift(c);
  }

  pop() {
    this.coordinates.pop();
  }
}

export { Snake };

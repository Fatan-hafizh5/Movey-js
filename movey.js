const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

class Move {
  constructor() {
    this.animations = new Map();
  }

  _move(element, distance, loop, speed, direction) {
    const elements = Array.isArray(element) ? element : [element];

    elements.forEach((target) => {
      const obj = document.querySelector(target);
      if (!obj) return;

      if (this.animations.has(obj)) {
        cancelAnimationFrame(this.animations.get(obj));
      }

      if (obj.currentX === undefined) obj.currentX = 0;
      if (obj.currentY === undefined) obj.currentY = 0;
      if (obj.currentRotation === undefined) obj.currentRotation = 0;

      let traveled = 0;

      const animate = () => {
        let step = speed;
        if (!loop && traveled + speed > distance) {
          step = distance - traveled;
        }

        if (direction === 'right') obj.currentX += step;
        else if (direction === 'left') obj.currentX -= step;
        else if (direction === 'up') obj.currentY -= step;
        else if (direction === 'down') obj.currentY += step;
        else if (direction === 'rotate') obj.currentRotation += step;
        
        obj.style.transform = `translate(${obj.currentX}px, ${obj.currentY}px) rotate(${obj.currentRotation}deg)`;
        
        traveled += step;

        if (loop || traveled < distance) {
          this.animations.set(obj, requestAnimationFrame(animate));
        } else {
          this.animations.delete(obj);
        }
      };

      this.animations.set(obj, requestAnimationFrame(animate));
    });
    return this; // Mendukung chaining
  }

  // Fitur Move baru ke koordinat spesifik
  move(element, targetX, targetY, speed = 2, loop = false) {
    const elements = Array.isArray(element) ? element : [element];
    
    elements.forEach((target) => {
      const obj = document.querySelector(target);
      if (!obj) return;

      if (this.animations.has(obj)) {
        cancelAnimationFrame(this.animations.get(obj));
      }

      if (obj.currentX === undefined) obj.currentX = 0;
      if (obj.currentY === undefined) obj.currentY = 0;
      if (obj.currentRotation === undefined) obj.currentRotation = 0;

      const startX = obj.currentX;
      const startY = obj.currentY;

      const animate = () => {
        const dx = targetX - obj.currentX;
        const dy = targetY - obj.currentY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < speed) {
          obj.currentX = targetX;
          obj.currentY = targetY;
          obj.style.transform = `translate(${obj.currentX}px, ${obj.currentY}px) rotate(${obj.currentRotation}deg)`;
          
          if (loop) {
            obj.currentX = startX;
            obj.currentY = startY;
            this.animations.set(obj, requestAnimationFrame(animate));
          } else {
            this.animations.delete(obj);
          }
          return;
        }

        obj.currentX += (dx / distance) * speed;
        obj.currentY += (dy / distance) * speed;
        
        obj.style.transform = `translate(${obj.currentX}px, ${obj.currentY}px) rotate(${obj.currentRotation}deg)`;
        this.animations.set(obj, requestAnimationFrame(animate));
      };

      this.animations.set(obj, requestAnimationFrame(animate));
    });
    return this;
  }

  stop(element) {
    const obj = document.querySelector(element);
    if (obj) {
      if (this.animations.has(obj)) {
        cancelAnimationFrame(this.animations.get(obj));
        this.animations.delete(obj);
      }
      obj.isAnimating = false;
    }
    return this;
  }
  stopAll() {
    this.animations.forEach((animationId, obj) => {
      cancelAnimationFrame(animationId);
      if (obj.isAnimating !== undefined) {
        obj.isAnimating = false;
      }
    });
    this.animations.clear();
    return this;
}


  isColiding(selector1, selector2) {
    const el1 = document.querySelector(selector1);
    const el2 = document.querySelector(selector2);

    if (!el1 || !el2) return false;

    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();

    return !(
      rect1.right < rect2.left || 
      rect1.left > rect2.right || 
      rect1.bottom < rect2.top || 
      rect1.top > rect2.bottom
    );
  }

  right(element, distance = 100, loop = false, speed = 2) {
    return this._move(element, distance, loop, speed, 'right');
  }

  left(element, distance = 100, loop = false, speed = 2) {
    return this._move(element, distance, loop, speed, 'left');
  }

  up(element, distance = 100, loop = false, speed = 2) {
    return this._move(element, distance, loop, speed, 'up');
  }

  down(element, distance = 100, loop = false, speed = 2) {
    return this._move(element, distance, loop, speed, 'down');
  }

  rotate(element, distance = 360, loop = false, speed = 2) {
    return this._move(element, distance, loop, speed, 'rotate');
  }

  async key(cmd = "console.log('Not found cmd')", delay = 2) {
    const cmds = Array.isArray(cmd) ? cmd : [cmd];
    for (const target of cmds) {
      let func = new Function(target);
      func();
      await wait(delay * 1000);
    }
  }

  async imgAnimation(element, usrc, delay = 0.5, loop = false) {
    const elements = document.querySelectorAll(Array.isArray(element) ? element.join(',') : element);
    const cSrc = Array.isArray(usrc) ? usrc : [usrc];

    elements.forEach(async (obj) => {
      obj.isAnimating = true; 
      const start = async () => {
        for (const sCSrc of cSrc) {
          if (!obj.isAnimating) return;
          obj.src = sCSrc;
          await wait(delay * 1000);
        }

        if (loop && obj.isAnimating) {
          start();
        }
      };
      start();
    });
  }
}

const movey = new Move();

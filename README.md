# Move.js: A Simple DOM Animation Library

Move.js is a lightweight JavaScript library designed to simplify the process of creating animations on the DOM. It provides a straightforward API for moving, rotating, and animating elements, making it perfect for developers looking to add some flair to their web applications.

## Getting Started

To start using Move.js, simply create a new instance of the `Move` class:
```javascript
const movey = new Move();
```
You can then use the various methods provided by the library to animate your elements.

## Methods

### _move(element, distance, loop, speed, direction)

*   **element**: The element(s) to animate (can be a single element or an array of elements)
*   **distance**: The distance to move the element(s) (in pixels)
*   **loop**: Whether to loop the animation (true/false)
*   **speed**: The speed of the animation (in pixels per frame)
*   **direction**: The direction of the animation (can be 'right', 'left', 'up', 'down', or 'rotate')

This method is the core of the library and is used by the other methods to perform the actual animation.

### move(element, targetX, targetY, speed, loop)

*   **element**: The element(s) to animate (can be a single element or an array of elements)
*   **targetX**: The target X-coordinate of the element(s)
*   **targetY**: The target Y-coordinate of the element(s)
*   **speed**: The speed of the animation (in pixels per frame)
*   **loop**: Whether to loop the animation (true/false)

This method moves the element(s) to the specified coordinates.

### stop(element)

*   **element**: The element to stop animating

This method stops the animation of the specified element.

### stopAll()

This method stops all animations.

### isColiding(selector1, selector2)

*   **selector1**: The first element to check for collision
*   **selector2**: The second element to check for collision

This method checks if the two specified elements are colliding.

### right(element, distance, loop, speed)

*   **element**: The element(s) to animate (can be a single element or an array of elements)
*   **distance**: The distance to move the element(s) (in pixels)
*   **loop**: Whether to loop the animation (true/false)
*   **speed**: The speed of the animation (in pixels per frame)

This method moves the element(s) to the right.

### left(element, distance, loop, speed)

*   **element**: The element(s) to animate (can be a single element or an array of elements)
*   **distance**: The distance to move the element(s) (in pixels)
*   **loop**: Whether to loop the animation (true/false)
*   **speed**: The speed of the animation (in pixels per frame)

This method moves the element(s) to the left.

### up(element, distance, loop, speed)

*   **element**: The element(s) to animate (can be a single element or an array of elements)
*   **distance**: The distance to move the element(s) (in pixels)
*   **loop**: Whether to loop the animation (true/false)
*   **speed**: The speed of the animation (in pixels per frame)

This method moves the element(s) up.

### down(element, distance, loop, speed)

*   **element**: The element(s) to animate (can be a single element or an array of elements)
*   **distance**: The distance to move the element(s) (in pixels)
*   **loop**: Whether to loop the animation (true/false)
*   **speed**: The speed of the animation (in pixels per frame)

This method moves the element(s) down.

### rotate(element, distance, loop, speed)

*   **element**: The element(s) to animate (can be a single element or an array of elements)
*   **distance**: The distance to rotate the element(s) (in degrees)
*   **loop**: Whether to loop the animation (true/false)
*   **speed**: The speed of the animation (in degrees per frame)

This method rotates the element(s).

### key(cmd, delay)

*   **cmd**: The command(s) to execute (can be a single command or an array of commands)
*   **delay**: The delay between commands (in seconds)

This method executes the specified command(s) with a delay.

### imgAnimation(element, usrc, delay, loop)

*   **element**: The element(s) to animate (can be a single element or an array of elements)
*   **usrc**: The source(s) of the image(s) to animate (can be a single source or an array of sources)
*   **delay**: The delay between frames (in seconds)
*   **loop**: Whether to loop the animation (true/false)

This method animates the image(s) by changing the source(s) with a delay.

## Examples

### Chaining
```javascript
movey.right('#element', 100, true, 2)
  .down('#element', 100, true, 2)
  .left('#element', 100, true, 2)
  .up('#element', 100, true, 2);
```
### Async/Await
```javascript
async function animate() {
  await movey.key('console.log("Hello World!")', 2);
  await movey.imgAnimation('#image', ['image1.jpg', 'image2.jpg'], 0.5, true);
}

animate();
```
Note: This is just a basic example of how to use the library. You can customize the animations and commands to fit your specific needs.
/*
 * This code is running in an environment with five functions defined:
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *    Draws a line from x1,y1 to x2,y2 using the give color. The fifth argument,
 *    lineWidth, is optional and defaults to 1.
 *
 *  drawCircle(x, y, r, color, lineWidth=1)
 *
 *    Draws a circle centered at x,y with radius r using the given color. The
 *    fith argument, lineWidth, is optional and defaults to 1.
 *
 *  drawRect(x, y, width, height, color, lineWidth=1)
 *
 *    Draws a rectangle starting at x,y with the given width, height, and color.
 *    Positive widths go to the right and negative to the left; positive heights
 *    go down and negative heights go up. The sixth argument, lineWidth, is
 *    optional and defaults to 1.
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *    Draws a filled rectangle starting at x,y with the given width, height, and
 *    color. Positive widths go to the right and negative to the left; positive
 *    heights go down and negative heights go up.
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *    Draws a filled circle centered at x,y with radius r using the given color.
 *
 * There are also a couple variables that might be useful:
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 */

drawFilledRect(0, 0, 1000, 1000, 'black');


drawFilledRect(125, 190, 250, 270, 'red');
drawFilledRect(175, 250, 250, 150, 'red');
drawFilledRect(125, 400, 110, 110, 'red');
drawFilledRect(265, 400, 110, 110, 'red');
drawFilledRect(290, 480, 55, 55, 'red');
drawFilledRect(150, 480, 55, 55, 'red');

drawFilledCircle(250, 200, 125, 'red');
drawFilledCircle(150, 510, 25, 'red');
drawFilledCircle(210, 510, 25, 'red');
drawFilledCircle(290, 510, 25, 'red');
drawFilledCircle(350, 510, 25, 'red');
drawFilledCircle(375, 310, 35, 'red');
drawFilledCircle(250, 250, 75, 'lightblue');
drawFilledCircle(150, 250, 75, 'lightblue');
drawFilledRect(140, 175, 110, 150, 'lightblue');




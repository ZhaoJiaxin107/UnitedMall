# United Mall
A super store website(pc) which uses html and css

### Main Technologies


####  Box Model

The box model sees elements in an HTML page as a rectangular box, a container for content. Each rectangle is made up of elements content, padding, border and margin.

#### Float

Float allows elements (out of the document stream) to be moved (in the specified horizontal direction) to the boundary of the parent element or the previous floating element.

It still stays in the text stream and if the floating element cannot be arranged on one line, it will automatically switch to the next line and continue to arrange in the specified direction.

What should be concerned is that problems caused by float. It could lead to  the height of the parent element of the floating element to be 0, and we should clear float or make the parent element trigger the BFC independent region(overflow: hidden | auto | scroll , float left | right)

#### Position

Position takes elements out of the document stream and out of the text stream which does not move them when there is no offset. Besides, it makes block-level elements default width and height supported by content, and allows inline elements to support width and height settings.

####   Iconfont( https://www.iconfont.cn/)

Font-class is a variation of Unicode usage which has good     compatibility, [supports IE8+], and all modern browsers. Compared to Unicode [explicit and intuitive writing].You can easily tell what this icon is.

Because the icon is defined using class, you only need to change the Unicode reference in the class when replacing the icon. However, multicolor icons are not supported because they are essentially in a font.

####  Sprite (Image splicing technique)

The idea is to combine small background images from a web page into a single image file. Background-image,background-repeat, background-Position are used to display images

The advantages and disadvantages

1. Image splicing can reduce naming confusion

2. Easy to change styles

3. Reduce HTTP requests and improve page performance

4. The size of the element must be limited to calculate the image positioning

Note: Suitable for small pictures, small ICONS

Sprite graph generated website: https://www.toptal.com/developers/css/sprite-generator

### Other Technologies
·Anchor link

·Two columns layout

·CSS3 Pseudo class selector(伪类选择器)


### Combination
##### Index Page
##### Register Page
##### Login Page
##### List Page
##### Detail Page
##### Comment Page
##### Shopping cart page

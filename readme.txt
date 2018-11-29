Dynamic jQuery UI Slider

Demo:

https://codepen.io/codebard-espanol/pen/qQQOWO

This simple bit of jQuery UI code allows an infinite amount of different sliders which control different html input elements.

<input type="text" id="cb_p2_input_first_slider" class="cb_p2_slider_input_value" value="5" min="1" max="64" step="1"> 

As seen in the example above, the starting options for slider is provided by the HTML input element. This will be taken by the jQuery code after initialization of the slider and set to the slider's option values.

<div class="cb_p2_value_slider" slider_value_target="cb_p2_input_first_slider"></div>

The above is the slider itself. Its slider_value_target designates which HTML input element is going to be controlled by this slider.

By providing different ids for different input boxes, and by targeting those ids with different sliders by putting input boxes' ids to the slider_value_target values of the sliders, you can create and control multiple input boxes through sliders.

LICENSE: GPL

Credits: Bits of the code taken from internet
jQuery(document).ready(function($) {
	
    jQuery(".cb_p2_value_slider").slider({
		value: 1,
		min: 1,
		max: 1,
		step: 1,
		create: function( event, ui ) {
			
			// Get slider target input element
			cb_p2_slider_value_target = document.getElementById(jQuery(this).attr('slider_value_target'));
					
			// Set the values of the slider with the values determined in target input
			
			jQuery(this).slider( "option", "max", parseInt(jQuery(cb_p2_slider_value_target).attr('max')));
			jQuery(this).slider( "option", "min", parseInt(jQuery(cb_p2_slider_value_target).attr('min')));
			jQuery(this).slider( "option", "step", parseInt(jQuery(cb_p2_slider_value_target).attr('step')));
			jQuery(this).slider( "value", jQuery(cb_p2_slider_value_target).val());
			
			
		},
		slide: function(event, ui) {
			
			var cb_p2_slider_value_target = document.getElementById(jQuery(this).attr('slider_value_target'));
			jQuery(cb_p2_slider_value_target).val(ui.value);
			
		}
    });
	
	jQuery(document).on('input', '.cb_p2_slider_input_value', function(e) {
 
		jQuery(document.getElementById(jQuery(this).attr('parent_slider'))).slider( "value", jQuery(this).val());
	
	});	
	

});
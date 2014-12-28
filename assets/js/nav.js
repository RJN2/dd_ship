/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */

var dds_bar = document.getElementById( 'inner_bar' ),
		dds_nav = document.getElementById( 'dds_nav' )
		dds_logo = document.getElementById( 'dds_logo' )
    body = document.getElementById('app');

dds_bar.onclick = function(e) {
  classie.toggle( dds_nav, 'open' );
  classie.toggle( body, '_nav_open' );
};

window.onbeforeunload = function(){
   if (classie.has(body, '_nav_open')) {
			classie.remove(body, '_nav_open');
   }
}
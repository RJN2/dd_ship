/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */


var dds_nav = document.getElementById( 'dds_nav' ),
    body = document.getElementById('app');

dds_nav.onclick = function() {
    classie.toggle( this, 'open' );
    classie.toggle( body, '_nav_open' );
    disableOther( 'dds_nav' );
};
 
function disableOther( button ) {
    if( button !== 'dds_nav' ) {
        classie.toggle( dds_nav, 'disabled' );
    }
}
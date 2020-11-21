//<![CDATA[
( function() {

	var youtube = document.querySelectorAll( ".hann" );
	
	for (var i = 0; i < youtube.length; i++) {
		
		var source = "//1.bp.blogspot.com/-fgasMq-SKQg/X7hU4LwAtbI/AAAAAAAADG0/eO_TcvQ7oOM3KiwaWPL8HJQ7l3AvoP7zACLcBGAsYHQ/s1280/oiahwf9aw.png";
		
		var image = new Image();
				image.src = source;
				image.addEventListener( "load", function() {
					youtube[ i ].appendChild( image );
				}( i ) );
		
				youtube[i].addEventListener( "click", function() {

					var iframe = document.createElement( "iframe" );

							iframe.setAttribute( "frameborder", "0" );
							iframe.setAttribute( "allowfullscreen", "" );
							iframe.setAttribute( "src", ""+ this.dataset.embed +"" );

							this.innerHTML = "";
							this.appendChild( iframe );
				} );	
	};
	
} )();
                                   //]]>

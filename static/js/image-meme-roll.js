
var picksmallimage;
function pick_image() {
    console.log("picking image");
    var x = Math.random(); 
    if(x < 0.2) {
        document.getElementById("bluenestsmalllogo").src = "/img/BlueNest_ad_short_meme.svg";
    } else {
        document.getElementById("bluenestsmalllogo").src = "/img/BlueNest_ad_short_serious.svg";
    }
}
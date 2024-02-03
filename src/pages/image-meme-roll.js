function pick_image() {
    console.log("picking image");
    var x = Math.random(); 
    if(x < 0.2) {
        pickimage = "/img/BlueNest_ad_long_meme.svg";
    } else {
        pickimage = "/img/BlueNest_ad_long_serious.svg";
    }
}

pick_image();
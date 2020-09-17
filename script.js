function newCallback(namaDepan, asal, callback) {
    console.log(namaDepan + " " + asal);
    callback();
}

function pulang() {
    console.log("Pulang Kampung");
}

newCallback("adi", "yusuf", pulang);
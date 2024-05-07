function onScanSuccess(decodedText, decodedResult) {
    alert(`Scan result: ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
    console.log(`Scan error: ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 400, height: 400} },
    /* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
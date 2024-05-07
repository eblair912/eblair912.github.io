function onScanSuccess(decodedText, decodedResult) {
    alert(`Scan result: ${decodedText}`, decodedResult);
}

function onScanFailure(error) {
    alert(`Scan error: ${error}`);
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: {width: 250, height: 250} },
    /* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess, onScanFailure);
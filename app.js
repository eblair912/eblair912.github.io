document.addEventListener('DOMContentLoaded', () => {
    const videoElement = document.getElementById('webcam');
    const startScanButton = document.getElementById('scanBarcode');

    startScanButton.addEventListener('click', () => {
        if (navigator.mediaDevices.getUserMedia) {
            navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } })
                .then(stream => {
                    videoElement.srcObject = stream;
                    startScanning(videoElement);
                })
                .catch(err => {
                    alert(`Something went wrong: ${err}`);
                });
        }
        else {
            alert('getUserMedia not supported');
        }
    });
});

function startScanning(videoElement) {
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: videoElement
        },
        decoder: {
            readers: ["ean_reader"]
        }
    }, function (err) {
        if (err) {
            console.log(err);
            return
        }
        console.log("Initialization finished. Ready to start");
        Quagga.start();
    });

    Quagga.onDetected((data) => {
        alert(`Barcode detected: ${data.codeResult.code}`);
        Quagga.stop();
    });
}
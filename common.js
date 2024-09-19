function jsSaveAsFile(filename, byteBase64) {
    var link = document.createElement('a');
    link.download = filename;
    link.href = "data:application/octet-stream;base64," + byteBase64;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

function showLoader() {
    document.getElementsByClassName("loader-wrapper")[0].classList.remove("d-none");
}
function hideLoader() {
    document.getElementsByClassName("loader-wrapper")[0].classList.add("d-none");
}
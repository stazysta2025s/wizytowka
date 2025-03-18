function showInfo(id) {
    let infoBox = document.getElementById("info" + id);
    if (infoBox.style.display === "block") {
        infoBox.style.display = "none";
    } else {
        infoBox.style.display = "block";
    }
}

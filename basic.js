function displayPanel(id) {
    resetList = document.getElementsByTagName('panel');

    for (item of resetList){
        item.style.display = "none"
    };

    document.getElementById(id).style.display = "block";
}
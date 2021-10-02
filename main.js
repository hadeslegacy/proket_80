function submit() {
    arrares = []
    for (var i = 1; i <= 6; i++) {
        arrares.push(document.getElementById("input" + i).value)
    }
    document.getElementById("paragraphelo").innerHTML = arrares.join(". ")

}
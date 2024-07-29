function count() {
    const val = document.querySelector("#para");
    const n = document.getElementById("total");
    const m = document.getElementById("rem");

    val.addEventListener("input", function () {
        let count = val.value.length;
        n.innerHTML = count;
        m.innerHTML = (500 - count);
    });
}

document.addEventListener("DOMContentLoaded", count);

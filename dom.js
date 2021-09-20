document.getElementById("reset").onclick = () => reset();

updateButtonText = () => {
    document.getElementById("reset").innerHTML = `a=${a} b=${b}`
}
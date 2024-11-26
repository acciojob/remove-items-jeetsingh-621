//your JS code here. If required.
function removeselectorcolor() {
	const colorSelect = document.getElementById("colorSelect");

	 const selectedIndex = colorSelect.selectedIndex;

	 if (selectedIndex !== -1) {
    colorSelect.options[selectedIndex].remove();
  }
	
}
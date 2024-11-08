const HealthyColour = "#05ff16";
const StoppedColour = "#ff0505";
const changeColour = (id, colourCode) => {
	var svgObject = document.getElementById("VDL_ARRIVALS_layout").contentDocument;
	if (svgObject) {
        var element = svgObject.getElementById(id);
        if (element) {
            element.setAttribute("style", `fill: ${colourCode};`);
        } else {
            console.error(`Element with id "${id}" not found in the SVG.`);
        }
    } else {
        console.error("SVG document not loaded.");
    }
};

var a = document.getElementById("VDL_ARRIVALS_layout");
a.addEventListener("load",function(){
	changeColour("GATE_SWITCH_LINE_2_DIRTY_TURNTABLE_GATE_RIGHT", HealthyColour);
},false);

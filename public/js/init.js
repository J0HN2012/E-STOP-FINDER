const HealthyColour = "#05ff16";
const StoppedColour = "#ff0505";
const changeColour = (id, colourCode) => {
	var element = document.getElementById(id);
	element.setAttribute("style", `fill: ${colourCode};`);
};

var a = document.getElementById("VDL_ARRIVALS_layout");
a.addEventListener("load",function(){
	changeColour("GATE_SWITCH_LINE_2_DIRTY_TURNTABLE_GATE_RIGHT", HealthyColour);
},false);

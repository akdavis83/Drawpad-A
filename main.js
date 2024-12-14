const SHOW_HIT_REGIONS = false;
const RECTANGULAR_SELECTION_MODE = "intersection"; // or "containment"

const STAGE_PROPERTIES = {
	width: 1200,
	height: 960,
};

const viewport = new Viewport(canvasHolder, STAGE_PROPERTIES, SHOW_HIT_REGIONS);

const propertiesPanel = new PropertiesPanel(propertiesHolder);
const toolsPanel = new ToolsPanel(toolsHolder);


const mapContainer = document.getElementById("map-container");

const nodeData = [
  { label: "Opening Context", urgency: "moderate" },
  { label: "Criticism of the West", urgency: "high" },
  { label: "Historical Narrative", urgency: "moderate" },
  { label: "Russian Sovereignty Doctrine", urgency: "critical" },
  { label: "Infrastructure Vision", urgency: "high" },
  { label: "Economic Mobilization", urgency: "moderate" },
  { label: "Sociopolitical Legitimacy", urgency: "low" },
  { label: "Environmental Projects", urgency: "low" },
  { label: "National Destiny", urgency: "moderate" }
];

function renderNode({ label, urgency }) {
  const div = document.createElement("div");
  div.className = `node ${urgency}`;
  div.textContent = label;
  div.title = `Urgency Level: ${urgency}`;
  mapContainer.appendChild(div);
}

nodeData.forEach(renderNode);

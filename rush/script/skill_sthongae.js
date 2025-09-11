const skillsGrid = document.getElementById("skillsGrid");
const btn = document.createElement("button");

let showAll = false;

function createToolCard(tool) {
  const card = document.createElement("div");
  card.className =
    "flex items-center border bg-gradient-to-br from-zinc-800 to-gray-900 border-gray-700 rounded-2xl p-4 shadow-lg hover:shadow-xl hover:border-gray-600 transition-all group";
  card.innerHTML = `
    <div class="rounded-lg bg-gradient-to-br from-zinc-900 to-gray-900 p-3 mr-4 group-hover:bg-blue-900/20 transition-colors">
      <img src="${tool.icon}" alt="${tool.name}" class="w-8 h-8 object-contain" />
    </div>
    <div>
      <h3 class="text-lg font-semibold group-hover:text-blue-400 transition-colors">${tool.name}</h3>
      <p class="text-gray-400 text-sm">${tool.description}</p>
    </div>
  `;
  return card;
}

function renderTools() {
  skillsGrid.innerHTML = "";
  const displayed = showAll ? tools : tools.slice(0, 8);
  displayed.forEach(tool => skillsGrid.appendChild(createToolCard(tool)));

  btn.textContent = showAll ? "Show Less ▲" : "Show More ▼";
}

btn.className =
  "mt-8 px-6 py-3 bg-gradient-to-br from-zinc-800 to-gray-900 hover:bg-gray-700 text-white rounded-full transition-colors block mx-auto";
btn.addEventListener("click", () => {
  showAll = !showAll;
  renderTools();
});

renderTools();
skillsGrid.parentElement.appendChild(btn);
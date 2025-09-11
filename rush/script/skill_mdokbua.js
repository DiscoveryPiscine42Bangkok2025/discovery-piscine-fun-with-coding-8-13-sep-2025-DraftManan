const skillsGrid = document.getElementById("skillsGrid");
const btn = document.createElement("button");

let showAll = false;

function createToolCard(tool) {
  const card = document.createElement("div");
  card.className =
    "flex items-center border bg-gradient-to-br from-neutral-50 to-neutral-100 border-neutral-200 rounded-2xl p-4 shadow hover:shadow-md hover:border-neutral-300 transition-all group";
  card.innerHTML = `
    <div class="rounded-lg bg-neutral-200 p-3 mr-4 group-hover:bg-blue-100 transition-colors">
      <img src="${tool.icon}" alt="${tool.name}" class="w-8 h-8 object-contain" />
    </div>
    <div>
      <h3 class="text-lg font-semibold group-hover:text-blue-600 transition-colors">${tool.name}</h3>
      <p class="text-neutral-600 text-sm">${tool.description}</p>
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
  "mt-8 px-6 py-3 bg-gradient-to-br from-neutral-200 to-neutral-300 hover:bg-neutral-400 text-neutral-800 rounded-full transition-colors block mx-auto font-medium";
btn.addEventListener("click", () => {
  showAll = !showAll;
  renderTools();
});

renderTools();
skillsGrid.parentElement.appendChild(btn);
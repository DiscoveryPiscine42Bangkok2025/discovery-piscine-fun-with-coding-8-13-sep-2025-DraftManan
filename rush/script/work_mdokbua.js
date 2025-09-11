const workGrid = document.getElementById("workGrid");

function createProjectCard(project, index) {
  const card = document.createElement("div");
  card.className =
    "bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-2xl p-6 shadow hover:shadow-md transition-all duration-300 group cursor-pointer h-full flex flex-col border border-neutral-200";

  card.addEventListener("click", () => {
    if (project.link) window.open(project.link, "_blank");
  });

  const tags = project.tags
    .map(
      (tag) =>
        `<span class="text-xs bg-gradient-to-br from-neutral-200 to-neutral-300 text-neutral-700 px-3 py-1 rounded-full group-hover:bg-blue-100 group-hover:text-blue-700 transition-colors">${tag}</span>`
    )
    .join(" ");

  card.innerHTML = `
    <div class="flex flex-wrap gap-2 mb-3">${tags}</div>
    <h3 class="text-xl font-semibold group-hover:text-blue-600 transition-colors">${project.title}</h3>
    <p class="text-neutral-600 text-sm mt-2 group-hover:text-neutral-800 transition-colors flex-grow">
      ${project.description}
    </p>
    <div class="mt-6 rounded-lg overflow-hidden">
      <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover rounded-lg transform group-hover:scale-105 transition-transform duration-500" />
    </div>
    <div class="flex justify-between items-center mt-4">
      <span class="text-neutral-500 text-sm group-hover:text-blue-600 inline-flex items-center transition-colors">
        View project
        <span class="ml-2 group-hover:translate-x-1 transition-transform">→</span>
      </span>
      ${
        project.link
          ? `<a href="${project.link}" target="_blank" class="text-neutral-400 hover:text-neutral-700 transition-colors" onclick="event.stopPropagation()"></a>`
          : ""
      }
    </div>
  `;

  return card;
}

projects.forEach((p, i) => workGrid.appendChild(createProjectCard(p, i)));
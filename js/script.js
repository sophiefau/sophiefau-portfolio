import { projects } from "./projectsData.js";

let currentProjectIndex = 0;

window.openModal = function (index) {
  currentProjectIndex = index; // Set the current project index
  const project = projects[currentProjectIndex];

  // Accessibility h3
  const modalTitle = document.getElementById("modal-title");
  modalTitle.classList.remove("sr-only");

  // Links
  const liveLinkDiv = document.querySelector(".div-link-1");
  const repoLinkDiv = document.querySelector(".div-link-2");
  const customLinkDiv = document.querySelector(".div-link-3");

  // Handle Live Link
  if (project.liveLink) {
    liveLinkDiv.style.display = "block";
    document.getElementById("modal-link-1").href = project.liveLink;
  } else {
    liveLinkDiv.style.display = "none";
  }

  // Handle Repo Link
  if (project.repoLink) {
    repoLinkDiv.style.display = "block";
    document.getElementById("modal-link-2").href = project.repoLink;
  } else {
    repoLinkDiv.style.display = "none";
  }

  // Handle custom Link
  if (project.customLink) {
    customLinkDiv.style.display = "block";
    document.getElementById("modal-link-3").href = project.customLink;
  } else {
    customLinkDiv.style.display = "none";
  }

  // Modal content
  document.getElementById("modal-title").textContent = project.title;
  document.getElementById("modal-overview").textContent = project.overview;
  document.getElementById('modal-text').textContent = project.text;
  document.getElementById("mobile1").src = project.mobile1;
  document.getElementById("mobile2").src = project.mobile2;

  // Features list
  const featuresList = document.getElementById("modal-features");
  featuresList.innerHTML = "";
  project.features.forEach((feature) => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  // Tech list
  const techList = document.getElementById("modal-tech");
  techList.innerHTML = "";
  project.tech.forEach((tech) => {
    const li = document.createElement("li");
    li.textContent = tech;
    techList.appendChild(li);
  });

  // Images
  const additionalImagesContainer = document.getElementById("modal-images-container");
  additionalImagesContainer.innerHTML = ''; // Clear previous images

  project.images.forEach(imageSrc => {
    const img = document.createElement('img');
  img.src = imageSrc;
  img.alt = 'Additional project images';
  img.classList.add('modal-image');
  additionalImagesContainer.appendChild(img);
  });

  // Display modal
  const modal = document.getElementById("myModal");
  modal.style.display = "flex";

  // Reset scroll position
  setTimeout(() => {
    document.querySelector(".modal-content").scrollTop = 0;
  }, 10);
};

// Close modal
window.closeModal = function () {
  document.getElementById("myModal").style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll to the top smoothly upon closing
};

window.onclick = function (event) {
  const modal = document.getElementById("myModal");
  if (event.target === modal) {
    closeModal();
  }
};

// Previous and next project functions
window.previousProject = function () {
  currentProjectIndex =
    (currentProjectIndex - 1 + projects.length) % projects.length;
  openModal(currentProjectIndex);
};

window.nextProject = function () {
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  openModal(currentProjectIndex);
};
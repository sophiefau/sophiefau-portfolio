import { projects } from './projectsData.js';

let currentProjectIndex = 0;

window.openModal = function(index) {
  currentProjectIndex = index;  // Set the current project index
  const project = projects[currentProjectIndex];

  // Modal content
  document.getElementById('modal-title').textContent = project.title;
  document.getElementById('modal-link-1').href = project.liveLink;
  document.getElementById('modal-link-2').href = project.repoLink;
  document.getElementById('modal-text').textContent = project.description;

  // Features list
  const featuresList = document.getElementById("modal-features");
  featuresList.innerHTML = "";
  project.features.forEach(feature => {
    const li = document.createElement("li");
    li.textContent = feature;
    featuresList.appendChild(li);
  });

  // Tech list
  const techList = document.getElementById("modal-tech");
  techList.innerHTML = "";
  project.tech.forEach(tech => {
    const li = document.createElement("li");
    li.textContent = tech;
    techList.appendChild(li);
  });

  // Images
  const modalImagesContainer = document.getElementById('modal-images');
  modalImagesContainer.innerHTML = '';
  project.images.forEach((imageSrc, index) => {
    const imgElement = document.createElement('img');
    imgElement.src = imageSrc;
    imgElement.alt = `Project image ${index + 1}`;
    imgElement.classList.add('modal-img');
    modalImagesContainer.appendChild(imgElement);
  });

  // Display modal
  const modal = document.getElementById('myModal');
  modal.style.display = 'flex';

  // Reset scroll position
  setTimeout(() => {
    document.querySelector('.modal-content').scrollTop = 0;
  }, 10);
}

// Close modal
window.closeModal = function () {
  document.getElementById('myModal').style.display = 'none';
};

window.onclick = function (event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    closeModal();
  }
};

// Previous and next project functions
window.previousProject = function() {
  currentProjectIndex = (currentProjectIndex - 1 + projects.length) % projects.length;
  openModal(currentProjectIndex);
};

window.nextProject = function() {
  currentProjectIndex = (currentProjectIndex + 1) % projects.length;
  openModal(currentProjectIndex);
};
document.addEventListener("DOMContentLoaded", () => {
    fetchJSONData();
});

function fetchJSONData() {
    fetch("photos.json")
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            console.log(data);
            createPanelElement(data);            
        })
        .catch((error) =>
            console.error("Unable to fetch data:", error)
        );
}

function createPanelElement(data) {
    const container = document.createElement("div");
    container.classList.add("container");
    document.body.appendChild(container);

    data.forEach((photo) => {
        const newDiv = document.createElement("div");
        newDiv.classList.add("panel");

        newDiv.style.backgroundImage = `url(${photo.src})`;

        const h1 = document.createElement("h1");
        h1.textContent = photo.location;
        newDiv.appendChild(h1);

        const h2 = document.createElement("h2");
        h2.textContent = photo.date;
        newDiv.appendChild(h2);

        newDiv.addEventListener("click", () => {
            removeActiveClasses(container);
            newDiv.classList.add("active");
        });

        container.appendChild(newDiv);
    });
}

function removeActiveClasses(container) {
    const panels = container.querySelectorAll(".panel");
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};

const panels = document.querySelectorAll(".panel.active");

panels.forEach(panel => {
    panel.addEventListener("click", openGallery);
});

function openGallery(event) {
    const panel = event.currentTarget;

    panel.classList.toggle("active");

    if (panel.classList.contains("active")) {
        console.log("open gallery for", panel);
    } else {
        console.log("panel is not active");
    }
}
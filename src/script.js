function fetchJSONData() {
    fetch("./photos.json")
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
        h1.textContent = photo.title;
        newDiv.appendChild(h1);

        newDiv.addEventListener("click", () => {
            removeActiveClasses(container);
            newDiv.classList.add("active");
        });

        container.appendChild(newDiv);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    fetchJSONData();
});

function removeActiveClasses(container) {
    const panels = container.querySelectorAll(".panel");
    panels.forEach((panel) => {
        panel.classList.remove("active");
    });
};

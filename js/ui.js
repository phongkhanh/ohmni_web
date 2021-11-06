// change page content
const navLinks = document.querySelectorAll(".sidebar-item");
const pageContents = document.querySelectorAll(".page-container .section");

navLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        navLinks.forEach((nav) => nav.classList.remove("active"));
        pageContents.forEach((content) => content.classList.remove("show"));

        const selectedContent = link.getAttribute("data-content");
        this.classList.add("active");
        document.getElementById(selectedContent).classList.add("show");
    });
});

// toggle sidebar
const toggleSidebar = document.querySelector(".toggle-sidebar");
const closeSidebar = document.querySelector(".close-sidebar");
toggleSidebar.addEventListener("click", function () {
    document.body.classList.toggle("is-collapsed");
});
closeSidebar.addEventListener("click", function () {
    document.body.classList.remove("is-collapsed");
});

// tab clicked
const tabLinks = document.querySelectorAll("#infomation .tab .tab-links");
const tabContents = document.querySelectorAll("#infomation .tab-content");

tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener("click", function () {
        tabLinks.forEach((link) => link.classList.remove("active"));
        tabContents.forEach((tabContent) =>
            tabContent.classList.remove("show")
        );
        let selectedId = tabLink.getAttribute("data-tab");
        setTimeout(function () {
            document.getElementById(selectedId).classList.add("show");
        }, 300);
    });
});

// campus
const travelZones = document.querySelectorAll("#travel .travel-zone");
const travelContents = document.querySelectorAll("#travel .travel-content");

travelZones.forEach(function (zone) {
    zone.addEventListener("click", function () {
        travelZones.forEach((item) => item.classList.remove("active"));
        travelContents.forEach((content) => content.classList.remove("show"));
        let selectedZone = zone.getAttribute("data-zone");
        setTimeout(() => {
            this.classList.add("active");
            document.getElementById(selectedZone).classList.add("show");
        }, 300);
    });
});

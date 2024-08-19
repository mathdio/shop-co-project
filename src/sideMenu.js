const templates = document.getElementsByTagName("template");
const menuContent = templates[0].content.children[0].cloneNode(true);
const menuButton = document.querySelector(".menu-icon");
const asideElement = document.getElementsByTagName("aside")[0];
const closeSidebarButton = document.querySelector(".close-sidebar");

function sideMenu() {
    menuButton.addEventListener("click", () => {
        if (asideElement.children[0].localName !== "ul") {
            menuContent.classList.remove("nav-list");
            menuContent.classList.add("menu-list");
            closeSidebarButton.insertAdjacentElement("beforebegin", menuContent);
        }
        asideElement.classList.toggle("closed");
    });
    
    closeSidebarButton.addEventListener("click", () => {
        asideElement.classList.toggle("closed");
    });
}

export default sideMenu;
const links = [
  {
    label: "Week 1 notes",
    url: "week1/index.html"
  }
];

const linkList = document.getElementById("table-of-contents");

console.log(links);

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  linkList.innerHTML = `<a href='${link.url}'><li>${link.label}</li></a>`;
}
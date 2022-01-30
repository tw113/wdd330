const links = [
  {
    label: 'Week 1 notes',
    url: 'week1/index.html',
  },
  {
    label: 'Week 2 practice project',
    url: 'udemy-course/basics-01-starting-project/index.html',
  },
  {
    label: 'Week 3 practice project',
    url: 'udemy-course/dom-assignment-start/index.html',
  },
  {
    label: 'Week 4 practice project',
    url: 'week4/index.html',
  }
];

const linkList = document.getElementById('table-of-contents');

console.log(links);

for (let i = 0; i < links.length; i++) {
  const link = links[i];
  linkList.innerHTML += `<a href='${link.url}'><li>${link.label}</li></a>`;
}

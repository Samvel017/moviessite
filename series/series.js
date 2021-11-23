let request =
  'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';
let xhr = new XMLHttpRequest();

xhr.open('GET', request);

console.log(xhr);

let seriesCont = document.querySelector('.series-container')
xhr.onload = () => {
  let xhrResp = JSON.parse(xhr.response);
  let users = xhrResp.entries;
  console.log(users);
  let userSeries = users
    .filter((e) => {
      return e.programType == 'series' && e.releaseYear >=2010;
    })
    .sort((a, b) => {
      if (a.title < b.title) {
        return -1;
      }
      if (a.title > b.title) {
        return 1;
      }
      return 0;
    }).slice(0,20);
  console.log(userSeries)
  userSeries.forEach(elem => {
    let block = document.createElement('div')
    block.classList.add('serie-block')
    block.innerHTML = `
    <div class="serie-top">
      <img src="${elem.images['Poster Art'].url}" alt=""/>
    </div>
    <div class=serie-title>
      <span>${elem.title}</span>
      <span>(${elem.releaseYear})</span>
    </div>
    `
    seriesCont.append(block)
  });
};

xhr.send();

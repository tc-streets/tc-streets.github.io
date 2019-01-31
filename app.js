  sources = `al-jazeera-english
  ars-technica
  bbc-news
  bild
  cnn
  der-tagesspiegel
  die-zeit
  espn
  fox-news
  hacker-news
  techcrunch
  the-guardian-uk
  the-huffington-post
  the-new-york-times
  the-wall-street-journal
  the-washington-post`.split('\n')
  sources = sources.map(n => n.trim())
  const apiKey = '4a0e79689829435eb83ca8cad35f3fef';
  const defaultSource = 'the-wall-street-journal';
  const sourceSelector = document.querySelector('#sources');
  const newsArticles = document.querySelector('main');
  const buts = document.querySelector('#buts')

  // if ('serviceWorkers' in navigator) {
  //   window.addEventListener('load', () =>
  //     navigator.serviceWorker.register('sw.js')
  //       .then(registration => console.log('Service Worker registered'))
  //       .catch(err => 'SW registration failed'));
  // }

  window.addEventListener('load', e => {
    buts.innerHTML = sources.map(a => `<li onclick="clicker(event)"> ${a}</li>`).join("")
    updateNewsSources().then(() => {
      updateNews();
    });
  });

  function clicker(e) {
    updateNews(e.target.innerHTML)
  }
  window.addEventListener('online', () => updateNews(sourceSelector.value));
  async function updateNewsSources() {
    const response = await fetch(`https://newsapi.org/v2/sources?apiKey=${apiKey}`);
    const json = await response.json();
    mySource = json.sources
    red = mySource.reduce((all, item) => {
      f = {}
      if (sources.indexOf(item["id"]) != -1) {
        f['id'] = item.id
        f['name'] = item.name
        all.push(f)
      }
      return all
    }, [])
  }
  async function updateNews(source = defaultSource) {
    newsArticles.innerHTML = '';
    const response = await fetch(`https://newsapi.org/v2/top-headlines?sources=${source}&sortBy=top&apiKey=${apiKey}`);
    const json = await response.json();
    newsArticles.innerHTML =
      json.articles.map(createArticle).join('\n');
  }

  function createArticle(article) {
    return `
    <div class="article">
      <a href="${article.url}">
        <h2>${article.title}</h2>
        <img src="${article.urlToImage}" alt="${article.title}">
        <p>${article.description}</p>
      </a>
    </div>
  `;
  }
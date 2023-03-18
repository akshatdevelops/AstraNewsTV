
newsAccordion = document.getElementById("newsAccordion")
const xhr = new XMLHttpRequest()
xhr.open('GET', 'https://newsapi.org/v2/top-headlines?country=in&apiKey=b505fdf3304f41ed9b5c7781a7b782d3', true)
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText)
        let articles = json.articles
        console.log(articles)
        let newshtml=""
        articles.forEach(function (element) {
            let news = `<div class="accordion" id="newsAccordion">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    ${element["title"]}
                                </button>
                            </h2>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
                                data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    ${element["description"]}. <a href=${element["url"]}  target="_blank" >Read more here </a>
                                </div>
                            </div>
                        </div>
                    </div>`
            newshtml+=news
            
        });
    newsAccordion.innerHTML=newshtml
    }
    
}
xhr.send()


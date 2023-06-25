const loadCatagoriNews = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCatagoriesNews(data.data.news_category));
}
const displayCatagoriesNews = (categories) => {
    console.log(categories);
    const catagoriesNav = document.getElementById('catagories-nav');
    const totalNewNumber = document.getElementById('total-news-number');
    totalNewNumber.innerHTML = `
    <h6>${categories.length} items found for category Entertainment</h6>
    `;
    categories.forEach(catagory => {
        // console.log(catagory);
        const li = document.createElement('li');
        li.classList.add('nav-item');
        li.innerHTML = `
        <a onclick="loadNewsDetails(${catagory.category_id})" class="my-style nav-link active mx-2 icon-link icon-link-hover" aria-current="page" href="#">${catagory.category_name
            }</a>
        `;


        catagoriesNav.appendChild(li);
    });

}
const loadNewsDetails = (id) => {

    url = `https://openapi.programming-hero.com/api/news/category/0${id}`;
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displayNewsDetails(data.data));
}
const displayNewsDetails = (news) => {
    console.log(news);
    const newDetails = document.getElementById('news-details');
    news.forEach(oneNews => {
        const div = document.createElement('div');
        div.innerHTML = `
                        <div class="row my-4 rounded border bg-gradient bg-light">
                            <div class="col-lg-4 ">
                                <img class="mt-3 py-3 img-fluid justify-content-center mx-auto rounded" src="${oneNews.image_url}" width="600" height="800" alt="" srcset="">
                            </div>
                            <div class="col-lg-8">
                                <h3>${oneNews.title}</h3>
                                <p class="fw-light">${oneNews.details}</p>

                                <blockquote class="blockquote">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <img class="d-inline  img-fluid img-thumbnail rounded rounded-circle"
                                                src="${oneNews.author.img}" width="30" height="24" alt="" srcset="">
                                            <span class="blockquote-footer fs-6">${oneNews.author ? oneNews.author.name : 'Unknown'}</span>
                                        </div>
                                        <div class="col-md-3">
                                            <i class="fa-solid d-inline fa-1x fa-eye"></i>
                                            <span> ${oneNews.total_view ? oneNews.total_view : 0}</span>
                                        </div>
                                        <div class="col-md-3">
                                            <i class="bg-primary d-inline fa-2x fa-solid fa-star-sharp-half-stroke"></i>

                                        </div>
                                        <div class="col-md-3">
                                            <a href="#"
                                                class="bg-primary text-white d-inline-flex focus-ring py-1 px-2 text-decoration-none border rounded-2"
                                                style="--bs-focus-ring-color: rgba(var(--bs-success-rgb), .25)">
                                                See More
                                            </a>
                                        </div>
                                    </div>
                                </blockquote>

                            </div>
                        </div>
        
        `;
        newDetails.appendChild(div);
    })

}

loadCatagoriNews();
let page = 2;
let fetchdata = async () => {
  const response = await fetch(
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=fbf86f4db86a4a44a80560814dbdc318&category=health&pageSize=10&page=1"
  );
  const json = await response.json();
  json.articles.map((ele) => {
    let link = document.createElement("a");
    link.setAttribute("href", `${ele.url}`);
    link.setAttribute("target", "_blank");

    let x = document.createElement("div");
    x.setAttribute("class", "cards");
    x.setAttribute("data-aos", "fade-down-right");

    let y = document.createElement("img");
    y.setAttribute("src", `${ele.urlToImage ? ele.urlToImage : "break.jpg"}`);

    let z = document.createElement("div");
    z.setAttribute("class", "rightside");

    let h3 = document.createElement("h3");
    h3.innerHTML = `${ele.title ? ele.title : ". . ."}`;
    let p = document.createElement("p");
    p.innerHTML = `${
      ele.description ? ele.description.slice(0, 150) + "..." : ". . ."
    }`;
    let author = document.createElement("span");
    author.setAttribute("class", "author");
    author.innerHTML = `${ele.author ? ele.author : ". . ."}`;
    let publish = document.createElement("span");
    publish.setAttribute("class", "publish");
    publish.innerHTML = `${ele.publishedAt ? ele.publishedAt : ". . ."}`;

    x.appendChild(y);
    x.appendChild(z);
    z.append(h3);
    z.append(p);
    z.append(author);
    z.append(publish);
    document.querySelector(".newscontainer").appendChild(link);
    link.appendChild(x);
  });
};
fetchdata();

window.addEventListener("scroll", () => {
  let loading = document.getElementById("loading");
  if (
    window.innerHeight + document.documentElement.scrollTop + 1 >=
    document.documentElement.scrollHeight
  ) {
    loading.style.display = "flex";
    setTimeout(() => {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=fbf86f4db86a4a44a80560814dbdc318&category=health&pageSize=10&page=${page}`
      )
        .then((res) => res.json())
        .then((json) => {
          json.articles.map((ele) => {
            let link = document.createElement("a");
            link.setAttribute("href", `${ele.url}`);
            link.setAttribute("target", "_blank");

            let x = document.createElement("div");
            x.setAttribute("class", "cards");
            x.setAttribute("data-aos", "fade-down-right");

            let y = document.createElement("img");
            y.setAttribute(
              "src",
              `${ele.urlToImage ? ele.urlToImage : "break.jpg"}`
            );

            let z = document.createElement("div");
            z.setAttribute("class", "rightside");

            let h3 = document.createElement("h3");
            h3.innerHTML = `${ele.title ? ele.title : ". . ."}`;
            let p = document.createElement("p");
            p.innerHTML = `${
              ele.description ? ele.description.slice(0, 150) + "..." : ". . ."
            }`;
            let author = document.createElement("span");
            author.setAttribute("class", "author");
            author.innerHTML = `${ele.author ? ele.author : ". . ."}`;
            let publish = document.createElement("span");
            publish.setAttribute("class", "publish");
            publish.innerHTML = `${
              ele.publishedAt ? ele.publishedAt : ". . ."
            }`;

            x.appendChild(y);
            x.appendChild(z);
            z.append(h3);
            z.append(p);
            z.append(author);
            z.append(publish);
            document.querySelector(".newscontainer").appendChild(link);
            link.appendChild(x);
          });
          loading.style.display = "none";
        });
    }, 1000);
    page = page + 1;
  }
});

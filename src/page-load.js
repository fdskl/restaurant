const pageLoad = () => {

    x = document.getElementById("content");

    let header = document.createElement("h1");
    header.innerText = "Restaurant Homepage"
    x.append(header);

    let paragraph = document.createElement("p");
    paragraph.innerText = "The best restaurant for miles and miles and miles around."
    x.append(paragraph);

    let image = document.createElement("img");
    image.setAttribute(
        src,"https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Restaurant_N%C3%A4sinneula.jpg/800px-Restaurant_N%C3%A4sinneula.jpg"
    );
    image.setAttribute(
        alt,"The inside of a revolving restaurant"
    );
    x.append(image);
}

export default pageLoad;
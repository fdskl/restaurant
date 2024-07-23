const aboutLoad = () => {

    let x = document.createElement("div");
    x.setAttribute("id", "content");
    document.body.append(x);

    let header1 = document.createElement("h1");
    header1.innerText = "ABOUT"
    x.append(header1);

    let header2 = document.createElement("h2");
    header2.innerText = "Address"
    x.append(header2);

    let paragraph1 = document.createElement("p");
    paragraph1.innerText = "742 Evergreen Street, Sprungfeld, Texas, TX0986"
    x.append(paragraph1); 

    let header3 = document.createElement("h2");
    header3.innerText = "Phone number"
    x.append(header3);

    let paragraph2 = document.createElement("p");
    paragraph2.innerText = "+01 789 345 4000"
    x.append(paragraph2); 

}

export default aboutLoad;
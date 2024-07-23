const aboutLoad = () => {

    let x = document.createElement("div");
    x.setAttribute("id", "content");
    document.body.append(x);

    let header1 = document.createElement("h1");
    header1.innerText = "ABOUT"
    x.append(header1);

}

export default aboutLoad;
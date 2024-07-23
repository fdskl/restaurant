const menuLoad = () => {

    let x = document.createElement("div");
    x.setAttribute("id", "content");
    document.body.append(x);

    let header1 = document.createElement("h1");
    header1.innerText = "MENU NEW TEST"
    x.append(header1);

    const sections = ["STARTERS", "MAIN COURSE", "DESSERT"];
    const sectionitems = [
        ["Cheese bread", "Crackers", "Lettuce"],
        ["Spaghetti", "Chicken", "Fish and chips"],
        ["Ice cream", "Chocolate", "Sweets"]
    ];

    for (let j=0; j < sections.length; j++) {

        let header2 = document.createElement("h2");
        header2.innerText = sections[j]; 
        let items = sectionitems[j];

        let header2list = document.createElement("ul");
        for (let i=0; i<items.length; i++) {
            let header2list1 = document.createElement("li");
            header2list1.innerText = items[i];
            header2list.append(header2list1);
        }

        x.append(header2);
        x.append(header2list);
    }

    /*let header2 = document.createElement("h2");
    header2.innerText = "STARTERS"
    
    let starters = ["Cheese bread", "Crackers", "Lettuce"];

    let header2list = document.createElement("ul");
    for (let i=0; i<starters.length; i++) {
        let header2list1 = document.createElement("li");
        header2list1.innerText = starters[i];
        header2list.append(header2list1);
    } */



    
   /* let header2list1 = document.createElement("li");
    header2list1.innerText = "Cheese bread";
    header2list.append(header2list1);

    let header2list2 = document.createElement("li");
    header2list2.innerText = "Crackers";
    header2list.append(header2list2);

    let header2list3 = document.createElement("li");
    header2list3.innerText = "Lettuce";
    header2list.append(header2list3); */

   // x.append(header2);
   // x.append(header2list);

}

export default menuLoad;
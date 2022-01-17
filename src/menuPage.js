function createMenuHeader(text) {
    let newElement = document.createElement('p');
    newElement.classList.add('menu-header');
    newElement.textContent = text;
    return newElement;
}

function createMenuList(array) {
    let newElement = document.createElement('div');
    newElement.classList.add('main-body-text-section')

    for (let i=0; i<array.length; i++) {
        let thisLine = document.createElement('p')
        thisLine.textContent = array[i]
        newElement.appendChild(thisLine)
    }

    return newElement;
}

function menuPageLoad() {
    let mainBodySection = document.querySelector('.main-body-content');

    // first have to delete existing elements
    while (mainBodySection.firstChild) {
        mainBodySection.removeChild(mainBodySection.firstChild);
    }

    // now we can add our menu items!
    let drinksHeader = createMenuHeader("Drinks");
    mainBodySection.appendChild(drinksHeader);

    let drinksSection = createMenuList(["Water - free", "Fountain drinks - $3", "House wine - $7", "House beer - $6", "Ask server for more options"]);
    mainBodySection.appendChild(drinksSection);

    let steaksHeader = createMenuHeader("Steaks*");
    mainBodySection.appendChild(steaksHeader);

    let steaksSection = createMenuList(["8 oz Sirloin - $34", "12 oz Sirloin - $46", "6 oz Filet Mignon - $37", "10 oz Filet Mignon - $52", "*All steaks are cooked to order."]);
    mainBodySection.appendChild(steaksSection);

    let sidesHeader = createMenuHeader("Sides");
    mainBodySection.appendChild(sidesHeader);

    let sidesSection = createMenuList(["All sides are a la carte.", "Asparagus - $12", "Au Gratin Potatoes - $11", "Lobster Mac and Cheese - $16", "Fried Cow Brain - $45"]);
    mainBodySection.appendChild(sidesSection);
}

export {menuPageLoad}
function createContactCard(name, phoneNumber, emailAddress) {
    let newElement = document.createElement('div');
    newElement.classList.add('main-body-text-section')

    let nameLine = document.createElement('p');
    nameLine.classList.add('contact-us-name')
    nameLine.textContent = name;
    newElement.appendChild(nameLine);

    let phoneLine = document.createElement('p');
    phoneLine.textContent = phoneNumber;
    newElement.appendChild(phoneLine);

    let emailLine = document.createElement('p');
    emailLine.textContent = emailAddress;
    newElement.appendChild(emailLine);

    return newElement;
}

function contactPageLoad() {
    let mainBodySection = document.querySelector('.main-body-content');

    // first have to delete existing elements
    while (mainBodySection.firstChild) {
        mainBodySection.removeChild(mainBodySection.firstChild);
    }

    // now we can add our contact info!
    let contactUsText = document.createElement('h3');
    contactUsText.textContent = "Contact Us";
    mainBodySection.appendChild(contactUsText);

    let ownerContact = createContactCard("Garrett Andrews", "813-888-8888", "garrettdaBAWS@swag.com");
    mainBodySection.appendChild(ownerContact);

    let wifeContact = createContactCard("Melanie Andrews", "813-887-8888", "melaniedaBAWS@swag.com");
    mainBodySection.appendChild(wifeContact);
}

export {contactPageLoad}
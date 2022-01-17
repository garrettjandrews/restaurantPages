import Steak from './steak.jpg';
import { menuPageLoad } from './menuPage.js';
import { contactPageLoad } from './Contact.js';
import { returnHome } from './returnHome';

function initialPageLoad() {

    // find the content id
    let pageContent = document.getElementById('content');

    // add flex container
    let flexContainer = document.createElement('div');
    flexContainer.classList.add('init-full-page');

    // create and style the header
    let header = document.createElement('div');
    let headerText = document.createElement('h3');
    headerText.textContent = "Garrett's Steakhouse";
    header.classList.add('init-header');

    header.appendChild(headerText);
    flexContainer.appendChild(header);

    // add the tabs in 
    let tabSelectionSection = document.createElement('div');
    tabSelectionSection.classList.add('tab-selection');

    let homeTab = document.createElement('div');
    homeTab.classList.add('tab-button-selected');
    let homeTabText = document.createElement('h5');
    homeTabText.textContent = "Home";
    homeTab.appendChild(homeTabText);

    let menuTab = document.createElement('div');
    menuTab.classList.add('tab-button');
    let menuTabText = document.createElement('h5');
    menuTabText.textContent = "Menu";
    menuTab.appendChild(menuTabText);

    let contactTab = document.createElement('div');
    contactTab.classList.add('tab-button');
    let contactTabText = document.createElement('h5');
    contactTabText.textContent = "Contact";
    contactTab.appendChild(contactTabText);

    tabSelectionSection.appendChild(homeTab);
    tabSelectionSection.appendChild(menuTab);
    tabSelectionSection.appendChild(contactTab);
    flexContainer.appendChild(tabSelectionSection);

    // now add the section that has image, blurb, and hours
    let mainBodySection = document.createElement('div');
    mainBodySection.classList.add('main-body-content');

    const steakPicture = new Image();
    steakPicture.src = Steak;
    steakPicture.classList.add('steak-pic');
    mainBodySection.appendChild(steakPicture);

    let blurbSection = document.createElement('div');
    blurbSection.classList.add('main-body-text-section');
    let blurbSectionText = document.createElement('p');
    blurbSectionText.textContent = "Welcome to Garrett's Steakhouse!  We serve the finest cuts of steak on the market at reasonable prices.  Please see our hours below and call the phone number on the contact page for more information."
    blurbSection.appendChild(blurbSectionText);
    mainBodySection.appendChild(blurbSection);

    // make schedule
    let hoursSection = document.createElement('div');
    hoursSection.classList.add('main-body-text-section');
    let mondayHours = document.createElement('p');
    let tuesdayHours = document.createElement('p');
    let wednesdayHours = document.createElement('p');
    let thursdayHours = document.createElement('p');
    let fridayHours = document.createElement('p');
    let saturdayHours = document.createElement('p');
    let sundayHours = document.createElement('p');
    let lineBreak = document.createElement('br')

    mondayHours.textContent = 'Monday: 10am to 11pm';
    tuesdayHours.textContent = 'Tuesday: 10am to 11pm';
    wednesdayHours.textContent = 'Wednesday: 10am to 11pm';
    thursdayHours.textContent = 'Thursday: 10am to 11pm';
    fridayHours.textContent = 'Friday: 10am to 12am';
    saturdayHours.textContent = 'Saturday: 10am to 1am';
    sundayHours.textContent = 'Sunday: CLOSED';

    hoursSection.appendChild(mondayHours);
    hoursSection.appendChild(tuesdayHours);
    hoursSection.appendChild(wednesdayHours);
    hoursSection.appendChild(thursdayHours);
    hoursSection.appendChild(fridayHours);
    hoursSection.appendChild(saturdayHours);
    hoursSection.appendChild(sundayHours);

    mainBodySection.appendChild(hoursSection);


    flexContainer.appendChild(mainBodySection);

    // add full flex container
    pageContent.appendChild(flexContainer);

    // now add event listening to the proper divs
    let allTabs = document.querySelectorAll('.tab-button, .tab-button-selected');
    allTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            // remove selection from all tabs
            allTabs.forEach((tab) => {
                tab.classList.remove('tab-button-selected');
                tab.classList.add('tab-button');
            })
            
            // now make sure just this tab is selected
            tab.classList.add('tab-button-selected');

            // now update the screen depending on what button was pressed
            let buttonLabel = tab.textContent;
            if (buttonLabel === "Menu"){
                menuPageLoad()
            } else if (buttonLabel === "Contact") {
                contactPageLoad();
            } else if (buttonLabel === "Home"){
                returnHome();
            }
        })
    })
}

export {initialPageLoad}
console.log("main.js uploaded");
const infoCard = document.getElementById("info-card-layer");
const sidebar = document.getElementById("sidebar");
const mapContainer = document.getElementById("map");
const cardTitle = document.getElementById("card-title");
const cardDescription = document.getElementById("card-description");
const story = document.getElementById("story");
const backButton = document.getElementById('back-to-index');
const portal = document.getElementById('portals');


const hideInfoCard = () => {
    console.log("Hide info card");
    infoCard.setAttribute("hidden", "hidden");
    sidebar.removeAttribute("hidden");
    mapContainer.removeAttribute("hidden");
};

const showInfoCard = (title_it, title_en, description_it, description_en, portal_img, markerType, site) => {
    
    // shows the card depending on the language
    if (language == 'it') {
        cardTitle.innerText = title_it;
        cardDescription.innerText = description_it;
    } else {
        cardTitle.innerText = title_en;
        cardDescription.innerText = description_en;
    }

    if (markerType == 'food') {
        cardTitle.innerText = '';
    }
    
    // shows the image for the portal
    if (portal_img) {
        var img = document.createElement("img");
        img.src = portal_img;
        img.alt = "immagine";
        img.classList = "img-background";
        cardTitle.append(img);
    }
    
    // shows the link for the portal, restaurants and events
    if (markerType == "portals" || markerType == "sanGiovanni" || markerType == "sanGiorgio" || markerType == "sanPietro" || markerType == "santaMaria" || markerType == "wellness" || markerType == "food" || markerType == "events") {
        var link = document.createElement("a");
        link.href = site;
        link.target = "_blank";
        link.innerText = "\n\nLink";
        cardDescription.appendChild(link);
    }
    //MODIFY WITH DATA FROM MAPBOX
    
    //------
    infoCard.removeAttribute("hidden");
    sidebar.setAttribute("hidden", "hidden");
    mapContainer.setAttribute("hidden", "hidden");
};

const hideSidebar = () => {
    console.log("Hide sidebar");
    sidebar.setAttribute("hidden", "hidden");
};

const showSidebar = () => {
    console.log("Show sidebar");
    sidebar.removeAttribute("hidden");
};

const back2Index = () => {
    infoCard.setAttribute("hidden", "hidden");
    mapContainer.removeAttribute("hidden");
};


// // TRANSLATION FUNCTION
// const translations = {
//     it: {
//         filterOptions: [
//             "Tutte le categorie", "Eventi SHU2024", "Infopoint", "Eventi aperti al pubblico", "Le Porte", "Dove mangiare", "Punti d'interesse", "Punto navetta", "Parcheggi", "Portali Gaite", "Mestieri medievali", "Villaggio Benessere", "Gaita San Giovanni", "Gaita San Giorgio", "Gaita San Pietro", "Gaita Santa Maria", "Eventi riservati"
//         ]
//     },
//     en: {
//         filterOptions: [
//             "All Categories", "SHU2024 Events", "Info Point", "Public events", "The Doors", "Where to Eat", "Points of Interest", "Shuttle Stop", "Parking lots", "Gaite Portals", "Medieval Crafts", "Wellness Village", "Gaita San Giovanni", "Gaita San Giorgio", "Gaita San Pietro", "Gaita Santa Maria", "Reserved events"
//         ]
//     }
// };
// function translate(language) {
    
//     document.getElementById('all').innerHTML = translations[language].filterOptions[0];
//     document.getElementById('default').innerHTML = translations[language].filterOptions[1];
//     document.getElementById('infopoint').innerHTML = translations[language].filterOptions[2];
//     document.getElementById('events').innerHTML = translations[language].filterOptions[3];
//     document.getElementById('entrance').innerHTML = translations[language].filterOptions[4];
//     document.getElementById('food').innerHTML = translations[language].filterOptions[5];
//     document.getElementById('tourism').innerHTML = translations[language].filterOptions[6];
//     document.getElementById('bus').innerHTML = translations[language].filterOptions[7];
//     document.getElementById('parking').innerHTML = translations[language].filterOptions[8];
//     document.getElementById('portals').innerHTML = translations[language].filterOptions[9];
//     document.getElementById('wellness').innerHTML = translations[language].filterOptions[11];
//     document.getElementById('sanGiovanni').innerHTML = translations[language].filterOptions[12];
//     document.getElementById('sanGiorgio').innerHTML = translations[language].filterOptions[13];
//     document.getElementById('sanPietro').innerHTML = translations[language].filterOptions[14];
//     document.getElementById('santaMaria').innerHTML = translations[language].filterOptions[15];
//     document.getElementById('privateEvents').innerHTML = translations[language].filterOptions[16];
    
//     document.getElementById('marker-all').innerHTML = translations[language].filterOptions[0];
//     document.getElementById('marker-default').innerHTML = translations[language].filterOptions[1];
//     document.getElementById('marker-infopoint').innerHTML = translations[language].filterOptions[2];
//     document.getElementById('marker-events').innerHTML = translations[language].filterOptions[3];
//     document.getElementById('marker-entrance').innerHTML = translations[language].filterOptions[4];
//     document.getElementById('marker-food').innerHTML = translations[language].filterOptions[5];
//     document.getElementById('marker-tourism').innerHTML = translations[language].filterOptions[6];
//     document.getElementById('marker-bus').innerHTML = translations[language].filterOptions[7];
//     document.getElementById('marker-parking').innerHTML = translations[language].filterOptions[8];
//     document.getElementById('marker-portals').innerHTML = translations[language].filterOptions[9];
//     document.getElementById('marker-wellness').innerHTML = translations[language].filterOptions[11];
//     document.getElementById('marker-sanGiovanni').innerHTML = translations[language].filterOptions[12];
//     document.getElementById('marker-sanGiorgio').innerHTML = translations[language].filterOptions[13];
//     document.getElementById('marker-sanPietro').innerHTML = translations[language].filterOptions[14];
//     document.getElementById('marker-santaMaria').innerHTML = translations[language].filterOptions[15];
//     document.getElementById('marker-privateEvents').innerHTML = translations[language].filterOptions[16];
    
//     const listingsContainer = document.getElementById('listings');
//     listingsContainer.innerHTML = '';
    

//     buildLocationList();
    
//     // document.getElementById('filter-dropdown').value = selectedType;
//     // filter();
    
// }

// function english() {
//     translate('en');
//     language = 'en';
// }

// function italian() {
//     translate('it');
//     language = 'it';
// }

// // Automatically set the language based on the browser language setting
// if (navigator.language === "it" || navigator.language == "it-IT" || navigator.language == "it-CH") {
//     language = "it";
//     translate('it');
// } else {
//     language = "en";
//     translate('en');
// };


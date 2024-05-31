console.log("main.js uploaded");
const infoCard = document.getElementById("info-card-layer");
const sidebar = document.getElementById("sidebar");
const mapContainer = document.getElementById("map");
const ARViewer = document.getElementById("arviewer-layer");
const cardTitle = document.getElementById("card-title");
const cardDescription = document.getElementById("card-description");
const story = document.getElementById("story");
const backButton = document.getElementById('back-to-index');

const hideInfoCard = () => {
    console.log("Hide info card");
    infoCard.setAttribute("hidden", "hidden");
    sidebar.removeAttribute("hidden");
    mapContainer.removeAttribute("hidden");
};

const showInfoCard = (title_it, title_en, description_it, description_en) => {
    console.log("Show info card");
    console.log(language);
    if (language == 'it') {
        cardTitle.innerText = title_it;
        cardDescription.innerText = description_it;
    } else {
        cardTitle.innerText = title_en;
        cardDescription.innerText = description_en;
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
    console.log("Back to index");
    window.location.href = "index.html"
};

const back2Map = () => {
    history.back();
}

// TRANSLATIONS
const translations = {
    en: {
        filterOptions: [
            "All Categories", "SHU2024 Events", "Info Point", "Events", "The Doors", "Where to Eat", "Points of Interest", "Shuttle Stop", "Parking lots", "Gaite Portals", "Medieval Crafts"
        ]
    },
    it: {
        filterOptions: [
            "Tutte le categorie", "Eventi SHU2024", "Infopoint", "Eventi", "Le Porte", "Dove mangiare", "Punti d'interesse", "Punto navetta", "Parcheggi", "Portali Gaite", "Mestieri medievali"
        ]
    }
};
function translate(language) {
    document.getElementById('all').innerHTML = translations[language].filterOptions[0];
    document.getElementById('default').innerHTML = translations[language].filterOptions[1];
    document.getElementById('infopoint').innerHTML = translations[language].filterOptions[2];
    document.getElementById('events').innerHTML = translations[language].filterOptions[3];
    document.getElementById('entrance').innerHTML = translations[language].filterOptions[4];
    document.getElementById('food').innerHTML = translations[language].filterOptions[5];
    document.getElementById('tourism').innerHTML = translations[language].filterOptions[6];
    document.getElementById('bus').innerHTML = translations[language].filterOptions[7];
    document.getElementById('parking').innerHTML = translations[language].filterOptions[8];
    document.getElementById('portals').innerHTML = translations[language].filterOptions[9];
    document.getElementById('crafts').innerHTML = translations[language].filterOptions[10];
    
    const listingsContainer = document.getElementById('listings');
    listingsContainer.innerHTML = '';
    
    stores.features.forEach(store => {
        var prop = store.properties;
        var listings = document.getElementById("listings");
        var listing = listings.appendChild(document.createElement("div"));
        listing.id = "listing-" + prop.id;
        if (prop.markerType) {
            listing.className = "item item-" + prop.markerType;
        } else {
            listing.className = "item item-default"; 
        }
        
        var link = listing.appendChild(document.createElement("a"));
        link.href = "#";
        link.className = "title";
        link.id = "link-" + prop.id;
        console.log(link);
        if (language === 'it') {
            link.innerText = prop.address_it;
        } else {
            link.innerText = prop.address_en;
        }
        
        link.addEventListener("click", function (e) {
            for (var i = 0; i < stores.features.length; i++) {
                if (this.id === "link-" + stores.features[i].properties.id) {
                    var clickedListing = stores.features[i];
                    flyToStore(clickedListing);
                    makeHighlight(clickedListing);
                }
            }
            var activeItem = document.getElementsByClassName("active");
            if (activeItem[0]) {
                activeItem[0].classList.remove("active");
            }
            this.parentNode.classList.add("active");
        });
    });
}

function english() {
    translate('en');
    language = 'en';;
}

function italian() {
    translate('it');
    language = 'it';;
}

if (navigator.language === "it" || navigator.language == "it-IT" || navigator.language == "it-CH") {
    language = "it";
    translate('it');
} else {
    language = "en";
    translate('en');
};
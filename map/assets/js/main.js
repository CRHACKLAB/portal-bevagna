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

    // shows the image for the portal
    if (portal_img) {
        var img = document.createElement("img");
        img.src = portal_img;
        img.alt = "collegamento al portale";
        img.classList = "img-background";

        cardTitle.append(img);
    }

    // shows the link for the portal
    if (markerType == "portals" || markerType == "sanGiovanni" || markerType == "sanGiorgio" || markerType == "sanPietro" || markerType == "santaMaria" || markerType == "wellness" || markerType == "food") {
        var link = document.createElement("a");
        link.href = site;
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

// TRANSLATION FUNCTION
const translations = {
    en: {
        filterOptions: [
            "All Categories", "SHU2024 Events", "Info Point", "Events", "The Doors", "Where to Eat", "Points of Interest", "Shuttle Stop", "Parking lots", "Gaite Portals", "Medieval Crafts", "Wellness Village"
        ]
    },
    it: {
        filterOptions: [
            "Tutte le categorie", "Eventi SHU2024", "Infopoint", "Eventi", "Le Porte", "Dove mangiare", "Punti d'interesse", "Punto navetta", "Parcheggi", "Portali Gaite", "Mestieri medievali", "Villaggio Benessere"
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
    document.getElementById('wellness').innerHTML = translations[language].filterOptions[11];
    
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
        if (prop.id === "crafts"){
            link.href = prop.site
        } else {
            link.href = "#";
        }
        link.className = "title";
        link.id = "link-" + prop.id;
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

    // document.getElementById('filter-dropdown').value = selectedType;
    // filter();

}

function english() {
    translate('en');
    language = 'en';
}

function italian() {
    translate('it');
    language = 'it';
}

// Automatically set the language based on the browser language setting
if (navigator.language === "it" || navigator.language == "it-IT" || navigator.language == "it-CH") {
    language = "it";
    translate('it');
} else {
    language = "en";
    translate('en');
};

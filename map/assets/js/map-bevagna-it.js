const imageDir = "bevagna/";
const langSuffix = "-it";


if (!("remove" in Element.prototype)) {
  Element.prototype.remove = function () {
    if (this.parentNode) {
      this.parentNode.removeChild(this);
    }
  };
}


// mapboxgl.accessToken = "pk.eyJ1IjoiZG9jLWRpdmFnbyIsImEiOiJja2NnbXU0ancwdGx1MnhtMm1pdzV5cWd4In0.NXt0RiFp4HjZ_iy55WADkg"; // token generico

mapboxgl.accessToken = "pk.eyJ1IjoiZ2FidHJpcCIsImEiOiJjbHdoeG9neGEwMGYwMmpzd283dWg2c3hqIn0.7JK3k4zD9eU0OM9iurp0Xg"; // token stile personalizzato
/**
 * Add the map to the page
 */
var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/gabtrip/clwkh3joc00rx01ny76o4hfkn", // stile personalizzato 
  // style: "mapbox://styles/mapbox/streets-v12", // stile generico
  center: [12.608985817479997, 42.933247599970436],   
  zoom: 15.4,
  scrollZoom: true,
});



//compass
const nav = new mapboxgl.NavigationControl({
  showCompass: true,
});
map.on("load", function (e) {
  map.addControl(nav, "bottom-right");
});
var stores = {
  type: "FeatureCollection",
  features: [
    // ENTRANCE POINT
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608935189233497, 42.931891328001676],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Ingresso Porta Todi",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: ``,
        markerType: "entrance",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609511886234214, 42.935485935049634],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Ingresso Porta Cannara",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: ``,
        markerType: "entrance",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.606836665994416, 42.934022587832004],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Ingresso Porta Guelfa",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: ``,
        markerType: "entrance",
      },
    },
    // END ENTRANCE POINT
    // INFOPOINT
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608634941494632, 42.933316743102765],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Infopoint SHU 2024",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "Trova le informazioni che stai cercando",
        markerType: "infopoint",
      },
    },
    // END INFOPOINT
    // EVENTS
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608862693550554, 42.932282840220076],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Robot Arena",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "Arena combattimento robot",
        markerType: "events",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.60900419418926, 42.93122243304382],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Cinema all'aperto",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "Cinema gonfiabile all'aperto",
        markerType: "events",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608837897235594, 42.931322588694094],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Sala conferenze",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "Sala conferenze all'ex mulino",
        markerType: "events",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608361092650744, 42.93274432080763],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Teatro Torti",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "Sede di evento di apertura e chiusura(?)",
        markerType: "events",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608778352733976, 42.93285330938033],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Sala capitolare",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "Sala capitolare sede di vari eventi",
        markerType: "events",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609313195494678, 42.933741281193385],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Auditorium Santa Maria Laurentia",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "Auditorium",
        markerType: "events",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609303712454063, 42.9337398926071],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Laboratorio Stop Motion",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "Laboratorio Stop Motion",
        markerType: "events",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609703896780115, 42.93478548924887],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Stazione Pilotaggio Droni",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "Prova a far volare un drone",
        markerType: "events",
      },
    },
    //END EVENTS
    // BUS
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609108692711839, 42.93571481343088],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Punto raccolta navetta",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "Qua verrete lasciati e ripresi dalle navette",
        markerType: "bus",
      },
    },
    // END BUS
    // AREA FOOD
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608473536273573, 42.93295581877788],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Mensa SHU Young + Staff",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "I partecipanti a SHU Young e lo Staff Egina sono invitati a mangiare in questo luogo",
        markerType: "food",
      },
    },
    // FINE AREA FOOD
  ],
};
/**
 * Assign a unique id to each store. You'll use this `id`
 * later to associate each point on the map with a listing
 * in the sidebar.
 */
stores.features.forEach(function (store, i) {
  store.properties.id = i;
});

// GPS
var geolocateControl = new mapboxgl.GeolocateControl({
  positionOptions: {
      enableHighAccuracy: true
  },
  trackUserLocation: true,
  showUserLocation: true
});

map.addControl(geolocateControl);



/**
 * Wait until the map loads to make changes to the map.
*/
map.on("load", function (e) {
  /**
   * This is where your '.addLayer()' used to be, instead
   * add only the source without styling a layer
   */
  map.addSource("places", {
    type: "geojson",
    data: stores,
  });

  /**
   * Add all the things to the page:
   * - The location listings on the side of the page
   * - The markers onto the map
   * 
   */
  buildLocationList(stores);
  addMarkers();
});

/**
 * Add a marker to the map for every store listing.
 **/
function addMarkers() {
  /* For each feature in the GeoJSON object above: */
  stores.features.forEach(function (marker) {
    /* Create a div element for the marker. */
    var el = document.createElement("div");
    /* Assign a unique `id` to the marker. */
    el.id = "marker-" + marker.properties.id;
    /* Assign the `marker` class to each marker for styling. */
    // el.className = "marker";

    // to have different marker styles for each service
    if (marker.properties.markerType) {
      el.className = "marker-" + marker.properties.markerType;
    } else {
      el.className = "marker-default"; // Fallback class
    }
    /**
     * Create a marker using the div element
     * defined above and add it to the map.
     **/
    new mapboxgl.Marker(el, { offset: [0, -23] })
      .setLngLat(marker.geometry.coordinates)
      .addTo(map);

    /**
     * Listen to the element and when it is clicked, do three things:
     * 1. Fly to the point
     * 2. Close all other popups and display popup for clicked store
     * 3. Highlight listing in sidebar (and remove highlight for all other listings)
     **/
    el.addEventListener("click", function (e) {
      /* Fly to the point */
      flyToStore(marker);
      /* Close all other popups and display popup for clicked store */
      makeHighlight(marker);
      showInfoCard(marker.properties.address,marker.properties.description,marker.properties.spritemap);
      /* Highlight listing in sidebar */
      e.stopPropagation();
      
    });
  });
}

/**
 * Add a listing for each store to the sidebar.
 **/
function buildLocationList(data) {
  data.features.forEach(function (store, i) {
    /**
     * Create a shortcut for `store.properties`,
     * which will be used several times below.
     **/
    var prop = store.properties;
    /* Add a new listing section to the sidebar. */
    var listings = document.getElementById("listings");
    var listing = listings.appendChild(document.createElement("div"));
    /* Assign a unique `id` to the listing. */
    listing.id = "listing-" + prop.id;

    /* Assign the `item` class to each listing for styling. */
    if (prop.markerType) {
      listing.className = "item item-" + prop.markerType;
    } else {
      listing.className = "item item-default"; // Fallback class
    }
    

    /* Add the link to the individual listing created above. */
    var link = listing.appendChild(document.createElement("a"));
    link.href = "#";
    link.className = "title";
    link.id = "link-" + prop.id;
    link.innerHTML = prop.address;

    /**
     * Listen to the element and when it is clicked, do four things:
     * 1. Update the `currentFeature` to the store associated with the clicked link
     * 2. Fly to the point
     * 3. Close all other popups and display popup for clicked store
     * 4. Highlight listing in sidebar (and remove highlight for all other listings)
     **/
    link.addEventListener("click", function (e) {
      for (var i = 0; i < data.features.length; i++) {
        if (this.id === "link-" + data.features[i].properties.id) {
          var clickedListing = data.features[i];
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

/**
 * Use Mapbox GL JS's `flyTo` to move the camera smoothly
 * a given center point.
 **/
function flyToStore(currentFeature) {
  map.flyTo({
    center: currentFeature.geometry.coordinates,
    zoom: 20,
  });
  sidebar.setAttribute("hidden", "hidden");
}


function makeHighlight(currentFeature) {
  var marker = document.getElementById(
    "marker-" + currentFeature.properties.id
  );
  console.log(marker.style.filter);
  marker.style.filter = "hue-rotate(145deg)";
}

function checkinbounds(currentFeature) {
  const bound1 = new mapboxgl.LngLat(
    currentFeature.geometry.coordinates[0] + 0.001,
    currentFeature.geometry.coordinates[1] + 0.001
  );
  const bound2 = new mapboxgl.LngLat(
    currentFeature.geometry.coordinates[0] - 0.001,
    currentFeature.geometry.coordinates[1] - 0.001
  );
  console.log('bound1 = ' + bound1, 'bound2 = ' + bound2);
  const bounds = new mapboxgl.LngLatBounds(bound1, bound2);

  // called every time a new user position is determined
  function checkUserPostion(position) {
    const { latitude, longitude } = position.coords;
    return bounds.contains([longitude, latitude]);
  }
console.log(bounds);
  navigator.geolocation.watchPosition(checkUserPostion);
}


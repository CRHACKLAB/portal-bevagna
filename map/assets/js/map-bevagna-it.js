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
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.607934319813625, 42.932798183356965],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Piazza Filippo Silvestri",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu tristique turpis. Suspendisse nec sem nisl. Maecenas non aliquam magna. Nulla auctor massa sapien, et efficitur sapien placerat in. Donec nisi mauris, feugiat eu ipsum malesuada, interdum convallis urna. Morbi porta quis erat id viverra. Integer elit velit, egestas vel orci a, mattis elementum purus. Sed lacus lorem, congue non nisl sit amet, bibendum pretium arcu.

        Praesent non elementum dolor. Nam laoreet nisl arcu, nec sagittis ipsum faucibus id. Proin arcu mi, finibus non vehicula ut, faucibus vel lorem. Morbi maximus dignissim tellus maximus rutrum. Duis eu leo a purus porttitor tristique. Quisque condimentum facilisis dui, eget porttitor mi pharetra nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vivamus id massa ac magna aliquet gravida vel a nunc. Morbi ornare leo in dui tempor tincidunt. Sed mauris urna, commodo sed ligula sit amet, efficitur posuere est.`,
        markerType: "default",
        /* EDIT20230531A*/
        // spritemap: imageDir + "bevagna-san-silvestro" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.606165063628701, 42.93096847344314],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Chiesa Sant'Agostino",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "Chiesa Sant'Agostino",
        markerType: "food",
        /* EDIT20230531A*/
        // spritemap: imageDir + "bevagna-san-silvestro" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.60798777653682, 42.932574690823685],
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Portale Gaita Santa Maria",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "Verso la Gaita Santa Maria",
        markerType: "infopoint",
        /* EDIT20230531A*/
        // spritemap: imageDir + "bevagna-san-silvestro" + langSuffix,
        /* EDIT20230531A*/
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609716965561148, 42.93479371348007], 
      }, 
      properties: {
        phoneFormatted: "",
        phone: "",
        address: "Punto a caso",
        city: "Bevagna",
        country: "Italy",
        crossStreet: "",
        postalCode: "06031",
        state: "",
        description: "Questo è un punto a caso sulla mappa",
        markerType: "food",
        /* EDIT20230531A*/
        // spritemap: imageDir + "bevagna-san-silvestro" + langSuffix,
        /* EDIT20230531A*/
      },
    },
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


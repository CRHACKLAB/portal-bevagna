


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
  center: [12.608885817479997, 42.933247599970436],   
  zoom: 15.8,
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
    // PARCHEGGI
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609238261447722, 42.93548362345141],
      }, 
      properties: {
        address_it: "Parcheggio Piazzale Masci Mindolfo",
        address_en: "Piazzale Masci Mindolfo Parking",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Parcheggio a pagamento",
        markerType: "parking",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.606431742030377, 42.93451733301161],
      }, 
      properties: {
        address_it: "Parcheggio Piazzale dell' Accoglienza",
        address_en: "Piazzale dell' Accoglienza Parking",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Parcheggio a pagamento",
        markerType: "parking",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609730858967609, 42.93153631439249],
      }, 
      properties: {
        address_it: "Parcheggio Centro",
        address_en: "Central Parking",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Parcheggio a pagamento",
        markerType: "parking",
      },
    },
    // FINE PARCHEGGI
    // ENTRANCE POINT
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608935189233497, 42.931891328001676],
      }, 
      properties: {
        address_it: "Ingresso Porta Todi",
        address_en: "Porta Todi Entrance",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: ``,
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
        address_it: "Ingresso Porta Cannara",
        address_en: "Porta Cannara Entrance",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: ``,
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
        address_it: "Ingresso Porta Guelfa",
        address_en: "Porta Guelfa Entrance",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: ``,
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
        address_it: "Infopoint SHU 2024",
        address_en: "SHU 2024 Info Point",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Trova le informazioni che stai cercando su SHU2024",
        description_en: "Find what you are searching for about SHU2024",
        markerType: "infopoint",
      },
    },
    // END INFOPOINT
    // BUS
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609108692711839, 42.93571481343088],
      }, 
      properties: {
        address_it: "Punto raccolta navetta",
        address_en: "Shuttle stop",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Qua verrete lasciati e ripresi dalle navette",
        description_en: "Here you arrive and go back to the hotels with shuttle",
        markerType: "bus",
      },
    },
    // END BUS
    // SHU MAIN EVENTS
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.607299828666415, 42.932544953101086],
      }, 
      properties: {
        address_it: "Sede Social Hackademy Umbria",
        address_en: "Social Hackademy Umbria Main Event",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Sede evento principale",
        description_en: "Main event place",
        markerType: "default",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609109781873885, 42.93308063784067],
      }, 
      properties: {
        address_it: "SHU YoungMakers",
        address_en: "SHU YoungMakers",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Sede evento giovani",
        description_en: "Young makers event place",
        markerType: "default",
      },
    },
    // END SHU MAIN EVENTS
    // COLLATERAL EVENTS
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608862693550554, 42.932282840220076],
      }, 
      properties: {
        address_it: "Robot Arena",
        address_en: "Robot Arena",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Arena combattimento robot",
        description_en: "Robot combat Arena",
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
        address_it: "Cinema all'aperto",
        address_en: "Open-air Cinema",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Cinema gonfiabile all'aperto",
        description_en: "Open-air Cinema",
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
        address_it: "Sala conferenze",
        address_en: "Conference Room",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Sala conferenze all'ex mulino",
        description_en: "Conference room at former mill",
        markerType: "events",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608320282219381, 42.93266661870295],
      }, 
      properties: {
        address_it: "Teatro Torti",
        address_en: "Torti Theatre",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Sede di evento di apertura e chiusura(?)",
        description_en: "Sede di evento di apertura e chiusura(?)",
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
        address_it: "Sala capitolare",
        address_en: "Sala capitolare",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Sala capitolare sede di vari eventi",
        description_en: "Sala capitolare sede di vari eventi",
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
        address_it: "Auditorium Santa Maria Laurentia",
        address_en: "Auditorium Santa Maria Laurentia",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Auditorium",
        description_en: "Auditorium",
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
        address_it: "Laboratorio Stop Motion",
        address_en: "Stop Motion Lab",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Laboratorio Stop Motion",
        description_en: "Stop Motion Lab",
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
        address_it: "Stazione Pilotaggio Droni",
        address_en: "Pilotaggio Droni",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Prova a far volare un drone",
        description_en: "Prova a far volare un drone",
        markerType: "events",
      },
    },
    //END COLLATERAL EVENTS
    // AREA FOOD
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608473536273573, 42.93295581877788],
      }, 
      properties: {
        address_it: "Mensa SHU Young + Staff",
        address_en: "SHU Young + Staff Mensa",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "I partecipanti a SHU Young e lo Staff Egina sono invitati a mangiare in questo luogo",
        description_en: "I partecipanti a SHU Young e lo Staff Egina sono invitati a mangiare in questo luogo",
        markerType: "food",
      },
    },
    // FINE AREA FOOD
    // PORTALS GAITE
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608231387105889, 42.932829261692824],
      }, 
      properties: {
        address_it: "Portale Mercato delle Gaite",
        address_en: "Mercato delle Gaite Portal",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "",
        description_en: "",
        markerType: "portals",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608045948399779, 42.9328888254322],
      }, 
      properties: {
        address_it: "Portale Gaita San Giovanni",
        address_en: "Gaita San Giovanni Portal",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "",
        markerType: "portals",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608180148251774, 42.932735250662574],
      }, 
      properties: {
        address_it: "Portale Gaita San Giorgio",
        address_en: "Gaita San Giorgio Portal",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "",
        description_en: "",
        markerType: "portals",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.607844084756854, 42.93267580226183],
      }, 
      properties: {
        address_it: "Portale Gaita San Pietro",
        address_en: "Gaita San Pietro Portal",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "",
        description_en: "",
        markerType: "portals",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.60797151822976, 42.932599840332955],
      }, 
      properties: {
        address_it: "Portale Gaita Santa Maria",
        address_en: "Gaita Santa Maria Portal",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "",
        description_en: "",
        markerType: "portals",
      },
    },
    // END PORTALS GAITE
    // MESTIERI GAITE
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.610776563411152, 42.934996177151284],
      }, 
      properties: {
        address_it: "Mestiere Gaita San Giovanni",
        address_en: "Mestiere Gaita San Giovanni",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "",
        description_en: "",
        markerType: "crafts",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.607107126589524, 42.93244475232125],
      }, 
      properties: {
        address_it: "Mestiere Gaita San Giorgio",
        address_en: "Gaita San Giorgio",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "",
        description_en: "",
        markerType: "crafts",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609526419514012, 42.93342634588887],
      }, 
      properties: {
        address_it: "Mestiere Gaita San Pietro",
        address_en: "Gaita San Pietro",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "",
        description_en: "",
        markerType: "crafts",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.60748257632491, 42.93164125523298],
      }, 
      properties: {
        address_it: "Mestiere Gaita Santa Maria",
        address_en: "Gaita Santa Maria",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "",
        description_en: "",
        markerType: "crafts",
      },
    },
    // END MESTIERI GAITE
    // MONUMENTS
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.607804872878202, 42.93274584330837],
      }, 
      properties: {
        address_it: "Collegiata di San Michele Arcangelo",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Chiesa principale di Bevagna",
        markerType: "tourism",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.60805967681525, 42.932572241665866],
      }, 
      properties: {
        address_it: "Chiesa di San Silvestro",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Chiesa di Bevagna",
        markerType: "tourism",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.610415787761626, 42.93458778655827],
      }, 
      properties: {
        address_it: "Chiesa di Santa Maria Filiorum Comitis",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Edificata da Rainaldo I conte di Antignano, la chiesetta, oggi sconsacrata, è la più antica tra quelle conservate: se ne hanno notizie fin dal 1198.",
        markerType: "tourism",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.610415787761626, 42.93458778655827],
      }, 
      properties: {
        address_it: "Chiesa dei Santi Domenico e Giacomo",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Edificata da Rainaldo I conte di Antignano, la chiesetta, oggi sconsacrata, è la più antica tra quelle conservate: se ne hanno notizie fin dal 1198.",
        markerType: "tourism",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.610027931636044, 42.93529424090502],
      }, 
      properties: {
        address_it: "Chiesa di San Francesco",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Edificata alla fine del XIII secolo sull’antico oratorio dedicato a San Giovanni Battista, sorge sul luogo più alto della città, dove sicuramente era un tempio romano. La facciata, a capanna, è adorna di un elegante portale polistilo a tutto sesto, con capitelli foliati in marmo.\n\n L’interno, ad una sola navata, è stato completamente rinnovato nel XVIII secolo; vi si ammirano dipinti di Dono Doni e Ascensidonio Spacca. Da una piccola porta a destra si accede a una cappella interna con affreschi risalenti al XVI secolo.",
        markerType: "tourism",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.607944194452331, 42.93274776821662],
      }, 
      properties: {
        address_it: "Piazza Filippo Silvestri",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Piazza principale di Bevagna",
        description_en: "Main Square in Bevagna",
        markerType: "tourism",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608272765020507, 42.93271831137097],
      }, 
      properties: {
        address_it: "Palazzo dei consoli - Teatro Francesco Torti",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Teatro principale di Bevagna",
        description_en: "Main Theater",
        markerType: "tourism",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608999172041296, 42.931555085918454],
      }, 
      properties: {
        address_it: "Accolta (Lavatoio Pubblico)",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Realizzato in un invaso in cui confluiscono le acque del fiume Clitunno che fuoriescono formando una cascata.\n\n A pochi metri dalla cascata il fiume Clitunno confluisce nel Teverone, prendendo il nome Timia.",
        markerType: "tourism",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.611099481619236, 42.934797069800894],
      }, 
      properties: {
        address_it: "Domus Romana",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Nel cortile dietro casa Silvestri esiste, alcuni metri più in basso del piano attuale della strada (ex via Flaminia) una domus, unico complesso romano di forma rettangolare rimasto integro abbastanza da suscitare meraviglia per la raffinatezza e ricchezza dell’ambiente, che dovrebbe entrare nei circuiti turistici per divulgare e far apprezzare la storia di questi luoghi. Sono visibili i resti di tre locali antichi intercomunicanti.\n\n Anche se non si può stabilire con certezza se pubblico o privato, l’edificio è del I secolo d. C. ed impressiona per le strutture di reticolato a pietre bianche, rosa e grigie con semicolonne di mattoni e per il pavimento di mosaico a piccole tessere bianche e nere adorno di meandro e con fascia ad onde intorno, che è l’elemento di maggior spicco. Scendendo per una scaletta tre metri sotto, si arriva in un altro ambiente, forse più antico, con pavimento a mosaico bianco a grandi tessere e opus spicatum.",
        markerType: "tourism",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609317153740498, 42.93473963085082],
      }, 
      properties: {
        address_it: "Teatro romano",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Le abitazioni, costruite sopra i resti romani, seguono le curvature di un teatro di grandi dimensioni che si appoggiava sul pendio dell’altura e si affacciava sulla via Flaminia.\n\nAll’interno di case private sono visibili i cospicui e significativi resti di due ambulacri che fungevano da sostegno alla cavea. In un tratto dell’ambulacro è stato ricavato l’originale ristorante “Redibis”.",
        markerType: "tourism",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609549274700179, 42.9349358441573],
      }, 
      properties: {
        address_it: "Edificio delle Terme",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Del complesso termale rimane il frigidarium, formato da nicchie decorate a mosaico a tessere bianche e nere. I recenti restauri hanno messo in evidenza tracce del calidarium. Il bel mosaico, del II sec. d. C., di pregevole e raffinata fattura, si ispira al mondo marino.",
        markerType: "tourism",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.60969600097808, 42.93468947276769],
      }, 
      properties: {
        address_it: "Tempio",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Il tempio era originariamente orientato verso il Foro, il fianco e la facciata posteriore, tuttora conservati, presentano un rivestimento in opus mixtum e decorazioni con semicolonne e paraste. Risale al II sec. d. C. In epoca medievale è stato trasformato nella chiesa della Madonna della Neve.\n\n Oggi è parte della Residenza d’Epoca, Orto degli Angeli.",
        markerType: "tourism",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.606272352000518, 42.93095178075009],
      }, 
      properties: {
        address_it: "Chiesa di Sant'Agostino",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Fu fondata, insieme all’originario convento degli agostiniani, nel 1316 nei pressi della più antica chiesa di San Pietro.\n\n Nella tribuna e lungo le pareti vi sono frammenti di affreschi votivi del XIV secolo su più strati. Un recente restauro, reso possibile da Don Aldo Giovannelli, ha riportato alla luce una serie di absidiole, decorate nel corso del XVI secolo destinate agli altari e con soggetti dedicati alla Vergine.",
        markerType: "tourism",
      },
    },
    // END MONUMENTS
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
      showInfoCard(marker.properties.address_it, marker.properties.address_en, marker.properties.description_it, marker.properties.description_en);
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
    if (language ==="it") {
      link.innerHTML = prop.address_it;
    } else {
      link.innerHTML = prop.address_en;
    }

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

// FILTER

function filter() {
  const selectedType = document.getElementById('filter-dropdown').value;

  const filteredListings = stores.features.filter(store => 
      selectedType === 'all' || store.properties.markerType === selectedType
  );

  console.log(filteredListings);

  var listings = document.getElementById("listings");
  listings.innerHTML = ''; // Clear existing listings 
  buildLocationList({ type: 'FeatureCollection', features: filteredListings });
}




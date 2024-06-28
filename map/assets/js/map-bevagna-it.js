
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
  // center: [12.608438888126923, 42.933064240993126],
  center:[12.608639140444703, 42.933365079779506],
  zoom: 15.9,
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
    // SHU MAIN EVENTS
    {
      type: "Feature",
      geometry: {
        type: "Point",
        // coordinates: [12.607299828666415, 42.932544953101086],
        coordinates: [12.60737556320675, 42.93249821488307],
      }, 
      properties: {
        address_it: "#SHU2024",
        address_en: "#SHU2024",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Sede evento principale",
        description_en: "Main event place",
        markerType: "default",
        img: "./assets/img/card_background/ScuolaMedia.jpg"
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609041950922078, 42.93294673702365],
      }, 
      properties: {
        address_it: "#SHU YoungMakers",
        address_en: "#SHU YoungMakers",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Sede OpenLabs\n(Ingresso tramite Chiostro di San Domenico, Corso G.Matteotti, 107",
        description_en: "OpenLabs Venue\n(Entrance via Chiostro di San Domenico, Corso G. Matteotti, 107)",
        markerType: "youngMakers",
        img: "./assets/img/card_background/Chiostro.jpg",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609634719118803, 42.9336065645548],
      }, 
      properties: {
        address_it: "#SHU YoungMakers",
        address_en: "#SHU YoungMakers",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Sede incontri in plenaria",
        description_en: "Place for plenary meetings",
        markerType: "youngMakers",
        img: "./assets/img/card_background/Auditorium.jpg",
      },
    },
    // END SHU MAIN EVENTS
    
    //SHU KIDS CAMP
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.607179327353062, 42.931244034005736],
      }, 
      properties: {
        address_it: "Campus #SHUKIDS benESSERE",
        address_en: "#SHUKIDS wellBEING Camp",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Campus per bambini e bambine dai 6 agli 11 anni\n\n 9.00 - 17.00 (Da Giovedì 4 a Sabato 6)\n 10.00 - 14.00 (Domenica 7)\n\nPranzo al sacco... la merenda la offriamo noi!
        \n\nPer iscriverti segui il`,
        description_en: `Camp for boys and girls aged 6 to 11\n\n from 9.00 am to 5.00 pm (Thursday 4th to Saturday 6th)\n from 10.00 am to 2.00 pm (Sunday 7th)\n\nBring your own lunch... we provide the snacks!
        \n\nTo register, follow the`,
        markerType: "shuKids",
        site: "https://www.socialhackathonumbria.info/#pricingtable"
      },
    },
    // END SHU KIDS CAMP

    // INFOPOINT
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608639140444703, 42.933365079779506],
      }, 
      properties: {
        address_it: "Infopoint #SHU2024",
        address_en: "#SHU2024 Info Point",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "L'infopoint è aperto da mercoledì 03 a domenica 07 Luglio dalle ore 09.00 alle ore 20.00\nVieni a visitarci per accreditamenti, informazioni e suggerimenti",
        description_en: "The infopoint is open from Wednesday 03rd to Sunday 07th July from 09.00 am to 08.00 pm\nCome and visit us for accreditations, information and suggestions",
        markerType: "infopoint",
      },
    },
    // END INFOPOINT

    // WELLBEING VILLAGE
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608625578612703, 42.93291435001335],
      }, 
      properties: {
        address_it: "Villaggio benessere",
        address_en: "Wellbeing Village",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `\n05 Luglio 9.30-11.00\nPRATICHE IN MOVIMENTO\n"Sperimenta personalmente pratiche di movimento di natura esplorativa"
        \n\n05 Luglio 11.00-12.30\nWORKSHOP DI INSALATE CREATIVE\n"Workshop bilingue per esplorare e condividere le tradizioni culinarie dal mondo!"
        \n\n05 Luglio 16.30-18.00\nDEGUSTARE IL BENESSERE\n"In collaborazione con Ass. Italiana Conoscere l’Olio di Oliva e La Strada del Sagrantino"
        \n\n05 Luglio 18.00-19.30\nLET'S PLAY SPOON\n"Migliora le tue capacità motorie, il ritmo, la creatività, la collaborazione e la fiducia in te stesso"
        ____________________________
        \n06 Luglio 9.30-11.00\nBENESSERE DEL CANE\n"Esplora il linguaggio del mondo animale e vieni a conoscere gli amici a 4 zampe di Nicole"
        \n\n06 Luglio 11.00-12.30\nAVATART - DIGITAL ART EXPERIENCE\n"“Immergerti” concretamente all’interno di immagini, fumetti e disegni da te realizzati"
        \n\n06 Luglio 16.30-18.00\nPROGETTARE BENESSERE URBANO\n"Apprendi le tecniche del Tactical Urbanism per la co-progettazione di uno spazio pubblico di qualità"
        \n\n06 Luglio 18.00-19.30\nHEALTY ENERGY DRINKS\n"Impara come preparare degli ottimi energy drinks rinfrescanti e salutari anche a casa tua"
        ____________________________
        \nPer iscriverti segui il`,
        description_en: `\n05th July from 9.30 am to 11.00 am\nPRACTICES ON THE MOVE\n"Personally experience movement practices of an exploratory nature"
        \n\n05th July from 11.00 am to 12.30 pm\nCREATIVE SALADS WORKSHOP\n"Bilingual workshop to explore and share culinary traditions from around the world!"
        \n\n05th July from 4.30 pm to 6.00 pm\nTASTE WELL-BEING\n"In collaboration with the Italian Association for Olive Oil Knowledge and La Strada del Sagrantino"
        \n\n05th July from 6.00 pm to 7.30 pm\nLET'S PLAY SPOON\n"Enhance your fine motor skills, rhythm, creativity, collaboration, and self-confidence"
        ____________________________
        \n06th July from 9.30 am to 11.00 am\nDOG WELLBEING AND OWNER TRAINING\n"Explore the language of the animal world and meet Nicole's four-legged friends"
        \n\n06th July from 11.00 am to 12.30 pm\nAVATART - DIGITAL ART EXPERIENCE\n"“Immerse” yourself in the images, comics, and drawings you have created"
        \n\n06th July from 4.30 pm to 6.00 pm\nPLANNING URBAN WELLBEING\n"Learn Tactical Urbanism techniques for the co-design of a quality public space"
        \n\n06th July from 6.00 pm to 7.30 pm\nHEALTY ENERGY DRINKS\n"Learn how to prepare excellent, refreshing and healthy energy drinks at home"
        ____________________________
        \nTo register, follow the`,
        markerType: "wellness",
        site: "https://www.socialhackathonumbria.info/#pricingtable",
        img: "./assets/img/card_background/SHU-benessere.svg"
      },
    },
    // END WELLBEING VILLAGE
    
    // BUS
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609515445796614, 42.935782011194114],
      }, 
      properties: {
        address_it: "Arrivi/Partenze Shuttle Bus",
        address_en: "Arrivals/Departures Shuttle Bus",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Il bus navetta servirà i partecipanti con badge + sticker trasporti su base oraria dalle 9:00 alle 23:00 e sarà operativo da giovedì 04 alle 17:00 a domenica 07 luglio alle 12:00
        \n\nScopri il percorso della navetta al`,
        description_en: 
        `The shuttle bus will serve the participants with badge + transport sticker on an hourly basis from 9:00 am to 11.00 pm and it will operate from Thursday 04th at 05.00 pm to Sunday 07th July at 12:00 pm
        \n\nDiscover the shuttle route following the`,
        markerType: "bus",
        site: "./assets/img/card_background/bustour.png"
      },
    },
    // END BUS
    
    // PARCHEGGI
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609182121969642, 42.93573297119598],
      }, 
      properties: {
        address_it: "Parcheggio Piazzale Masci Mindolfo",
        address_en: "Piazzale Masci Mindolfo Parking",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Parcheggio a pagamento",
        description_en: "Toll Parking",
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
        description_en: "Toll Parking",
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
        description_en: "Toll Parking",
        markerType: "parking",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.607646027494551, 42.93576703186645],
      }, 
      properties: {
        address_it: "Parcheggio Gratuito",
        address_en: "Free Parking",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "Parcheggio gratuito",
        description_en: "Free Parking",
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
        description_en: "",
        markerType: "entrance",
        img: "./assets/img/card_background/Porta_Todi.jpeg",
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
        description_en: "",
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
        description_en: "",
        markerType: "entrance",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.61153788980332, 42.93485095938446],
      }, 
      properties: {
        address_it: "Ingresso Porta Foligno",
        address_en: "Porta Foligno Entrance",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: ``,
        description_en: "",
        markerType: "entrance",
      },
    },
    // END ENTRANCE POINT
    
    //? COLLATERAL EVENTS
    // ROBOT ARENA
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608862693550554, 42.932282840220076],
      }, 
      properties: {
        address_it: "#RobotArena",
        address_en: "#RobotArena",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Scegli il tuo robot, impara a programmarlo e sfida i tuoi amici in fantastici percorsi ad ostacoli... INGRESSO LIBERO!!!
        \n\nVenerdì 05 e Sabato 06 Luglio\n 10.00-18.00`,
        description_en: `Choose your robot, learn how to program it and challenge your friends in the fantastic obstacle courses... FREE ADMISSION!!!
        \n\nFriday 7th and Saturday 8th July from\n from 10:00 am to 6:00 pm`,
        markerType: "robotArena",
      },
    },
    // END ROBOT ARENA

    // AUDITORIUM
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609414788264116, 42.93368454898098],
      }, 
      properties: {
        address_it: "Auditorium Santa Maria Laurentia",
        address_en: "Auditorium Santa Maria Laurentia",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `\n05 Luglio 17.00-20.00\n Videogiochi per la salute @ scuola\n"Workshop per docenti di scuola primaria e secondaria di primo e secondo grado"
        ____________________________
        \n06 Luglio 10.00-16.00\n Benessere e patrimonio\n"Giornata di lavori con esperti e professionisti della cultura su pratiche inclusive e sostenibili"
        ____________________________
        \nPer iscriverti segui il`,
        description_en: `\n05th July from 5.00 pm to 8.00 pm\n Videogames for health @ school\n"Workshop for primary and secondary school teachers"
        ____________________________
        \n06th July from 10.00 am to 4.00 pm\n Wellbeing and heritage\n"A day of work with culture experts and professionals on inclusive and sustainable practices"
        ____________________________
        \nTo register, follow the`,
        markerType: "auditorium",
        site: "https://www.socialhackathonumbria.info/#pricingtable",
        img: "./assets/img/card_background/Auditorium.jpg",
      },
    },
    // END AUDITORIUM

    // STOPMOTION LAB
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.60886224293785, 42.933011541825124],
      }, 
      properties: {
        address_it: "Stop-Motion Creative Lab",
        address_en: "Stop-Motion Creative Lab",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Ingresso attraverso Chiostro di San Domenico\n Corso G. Matteotti, 107\n Sala Mevania\n\nWorkshop condotto in lingua inglese dagli animatori di Primanima Animation (HU)
        \n\nPer iscriverti segui il`,
        description_en: `Entrance via Chiostro di San Domenico\n Corso G. Matteotti, 107\n Sala Mevania\n\nWorkshop conducted in English by animators from Primanima Animation (HU)
        \n\nTo register, follow the`,
        markerType: "stopMotion",
        site: "https://www.socialhackathonumbria.info/#pricingtable",
        img: "./assets/img/card_background/Chiostro.jpg"
      },
    },
    // END STOPMOTION LAB

    // DRONES PLAYGROUND
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609703896780115, 42.93478548924887],
      }, 
      properties: {
        address_it: "#Drones Playground",
        address_en: "#Drones Playground",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Vieni a volare sopra ai cieli di Bevagna con i droni dell'associazione Lares.
        \nVenerdì 05 e Sabato 06 Luglio\n10.00-18.00.
        \n\nACCESSO LIBERO`,
        description_en: `Come and fly above the skies of Bevagna with the drones of the Lares association.\nFriday 05th and Saturday 06th July from 10.00 am to 06.00 pm`,
        markerType: "drones",
      },
    },
    // END DRONES PLAYGROUND
    //? END COLLATERAL EVENTS
    
    //PRIVATE EVENTS 
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
        description_it: "Sede di evento di apertura #SHU2024\n Giovedì 04 Luglio\n18.30-20.00",
        description_en: "#SHU2024 Opening Event\n Thursday 04th July\n From 06.30 pm to 08.00 pm",
        markerType: "privateEvents",
        img: "./assets/img/card_background/Teatro_Torti.jpg"
      },
    },
    
    //END PRIVATE EVENTS

    // FOOD
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.60909766931367, 42.93377717411387],
      }, 
      properties: {
        address_it: "Osteria del Podestà",
        address_en: "Osteria del Podestà",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Orario di apertura\nGiovedì e venerdì\n12.00-22.30\n\nSabato e Domenica\n12.00-15.00\n\nPrenotazione Consigliata\nTel. 333 1141368\nTel. 0742360222\nTel. 3395801980\n\nGuarda il menù`,
        description_en: `Opening time\nThursday and Friday\nFrom 12.00 pm to 10.30 pm\n\nSaturday and Sunday\nFrom 12.00 pm to 03.00 pm\n\nReservation Recommended\nTel. 333 1141368\nTel. 0742360222\nTel. 3395801980\n\nDownload the menu`,
        markerType: "food",
        site: "./assets/img/menus/OsteriaDelPodesta.pdf",
        img: "./assets/img/restaurant_logos/04-Osteria del Podestà-01.png",
      },
    },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.60930649464892, 42.934100605624714],
    //   }, 
    //   properties: {
    //     address_it: "La Casareccia",
    //     address_en: "La Casareccia",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "Scopri il menù in esclusiva per SHU2024 seguendo il",
    //     description_en: "Discover the menu created for SHU2024 following the",
    //     markerType: "food",
    //     site: "./assets/img/menus/menuCasareccia-imp.pdf",
    //     img: "./assets/img/restaurant_logos/09-la casareccia.png",
    //   },
    // },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.610021131734227, 42.934401182653865],
      }, 
      properties: {
        address_it: "Le Barbatelle",
        address_en: "Le Barbatelle",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Orario di apertura\nDal venerdì alla domenica\n12.00-15.00\n18.30-23.00\n\nPrenotazione Obbligatoria\nTel. 3332976785\n\nGuarda il menù`,
        description_en: `Opening Time\nFrom friday to Sunday\nFrom 12.00pm to 03.00 pm\nFrom 06.30 to 11.00 pm\n\nReservation Required\nTel. 3332976785\n\nDownload the menu`,
        markerType: "food",
        site: "./assets/img/menus/menu estate Le Barbatelle conv [1-2].pdf",
        img: "./assets/img/restaurant_logos/05-LE BARBATELLE.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.610451556603063, 42.93569713476225],
      }, 
      properties: {
        address_it: "Le Delizie del Borgo",
        address_en: "Le Delizie del Borgo",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Orario di apertura\n12.30-15.00\n19.30-22.00\n\nPrenotazione Consigliata\nTel. 3272921366\n\nConsulta il sito internet per scoprire il menù`,
        description_en: `Opening Time\nFrom 12.30 pm to 03.00 pm\nFrom 07.30 pm to 10.00 pm\n\nReservation Recommended\nTel. 3272921366\n\nLook at the website and discover the menu`,
        markerType: "food",
        site: "https://www.deliziedelborgobevagna.it/",
        img: "./assets/img/restaurant_logos/08-Le Delizie del Borgo-color.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608954987138244, 42.93323818489366],
      }, 
      properties: {
        address_it: "Il Grottino",
        address_en: "Il Grottino",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Orario di apertura\n12.00-14.30\n19.30-22.00\n\nPrenotazione Obbligatoria\nTel. 3398472337\nTel. 0742 361375\n\nGuarda il menù`,
        description_en: `Opening Time\nFrom 12.00 pm to 02.30 pm\nFrom 07.30 to 10.00 pm\n\nReservation Recommended\nTel. 3398472337\nTel. 0742 361375Download the menu`,
        markerType: "food",
        site: "./assets/img/menus/Menu Grottino.pdf",
        img: "./assets/img/restaurant_logos/07-il_grottino-01.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608126798862632, 42.93231904223721],
      }, 
      properties: {
        address_it: "Oltre la Pizza",
        address_en: "Oltre la Pizza",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it:  `Orario di apertura\n08.00-14.00\n17.30-20.30\n\nPrenotazione Consigliata\nTel. 0742 361918\n\nGuarda il menù`,
        description_en: `Opening Time\nFrom 08.00 am to 02.00 pm\nFrom 05.30 pm to 08.30 pm\n\nReservation Recommended\nTel. 0742 361918\n\nDownload the menu`,
        markerType: "food",
        site: "./assets/img/menus/oltrelapizzamenu (1).pdf",
        img: "./assets/img/restaurant_logos/01-oltre la pizza-rifili-01.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.60877266088538, 42.93363180296813],
      }, 
      properties: {
        address_it: "Gran Caffè Garibaldi",
        address_en: "Gran Caffè Garibaldi",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Orario di apertura\n07.00-22.00\n\nPrenotazione Obbligatoria\nTel. 3925931168\nTel. 0742669050\n\nScopri il menù in esclusiva per SHU2024 seguendo il`,
        description_en: `Opening Time\nFrom 07.00 am to 10.00 pm\n\nReservation required\nTel. 3925931168\nTel. 0742669050\n\nDiscover the menu created for SHU2024 following the`,
        markerType: "food",
        site: "./assets/img/menus/gran_cafe_garibaldi.pdf",
        img: "./assets/img/restaurant_logos/02-Logo_Gran Caffe' Garibaldi.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.60843524473502, 42.933141683739876],
      }, 
      properties: {
        address_it: "Enoteca La Trifola",
        address_en: "Enoteca La Trifola",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Orario di apertura\n12.00-15.30\n17.30-23.00\n\nPrenotazione Consigliata\nTel. 3496868371\n\nGuarda il menù`,
        description_en: `Opening Time\nFrom 12.00 pm to 03.30 pm\nFrom 05.30 pm to 11.00 pm\n\nReservation recommended\nTel. 3496868371\n\nDownload the menu`,
        markerType: "food",
        site: "#",
        img: "./assets/img/restaurant_logos/03-La trifola_Tavola disegno 1.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609792807937257, 42.93412448599204],
      }, 
      properties: {
        address_it: "La Dispensa",
        address_en: "La Dispensa",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Orario di apertura\n12.00-14.30\n18.30-23.00\n\nPrenotazione Consigliata\nTel. 0742 773324\n\nGuarda il menù`,
        description_en: `Opening Time\nFrom 12.00 pm to 02.30 pm\nFrom 06.30 pm to 11.00 pm\n\nReservation recommended\nTel. 0742 773324\n\nDownload the menu`,
        markerType: "food",
        site: "./assets/img/menus/menuDispensa.pdf",
        img: "./assets/img/restaurant_logos/06-la dispensa.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.607678828809288, 42.93423892567264],
      }, 
      properties: {
        address_it: "La Briciola",
        address_en: "La Briciola",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Orario di apertura\n12.00-14.00\n19.30-22.00\n\nPrenotazione Obbligatoria\nTel. 3929128197\n\nGuarda il menù`,
        description_en: `Opening Time\nFrom 12.00 pm to 02.00 pm\nFrom 07.30 pm to 10.00 pm\n\nReservation recommended\nTel. 3929128197\n\nDownload the menu`,
        markerType: "food",
        site: "./assets/img/menus/labriciola.pdf",
        img: "./assets/img/restaurant_logos/LA BRICIOLA-def_Tavola disegno 1.png",
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.609277414493665, 42.93613602233924],
      }, 
      properties: {
        address_it: "La Mangeria",
        address_en: "La Mangeria ",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: `Orario di apertura\n19.30-23.00\n\nPrenotazione Consigliata\nTel. 3334300722\n\nGuarda il menù`,
        description_en: `Opening Time\nFrom 07.30 pm to 11.00 pm\n\nReservation recommended\nTel. 3334300722\n\nDownload the menu`,
        markerType: "food",
        site: "./assets/img/menus/mangeriaMenu.pdf",
        img: "./assets/img/restaurant_logos/la Mangeria-01.png",
      },
    },
    // FINE AREA FOOD
    
    //TODO to use during shu2024
    // POINT OF INTEREST 
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.607804872878202, 42.93274584330837],
    //   }, 
    //   properties: {
    //     address_it: "Collegiata di San Michele Arcangelo",
    //     address_en: "Collegiate of San Michele Arcangelo",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "La Collegiata di San Michele Arcangelo di Bevagna, edificata tra il XII e il XIII secolo, è un magnifico esempio di architettura romanica. La sua imponente facciata, ornata da un elegante rosone e portali scolpiti, introduce a un interno maestoso con una navata centrale spaziosa e cappelle laterali riccamente decorate. Tra le opere d'arte conservate all'interno, spiccano affreschi e dipinti di rilevante valore storico e artistico. La collegiata, dedicata a San Michele Arcangelo, non solo è un importante luogo di culto, ma anche un simbolo della storia e della cultura di Bevagna.",
    //     description_en: "The Collegiate Church of San Michele Arcangelo in Bevagna, built between the 12th and 13th centuries, is a magnificent example of Romanesque architecture. Its imposing facade, adorned with an elegant rose window and sculpted portals, leads to a majestic interior with a spacious central nave and richly decorated side chapels. Among the artworks preserved inside, frescoes and paintings of significant historical and artistic value stand out. The collegiate church, dedicated to San Michele Arcangelo, is not only an important place of worship but also a symbol of the history and culture of Bevagna.",
    //     markerType: "tourism",
    //     img: "./assets/img/card_background/San_Michele.jpg"
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.60805967681525, 42.932572241665866],
    //   }, 
    //   properties: {
    //     address_it: "Chiesa di San Silvestro",
    //     address_en: "Church of San Silvestro",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "La Chiesa di San Silvestro di Bevagna, costruita nel 1195, è un notevole esempio di architettura romanica. La sua facciata austera e gli interni sobri riflettono l'essenzialità e la purezza dello stile romanico. L'edificio presenta una pianta a croce latina e conserva elementi architettonici originali, come le colonne con capitelli decorati e le eleganti arcate. La chiesa, situata nel cuore della città, rappresenta un'importante testimonianza della storia medievale di Bevagna e un luogo di contemplazione e raccoglimento.",
    //     description_en: "The Church of San Silvestro in Bevagna, built in 1195, is a remarkable example of Romanesque architecture. Its austere facade and simple interiors reflect the essentiality and purity of the Romanesque style. The building features a Latin cross plan and retains original architectural elements, such as columns with decorated capitals and elegant arches. Located in the heart of the city, the church represents an important testament to the medieval history of Bevagna and a place of contemplation and reflection.",
    //     markerType: "tourism",
    //     img: "./assets/img/card_background/San_Silvestro.jpg"
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.60851520005717, 42.93280014873804],
    //   }, 
    //   properties: {
    //     address_it: "Chiesa dei Santi Domenico e Giacomo",
    //     address_en: "Church of Saints Domenico and Giacomo",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "La Chiesa dei Santi Domenico e Giacomo di Bevagna, eretta nel XIV secolo, è un pregevole esempio di architettura gotica umbra. La facciata, semplice e austera, nasconde un interno ricco di dettagli artistici. Gli affreschi che adornano le pareti, realizzati da maestri locali, testimoniano la vivacità culturale e religiosa dell'epoca. La chiesa, dedicata a San Domenico e a San Giacomo, è un luogo di profonda spiritualità e offre ai visitatori uno scorcio autentico della storia e dell'arte medievale di Bevagna.",
    //     description_en: "The Church of Saints Domenico and Giacomo in Bevagna, erected in the 14th century, is an exquisite example of Umbrian Gothic architecture. The simple and austere facade hides an interior rich in artistic details. The frescoes adorning the walls, created by local masters, testify to the cultural and religious vibrancy of the era. The church, dedicated to Saint Domenico and Saint Giacomo, is a place of deep spirituality and offers visitors an authentic glimpse into the medieval history and art of Bevagna.",
    //     markerType: "tourism",
    //     img: "./assets/img/card_background/San_Domenico.jpg"
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.610027931636044, 42.93529424090502],
    //   }, 
    //   properties: {
    //     address_it: "Chiesa di San Francesco",
    //     address_en: "Church of San Francesco",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "La Chiesa di San Francesco di Bevagna, edificata nel XIII secolo, è un suggestivo esempio di architettura gotica francescana. Situata nel cuore della città, la chiesa presenta una facciata semplice ma elegante, con un portale finemente decorato. L'interno, caratterizzato da una navata unica, ospita pregevoli affreschi e opere d'arte che raccontano la vita di San Francesco e la storia religiosa della regione. La chiesa, con la sua atmosfera raccolta e spirituale, è un luogo di grande importanza storica e culturale per Bevagna, riflettendo la profonda devozione francescana della comunità locale.",
    //     description_en: "The Church of San Francesco in Bevagna, built in the 13th century, is an evocative example of Franciscan Gothic architecture. Located in the heart of the city, the church features a simple yet elegant facade with a finely decorated portal. The interior, characterized by a single nave, houses valuable frescoes and artworks that narrate the life of San Francesco and the religious history of the region. The church, with its intimate and spiritual atmosphere, is a place of great historical and cultural importance for Bevagna, reflecting the profound Franciscan devotion of the local community.",
    //     markerType: "tourism",
    //     img: "./assets/img/card_background/San_Francesco.jpg"
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.607944194452331, 42.93274776821662],
    //   }, 
    //   properties: {
    //     address_it: "Piazza Filippo Silvestri",
    //     address_en: "Piazza Filippo Silvestri",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "La piazza Filippo Silvestri di Bevagna è una suggestiva piazza nel cuore del centro storico della cittadina umbra. Circondata da antichi edifici in stile medievale e rinascimentale, la piazza è dominata dalla maestosa facciata della Chiesa di San Michele Arcangelo. Al centro della piazza si trova una fontana in stile gotico, decorata con sculture e rilievi che rappresentano scene della vita quotidiana e dei miracoli di San Michele. Intorno alla fontana si trovano panchine in pietra dove è piacevole fermarsi a prendere un po' di fresco e osservare la vita che scorre tranquilla tra le viuzze antiche. Durante l'estate la piazza ospita eventi culturali, concerti e manifestazioni che attirano turisti da ogni parte.",
    //     description_en: "Piazza Filippo Silvestri in Bevagna is an evocative square in the heart of the historic center of the Umbrian town. Surrounded by ancient buildings in medieval and Renaissance styles, the square is dominated by the majestic facade of the Church of San Michele Arcangelo. At the center of the square is a Gothic-style fountain, decorated with sculptures and reliefs depicting scenes of daily life and the miracles of San Michele. Around the fountain are stone benches where it is pleasant to sit, cool off, and watch the tranquil life unfold among the ancient alleys. During the summer, the square hosts cultural events, concerts, and festivities that attract tourists from all over.",
    //     markerType: "tourism",
    //     img: "./assets/img/card_background/Piazza.jpg"
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.608272765020507, 42.93271831137097],
    //   }, 
    //   properties: {
    //     address_it: "Teatro Francesco Torti",
    //     address_en: "Francesco Torti Theater",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "Il Teatro Francesco Torti di Bevagna è un gioiello architettonico situato nel cuore del centro storico della città. Costruito nel XVIII secolo, il teatro conserva intatta la sua struttura originale, con un elegante proscenio adornato da decorazioni in stile neoclassico e una ricca decorazione interna. La sala, che può ospitare fino a 150 persone, è ideale per spettacoli teatrali, concerti e eventi culturali di vario genere.\n\n Ogni anno, il Teatro Torti ospita una variegata programmazione artistica, che spazia dalla prosa al balletto, dalla musica classica al teatro contemporaneo, offrendo al pubblico esperienze culturali di alta qualità e coinvolgenti.",
    //     description_en: "The Francesco Torti Theater in Bevagna is an architectural gem located in the heart of the city's historic center. Built in the 18th century, the theater retains its original structure, with an elegant proscenium adorned with neoclassical decorations and rich interior decor. The hall, which can accommodate up to 150 people, is ideal for theatrical performances, concerts, and various cultural events.\n\n Every year, the Torti Theater hosts a diverse artistic program, ranging from drama to ballet, from classical music to contemporary theater, offering the audience high-quality and engaging cultural experiences.",
    //     markerType: "tourism",
    //     img: "./assets/img/card_background/Teatro_Torti.jpg"
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.609305845474651, 42.93377505471904],
    //   }, 
    //   properties: {
    //     address_it: "Auditorium Santa Maria Laurentia",
    //     address_en: "Auditorium Santa Maria Laurentia",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "La parrocchia fu fondata da un gruppo di 34 famiglie rifugiatesi a Bevagna in seguito alla distruzione, ordinata dal pontefice, dei castelli di Antignano, fedele a Federico II di Svevia.\n\n La chiesa, oggi sconsacrata e usata come Auditorium, conserva un bel portale con un rilievo che raffigura la Madonna che allatta il Bambino.",
    //     description_en: "The parish was founded by a group of 34 families who took refuge in Bevagna following the destruction, ordered by the Pope, of the castles of Antignano, which were loyal to Frederick II of Swabia.\n\n The church, now deconsecrated and used as an auditorium, retains a beautiful portal with a relief depicting the Madonna nursing the Child.",
    //     markerType: "tourism",
    //     img: "./assets/img/card_background/Auditorium.jpg",
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.608973164004386, 42.93164149051439],
    //   }, 
    //   properties: {
    //     address_it: "Accolta (Lavatoio Pubblico)",
    //     address_en: "The Accolta",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "L'accolta di Bevagna è un antico lavatoio pubblico situato nel centro storico della città. Risalente al XV secolo, quest'edificio è un esempio notevole di architettura medievale e rappresenta un importante punto di incontro per la comunità locale.L'accolta è caratterizzata da una struttura a pianta rettangolare con un portico a colonne che siaffaccia su un grande bacino d'acqua. Questo lavatoio veniva utilizzato dalle donne del paese per lavare i panni e raccogliere acqua pulita per le attività domestiche.\n\n Oggi, l'accolta di Bevagna è diventata un luogo di interesse storico e culturale, visitato da turisti e curiosi che desiderano immergersi nell'atmosfera autentica di questo antico lavatoio. Inoltre, durante il periodo estivo, l'accolta di Bevagna ospita eventi culturali e ricreativi, tra cui concerti, mostre d'arte e spettacoli teatrali, che contribuiscono a valorizzare e promuovere il patrimonio storico e artistico della città.",
    //     description_en: `The 'accolta' of Bevagna is an ancient public washhouse located in the historic center of the city. Dating back to the 15th century, this building is a remarkable example of medieval architecture and represents an important gathering place for the local community. The washhouse features a rectangular structure with a columned portico overlooking a large water basin. This washhouse was used by the women of the town to wash clothes and collect clean water for domestic activities.\n\n Today, the 'accolta' of Bevagna has become a site of historical and cultural interest, visited by tourists and curious onlookers who wish to immerse themselves in the authentic atmosphere of this ancient washhouse. Moreover, during the summer, the "accolta" hosts cultural and recreational events, including concerts, art exhibitions, and theatrical performances, contributing to the enhancement and promotion of the city's historical and artistic heritage.`,
    //     markerType: "tourism",
    //     img: "./assets/img/card_background/Lavatoio.jpg"
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.609549274700179, 42.9349358441573],
    //   }, 
    //   properties: {
    //     address_it: "Edificio delle Terme",
    //     address_en: "Bath building",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "Del complesso termale rimane il frigidarium, formato da nicchie decorate a mosaico a tessere bianche e nere. I recenti restauri hanno messo in evidenza tracce del calidarium. Il bel mosaico, del II sec. d. C., di pregevole e raffinata fattura, si ispira al mondo marino.",
    //     description_en: "The frigidarium remains of the thermal complex, formed by mosaic-decorated niches with black and white tesserae. Recent restorations have revealed traces of the calidarium. The beautiful mosaic, from the 2nd century A.C., of exquisite and refined workmanship, is inspired by the marine world.",
    //     markerType: "tourism",
    //     img: "./assets/img/card_background/Teatro_Romano_Terme.jpg"
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.60969600097808, 42.93468947276769],
    //   }, 
    //   properties: {
    //     address_it: "Tempio",
    //     address_en: "Temple",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "Risalente all'epoca repubblicana (II sec. a.C.), conserva l'alto podio originariamente rivestito, le pareti complete della cella in blocchetti con ricorsi in mattoni, con semicolonne e lesene rivestite in stucco, simulando una struttura interamente circondata da colonne marmoree. Il tempio si è preservato grazie alla sua trasformazione, in epoca Medioevale, nella ex chiesa della Madonna della Neve.\n\n Oggi è parte della Residenza d’Epoca, Orto degli Angeli.",
    //     description_en: "Dating back to the Republican era (2nd century BC), it preserves the high podium originally covered, the complete walls of the cella in small blocks with brick courses, with semi-columns and pilasters covered in stucco, simulating a structure entirely surrounded by marble columns. The temple has been preserved thanks to its transformation, in the Medieval period, into the former church of Madonna della Neve.\n\n Today it is part of the Historical Residence, Orto degli Angeli.",
    //     markerType: "tourism",
    //     img: "./assets/img/card_background/Tempio.jpg"
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.606272352000518, 42.93095178075009],
    //   }, 
    //   properties: {
    //     address_it: "Chiesa di Sant'Agostino",
    //     address_en: "Church of Sant'Agostino",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "Fu fondata nel 1316, insieme all'originario convento degli agostiniani, nei pressi dell'antica chiesa di San Pietro.Nella tribuna e lungo le pareti si trovano frammenti di affreschi votivi del XIV secolo su più strati. Un recente restauro, realizzato grazie a Don Aldo Giovannelli, ha portato alla luce una serie di absidiole, decorate nel corso del XVI secolo, destinate agli altari e raffiguranti soggetti dedicati alla Vergine.",
    //     description_en: "It was founded in 1316, together with the original Augustinian convent, near the ancient church of San Pietro. In the apse and along the walls, there are fragments of votive frescoes from the 14th century on multiple layers. A recent restoration, carried out thanks to Don Aldo Giovannelli, has brought to light a series of small apses, decorated in the 16th century, intended for altars and depicting subjects dedicated to the Virgin.",
    //     markerType: "tourism",
    //     img: "./assets/img/card_background/SantAgostino.jpg"
    //   },
    // },
    // END POINT OF INTEREST
    
    // PORTALS GAITE
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.608231387105889, 42.932829261692824],
    //   }, 
    //   properties: {
    //     address_it: "Portale Mercato delle Gaite",
    //     address_en: "Mercato delle Gaite Portal",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "Se non hai l'app Zappar potrai scaricarla cliccando sul link sottostante",
    //     description_en: "If you don't have the Zappar app, you'll be redirected to the app store to download it, then you can enjoy the portal!",
    //     markerType: "portals",
    //     site: "https://webxr.run/Vb5Adgw582d6Z",
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.608045948399779, 42.9328888254322],
    //   }, 
    //   properties: {
    //     address_it: "Portale Gaita San Giovanni",
    //     address_en: "Gaita San Giovanni Portal",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "",
    //     markerType: "portals",
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.608180148251774, 42.932735250662574],
    //   }, 
    //   properties: {
    //     address_it: "Portale Gaita San Giorgio",
    //     address_en: "Gaita San Giorgio Portal",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "",
    //     description_en: "",
    //     markerType: "portals",
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.607844084756854, 42.93267580226183],
    //   }, 
    //   properties: {
    //     address_it: "Portale Gaita San Pietro",
    //     address_en: "Gaita San Pietro Portal",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "",
    //     description_en: "",
    //     markerType: "portals",
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.60797151822976, 42.932599840332955],
    //   }, 
    //   properties: {
    //     address_it: "Portale Gaita Santa Maria",
    //     address_en: "Gaita Santa Maria Portal",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "",
    //     description_en: "",
    //     markerType: "portals",
    //   },
    // },
    // END PORTALS GAITE
    
    // MESTIERI GAITE
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.610776563411152, 42.934996177151284],
    //   }, 
    //   properties: {
    //     address_it: "Mestiere Gaita San Giovanni",
    //     address_en: "Gaita San Giovanni Craft",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "",
    //     description_en: "",
    //     markerType: "sanGiovanni",
    //   },
    // },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.607107126589524, 42.93244475232125],
      }, 
      properties: {
        address_it: "Mestiere Gaita San Pietro",
        address_en: "Gaita San Pietro Craft",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "",
        description_en: "",
        markerType: "sanPietro",
        site: "https://www.socialhackademy.it/shu03/assets/renpy/Cereria/index.html",
      },
    },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.609526419514012, 42.93342634588887],
    //   }, 
    //   properties: {
    //     address_it: "Mestiere Gaita San Giorgio",
    //     address_en: "Gaita San Giorgio Craft",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "",
    //     description_en: "",
    //     markerType: "sanGiorgio",
    //   },
    // },
    // {
    //   type: "Feature",
    //   geometry: {
    //     type: "Point",
    //     coordinates: [12.60748257632491, 42.93164125523298],
    //   }, 
    //   properties: {
    //     address_it: "Mestiere Gaita Santa Maria",
    //     address_en: "Gaita Santa Maria Craft",
    //     city: "Bevagna",
    //     country: "Italy",
    //     postalCode: "06031",
    //     description_it: "",
    //     description_en: "",
    //     markerType: "santaMaria",
    //   },
    // },
    // END MESTIERI GAITE
    
    // TOILET
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608545097301263, 42.93266494869125],
      }, 
      properties: {
        address_it: "Bagni pubblici",
        address_en: "Public toilet",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "",
        description_en: "",
        markerType: "toilet",
      },
    },
    // END TOILET

    // WATER POINT
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [12.608108088084045, 42.932672363152506],
      }, 
      properties: {
        address_it: "Fontana con Acqua Potabile",
        address_en: "Drinking Water Fountain",
        city: "Bevagna",
        country: "Italy",
        postalCode: "06031",
        description_it: "",
        description_en: "",
        markerType: "water",
      },
    },
    // END WATER POINT
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

// Save geolocation status in localStorage
function saveGeolocationStatus(isEnabled) {
  localStorage.setItem('geolocationEnabled', isEnabled);
}

// Retrieve geolocation status from localStorage
function getGeolocationStatus() {
  return localStorage.getItem('geolocationEnabled') === 'true';
}

// Usage example when activating geolocation
if (getGeolocationStatus()) {
  // Code to activate geolocation
  activateGeolocation();
}

// Update geolocation status whenever it's toggled
function activateGeolocation() {
  saveGeolocationStatus(true);
  // Code to activate geolocation
}

function deactivateGeolocation() {
  saveGeolocationStatus(false);
  // Code to deactivate geolocation
}

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
      showInfoCard(marker.properties.address_it, marker.properties.address_en, marker.properties.description_it, marker.properties.description_en, marker.properties.img, marker.properties.markerType, marker.properties.site);
      /* Highlight listing in sidebar */
      e.stopPropagation();
      
    });
  });
}

// This function is to translate the listings

function updateAddresses(data) {
  var listings = document.getElementById("listings").children;
  Array.from(listings).forEach(function (listing, i) {
      var prop = data.features[i].properties;
      var link = listing.querySelector("a.title");
      if (language == "it") {
          link.innerHTML = prop.address_it;
      } else {
          link.innerHTML = prop.address_en;
      }
  });
}


let currentFilter = 'all';
/**
 * Add a listing for each store to the sidebar.
**/
function buildLocationList(data) {
  if (!data || !data.features || !Array.isArray(data.features)) {
    console.error('Invalid data format for buildLocationList');
    return;
  }
  const listingsContainer = document.getElementById('listings');
  listingsContainer.innerHTML = '';
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
  
    if (language == "it") {
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

document.getElementById('filter-dropdown').addEventListener('change', handleFilterChange);
document.getElementById('marker-dropdown').addEventListener('change', handleFilterChange);

function handleFilterChange(event) {
    const selectedType = event.target.value;
    currentFilter = selectedType;
    document.getElementById('filter-dropdown').value = selectedType;
    document.getElementById('marker-dropdown').value = selectedType;
    applyFilters(selectedType);
    return (selectedType);
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

//FILTERS

function applyFilters(selectedType) {
    
  const filteredListings = stores.features.filter(store => 
      (selectedType === 'all' || store.properties.markerType === selectedType)
  );
  
  updateListings(filteredListings);
  updateMarkers(filteredListings);

}


function updateListings(filteredListings) {
  // var listings = document.getElementById("listings");
  // listings.innerHTML = '';
  buildLocationList({ type: 'FeatureCollection', features: filteredListings });
}

function updateMarkers(filteredListings) {
  stores.features.forEach(feature => {
      const markerElement = document.getElementById(`marker-${feature.properties.id}`);
      
      if (filteredListings.includes(feature)) {
        if (markerElement) {
              markerElement.style.display = 'inline';
          }
      } else {
          if (markerElement) {;
              markerElement.style.display = 'none';
          }
      }
      document.getElementById('marker-dropdown').style.display = 'none';
  });
}

function showFilter() {
  document.getElementById('marker-dropdown').style.display = 'inline';
}

// TRANSLATION FUNCTION
const translations = {
  it: {
      filterOptions: [
          "Tutte le categorie", "#SHU 2024", "Infopoint", "Eventi aperti al pubblico", "Le Porte", "Dove mangiare", "Punti d'interesse", "Punto navetta", "Parcheggi", "Portale Gaite", "Mestieri medievali", "Villaggio Benessere", "Gaita San Giovanni", "Gaita San Giorgio", "Gaita San Pietro", "Gaita Santa Maria", "Evento di lancio", "#SHU YoungMakers", "#DronesPlayground", "Laboratorio Stop Motion", "Auditorium Santa Maria Laurentia", "#RobotArena", "Bagni Pubblici", '#SHU-KIDS benESSERE', "Fontana di Acqua Potabile"
      ]
  },
  en: {
      filterOptions: [
          "All Categories", 
          "#SHU 2024", 
          "Info Point", 
          "Public events", 
          "The Doors", 
          "Where to Eat", 
          "Points of Interest", 
          "Shuttle Stop", 
          "Parking lots", 
          "Gaite Portal", 
          "Medieval Crafts", 
          "Wellbeing Village", 
          "Gaita San Giovanni", 
          "Gaita San Giorgio", 
          "Gaita San Pietro", 
          "Gaita Santa Maria", 
          "Launch event", 
          "#SHU YoungMakers", 
          "#DronesPlayground", 
          "Stop Motion Lab", 
          "Auditorium Santa Maria Laurentia", 
          "#RobotArena", 
          "Public Toilet", 
          "#SHU-KIDS wellBEING", 
          "Drinking Water Fountain"
      ]
  }
};
function translate(language) {
  
  document.getElementById('all').innerHTML = translations[language].filterOptions[0];
  document.getElementById('default').innerHTML = translations[language].filterOptions[1];
  document.getElementById('infopoint').innerHTML = translations[language].filterOptions[2];
  document.getElementById('entrance').innerHTML = translations[language].filterOptions[4];
  document.getElementById('food').innerHTML = translations[language].filterOptions[5];
  // document.getElementById('tourism').innerHTML = translations[language].filterOptions[6];
  document.getElementById('bus').innerHTML = translations[language].filterOptions[7];
  document.getElementById('parking').innerHTML = translations[language].filterOptions[8];
  // document.getElementById('portals').innerHTML = translations[language].filterOptions[9];
  document.getElementById('wellness').innerHTML = translations[language].filterOptions[11];
  // document.getElementById('sanGiovanni').innerHTML = translations[language].filterOptions[12];
  // document.getElementById('sanGiorgio').innerHTML = translations[language].filterOptions[13];
  // document.getElementById('sanPietro').innerHTML = translations[language].filterOptions[14];
  // document.getElementById('santaMaria').innerHTML = translations[language].filterOptions[15];
  document.getElementById('privateEvents').innerHTML = translations[language].filterOptions[16];
  document.getElementById('youngMakers').innerHTML = translations[language].filterOptions[17];
  document.getElementById('drones').innerHTML = translations[language].filterOptions[18];
  document.getElementById('stopMotion').innerHTML = translations[language].filterOptions[19];
  document.getElementById('auditorium').innerHTML = translations[language].filterOptions[20];
  document.getElementById('robotArena').innerHTML = translations[language].filterOptions[21];
  document.getElementById('toilet').innerHTML = translations[language].filterOptions[22];
  document.getElementById('shuKids').innerHTML = translations[language].filterOptions[23];
  document.getElementById('water').innerHTML = translations[language].filterOptions[24];

  
  document.getElementById('marker-all').innerHTML = translations[language].filterOptions[0];
  document.getElementById('marker-default').innerHTML = translations[language].filterOptions[1];
  document.getElementById('marker-infopoint').innerHTML = translations[language].filterOptions[2];
  document.getElementById('marker-entrance').innerHTML = translations[language].filterOptions[4];
  document.getElementById('marker-food').innerHTML = translations[language].filterOptions[5];
  // document.getElementById('marker-tourism').innerHTML = translations[language].filterOptions[6];
  document.getElementById('marker-bus').innerHTML = translations[language].filterOptions[7];
  document.getElementById('marker-parking').innerHTML = translations[language].filterOptions[8];
  // document.getElementById('marker-portals').innerHTML = translations[language].filterOptions[9];
  document.getElementById('marker-wellness').innerHTML = translations[language].filterOptions[11];
  // document.getElementById('marker-sanGiovanni').innerHTML = translations[language].filterOptions[12];
  // document.getElementById('marker-sanGiorgio').innerHTML = translations[language].filterOptions[13];
  // document.getElementById('marker-sanPietro').innerHTML = translations[language].filterOptions[14];
  // document.getElementById('marker-santaMaria').innerHTML = translations[language].filterOptions[15];
  document.getElementById('marker-privateEvents').innerHTML = translations[language].filterOptions[16];
  document.getElementById('marker-youngMakers').innerHTML = translations[language].filterOptions[17];
  document.getElementById('marker-drones').innerHTML = translations[language].filterOptions[18];
  document.getElementById('marker-stopMotion').innerHTML = translations[language].filterOptions[19];
  document.getElementById('marker-auditorium').innerHTML = translations[language].filterOptions[20];
  document.getElementById('marker-robotArena').innerHTML = translations[language].filterOptions[21];
  document.getElementById('marker-toilet').innerHTML = translations[language].filterOptions[22];
  document.getElementById('marker-shuKids').innerHTML = translations[language].filterOptions[23];
  document.getElementById('marker-water').innerHTML = translations[language].filterOptions[24];
  
  // Reload listings in the correct language
  language = language;
  applyFilters(currentFilter);
}

function english() {
  language = 'en';
  translate('en');
  document.getElementById('privacy-policy-it').style.display = 'none';
  document.getElementById('privacy-policy-en').style.display = 'block';
  document.getElementById('credits-it').style.display = 'none';
  document.getElementById('credits-en').style.display = 'block';
}

function italian() {
  language = 'it';
  translate('it');
  document.getElementById('privacy-policy-en').style.display = 'none';
  document.getElementById('privacy-policy-it').style.display = 'block';
  document.getElementById('credits-en').style.display = 'none';
  document.getElementById('credits-it').style.display = 'block';
}

// Automatically set the language based on the browser language setting
if (navigator.language === "it" || navigator.language == "it-IT" || navigator.language == "it-CH") {
  language = "it";
  translate('it');
  document.getElementById('privacy-policy-en').style.display = 'none';
  document.getElementById('privacy-policy-it').style.display = 'block';
  document.getElementById('credits-en').style.display = 'none';
  document.getElementById('credits-it').style.display = 'block';
} else {
  language = "en";
  translate('en');
  document.getElementById('privacy-policy-it').style.display = 'none';
  document.getElementById('privacy-policy-en').style.display = 'block';
  document.getElementById('credits-it').style.display = 'none';
  document.getElementById('credits-en').style.display = 'block';
};



function init() {
var latlng =  new google.maps.LatLng(-23.6292021,-46.6884747);
var myOptions = {
    zoom: 16,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    mapTypeControl: true,
    panControl: true,
    streetViewControl: false,
    scaleControl: true,
    styles: [
    {
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#f5f5f2"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.attraction",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ffffff"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.place_of_worship",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.school",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#71c8d4"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "color": "#e5e8e7"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c7c7c7"
            },
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "stylers": [
            {
                "color": "#a0d3d3"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "color": "#91b65d"
            },
            {
                "gamma": 1.51
            }
        ]
    },
    {
        "featureType": "poi.government",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    }
]
};

var bermudaTriangle;
var map = new google.maps.Map(document.getElementById('map'), myOptions);
//Calling informative content
var contentString = '<div id="content">'+
    '<div id="siteNotice">'+
    '</div>'+
    '<h1 id="firstHeading" class="firstHeading">Uluru</h1>'+
    '<div id="bodyContent">'+
    '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
    'sandstone rock formation in the southern part of the '+
    'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) '+
    'south west of the nearest large town, Alice Springs; 450&#160;km '+
    '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major '+
    'features of the Uluru - Kata Tjuta National Park. Uluru is '+
    'sacred to the Pitjantjatjara and Yankunytjatjara, the '+
    'Aboriginal people of the area. It has many springs, waterholes, '+
    'rock caves and ancient paintings. Uluru is listed as a World '+
    'Heritage Site.</p>'+
    '<p>Attribution: Uluru, <a href="http://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">'+
    'http://en.wikipedia.org/w/index.php?title=Uluru</a> '+
    '(last visited June 22, 2009).</p>'+
    '</div>'+
    '</div>';

  var infowindow = new google.maps.InfoWindow({
      content: contentString
  });
//Calling overlay polygon element
var triangleCoords = [
    new google.maps.LatLng(-9.986551, -67.835989),
    new google.maps.LatLng(-9.987059, -67.836472),
    new google.maps.LatLng(-9.986340, -67.837094),
    new google.maps.LatLng(-9.983022, -67.837588),
    new google.maps.LatLng(-9.984840, -67.841879),
    new google.maps.LatLng(-9.987777, -67.839090),
    new google.maps.LatLng(-9.988475, -67.839583),
    new google.maps.LatLng(-9.987016, -67.843639),
    new google.maps.LatLng(-9.995469, -67.840356),
    new google.maps.LatLng(-9.993926, -67.833543),
    new google.maps.LatLng(-9.988199, -67.835024)
  ];

  bermudaTriangle = new google.maps.Polygon({
    paths: triangleCoords,
    strokeColor: '#FF0000',
    strokeOpacity: 0.7,
    strokeWeight: 2,
    fillColor: '#FF0000',
    fillOpacity: 0.35,
    position:new google.maps.LatLng(-9.990926, -67.838532)
  });
var predioimg = {
    url: 'img/localizacao/predio1.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(15, 55),
    scale: new google.maps.Size(198, 114),
  };

var predioimg2 = {
    url: 'img/localizacao/predio2.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20),
    scale: new google.maps.Size(198, 114)
  };


var image = {
    url: 'img/localizacao/bt_parque_ac.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20),
    scale: new google.maps.Size(198, 114)
  };

var image2 = {
    url: 'img/localizacao/bt_shopping_ac.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20),
    scale: new google.maps.Size(198, 114)
  };

var image3 = {
    url: 'img/localizacao/bt_supermercado_ac.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20),
    scale: new google.maps.Size(198, 114)
  };

var image4 = {
    url: 'img/localizacao/bt_saude_ac.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20),
    scale: new google.maps.Size(198, 114)
  };

var image5 = {
    url: 'img/localizacao/bt_alimentacao_ac.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20),
    scale: new google.maps.Size(198, 114)
  };

var image6 = {
    url: 'img/localizacao/bt_academia_ac.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20),
    scale: new google.maps.Size(198, 114)
  };

var image7 = {
    url: 'img/localizacao/bt_ensino_ac.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20),
    scale: new google.maps.Size(198, 114)
  };

var image8 = {
    url: 'img/localizacao/bt_transporte_ac.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20),
    scale: new google.maps.Size(198, 114)
};

var metro = {
    url: 'img/localizacao/bt_metro_ac.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20),
    scale: new google.maps.Size(198, 114)
};

var aeroporto = {
    url: 'img/localizacao/bt_aeroporto_ac.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20),
    scale: new google.maps.Size(198, 114)
};

var cultura = {
    url: 'img/localizacao/bt_cultura_ac.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20),
    scale: new google.maps.Size(198, 114)
};

var estacao = {
    url: 'img/localizacao/bt_transporte_ac.png',
    // This marker is 20 pixels wide by 32 pixels tall.
    size: new google.maps.Size(198, 114),
    // The origin for this image is 0,0.
    origin: new google.maps.Point(0,0),
    // The anchor for this image is the base of the flagpole at 0,32.
    anchor: new google.maps.Point(20, 20),
    scale: new google.maps.Size(198, 114)
};

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6292021,-46.6884747),
      map: map,
      icon: predioimg,
      title: 'Side Chácara Santo Antônio',
      cursor:'default'
  });


var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.624992,-46.686608),
      map: map,
      icon: image3,
      title: 'Carrefour',
      cursor:'default'
  });

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.630164,-46.69095),
      map: map,
      icon: image3,
      title: 'Pão de Açucar',
      cursor:'default'
  });

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6215123,-46.6980466),
      map: map,
      icon: image2,
      title: 'Shopping Morumbi',
      cursor:'default'
  });

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6216085,-46.6996069),
      map: map,
      icon: image2,
      title: 'Shopping Market Place',
      cursor:'default'
  });

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6382119,-46.7044493),
      map: map,
      icon: image,
      title: 'Parque Severo Gomes',
      cursor:'default'
  });
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.639924,-46.6779949),
      map: map,
      icon: image,
      title: 'Parque Cordeiro',
      cursor:'default'
  });

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.631138,-46.690653),
      map: map,
      icon: image6,
      title: 'Esporte Clube Banespa',
      cursor:'default'
  });

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6273825,-46.6882669),
      map: map,
      icon: metro,
      title: 'Futura Estação Brooklin',
      cursor:'default'
  });

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.629013,-46.690858),
      map: map,
      icon: image4,
      title: 'SUS - Sistema Unico de Saúde',
      cursor:'default'
  });

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6333677,-46.6917829),
      map: map,
      icon: image4,
      title: 'Drogasil',
      cursor:'default'
  });

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6333677,-46.6917829),
      map: map,
      icon: image5,
      title: 'Panificadora Rainha da Pompeia',
      cursor:'default'
  });

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6330802,-46.6929824),
      map: map,
      icon: image6,
      title: 'Espaço Vita',
      cursor:'default'
  });

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6250295,-46.6932035),
      map: map,
      icon: image7,
      title: 'Universidade Anhembi Morumbi',
      cursor:'default'
  });

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6325415,-46.6968463),
      map: map,
      icon: image7,
      title: 'UNIP - Universidade Paulista - CAMPUS I',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6324588,-46.695549),
      map: map,
      icon: image7,
      title: 'UNIP - Universidade Paulista - CAMPUS II',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6303343,-46.6946858),
      map: map,
      icon: image7,
      title: 'UNIP - Universidade Paulista - CAMPUS III',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.625887,-46.661415),
      map: map,
      icon: aeroporto,
      title: 'Aeroporto de Congonhas',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6352878,-46.6989774),
      map: map,
      icon: image4,
      title: 'UBS - Chácara Santo Antônio',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6247793,-46.6870199),
      map: map,
      icon: image4,
      title: 'Clínica Doutor Milton Helfenstein Junior',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6320943,-46.6918497),
      map: map,
      icon: image6,
      title: 'SPA Kauai',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6256802,-46.6841873),
      map: map,
      icon: image6,
      title: 'Nanô Pilates',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6231676,-46.6843331),
      map: map,
      icon: image6,
      title: '4GOAL - For Goal Business Solutions',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.633039,-46.6960806),
      map: map,
      icon: image7,
      title: 'Colégio Johann Gauss',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.622702,-46.6865222),
      map: map,
      icon: image7,
      title: 'Universidade Estácio de Sá',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6465524,-46.7018226),
      map: map,
      icon: cultura,
      title: 'Teatro Paulo Eiró',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6551496,-46.7001107),
      map: map,
      icon: cultura,
      title: 'Paideia Associação Cultural',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6507875,-46.7210369),
      map: map,
      icon: cultura,
      title: 'Teatro Alfa',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6418658,-46.7096525),
      map: map,
      icon: image,
      title: 'Clube Hípico de Santo Amaro',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6220708,-46.7011875),
      map: map,
      icon: metro,
      title: 'Estação Morumbi',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6548411,-46.7107824),
      map: map,
      icon: metro,
      title: 'Estação Largo Treze',
      cursor:'default'
  });

var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6224126,-46.698955),
      map: map,
      icon: image5,
      title: 'Spoleto',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6365698,-46.6969969),
      map: map,
      icon: image5,
      title: 'Restaurante China Imperial',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6279152,-46.6887442),
      map: map,
      icon: image5,
      title: 'Burdog',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6323808,-46.6914526),
      map: map,
      icon: image5,
      title: 'McDonald´s',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6296911,-46.6890541),
      map: map,
      icon: image3,
      title: 'Supermercado Dia',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.631884,-46.6909859),
      map: map,
      icon: image7,
      title: 'Wise Up',
      cursor:'default'
  });
  
var marker = new google.maps.Marker({
      position: new google.maps.LatLng(-23.6294365,-46.6883198),
      map: map,
      icon: image5,
      title: 'TK Temaki',
      cursor:'default'
  });
  

  // var image = {
  //   url: 'img/estadio.png',
  //   // This marker is 20 pixels wide by 32 pixels tall.
  //   size: new google.maps.Size(198, 114),
  //   // The origin for this image is 0,0.
  //   origin: new google.maps.Point(0,0),
  //   // The anchor for this image is the base of the flagpole at 0,32.
  //   anchor: new google.maps.Point(99, 64),
  //   scale: new google.maps.Size(198, 114)
  // };

  // var marker = new google.maps.Marker({
  //     position: new google.maps.LatLng(-9.984397, -67.850426),
  //     map: map,
  //     icon: image,
  //     title: 'Estádio José de Melo'
  // });

  // bounds of the desired area

//Calling event on click - show information
  bermudaTriangle.setMap(map);
    google.maps.event.addListener(bermudaTriangle, 'click', function() {
        infowindow.open(map,bermudaTriangle);
    });
//Calling event on resize - affect map
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(new google.maps.LatLng(-23.6292021,-46.6884747));
    });
}


google.maps.event.addDomListener(window, 'load', init);


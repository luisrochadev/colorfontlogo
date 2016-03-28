angular.module("cfl", [])
 .controller("ColorController", function($scope) {
    $scope.colorPallate = [
    { name: "pintred",
      color: "#bd081c",
      info: "excitement, youthful, bold",
      compName: "green",
      compColor: "#97cd76"
    },
    { name: "orangator",
      color: "#ff6600",
      info: "friendly, cheerful, confident",
      compName: "blue",
      compColor: "#42afe3"

    },
    { name: "bowellow",
      color: "#ffcc2f",
      info: "optimism, clarity, warmth",
      compName: "purple",
      compColor: "#847bb9"
    },
    { name: "imgreen",
      color: "#85bf25",
      info: "peaceful, healthy, growth",
      compName: "red",
      compColor: "#ed6c63"
    },
    { name: "birdieblue",
      color: "#55acee",
      info: "trustworthy, dependable, strong",
      compName: "orange",
      compColor: "#f68b39"
    },
    { name: "yapurple",
      color: "#410093",
      info: "creative, imaginitive, wise",
      compName: "yellow",
      compColor: "#fce473"
    },
    // { name: "gray",
    //   color: "#aeb1b5",
    //   info: "balanced, neautral, calm",
    //   compName: "",
    //   compColor: ""
    // }

    ];

    $scope.colorInfo = "Hover over a color for more information.";
    $scope.textColor = {};
    $scope.chosenName = undefined;    
    $scope.complimentaryName = undefined;    
    $scope.chosenPrimary = undefined;
    $scope.chosenComplimentary = undefined;


    $scope.fontBook = [
    { name: "Open Sans",
    style: "'Open Sans', sans-serif;",
    type: "sans-serif",
    url: "Open+Sans"
    },
    {name: "Roboto",
    style: "'Roboto', sans-serif;",
    type: "sans-serif",
    url: "Roboto"
    },
    {name: "Raleway",
    style: "'Raleway', sans-serif;",
    type: "sans-serif",
    url: "Raleway"
    },
    {name: "Ubuntu",
    style: "'Ubuntu', sans-serif;",
    type: "sans-serif",
    url: "Ubuntu"
    },    
    { name: "Merriweather",
    style: "'Merriweather', serif;",
    type: "serif",
    url: "Merriweather"
    },
    {name: "Roboto Slab",
    style: "'Roboto Slab', serif;",
    type: "serif",
    url: "Roboto+Slab"
    },
    {name: "Lora",
    style: "'Lora', serif;",
    type: "serif",
    url: "Lora"
    },
    {name: "Droid Serif",
    style: "'Droid Serif', serif;",
    type: "serif",
    url: "Droid+Serif"
    },
    ];

    $scope.chosenFont = undefined;
    $scope.chosenFontFamily = undefined;
    $scope.chosenURL = undefined;
    $scope.chosenFontClass = undefined;

    $scope.sansFilter = function (item) { 
      if (item.type === 'sans-serif') {
       return item;
      }  
    };    

    $scope.serifFilter = function (item) { 
      if (item.type === 'serif') {
       return item;
      }  
    };



    $scope.chosenIcon = "fa-lightbulb-o";
    $scope.iconColor = "#ffffff";
    $scope.white = "#fff";



});
"use strict";angular.module("ngYsuraTaskApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/settings.html",controller:"AboutCtrl",controllerAs:"about"}).when("/new",{templateUrl:"views/new-vehicle.html",controller:"NewVehicleCtrl",controllerAs:"new"}).otherwise({redirectTo:"/"})}]),angular.module("ngYsuraTaskApp").controller("MenuCtrl",["$scope",function(a){a.toggleClass=!1,a.toggleCollapse=function(){a.toggleClass=a.toggleClass?!1:!0}}]),angular.module("ngYsuraTaskApp").controller("MainCtrl",["$scope","$rootScope","ParkingSettings","Vehicles",function(a,b,c,d){a.levels=c.levels,a.places=c.places,a.currentPage=0,a.pageSize=10,a.slotsAvailable=a.places*a.levels,a.types=d.types,a.vehiclesList=[],a.filterdList=[],a.generateParking=function(){for(var b=[],c=0;c<a.levels;c++){b.push({name:"Level"+c,id:c});for(var d=[],e=0;e<a.places;e++)d.push({name:"Slot "+e,id:e});b[c].slots=d}return b},a.putVehiclesIntoParking=function(b){d.vehicles=d.vehicles.concat(d.pushed);for(var c=0;c<d.vehicles.length;c++){var e=d.vehicles[c].level,f=d.vehicles[c];b[e]&&void 0!=e&&b[e].slots.some(function(c){return c.vehicle?void 0:(f.levelName=b[e].name,f.slot=c.id,c.vehicle=f,a.vehiclesList.push(f),a.slotsAvailable--,!0)})}a.addToParking(d.pushed),d.pushed=[]},a.addToParking=function(b){if(!(b.length<=0))for(var c=0;c<a.parking.length;c++){a.parking[c].slots.some(function(d){if(!d.vehicle&&b.length>0){var e=b.shift();e.level=a.parking[c].id,e.levelName=a.parking[c].name,e.slot=d.id,d.vehicle=e,a.vehiclesList.push(e),a.slotsAvailable--}return!1})}},a.goOutOfParking=function(b){for(var c=0;c<a.parking.length;c++){var e=a.parking[c].slots.some(function(c){return c.vehicle==b?(c.vehicle=null,b.level=null,b.levelName="",a.slotsAvailable++,!0):void 0});if(e)break}var f=d.vehicles.indexOf(b);d.vehicles.splice(f,1)},a.filterByLevel=function(b){a.filterModelLevel=a.filterModelLevel=="Level"+b?"":"Level"+b},a.filterByType=function(b){a.filterModelType=a.filterModelType==b?void 0:b},a.totalVehicles=function(){return Math.ceil(a.vehiclesList.length)},a.totalPages=function(){return Math.ceil(a.vehiclesList.length/a.pageSize)},a.parking=a.generateParking(),a.putVehiclesIntoParking(a.parking)}]),angular.module("ngYsuraTaskApp").filter("startFrom",function(){return function(a,b){return b=+b,a.slice(b)}}),angular.module("ngYsuraTaskApp").controller("AboutCtrl",["$scope","ParkingSettings",function(a,b){a.levels=b.levels,a.places=b.places,a.$watch("levels",function(a){b.levels=a}),a.$watch("places",function(a){b.places=a})}]),angular.module("ngYsuraTaskApp").controller("NewVehicleCtrl",["$scope","$rootScope","ParkingSettings","Vehicles",function(a,b,c,d){a.types=d.types,a.licensce="",a.vType=a.types[0],a.disabledAdding=d.vehicles.length>=parseInt(c.levels)*parseInt(c.places),a.pushToParking=function(){d.pushed.push({type:a.vType.id,licensce:a.licensce}),console.log(d.pushed)}}]),angular.module("ngYsuraTaskApp").directive("toggleMenu",function(){return{restrict:"A",scope:{toggleClass:"@"},controller:["$scope","$element","$attrs",function(a,b,c){}],link:function(a,b,c){}}}).directive("toggleFilterLink",function(){return{restrict:"E",scope:{filterBy:"@",filterLabel:"@"},link:function(a,b,c){},template:'<a href="" data-id-attribute={{filterBy}}>{{filterLabel}}</a>'}}).directive("vehicleItem",["Vehicles",function(a){return{restrict:"E",scope:{licensce:"@",type:"@",typeId:"@",level:"@",slot:"@",parkOutHandler:"&onParkOutHandler"},link:function(b,c,d){b.parkOut=!1,b.type=a.types[b.typeId].label,c.on("mouseleave",function(a){b.parkOut=!1,b.$apply()}),c.on("mouseenter",function(a){b.parkOut=!0,b.$apply()})},templateUrl:"views/partials/vehicle-item.html"}}]).directive("vehiclesPaging",function(){return{restrict:"E",scope:{page:"=",size:"@",limit:"@",totalInParking:"="},controller:["$scope","$element","$attrs",function(a,b,c){a.prevPageActive=!1,a.nextPageActive=!0,a.onPreviousPage=function(){a.page>0&&a.page--,a.updateActivePageButtons()},a.onNextPage=function(){a.page<a.limit-1&&a.page++,a.updateActivePageButtons()},a.updateActivePageButtons=function(){a.prevPageActive=a.page>0,a.nextPageActive=a.page<a.limit-1}}],link:function(a,b,c){},templateUrl:"views/partials/paging.html"}}).directive("onlyNumbers",function(){return{restrict:"A",require:"ngModel",link:function(a,b,c,d){d&&d.$parsers.push(function(a){if(angular.isUndefined(a))var a="";var b=a.replace(/[^0-9]+/g,"");return a!==b&&(d.$setViewValue(b),d.$render()),b})}}}),angular.module("ngYsuraTaskApp").factory("ParkingSettings",function(){var a=3,b=10;return{levels:a,places:b}}).factory("Vehicles",function(){var a=[],b=[{id:0,label:"Car"},{id:1,label:"Motorbike"}],c=[{type:0,licensce:"XX-11",level:0},{type:0,licensce:"XX-12",level:0},{type:0,licensce:"XX-131",level:0},{type:0,licensce:"XX-132",level:0},{type:0,licensce:"XX-133",level:0},{type:0,licensce:"XX-134",level:0},{type:0,licensce:"XX-135",level:0},{type:0,licensce:"XX-136",level:0},{type:1,licensce:"XX-15",level:1},{type:0,licensce:"XX-16",level:1},{type:1,licensce:"XX-17",level:1},{type:0,licensce:"XX-18",level:1},{type:1,licensce:"XX-19",level:1},{type:0,licensce:"YY-11",level:2},{type:0,licensce:"YY-12",level:2},{type:0,licensce:"YY-13",level:2},{type:1,licensce:"YY-15",level:2}];return{vehicles:c,types:b,pushed:a}}),angular.module("ngYsuraTaskApp").run(["$templateCache",function(a){a.put("views/main.html",'<aside class="filter"> <div class="seach-by-licence"> <input type="text" value="License plate" ng-model="filterModelLicense.licensce" ng-model-options="{ debounce: 500 }" ng-maxlength="15"> </div> <div class="filter-by-level"> <h4>Level:</h4> <ul> <li ng-repeat="level in parking"> <toggle-filter-link ng-class="{\'activeFilter\':($parent.level == $index && filterModelLevel != \'\')}" filter-by="{{level.id}}" filter-label="{{level.name}}" ng-click="filterByLevel(level.id); $parent.level = $index"></li> </ul> </div> <div class="filter-by-type"> <h4>Type:</h4> <ul> <li ng-repeat="type in types"> <toggle-filter-link ng-class="{\'activeFilter\':($parent.type == $index && filterModelType != undefined)}" filter-by="{{type.id}}" filter-label="{{type.label}}" ng-click="filterByType(type.id); $parent.type = type.id"></li> </ul> </div> </aside> <div class="vehicles"> <!-- <p>\n    Parking has: levels: {{levels}} and slots {{slotsAvailable}} {{totalVehicles()}}\n  </p> --> <div> <vehicles-paging page="currentPage" size="{{pageSize}}" total-in-parking="totalVehicles()" limit="{{totalPages()}}"> </div> <br> <div> <ul> <li ng-repeat="item in (vehiclesList | filter: filterModelLevel\n                                      | filter: { type:filterModelType }\n                                      | filter: filterModelLicense\n                                      | startFrom: currentPage*pageSize\n                                      | limitTo: pageSize) as filterdList"> <vehicle-item licensce="{{item.licensce}}" type-id="{{item.type}}" level="{{parking[item.level].name}}" slot="{{item.slot}}" on-park-out-handler="goOutOfParking(item)"> </li> </ul> </div> </div>'),a.put("views/new-vehicle.html",'<div class="new-vehicle"> <h3>Create new vehicle</h3> <h4 ng-show="disabledAdding">Sorry, our parking has no more available places.</h4> <form novalidate name="form" ng-class="{enabled: disabledAdding}"> <fieldset ng-disabled="disabledAdding"> <ul> <li class="i-group"> <div class="label"> <label for="">Licensce:</label> </div> <div class="control"> <input type="text" name="name" value="" ng-model="licensce" required> </div> </li> <li class="i-group"> <div class="label"> <label for="">Type:</label> </div> <div class="control"> <select name="" ng-model="vType" ng-options="type.label for type in types track by type.id"> </select> </div> </li> </ul> <input type="button" name="name" value="Add New Vehicle" class="btn" ng-class="{enabled: form.name.$error.required}" ng-disabled="form.name.$error.required" ng-click="pushToParking()"> </fieldset> </form> </div>'),a.put("views/partials/paging.html",'<div class="paging-vehicles"> <div class="page"> <div ng-bind="page + 1"></div> <div ng-bind="limit"></div> </div> <div class="devider">/</div> <div class="total"> <span ng-bind="totalInParking"></span> <div class="title">Vehicles</div> </div> <div class="paging-nav"> <a href="" ng-click="onPreviousPage()"> <div class="" style="width: 30px; float: left"> <svg viewbox="0 0 100 100"> <path class="arrow" ng-class="{active: prevPageActive}" fill="#0081D0" transform="translate(0, 40) rotate(90 50 50)" d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"> </svg> </div> </a> <a href="" ng-click="onNextPage()"> <div class="" style="width: 30px; float: right"> <svg viewbox="0 0 100 100"> <path class="arrow" ng-class="{active: nextPageActive}" fill="#0081D0" transform="rotate(270 50 50)" d="M 50,0 L 60,10 L 20,50 L 60,90 L 50,100 L 0,50 Z"> </svg> </div> </a> </div> </div>'),a.put("views/partials/vehicle-item.html",'<div class="vehicle-item"> <input type="button" name="name" value="" ng-click="parkOutHandler(item)" ng-show="parkOut"> <div class="info"> <div> Licensce: <span ng-bind="licensce"></span> </div> <div> Type: <span ng-bind="type"></span> </div> </div> <div class="place"> <div> Level: <span ng-bind="level"></span> </div> <div> Slot: <span ng-bind="slot">22</span> </div> </div> </div>'),a.put("views/settings.html",'<div class="settings-parking"> <h3>Parking settings</h3> <ul> <li class="i-group"> <div class="label"> <label for="">Set levels:</label> </div> <div class="control"> <input type="text" name="name" value="" ng-model="levels" only-numbers> </div> </li> <li class="i-group"> <div class="label"> <label for="">Set places per level:</label> </div> <div class="control"> <input type="text" name="name" value="" ng-model="places" only-numbers> </div> </li> </ul> </div>')}]);
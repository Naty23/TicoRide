let map;
let directionsManager;

GetMap = () => {
    map = new Microsoft.Maps.Map('#myMap', {});

    //Load the directions module.
    Microsoft.Maps.loadModule('Microsoft.Maps.Directions', function () {
        //Create an instance of the directions manager.
        directionsManager = new Microsoft.Maps.Directions.DirectionsManager(map);

        //Specify where to display the route instructions.

        //Specify the where to display the input panel
        directionsManager.showInputPanel('directionsPanel');
    });
}
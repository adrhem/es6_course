import MyMap from './MyMap';

module.exports = {
    initDOM: function(){
        let coords_cucei = {lat: 20.6539184, lng: -103.3279985};

        let selector = document.getElementById('map');

        let map = new MyMap(selector,coords_cucei,14);
        //let map = new MyMap(selector,coords_cucei);
        map.init(); 
        let marker = map.add_marker(coords_cucei,'CUCEI');
        //let marker = map.add_marker(coords_cucei);
        map.add_info(marker,"CUCEI");
    }
}

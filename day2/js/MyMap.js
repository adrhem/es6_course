export default class MyMap{
    
    constructor(selector,coords, zoom = 10){
        this.selector = selector;
        this.coords = coords;
        this.zoom = zoom;
        this.map = null;
        this.markers = [];
    }

    init(set_marker_on_click = false){
        this.map = new google.maps.Map(this.selector, {
            zoom: this.zoom,
            center: this.coords,
        });

        if(set_marker_on_click){
            google.maps.event.addListener(this.map, 'click', (event) => {
                this.add_marker(event.latLng);
            });
        }
    }

    add_marker(coords, title = null){
        
        let marker = new google.maps.Marker({
            position: coords,
            draggable: true,
            map: this.map,
            animation: google.maps.Animation.DROP,
            title: title,
        }); 
        
        this.markers.push(marker); 

        return marker;
    }

    add_info(marker, contentString = ""){
        let infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListener('click', () => {
            infowindow.open(this.map, marker);
        });
    }

    markers(){
        return this.markers;
    }


}
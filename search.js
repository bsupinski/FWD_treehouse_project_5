function img_search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('scenary');

    for ( i = 0; x.length; i++) {
        if( !x[i].getAttribute('alt').toLowerCase().includes(input)) {
            x[i].style.display='none';
        }
        else {
            x[i].style.display='list-item'
        }
    }

}
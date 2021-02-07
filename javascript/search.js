function img_search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('scenary');

    for ( i = 0; i < x.length; i++) {
        if( !x[i].getAttribute('data-caption').toLowerCase().includes(input)) {
            x[i].style.display='none';
            x[i].style.listStyleType='none';
        }
        else {
            x[i].style.display='list-item'
            x[i].style.listStyleType='none';
        }
    }

}
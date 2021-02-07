function img_search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('scenary');

    for ( i = 0; i < x.length; i++) {
        if( !x[i].getAttribute('alt').toLowerCase().includes(input)) {
            x[i].parentElement.style.display='none';
            x[i].parentElement.style.listStyleType='none';
        }
        else {
            x[i].parentElement.style.display='list-item'
            x[i].parentElement.style.listStyleType='none';
        }
    }

}
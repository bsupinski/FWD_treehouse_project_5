function img_search() {
    let input = document.getElementById('searchbar').value
    input = input.toLowerCase();
    let imgClass = document.getElementsByClassName('scenary');

    for ( i = 0; i < imgClass.length; i++) {
        if( !imgClass[i].getAttribute('data-caption').toLowerCase().includes(input)) {
            imgClass[i].style.display='none';
            imgClass[i].style.listStyleType='none';
        }
        else {
            imgClass[i].style.display='list-item'
            imgClass[i].style.listStyleType='none';
        }
    }

}
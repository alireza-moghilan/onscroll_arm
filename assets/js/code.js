let arm = document.querySelectorAll('.arm');
// onload window
window.onload = function onload(params) {
    for (let index = 0; index < arm.length; index++) {
        // get data Attribute
        let data_time = arm[index].getAttribute('data-time');
        let data_model = arm[index].getAttribute('data-arm');

        // condition boxs   
        let condition = (arm[index].offsetTop);
        if (window.innerHeight > condition) {
            // add class
            arm[index].classList.add(data_model);
            // add style transition Duration
            arm[index].style.transitionDuration = data_time + "s";
        }
    }
}
// onscroll window
window.onscroll = function scrollTo(params) {
    for (let index = 0; index < arm.length; index++) {
        // get data Attribute
        let data_time = arm[index].getAttribute('data-time');
        let data_model = arm[index].getAttribute('data-arm');
        // condition boxs   
        let condition = (arm[index].offsetTop + arm[index].offsetHeight / 2);

        // show content
        console.log(window.innerHeight)
        console.log(window.pageYOffset)
        if (window.pageYOffset + window.innerHeight >= condition) {
            // add class
            arm[index].classList.add(data_model);
            // add style transition Duration
            arm[index].style.transitionDuration = data_time + "s";
        } else {
            // remove class
            arm[index].classList.remove(data_model);
            // add style transition Duration
            arm[index].style.transitionDuration = data_time + "s";
        }
    }
}
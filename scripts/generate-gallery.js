function generateGallery(inputs, _cont, _car) {
    var cont = document.getElementById(_cont);
    var car = document.getElementById(_car);
    inputs.forEach((e, i) => {

        var img_div = document.createElement("div");
        img_div.classList.add("col-lg-4", "col-md-6", "col-sm-6", "col-xs-12");
        var img_src = document.createElement("img");
        img_src.src = e;
        img_src.classList.add("img", "img-fluid");
        img_src.setAttribute("data-target", "#carouselExample");
        img_src.setAttribute("data-slide-to", i);
        
        img_div.appendChild(img_src);
        cont.appendChild(img_div);

        
        var car_div = document.createElement("div");
        car_div.classList.add("carousel-item");
        var car_img = document.createElement("img");
        car_img.classList.add("d-block", "w-100");
        car_img.src = e;

        car_div.appendChild(car_img);
        car.appendChild(car_div);       
        
    });

    car.firstElementChild.classList.add("active");
}




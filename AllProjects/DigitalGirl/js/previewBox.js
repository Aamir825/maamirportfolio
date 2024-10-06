let previewcont = document.querySelector(".product-back");
let previewbox = document.querySelectorAll(".over-box");

document.querySelectorAll('.col-sm-4 .box_main').forEach(product =>{
    product.onclick = () =>{
        previewcont.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewbox.forEach(preview =>{
        let target = preview.getAttribute('data-target');

        if(name == target){
           preview.classList.add('active');
        }
        });
    };
});

previewbox.forEach(clo =>{
    clo.querySelector('.fa-close').onclick = () =>{
        clo.classList.remove('active');
        previewcont.style.display = 'none';
    };
});


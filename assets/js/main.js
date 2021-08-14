$(document).ready(function(){
    getHeader()

    getFooter()
})


$(window).scroll(function(){
    if(window.pageYOffset>50){
        $("header").addClass("headerColor")
        $("nav").addClass("headerColor")
        $("#backToTop").removeClass("d-none")
    }
    else{
        $("header").removeClass("headerColor")
        $("nav").removeClass("headerColor")
        $("#backToTop").addClass("d-none")
    }
})


$("#scroll a").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});


function getHeader(){
    let print=''
    print+=`<div id="Logo"><a class="text-decoration-none fw-bold text-secondary text-uppercase fs-3" href="index.html">Reid</a></div>
            <div class="d-flex align-items-center">
                <a href="#" id="card"><i class="fas fa-shopping-cart fs-4 card-up mx-2"></i></a>
                <a href="#" id="hamburger" class="hamburger text-secondary"><i class="fas fa-bars fs-4 mx-2"></i></a>
            </div>`


        
    $('header').html(print)

    getMenu()

    $("#hamburger").click(showMenu)
}


function getMenu(){
    var menuNames=['Home','Man','Woman','About','Contact','Author']
    var menuLinks=['index.html','man.html','woman.html','about.html','contact.html','author.html']
    let print=''
    print+=`<nav class="col-12 d-none"><ul class="text-end">`
    for(let i=0;i<menuNames.length;i++){
        print+=`<li><a class="text-decoration-none text-uppercase fs-4" href="${menuLinks[i]}">${menuNames[i]}</a></li>`
    }
    print+=`</ul></nav>`
    document.getElementById("header").innerHTML+=print

}
function getFooter(){
    var footer=document.createElement("footer");
    footer.setAttribute("class","p-4 d-flex justify-content-between flex-wrap");
    $("body").append(footer)


    var footerInformations=document.createElement("div")
    var footerContact=document.createElement("div")

    footerInformations.setAttribute("class","col-10 col-md-6")
    footerContact.setAttribute("class","col-10 col-md-6")

    footer.append(footerInformations)
    footer.append(footerContact)

    footerInformations.innerHTML=`<h3>Informations</h3>
    <p>Stores</p>
    <p>Adress: Princess Road 55</p>
    <p>Phone: +385/555-555</p>
    <p>Adress: King James street 156</p>
    <p>Phone: +385/665-335</p>
    `

    footerContact.innerHTML=`<h3>Contact Us</h3>
    <p>Address: 6688 Princess Road, London, Greater London BAS 23JK, UK</p>
    <p>Phone: (+012) 800 456 789 - 987</p>
    <p>Email: reid@gmail.com</p>
    `

    var networks=['fa-facebook-f','fa-instagram','fa-youtube','fa-twitter']
    var networksLinks=['https://www.facebook.com','https://www.instagram.com','https://www.youtube.com','https://www.twitter.com/']

    for(let i=0;i<networks.length;i++){
        footerContact.innerHTML+=`<a class="px-3 py-2 me-2 rounded-circle bg-light border-1 text-dark fs-5" href="${networksLinks[i]}"><i class="fab ${networks[i]}"></i></a>`
    }
}

function showMenu(e){
    e.preventDefault()
    if($("nav").hasClass("d-none")){
        $("nav").removeClass("d-none")
        $("#hamburger").html(`<i class="fas fa-times fs-4 mx-2"></i>`)
    }
    else{
        $("nav").addClass("d-none")
        $("#hamburger").html(`<i class="fas fa-bars fs-4 mx-2"></i>`)
    }
}


let url=location.href;


function getSlider(){
    var slider=document.querySelector("#sliderImage");
    var imagesSrc=["slider13.jpg","slider14.jpg","slider15.jpg"];
    var i=0;
    function loadSlider(){
        slider.src="assets/images/"+imagesSrc[i];
        if(i<imagesSrc.length-1) i++;
        else i=0;
        setTimeout(loadSlider, 3000);
    };
    loadSlider();
}

function getCategories(){
    
    var categoriesImages=['shipping.png','shipping1.png','shipping2.png','shipping3.png','shipping4.png','shipping5.png']

    var categoryNames=['Backpak','Hooded Jacket','Lingerie Women','Sneaker','Socks','Clothing',]

let print=''
for(let i=0;i<categoriesImages.length;i++){
    print+=`<div class='item text-center'><img alt="Category" class="img-fluid" src='assets/images/${categoriesImages[i]}'/><p class="mt-4 fs-6 fw-bolder">${categoryNames[i]}</p></div>`
}

document.getElementById("categories").innerHTML+=print

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        60:{
            items:3
        },
        100:{
            items:5
        }
    }
})
}

///top products
var topProducts=['Product1','Product2','Product3','Product4']
var topProductsImages=['product1.jpg','product4.jpg','product5.jpg','product7.jpg']
var topProductsPrices=[55,44,66,88]
var topProductsOldPrices=[66,null,null,100]
var topProductRate=[5,5,3,2]

///men products
var menProducts=['Product1','Product2','Product3','Product4','Product1','Product2','Product3','Product4']
var menProductsImages=['product1.jpg','product4.jpg','product5.jpg','product7.jpg','product1.jpg','product4.jpg','product5.jpg','product7.jpg']
var menProductsPrices=[55,44,66,88,55,44,66,88]
var menProductsOldPrices=[66,null,null,100,66,null,null,100]
var menProductRate=[5,5,3,2,5,5,3,2]


///woman products
var womanProducts=['1','2','3','Product4','Product1','Product2','Product3','Product4']
var womanProductsImages=['product1.jpg','product4.jpg','product5.jpg','product7.jpg','product1.jpg','product4.jpg','product5.jpg','product7.jpg']
var womanProductsPrices=[55,44,66,88,55,44,66,88]
var womanProductsOldPrices=[66,null,null,100,66,null,null,100]
var womanProductRate=[5,5,3,2,5,5,3,2]


function printProducts(products,productsImages,productsPrices,oldPrices,productRate){
    let print=''

    for(let i=0;i<products.length;i++){
        print+=`<div class="col-6 col-md-3 px-4 my-3 product">
                <div class="my-2"><img class="img-fluid" src="assets/images/${productsImages[i]}"/></div>
                <p class="productName">${products[i]}</p>`
                if(oldPrices[i]!=null){
                    print+=`<p class="text-decoration-line-through me-5 text-danger">${oldPrices[i]} $</p>`
                }
                else{
                    print+=`<p>&nbsp;</p>`
                }
                print+=`<p class="fw-bolder">${productsPrices[i]} $</p>`
                
                for(let j=1;j<=5;j++){
                    if(j<=productRate[i]){
                        print+=`<i class="fas fa-star"></i>`
                    }
                    else{
                        print+=`<i class="far fa-star"></i>`
                    }
                }
                print+=`<a href="#" class="add-to-card"><i class="fas fa-shopping-cart card-position fs-4"></i></a>`
                print+=`</div>`
    }


    $("#topProducts").html(print)

    

    $(".add-to-card").click(addToCard)

    $(".product").hover(
        function(){
        $(this).addClass("shadow")
        },
        function(){
            $(this).removeClass("shadow")
        })


}
function addToCard(e){
    e.preventDefault()
    $(".card-up").addClass("card-added")
    if($(".card-up").hasClass("card-animation")){
        $(".card-up").removeClass("card-animation")
    }
    else{
        $(".card-up").addClass("card-animation")
    }
    $(this).addClass("card-added")
}

var newsTitle=['News 1','News 2'];
var newsContent=['Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt maxime aut doloremque autem similique ratione libero quia, perspiciatis, quae harum iste tempore non quisquam dolorum labore corrupti voluptatibus, provident at.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt maxime aut doloremque autem similique ratione libero quia, perspiciatis, quae harum iste tempore non quisquam dolorum labore corrupti voluptatibus, provident at.','Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt maxime aut doloremque autem similique ratione libero quia, perspiciatis, quae harum iste tempore non quisquam dolorum labore corrupti voluptatibus, provident at.']
var newsImage=['banner19.jpg','banner20.jpg']
function getNews(){

    let print=''

    for(let i=0;i<newsTitle.length;i++){
        print+=`<div class="col-12 my-4 d-flex justify-content-around flex-wrap">
                    <div class="col-10 col-md-6"><img class="img-fluid" src="assets/images/${newsImage[i]}" alt="${newsTitle[i]}"/></div>
                    <div class="col-10 col-md-6">
                        <h3>${newsTitle[i]}</h3>
                        <p class="mt-5" data-id="${i}">${newsContent[i].substring(0,150)}... <a href="#" class="news-more text-decoration-none">Read more</a></p>
                    </div>
                </div>`
    }

    $("#news-container").html(print)

    $(".news-more").click(moreTextNews)
}
function moreTextNews(e){
    e.preventDefault()
    var text=$(this).parent()
    var clicked=$(this).parent().attr("data-id")

    text.html(newsContent[clicked])
}

function getNumbers(){
    $(window).scroll(function(){
        if(window.pageYOffset>3100){
            function tajmer(i,number,div){
                setInterval(() => {
                    if(i<=number){
                        $(div).html(i)
                    }
                    if(i>number){
                        clearInterval()
                    }
                    i++
                })
            }
            tajmer($("#users").text(),1000,"#users")
            tajmer($("#awards").text(),153,"#awards")
            tajmer($("#hours").text(),455,"#hours")
            tajmer($("#delivery").text(),60,"#delivery")
        }
    })
}


function getAnimatin(){
    setInterval(function(){
        $("#sneakerAnimation").animate({
            left: "75%"
        },5000).animate({
            left: "0%"
        },5000)
    })

    setInterval(function(){
        if($("#sneakerAnimation").hasClass("left")){
            $("#sneakerAnimation").addClass("right")
            $("#sneakerAnimation").removeClass("left")
        }
        else{
            $("#sneakerAnimation").addClass("left")
            $("#sneakerAnimation").removeClass("right")
        }
    },5000)
}

if(url.indexOf("index.html")!=-1){
    getSlider()
    getCategories()
    printProducts(topProducts,topProductsImages,topProductsPrices,topProductsOldPrices,topProductRate)
    getNews()
    getNumbers()
    getAnimatin()
}


if(url.indexOf("man.html")!=-1){
    printProducts(menProducts,menProductsImages,menProductsPrices,menProductsOldPrices,menProductRate)
}



if(url.indexOf("woman.html")!=-1){
    printProducts(womanProducts,womanProductsImages,womanProductsPrices,womanProductsOldPrices,womanProductRate)
}



if(url.indexOf("contact.html")!=-1){
    $("#btnSend").click(function(){
        $("#messageSuccess").removeClass("d-none")
        $("input").val("")
        $("textarea").val("")
        document.getElementById("btnSend").classList.add("disabled")
        $("input").removeClass("border-success")
        $("textarea").removeClass("border-success")
    })


    var email=document.getElementById("email")
    var phone=document.getElementById("phone")
    var subject=document.getElementById("subject")
    var message=document.getElementById("message")


    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var regTelefon=/^06[012345679]\d{6,7}$/;
    var regSubject=/^[A-Z][a-z]{2,}(\s[a-z]{2,}){0,2}$/;

    var err=0;

    function emailCheck(){
        checkAll()
    }

    function subjectCheck(){
        checkAll()
    }

    function phoneCheck(){
        checkAll()
    }

    function messageCheck(){
        checkAll()
    }

    email.addEventListener("keyup",emailCheck)
    phone.addEventListener("keyup",phoneCheck)
    subject.addEventListener("keyup",subjectCheck)
    message.addEventListener("keyup",messageCheck)

}


function checkAll(){
    var err=0
    if(!regEmail.test(email.value)){
        document.getElementById("errEmail").innerHTML='E-mail eg. kristina@gmail.com or kristina.mladenovic.5.19@ict.edu.rs'
        $("#email").addClass("border-danger")
        $("#email").removeClass("border-success")
        err++
    }
    else{
        document.getElementById("errEmail").innerHTML=''
        $("#email").addClass("border-success")
        $("#email").removeClass("border-danger")
    }
    if(message.value.split(" ").length<10){
        document.getElementById("errMessage").innerHTML="Message has 10 words minimum"
        $("#message").addClass("border-danger")
        $("#message").removeClass("border-success")
        err++
    }
    else{
        document.getElementById("errMessage").innerHTML=""
        $("#message").addClass("border-success")
        $("#message").removeClass("border-danger")
    }
    if(!regTelefon.test(phone.value)){
        document.getElementById("errPhone").innerHTML='Phone format 06XXXXXXX(X)'
        $("#phone").addClass("border-danger")
        $("#phone").removeClass("border-success")
        err++
    }
    else{
        document.getElementById("errPhone").innerHTML=''
        $("#phone").addClass("border-success")
        $("#phone").removeClass("border-danger")
    }
    if(!regSubject.test(subject.value)){
        document.getElementById("errSubject").innerHTML='Subject has one word minimum with capital letter, maximum 3 words with lowercase. Every word has minimum 2 letters'
        $("#subject").addClass("border-danger")
        $("#subject").removeClass("border-success")
        err++
    }
    else{
        document.getElementById("errSubject").innerHTML=''
        $("#subject").addClass("border-success")
        $("#subject").removeClass("border-danger")
    }

    if(err==0){
        document.getElementById("btnSend").classList.remove("disabled")
    }

   
}
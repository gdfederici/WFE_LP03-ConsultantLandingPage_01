function magicMenu() {
    document.getElementById("hamburgerNav").classList.toggle("responsive"); //IT_ Aggiunge/rimuove la classe per la visualizzazione del menu. | EN_ Add/remove the class for the menu display.
    var elMenuCta = document.getElementById("hamburgerCTA");
    (elMenuCta.classList.contains("button")) ? (elMenuCta.classList.remove("button", "button__base")) : (elMenuCta.classList.add("button", "button__base")); // IT_ Aggiunge/rimuove la classe bottone a elemento CTA, così appare semplice in mobile e bottone in desktop. | EN_ Add/remove the button class to the CTA element.
}

function magicJS() {
    /*** FAQ ***/
    var faqList = document.getElementsByClassName("faq-button"); /* Collezione di oggetti simil vettore, ma non vettore per questo forEach non funziona */
    for ( let i = 0; i < faqList.length; i++) {
        faqList[i].addEventListener("click", function() { 
            this.classList.toggle("faq__active");
            let faqResponse = this.nextElementSibling;     // Toggle between hiding and showing the active panel 
            (faqResponse.style.display === "block") ? (faqResponse.style.display = "none") : (faqResponse.style.display = "block"); // opertore ternario
            }
        );
    }
}

function moreFaq() {
    var faqExtra = document.getElementsByClassName("faq-extra");
    for ( let i = 0; i < faqExtra.length; i++) {
        faqExtra[i].style.display = "flex";
    }
    var faqMobile = document.getElementsByClassName("faq__mobile");
    for ( let i = 0; i < faqMobile.length; i++) {
        faqMobile[i].style.display = "flex";
    }
    document.getElementById("more-faq").style.display = "none";
}

var slideTestimonial = 1;
    showTestimonial(slideTestimonial);
function moreTestimonial() {
    showTestimonial(slideTestimonial += 1);
}
function showTestimonial(n) {
    var singleTestimonial = document.getElementsByClassName("testimonial-single");
    if (n > singleTestimonial.length) {slideTestimonial = 1}
    for (let j = 0; j < singleTestimonial.length; j++) {
        singleTestimonial[j].style.display = "none";
    }
    singleTestimonial[slideTestimonial-1].style.display = "block";
}
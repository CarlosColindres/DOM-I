const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let keys = Object.keys(siteContent.nav);

for (let i = 0; i < keys.length - 1; i++) {
  let link = document.querySelector(`nav a:nth-of-type(${i+1})`)
  link.href = keys[i];
  link.textContent = siteContent["nav"][`nav-item-${i+1}`]
}

document.querySelector('.cta h1').textContent = siteContent.cta.h1
document.querySelector('.cta button').textContent = siteContent.cta.button
document.querySelector('#cta-img').setAttribute('src', siteContent["cta"]["img-src"])

document.querySelector('#middle-img').setAttribute('src', siteContent["main-content"]["middle-img-src"])

const topContenth4 = document.querySelectorAll('.top-content h4');
topContenth4[0].textContent = siteContent['main-content']['features-h4']
topContenth4[1].textContent = siteContent['main-content']['about-h4']

const topContentp = document.querySelectorAll('.top-content p');
topContentp[0].textContent = siteContent['main-content']['features-content']
topContentp[1].textContent = siteContent['main-content']['about-content']

const bottomContenth4 = document.querySelectorAll('.bottom-content h4');
bottomContenth4[0].textContent = siteContent['main-content']['services-h4']
bottomContenth4[1].textContent = siteContent['main-content']['product-h4']
bottomContenth4[2].textContent = siteContent['main-content']['vision-h4']

const bottomContentp = document.querySelectorAll('.bottom-content p');
bottomContentp[0].textContent = siteContent['main-content']['services-content']
bottomContentp[1].textContent = siteContent['main-content']['product-content']
bottomContentp[2].textContent = siteContent['main-content']['vision-content']

document.querySelector('.contact h4').textContent = siteContent.contact['contact-h4']

const contactP = document.querySelectorAll('.contact p')

contactP[0].textContent = siteContent['contact']['address']
contactP[1].textContent = siteContent['contact']['phone']
contactP[2].textContent = siteContent['contact']['email']

document.querySelector('footer p').textContent = siteContent.footer.copyright
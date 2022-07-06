var IMG1, LastPic, IMG2, CartTotal, IMG3, IMAGES, RateNumber, RateNumber2, RateNumber3, PIXEL6, X5PRO, IPHONE12;

function getNumberOrString(value) {
  // Convert a string value to a number if possible
  let number_value = Number(value);
  if (Number.isNaN(number_value)) {
    return value
  } else {
    return number_value
  }
}


IMG1 = 'https://cynoco.co.uk/wp-content/uploads/2022/07/imagecarousel3.jpg';
IMG2 = 'https://cynoco.co.uk/wp-content/uploads/2022/07/imagecarousel2.jpg';
IMG3 = 'https://cynoco.co.uk/wp-content/uploads/2022/07/imagecarousel1.jpg';
IMAGES = [IMG1, IMG2, IMG3];
let element_carousel = document.getElementById('carousel');
element_carousel.setAttribute("src", IMG1);
LastPic = [];
PIXEL6 = 'https://cynoco.co.uk/wp-content/uploads/2022/07/Shop1.png';
X5PRO = 'https://cynoco.co.uk/wp-content/uploads/2022/07/Shop2.png';
IPHONE12 = 'https://cynoco.co.uk/wp-content/uploads/2022/07/Shop3.png';
let element_Shop1 = document.getElementById('Shop1');
element_Shop1.setAttribute("src", PIXEL6);
let element_Shop2 = document.getElementById('Shop2');
element_Shop2.setAttribute("src", X5PRO);
let element_Shop3 = document.getElementById('Shop3');
element_Shop3.setAttribute("src", IPHONE12);
let element_price1 = document.getElementById('price1');
element_price1.innerText = 700;
let element_price2 = document.getElementById('price2');
element_price2.innerText = 1100;
let element_price3 = document.getElementById('price3');
element_price3.innerText = 900;
CartTotal = [];
addeditem = [];

document.getElementById('nex').addEventListener('click', (event) => {
  LastPic = IMAGES.shift();
  IMAGES.push(LastPic);
  let element_carousel2 = document.getElementById('carousel');
  element_carousel2.setAttribute("src", IMAGES[0]);

});

document.getElementById('pre').addEventListener('click', (event) => {
  LastPic = IMAGES.pop();
  IMAGES.unshift(LastPic);
  let element_carousel3 = document.getElementById('carousel');
  element_carousel3.setAttribute("src", IMAGES[0]);

});

document.getElementById('Shop1cart').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = 'Google Pixel 6';

  element_list.appendChild(new_li);
  CartTotal.unshift(700);
  addeditem.unshift(1);
  let element_total = document.getElementById('total');
  element_total.innerText = CartTotal.reduce((a,b) => a+b, 0);
  let element_addeditem = document.getElementById('addeditem');
  element_addeditem.innerText = addeditem.reduce((a,b) => a+b, 0);

});

document.getElementById('Shop2cart').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  let new_li2 = document.createElement('li');
  new_li2.innerText = 'OPPO Find X5 Pro 5G';

  element_list2.appendChild(new_li2);
  CartTotal.unshift(1100);
  addeditem.unshift(1);
  let element_total2 = document.getElementById('total');
  element_total2.innerText = CartTotal.reduce((a,b) => a+b, 0);
  let element_addeditem2 = document.getElementById('addeditem');
  element_addeditem2.innerText = addeditem.reduce((a,b) => a+b, 0);

});

document.getElementById('Shop3cart').addEventListener('click', (event) => {
  let element_list3 = document.getElementById('list');
  let new_li3 = document.createElement('li');
  new_li3.innerText = 'iPhone 12';

  element_list3.appendChild(new_li3);
  CartTotal.unshift(900);
  addeditem.unshift(1);
  let element_total3 = document.getElementById('total');
  element_total3.innerText = CartTotal.reduce((a,b) => a+b, 0);
  let element_addeditem3 = document.getElementById('addeditem');
  element_addeditem3.innerText = addeditem.reduce((a,b) => a+b, 0);

});

document.getElementById('Submit1').addEventListener('click', (event) => {
  let element_review1 = document.getElementById('review1');
  let new_ol = document.createElement('ol');
  new_ol.innerText = getNumberOrString(document.getElementById('comm').value);

  element_review1.appendChild(new_ol);
  let new_ol2 = document.createElement('ol');
  new_ol2.innerText = getNumberOrString(document.getElementById('fname').value);
  new_ol2.style.color = '#ff6600';

  element_review1.appendChild(new_ol2);
  RateNumber = getNumberOrString(document.getElementById('rate').value);
  if (RateNumber == 1) {
    let new_ol3 = document.createElement('ol');
    new_ol3.innerText = '⭐️';

    element_review1.appendChild(new_ol3);
  } else if (RateNumber == 2) {
    let new_ol4 = document.createElement('ol');
    new_ol4.innerText = '⭐️⭐️';

    element_review1.appendChild(new_ol4);
  } else if (RateNumber == 3) {
    let new_ol5 = document.createElement('ol');
    new_ol5.innerText = '⭐️⭐️⭐️';

    element_review1.appendChild(new_ol5);
  } else if (RateNumber == 4) {
    let new_ol6 = document.createElement('ol');
    new_ol6.innerText = '⭐️⭐️⭐️⭐️';

    element_review1.appendChild(new_ol6);
  } else if (RateNumber == 5) {
    let new_ol7 = document.createElement('ol');
    new_ol7.innerText = '⭐️⭐️⭐️⭐️⭐️';

    element_review1.appendChild(new_ol7);
  }

});

document.getElementById('Submit2').addEventListener('click', (event) => {
  let element_review2 = document.getElementById('review2');
  let new_ol8 = document.createElement('ol');
  new_ol8.innerText = getNumberOrString(document.getElementById('comm2').value);

  element_review2.appendChild(new_ol8);
  let new_ol9 = document.createElement('ol');
  new_ol9.innerText = getNumberOrString(document.getElementById('fname2').value);
  new_ol9.style.color = '#ff6600';

  element_review2.appendChild(new_ol9);
  RateNumber2 = getNumberOrString(document.getElementById('rate2').value);
  if (RateNumber2 == 1) {
    let new_ol10 = document.createElement('ol');
    new_ol10.innerText = '⭐️';

    element_review2.appendChild(new_ol10);
  } else if (RateNumber2 == 2) {
    let new_ol11 = document.createElement('ol');
    new_ol11.innerText = '⭐️⭐️';

    element_review2.appendChild(new_ol11);
  } else if (RateNumber2 == 3) {
    let new_ol12 = document.createElement('ol');
    new_ol12.innerText = '⭐️⭐️⭐️';

    element_review2.appendChild(new_ol12);
  } else if (RateNumber2 == 4) {
    let new_ol13 = document.createElement('ol');
    new_ol13.innerText = '⭐️⭐️⭐️⭐️';

    element_review2.appendChild(new_ol13);
  } else if (RateNumber2 == 5) {
    let new_ol14 = document.createElement('ol');
    new_ol14.innerText = '⭐️⭐️⭐️⭐️⭐️';

    element_review2.appendChild(new_ol14);
  }

});

document.getElementById('Submit3').addEventListener('click', (event) => {
  let element_review3 = document.getElementById('review3');
  let new_ol15 = document.createElement('ol');
  new_ol15.innerText = getNumberOrString(document.getElementById('comm3').value);

  element_review3.appendChild(new_ol15);
  let new_ol16 = document.createElement('ol');
  new_ol16.innerText = getNumberOrString(document.getElementById('fname3').value);
  new_ol16.style.color = '#ff6600';

  element_review3.appendChild(new_ol16);
  RateNumber3 = getNumberOrString(document.getElementById('rate3').value);
  if (RateNumber3 == 1) {
    let new_ol17 = document.createElement('ol');
    new_ol17.innerText = '⭐️';

    element_review3.appendChild(new_ol17);
  } else if (RateNumber3 == 2) {
    let new_ol18 = document.createElement('ol');
    new_ol18.innerText = '⭐️⭐️';

    element_review3.appendChild(new_ol18);
  } else if (RateNumber3 == 3) {
    let new_ol19 = document.createElement('ol');
    new_ol19.innerText = '⭐️⭐️⭐️';

    element_review3.appendChild(new_ol19);
  } else if (RateNumber3 == 4) {
    let new_ol20 = document.createElement('ol');
    new_ol20.innerText = '⭐️⭐️⭐️⭐️';

    element_review3.appendChild(new_ol20);
  } else if (RateNumber3 == 5) {
    let new_ol21 = document.createElement('ol');
    new_ol21.innerText = '⭐️⭐️⭐️⭐️⭐️';

    element_review3.appendChild(new_ol21);
  }

});

document.getElementById('student').addEventListener('click', (event) => {
  CartTotal.push(-200);
  let element_lastprice = document.getElementById('lastprice');
  element_lastprice.innerText = 'Your price is :';
  let element_lastprice2 = document.getElementById('lastprice2');
  element_lastprice2.innerText = CartTotal.reduce((a,b) => a+b, 0);

});

document.getElementById('remove').addEventListener('click', (event) => {
  let element_delet = document.getElementById('delet');
  element_delet.replaceChildren();

});
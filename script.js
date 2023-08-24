//let image = ['❤','😍','😘','🙂','🤗','😽','👾','👽','👻','🐱‍👤','🐊','👩‍🦰','🤴','🤶','🤹‍♀️','👩‍🦼','🎗','🎈','🎃','🎫','🎪','🧈','🍠','🥃','🥂','🍻','🦼','🌀','💝','💝','💝','💝','💝','💝','💝','💝','💖','💖','💖','💖','💖','💖','💖','💟','💌','💕','🧡','💚'];
// let image = ['💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝',
//             '💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝','💝'];
let image =['Happy😊','🎂','🍰','😊','Birthday','🥳','🍾','Kashish🥳','🍰','Happy Birthday Kashish🎂🍾🎈🤗','🥳','🤗','🎈','🎈',
'🤗','🎈','🎈','Happy Birthday Kashish🍰🍾🎈🥳','Happy','🍾','🥳','😊','🤣','🎈','Birthday🤗','🎈','🥳','Kashish',
'🎈','🥳','🍾','Happy Birthday Kashish🍰🍾🎈🥳','Birthday Girl Kashish🎂🥳🎈','🥳','🍾','Happy😊','🎂','🍰','😊','Birthday','🥳','🍾','Kashish🥳','🍰','Happy Birthday Kashish🎂🍾🎈🤗','🥳','🤗','🎈','🎈',
'🤗','🎈','🎈','Happy Birthday Kashish🍰🍾🎈🥳','Happy','🍾','🥳','😊','🤣','🎈','Birthday🤗','🎈','🥳','Kashish',
'🎈','🥳','🍾','Happy Birthday Kashish🍰🍾🎈🥳','Birthday Girl Kashish🎂🥳🎈','🥳','🍾'];
console.log(image)
document.addEventListener('mousemove',function(e){
    let body = document.querySelector('body');
    let emoji = document.createElement('span');
    let x= e.offsetX;
    let y = e.offsetY;

    emoji.style.left = x +'px';
    emoji.style.top = y+'px';
    let icon = image[Math.floor(Math.random()*image.length)];
    console.log(icon)
    emoji.innerText = icon;

    let size= Math.random()*50;
    emoji.style.fontSize = 5 +size+'px';

    let max=0;
    let min = 200;
    let randomValue = Math.floor((Math.random()*((max+1)-min))+min);

    emoji.style.transform = 'translateX('+randomValue+'px)';

    body.appendChild(emoji)

    setTimeout(function(){
        emoji.remove();
    },1000)
})

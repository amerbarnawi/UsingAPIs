'use strict';

// First solution:

const STEP_SIZE_PX = 10;
const STEP_INTERVAL_MS = 50;
const DANCE_TIME_MS = 5000;
const DANCING_CAT_URL =
  'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
const WALKING_CAT_URL = "http://www.anniemation.com/clip_art/images/cat-walk.gif";

function walk(img, startPos, stopPos) {
  return new Promise((resolve) => {

    let leftPosition = startPos;

    const walking = setInterval(() => {
      img.style.left = `${leftPosition}px`;
      
      leftPosition += STEP_SIZE_PX;

      if (leftPosition > stopPos){
        resolve();
        clearInterval(walking);
      }
    }, STEP_INTERVAL_MS);
  });
}

function dance(img) {
  return new Promise((resolve) => {

    img.src = DANCING_CAT_URL;

    setTimeout(() => {
      img.src = WALKING_CAT_URL;
      resolve();
    }, DANCE_TIME_MS);
  });
}

function catWalk() {
  const img = document.querySelector('img');
  const startPos = -img.width;
  const centerPos = (window.innerWidth - img.width) / 2;
  const stopPos = window.innerWidth;

  walk(img, startPos, centerPos)
    .then(() => dance(img))
    .then(() => walk(img, centerPos, stopPos))
    .then(() => catWalk()); 
}

window.addEventListener('load', catWalk);

//=============================
// Second solution:
//=============================


// let wait = false;
// let leftPosition = 0;
// const STEP_SIZE_PX = 10;
// const STEP_INTERVAL_MS = 50;
// const DANCE_TIME_MS = 5000;
// const DANCING_CAT_URL =
//   'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
// const WALK_CAT_URL = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';

// function walk(img, startPos, stopPos, centerPos) {
//   return new Promise((resolve) => {

//     leftPosition = startPos;

//     const walkInterval = setInterval(() => {

//       if ( wait === false) {
//           img.style.left = `${leftPosition}px`;
//           leftPosition += STEP_SIZE_PX;
//       }

//       if (leftPosition > centerPos -5 &&
//             leftPosition < centerPos + 5 && 
//             wait === false){

//               wait = true;

//               dance(img).then(() => {
//                 wait = false;
//               });
//             }

//       if (leftPosition > stopPos){
//         resolve();  
//         clearInterval(walkInterval);   
//       }
//     }, STEP_INTERVAL_MS);
    
//   });
// }

// function dance(img) {
//   return new Promise((resolve) => {

//     img.src = DANCING_CAT_URL;

//     setTimeout(() => {
//       img.src = WALK_CAT_URL ;
//       resolve();
//     }, DANCE_TIME_MS);
//   });
// }

// function catWalk() {
//   const img = document.querySelector('img');
//   const startPos = -img.width;
//   const centerPos = (window.innerWidth - img.width) / 2;
//   const stopPos = window.innerWidth;

//   walk(img, startPos, stopPos, centerPos).then(() => {
//     catWalk();
//   });


// }

// window.addEventListener('load', catWalk);

//===========================================================
// Third solution:
//==================================

// let wait = false;
// let leftPosition = 0;
// const STEP_SIZE_PX = 10;
// const STEP_INTERVAL_MS = 50;
// const DANCE_TIME_MS = 5000;
// const DANCING_CAT_URL =
//   'https://media1.tenor.com/images/2de63e950fb254920054f9bd081e8157/tenor.gif';
// const WALK_CAT_URL = 'http://www.anniemation.com/clip_art/images/cat-walk.gif';

// function walk(img, startPos, stopPos) {

//   return new Promise((resolve) => {

//   if (img.src === WALK_CAT_URL) {

//     img.style.left = `${leftPosition}px`;
      
//     leftPosition = STEP_SIZE_PX + leftPosition;
  
//     if (leftPosition > stopPos ){

//              resolve();
   
//   }
//   }
// });
// }

// function dance(img) {

//   wait = true;
//   return new Promise((resolve) => {

//     img.src = DANCING_CAT_URL;

//     setTimeout(() => {
//       img.src = WALK_CAT_URL ;
//       resolve();
//     }, DANCE_TIME_MS);

//   });
// }

// function catWalk() {
//   const img = document.querySelector('img');
//   const startPos = -img.width;
//   const centerPos = (window.innerWidth - img.width) / 2;
//   const stopPos = window.innerWidth;
  

// leftPosition = startPos;

//   setInterval(() => {

//     if (leftPosition  > centerPos - 5 && 
//         leftPosition < centerPos + 5 &&
//          wait === false) {

//           dance(img);

//         } else {
//           walk(img, startPos, stopPos).then(() => {
//             leftPosition = startPos;
//             wait = false;
//           });
//         }
    

//   }, STEP_INTERVAL_MS);

// }

// window.addEventListener('load', catWalk);

//===============================================

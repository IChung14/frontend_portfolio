const overlay = document.querySelector('#overlay');
function callOverlay(){
  overlay.style.display = 'block';

}
function exitOverlay(){
  overlay.style.display = 'none';
}
overlay.addEventListener('click',function(e){
  exitOverlay();
  //if photo or post or setting window is open, close them
});

const sideImg = document.querySelector('#sidebar-right');
sideImg.addEventListener('click',function(e){
  if(e.target.className == 'side-image'){
    const img = e.target;
    callOverlay();
    // display enlarged image at center with rounded corner and X button at top right corner

  }
});

const post = document.querySelector('#post');
post.addEventListener('click',function(e){
  callOverlay();
  // display a pop-up with typebox and submit button, and exit button
  // photos are allowed if possible
});
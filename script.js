let claimBtn = document.querySelector('.claim-trial-btn');
claimBtn.addEventListener('click', submitInfo);

function submitInfo(event) {
  event.preventDefault();
  console.log('clicked');
}

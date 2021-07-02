function openSlideMenu(){
    document.getElementById("side-menu").style.width="250px";
  }
  
  // function closeSlideMenu(){
  //   document.getElementById("side-menu").style.width="0";
  // }

  // Close  slide menu 
  var i=document.querySelectorAll(".navLink").length;
  
  for(var n=0; n<i;n++){
    var clickedlink=document.querySelectorAll(".navLink")[n];
  
    clickedlink.addEventListener("click",function(){
      document.getElementById("side-menu").style.width="0";
    })
  
  }
  document.querySelector(".btn-close").addEventListener("click",function(){
    document.getElementById("side-menu").style.width="0";
  })

  //  Goback function
  function goBack() {
    
    location.href=document.referrer; 
    return false;
    }

  // The Form function

  var form = document.getElementById("my-form");
    
  async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
      method: form.method,
      body: data,
      headers: {
          'Accept': 'application/json'
      }
    }).then(response => {
      status.classList.add('success');
      status.innerHTML = "Sent successfully! We will get back to you soon!";
      form.reset()
    }).catch(error => {
      status.classList.add('error');
      status.innerHTML = "Oops! Email address has problem, try again!"
    });
  }
  form.addEventListener("submit", handleSubmit)

  
  
  document.addEventListener('DOMContentLoaded', ready)

function ready() {
  const htmln = document.getElementById('htmln')
  if (htmln) {
    htmln.value = window.location.href;
  }
}


function whatssite(){
  let open=document.getElementById("modar");
  open.style.display="block";
  let open2=document.getElementById("mask");
  open2.style.display="block";
}

function tozi(){
  let close=document.getElementById(`modar`);
  close.style.display="none";
  let close2=document.getElementById(`mask`);
  close2.style.display="none";

}

function fadein(){
  let a=document.getElementById('aiueo700');
  a.animate([{opacity: '0'}, {opacity: '1'}], 1000);
}

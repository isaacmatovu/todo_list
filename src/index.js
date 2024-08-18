// index.js
import "./styles.css";
import  {appoint}  from "./appointment";





    
    var appointbutton =document.getElementById('appoint');
    appointbutton.addEventListener('click',add)
    function add(){
        appoint();
    }

const body=document.body;
const hollBtn=document.querySelector("button");
const outPut=document.querySelector(".outPut");

hollBtn.addEventListener("click",()=>{

    /* Returns the code name of the browser */ 
    let a =navigator.appCodeName;

    /* Returns the name of the browser */
    let b =navigator.appName;

    /* Returns the version information of the browser */
    let c =navigator.appVersion;

    /* Determines whether cookies are enabled in the browser */
    let d =navigator.cookieEnabled;

    /* Returns a Geolocation object that can be used to locate the user's position*/
    let e =navigator.geolocation;

    /* Returns the language of the browser*/
    let f =navigator.language;

    /*Determines whether the browser is online*/
    let g =navigator.onLine;

    /*Returns for which platform the browser is compiled*/
    let h =navigator.platform;

    /*Returns the engine name of the browser*/
    let i =navigator.product;

    /*Returns the user-agent header sent by the browser to the server*/
    let j =navigator.userAgent;


    outPut.innerHTML=`
    Code name of the browser: ${a}<br>
    Name of the browser: ${b}<br>
    Version information of the browser: ${c}<br>
    Cookies are enabled in the browser: ${d}<br>
    Geolocation object that can be used to locate the user's position: ${e}<br>
    Language of the browser: ${f}<br>
    Whether the browser is online: ${g}<br>
    For which platform the browser is compiled: ${h}<br>
    Engine name of the browser: ${i}<br>
    User-agent header sent by the browser to the server: ${j}<br>
    `;
})
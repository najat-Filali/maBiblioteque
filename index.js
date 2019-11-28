function createBook(titre, prix, disp){
    let available = document.querySelector('button'); 

    document.querySelector('#bibl').innerHTML +=`
    <fieldset >
    <div class="livre">
        <h2>TITRE DU LIVRE : <br> ${titre.toUpperCase()}</h2>
        <h2>PRIX DU LIVRE : <br> ${prix}</h2>
        <div> ${disp} </div>
    </fieldset>
    `;
  

document.forms.fab.addEventListener(
    'submit',
    function(event){
        event.preventDefault();
        createBook(
            this.titre.value,
            this.prix.value,
            this.disp.checked,
        );
        return false; 
    }
) 

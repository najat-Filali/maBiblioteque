function createBook(titre, prix, disp){

    let available = document.querySelector('[type="checkbox"]'); 

    if (available.checked){
        document.querySelector('#bibl').innerHTML +=`
        <fieldset border="1px" background-color="green" >
        <div class="livre">
            <h2>titre du livre : <br> ${titre.toUpperCase()}</h2>
            <h2>prix du livre : <br> ${prix}</h2>
            <div> ${disp} </div>
        </fieldset>
        
        `;
    }else {
        document.querySelector('#bibl').innerHTML +=`
        <fieldset border="1px" background-color="red" >
        <div class="livre">
            <h2>titre du livre : <br> ${titre.toUpperCase()}</h2>
            <h2>prix du livre : <br> ${prix}</h2>
            <div> ${disp} </div>
        </fieldset>
        `;
    }
}

document.forms.fab.addEventListener(
    'submit',
    function(event){
        event.preventDefault();
        createBook(
            this.titre.value,
            this.prix.value,
            this.disp.value,
        );
        return false; 
    }
); 


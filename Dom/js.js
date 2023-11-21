console.log('js06 API dom');

const findElementById = () => {
    const title = document.getElementById('title');
    console.log(title);

    title.innerHTML = `
    
    <div class='text-center'>
        <h1 class='text-danger'>clicka ch34</h1> 
        <h2 class='text-warning'>En el barrio no hay reglas </h2>
    </div>
    
    `;

}


findElementById();
// Wacht tot de gehele DOM is geladen voordat de code wordt uitgevoerd
document.addEventListener('DOMContentLoaded', function() {
    // Selecteer alle elementen met de class 'ingredient'
    const ingredients = document.querySelectorAll('.ingredient');
    // Selecteer het element met de class 'stack' waar ingrediënten worden toegevoegd
    const stack = document.querySelector('.stack');
    // Selecteer het element met het id 'bell'
    const bell = document.getElementById('bell');
    // Selecteer het element met het id 'price-modal'
    const modal = document.getElementById('price-modal');
    // Selecteer het element met de class 'close' in de modal
    const closeModal = document.querySelector('.close');
    // Selecteer het element met het id 'total-price' waar de totale prijs wordt weergegeven
    let totalPriceElement = document.getElementById('total-price');
    
    // Laad het belgeluid
    const bellSound = new Audio('bell.mp3'); // Geluidsbestand instellen
    
    // Houd de totale prijs bij
    let totalPrice = 0;

    // Voeg een klik-eventlistener toe aan elk ingrediënt
    for (let i = 0; i < ingredients.length; i++) {
        ingredients[i].onclick = function() {
            // Verkrijg de naam en prijs van het ingrediënt uit de data-attributen
            let ingredientName = this.getAttribute('data-name');
            let ingredientPrice = parseFloat(this.getAttribute('data-price'));
            
            // Maak een nieuw div-element aan voor het ingrediënt
            const ingredientElement = document.createElement('div');
            // Maak een nieuw img-element aan en stel de src en alt attributen in
            const ingredientImg = document.createElement('img');
            ingredientImg.src = 'images/' + ingredientName + '.png';
            ingredientImg.alt = ingredientName;
            // Voeg de afbeelding toe aan het ingrediëntdiv
            ingredientElement.appendChild(ingredientImg);
            // Voeg het ingrediëntdiv toe aan de stack
            stack.appendChild(ingredientElement);

            // Voeg de prijs van het ingrediënt toe aan de totale prijs
            totalPrice += ingredientPrice;
        };
    }

    // Voeg een klik-eventlistener toe aan de bel
    bell.onclick = function() {
        // Stel de inhoud van het totaalprijs-element in op de totale prijs
        totalPriceElement.textContent = totalPrice.toFixed(2);
        // Toon de prijs-modal
        modal.style.display = 'block';
        // Speel het belgeluid af
        bellSound.play();
    };

    // Voeg een klik-eventlistener toe aan de sluitknop van de modal
    closeModal.onclick = function() {
        // Verberg de modal
        modal.style.display = 'none';
    };

    // Voeg een klik-eventlistener toe aan het venster
    window.onclick = function(event) {
        // Verberg de modal als er buiten de modal wordt geklikt
        if (event.target == modal) {
            modal.style.display = 'none';
        } else {
            // Log een bericht naar de console als er ergens anders wordt geklikt
            console.log('Er werd buiten de modal geklikt.');
        }
    };
});

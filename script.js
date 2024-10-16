let coins = 0; // Nombre de coins accumulés
const coinCountDisplay = document.getElementById('coinCount');
const character = document.getElementById('character');
const characterImage = document.getElementById('characterImage');

// Fonction pour gérer le clic sur le personnage
character.addEventListener('click', () => {
    // Ajoute 6 coins par clic
    coins += 6;
    coinCountDisplay.innerText = 'Coins: ' + coins;

    // Animation de réduction d'échelle et d'opacité
    character.style.transform = 'scale(0.9)';
    character.style.opacity = '0.5';

    // Restauration après 300ms
    setTimeout(() => {
        character.style.transform = 'scale(1)';
        character.style.opacity = '1';
    }, 300);
});

const getImageUrl = (name) => {
  return new URL(`../assets/images/${name}`, import.meta.url).href
}

export const mainGame = {
    title: "Final Fantasy XVI",
    description: "O sol poente de Valisthea. Uma história trágica de vingança e poder.",
    image: getImageUrl('hero-bg.jpg'), 
    price: "R$ 349,90"
};

export const newReleases = [
    { id: 1, title: "Spider-Man 2", image: getImageUrl('game1.jpg') },
    { id: 2, title: "Elden Ring", image: getImageUrl('game2.jpg') },
    { id: 3, title: "God of War Ragnarök", image: getImageUrl('game3.jpg') },
    { id: 4, title: "Resident Evil 4", image: getImageUrl('game4.jpg') },
    { id: 5, title: "Cyberpunk 2077", image: getImageUrl('game5.jpg') },
];

export const topSellers = [
    { id: 6, title: "GTA V", image: getImageUrl('game6.jpg') },
    { id: 7, title: "Shadow of the Colossus", image: getImageUrl('game7.jpg') },
    { id: 8, title: "Call of Duty: Warzone", image: getImageUrl('game8.jpg') },
    { id: 9, title: "Fortnite", image: getImageUrl('game9.jpg') },
    { id: 10, title: "Minecraft", image: getImageUrl('game10.jpg') },
];
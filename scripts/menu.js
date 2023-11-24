document.addEventListener('DOMContentLoaded', () => {
    const menu = [
        { category: 'breakfast', title: 'Omelette', price: '50 000 UZD.', imageUrl: 'https://i.ibb.co/TPjDPRY/omelette-3cba9f8.webp', description: 'Master the omelette with our simple recipe then add the filling of your choice – grated cheese, ham, fresh herbs, mushrooms and smoked salmon are favourites.' },
        { category: 'breakfast', title: 'English Breakfast', price: '50 000 UZD.', imageUrl: 'https://i.ibb.co/nCBVT3B/recipe-image-legacy-id-592533-12-67f5d3e.webp', description: 'Sometimes called a fry up, a full English is a hearty, hefty breakfast plate served in the UK and Ireland. Full English breakfasts are so popular that they’re pretty much offered throughout the day as all-day breakfast. Full English breakfasts contain: sausages, back bacon, eggs, tomatoes, mushrooms, fried bread, and beans.' },
        { category: 'salads', title: 'Epic Summer', price: '40 000 UZD.', imageUrl: 'https://i.ibb.co/nn7012R/epic-summer-salad-000aded.webp" alt="epic-summer-salad-000aded', description: 'Perfect for BBQs and buffets, our epic salad is an assembly job of gorgeous ingredients – no cooking required. Serve it with lamb kebabs for an impressive summer feast' },
        { category: 'salads', title: 'Potato Salad', price: '40 000 UZD.', imageUrl: 'https://i.ibb.co/fFSKj8y/potato-salad-main-272de70.webp', description: 'Our classic potato salad recipe is the perfect barbecue side dish, great for picnic spreads or paired with roast leftovers. Try our easy, versatile recipe' },
        { category: 'desserts', title: 'Pumpkin & pecan cheesecake pie', price: '30 000 UZD.', imageUrl: 'https://i.ibb.co/bd5sZB2/Pumpkin-and-pecan-cheesecake-pie-0fc655f.webp', description: 'Indulge in our cheesecake pie with homemade pastry, a pumpkin filling and pecan topping. Its a perfect dessert for autumn' },
        { category: 'desserts', title: 'Luscious lemon baked cheesecake', price: '30 000 UZD.', imageUrl: 'https://i.ibb.co/myvJM7T/recipe-image-legacy-id-22204-10-836d350.webp', description: 'A simple but very impressive pud, light enough to have a slice to finish a big meal' },
        { category: 'drinks', title: 'Turmeric tea', price: '15 000 UZD.', imageUrl: 'https://i.ibb.co/5kNgRyR/tumeric-tea-be92018.webp', description: 'Rummage through your spice rack and dig out turmeric to make this warming, caffeine-free tea. This bright orange spice is popping up on menus everywhere' },
        { category: 'drinks', title: 'Iced coffee', price: '15 000 UZD.', imageUrl: 'https://i.ibb.co/jgyT9qC/Iced-Coffeenew-8415cf7.webp', description: 'Discover how to make iced coffee at home. With this simple recipe, you can get a cooling caffeine fix with no fuss. Try it with a shot of maple syrup' }
    ];

    const menuContainer = document.querySelector('.menu');
    const navItems = document.querySelectorAll('.navigation li');

    function filterMenu(category) {
        menuContainer.innerHTML = '';
        const filteredMenu = category === 'all' ? menu : menu.filter(item => item.category === category);

        filteredMenu.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('card');
            card.innerHTML = `
                <img src="${item.imageUrl}" alt="${item.title}">
                <h3>${item.title}</h3>
                <p>${item.price}</p>
                <button onclick="showModal('${item.title}', '${item.description}')" class="menu-btn">More info</button>
            `;
            menuContainer.appendChild(card);
        });
    }

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            document.querySelector('.navigation .active').classList.remove('active');
            item.classList.add('active');
            filterMenu(item.getAttribute('data-category'));
        });
    });

    filterMenu('all');
});

function showModal(title, description) {
    const modal = document.getElementById('modal');
    const modalContent = modal.querySelector('.modal-content');
    modalContent.innerHTML = `
        <span class="close" onclick="closeModal()">&times;</span>
        <h2>${title}</h2>
        <p>${description}</p>
    `;
    modal.style.display = 'block';
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}

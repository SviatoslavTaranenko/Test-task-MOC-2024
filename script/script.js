document.addEventListener('DOMContentLoaded', async () => {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        const products = await response.json();

        const carts = document.querySelectorAll('.cart');
        carts.forEach((cart, index) => {
            const product = products[index];
            const img = cart.querySelector('.img img');
            const descriptionContainer = cart.querySelector('.description');
            const price = cart.querySelector('.price');
            const button = cart.querySelector('.button button');

            img.src = `https://placehold.co/600x400?text=${product.name}`;
            img.alt = product.name;

            const initialDescription = product.description.substring(0, 20) + '...';
            descriptionContainer.textContent = initialDescription;
            const fullDescription = product.description;

            price.textContent = `Price: ${product.price}`;
            button.addEventListener('click', () => {
                // Додайте код для обробки натискання кнопки "Купити" тут
                console.log(`Buy ${product.name}`);
            });

            const seeMoreButton = document.createElement('button');
            seeMoreButton.textContent = 'See more';
            seeMoreButton.classList.add('see-more');
            seeMoreButton.addEventListener('click', () => {
                if (descriptionContainer.textContent === initialDescription) {
                    descriptionContainer.textContent = fullDescription;
                    seeMoreButton.textContent = 'See less';
                } else {
                    descriptionContainer.textContent = initialDescription;
                    seeMoreButton.textContent = 'See more';
                }
            });

            // Вставляємо кнопку після переривання опису
            descriptionContainer.insertAdjacentElement('afterend', seeMoreButton);
        });
    } catch (error) {
        console.error('Error:', error);
    }
});

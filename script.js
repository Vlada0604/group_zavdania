// Тут буде описана логіка роботи програми
function showPage(pageId) {
    // Отримуємо всі елементи з класом 'page'
    const pages = document.querySelectorAll('.page');
    
    // Приховуємо всі сторінки
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Показуємо лише ту сторінку, яка була передана
    const activePage = document.getElementById(pageId);
    if (activePage) {
        activePage.classList.add('active');
    }
}

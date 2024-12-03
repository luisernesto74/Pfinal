const fs = require('fs');
const path = require('path');
const { screen } = require('@testing-library/dom');

test('La página contiene "Hola Mundo"', () => {
    const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
    document.body.innerHTML = html;

    const heading = screen.getByRole('heading', { name: 'Hola Mundo' });
    expect(heading).toBeInTheDocument();
});

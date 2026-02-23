/* =============================================
   DATA.JS - La Blueseria Data Store
   ============================================= */

const PRODUCTS_KEY = 'blueseria_products';
const SALES_KEY = 'blueseria_sales';

/* ---- Default Products ---- */
const DEFAULT_PRODUCTS = [
    // Bebidas
    { id: 'P001', name: 'Coca-Cola', category: 'Bebidas', price: 1800, emoji: '🥤', active: true, stock: 50 },
    { id: 'P002', name: 'Fanta Naranja', category: 'Bebidas', price: 1800, emoji: '🍊', active: true, stock: 40 },
    { id: 'P003', name: 'Sprite', category: 'Bebidas', price: 1800, emoji: '💚', active: true, stock: 40 },
    { id: 'P004', name: 'Agua Mineral', category: 'Bebidas', price: 1200, emoji: '💧', active: true, stock: 60 },
    { id: 'P005', name: 'Limonada Natural', category: 'Bebidas', price: 2500, emoji: '🍋', active: true, stock: 30 },
    { id: 'P006', name: 'Jugo de Mango', category: 'Bebidas', price: 2800, emoji: '🥭', active: true, stock: 25 },
    { id: 'P007', name: 'Milkshake Vainilla', category: 'Bebidas', price: 3500, emoji: '🥛', active: true, stock: 20 },
    { id: 'P008', name: 'Milkshake Chocolate', category: 'Bebidas', price: 3500, emoji: '🍫', active: true, stock: 20 },
    // Comidas
    { id: 'P009', name: 'Completo Italiano', category: 'Comidas', price: 3200, emoji: '🌭', active: true, stock: 30 },
    { id: 'P010', name: 'Hamburguesa Clásica', category: 'Comidas', price: 4500, emoji: '🍔', active: true, stock: 25 },
    { id: 'P011', name: 'Hamburguesa Doble', category: 'Comidas', price: 5500, emoji: '🍔', active: true, stock: 20 },
    { id: 'P012', name: 'Hot Dog', category: 'Comidas', price: 2800, emoji: '🌭', active: true, stock: 35 },
    { id: 'P013', name: 'Papas Fritas', category: 'Comidas', price: 2200, emoji: '🍟', active: true, stock: 40 },
    { id: 'P014', name: 'Sandwich de Pollo', category: 'Comidas', price: 4200, emoji: '🥪', active: true, stock: 20 },
    // Postres
    { id: 'P015', name: 'Helado Cono', category: 'Postres', price: 1500, emoji: '🍦', active: true, stock: 50 },
    { id: 'P016', name: 'Helado en Taza', category: 'Postres', price: 2000, emoji: '🍨', active: true, stock: 40 },
    { id: 'P017', name: 'Brownie', category: 'Postres', price: 2200, emoji: '🍫', active: true, stock: 20 },
    { id: 'P018', name: 'Cheesecake Frutilla', category: 'Postres', price: 3000, emoji: '🍰', active: true, stock: 15 },
    // Extras
    { id: 'P019', name: 'Extra Queso', category: 'Extras', price: 600, emoji: '🧀', active: true, stock: 100 },
    { id: 'P020', name: 'Extra Bacon', category: 'Extras', price: 800, emoji: '🥓', active: true, stock: 80 },
    { id: 'P021', name: 'Salsa BBQ', category: 'Extras', price: 400, emoji: '🫙', active: true, stock: 100 },
    { id: 'P022', name: 'Café Espresso', category: 'Bebidas', price: 1500, emoji: '☕', active: true, stock: 60 },
];

const SELLERS = [
    { id: 'S1', name: 'Carlos Pérez' },
    { id: 'S2', name: 'María López' },
    { id: 'S3', name: 'Juan Torres' },
];

/* ---- Products CRUD ---- */
function getProducts() {
    const raw = localStorage.getItem(PRODUCTS_KEY);
    if (!raw) {
        localStorage.setItem(PRODUCTS_KEY, JSON.stringify(DEFAULT_PRODUCTS));
        return DEFAULT_PRODUCTS;
    }
    return JSON.parse(raw);
}

function saveProducts(products) {
    localStorage.setItem(PRODUCTS_KEY, JSON.stringify(products));
}

function addProduct(product) {
    const products = getProducts();
    product.id = 'P' + (Date.now());
    products.push(product);
    saveProducts(products);
    return product;
}

function updateProduct(id, data) {
    const products = getProducts();
    const idx = products.findIndex(p => p.id === id);
    if (idx !== -1) { Object.assign(products[idx], data); saveProducts(products); }
}

function toggleProduct(id) {
    const products = getProducts();
    const p = products.find(x => x.id === id);
    if (p) { p.active = !p.active; saveProducts(products); }
}

/* ---- Sales CRUD ---- */
function getSales() {
    const raw = localStorage.getItem(SALES_KEY);
    if (!raw) {
        const demo = generateDemoSales();
        localStorage.setItem(SALES_KEY, JSON.stringify(demo));
        return demo;
    }
    return JSON.parse(raw);
}

function saveSale(sale) {
    const sales = getSales();
    sale.id = 'V' + Date.now();
    sales.unshift(sale);
    localStorage.setItem(SALES_KEY, JSON.stringify(sales));
    return sale;
}

/* ---- Demo Data Generation ---- */
function generateDemoSales() {
    const sales = [];
    const now = new Date();
    const sellers = SELLERS;
    const products = DEFAULT_PRODUCTS;
    const payMethods = ['Efectivo', 'Tarjeta', 'Transferencia'];

    for (let day = 29; day >= 0; day--) {
        const date = new Date(now);
        date.setDate(date.getDate() - day);
        const numSales = 6 + Math.floor(Math.random() * 10);

        for (let i = 0; i < numSales; i++) {
            const seller = sellers[Math.floor(Math.random() * sellers.length)];
            const numItems = 1 + Math.floor(Math.random() * 4);
            const items = [];
            let total = 0;

            for (let j = 0; j < numItems; j++) {
                const prod = products[Math.floor(Math.random() * products.length)];
                const qty = 1 + Math.floor(Math.random() * 3);
                items.push({ id: prod.id, name: prod.name, price: prod.price, qty, emoji: prod.emoji });
                total += prod.price * qty;
            }

            const saleDate = new Date(date);
            saleDate.setHours(9 + Math.floor(Math.random() * 11), Math.floor(Math.random() * 60), 0, 0);

            sales.push({
                id: `V${day}${i}${Math.random().toString(36).slice(2, 6)}`,
                date: saleDate.toISOString(),
                seller: seller.name,
                items,
                total,
                payMethod: payMethods[Math.floor(Math.random() * payMethods.length)],
                status: 'Completada',
            });
        }
    }
    return sales.sort((a, b) => new Date(b.date) - new Date(a.date));
}

/* ---- Analytics Helpers ---- */
function getSalesToday() {
    const today = new Date().toDateString();
    return getSales().filter(s => new Date(s.date).toDateString() === today);
}

function getSalesThisMonth() {
    const now = new Date();
    return getSales().filter(s => {
        const d = new Date(s.date);
        return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
    });
}

function getSalesByDay(days = 7) {
    const result = [];
    const now = new Date();
    for (let i = days - 1; i >= 0; i--) {
        const d = new Date(now);
        d.setDate(d.getDate() - i);
        const dayStr = d.toDateString();
        const daySales = getSales().filter(s => new Date(s.date).toDateString() === dayStr);
        result.push({
            label: d.toLocaleDateString('es-CL', { weekday: 'short', day: 'numeric' }),
            total: daySales.reduce((a, s) => a + s.total, 0),
            count: daySales.length,
        });
    }
    return result;
}

function getSalesByCategory() {
    const cats = {};
    const products = getProducts();
    getSalesThisMonth().forEach(sale => {
        sale.items.forEach(item => {
            const prod = products.find(p => p.id === item.id);
            const cat = prod ? prod.category : 'Otros';
            cats[cat] = (cats[cat] || 0) + item.price * item.qty;
        });
    });
    return cats;
}

function getSalesBySeller() {
    const sellers = {};
    getSalesThisMonth().forEach(sale => {
        if (!sellers[sale.seller]) sellers[sale.seller] = { total: 0, count: 0 };
        sellers[sale.seller].total += sale.total;
        sellers[sale.seller].count++;
    });
    return sellers;
}

function formatCLP(amount) {
    return '$' + Math.round(amount).toLocaleString('es-CL');
}

function formatDateShort(isoStr) {
    return new Date(isoStr).toLocaleString('es-CL', { dateStyle: 'short', timeStyle: 'short' });
}

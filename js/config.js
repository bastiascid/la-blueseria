/* =======================================================
   CONFIG.JS — La Blueseria POS · Configuración General
   =======================================================
   ✏️  EDITA ESTE ARCHIVO para personalizar el sistema
   a tu negocio. No necesitas cambiar nada más.
   ======================================================= */

const APP_CONFIG = {

    /* ── Información del negocio ────────────────────────── */
    business_name: "La Blueseria",
    business_subtitle: "Fuente de Soda & Shopería",
    business_address: "Av. Principal 123, Ciudad",
    business_phone: "+56 9 1234 5678",
    business_email: "contacto@lablueseria.cl",

    /* ── Moneda y formato ───────────────────────────────── */
    currency_symbol: "$",
    currency_locale: "es-CL",           // es-CL, es-AR, es-MX, etc.

    /* ── Colores de la marca (CSS HSL) ─────────────────── */
    // Para cambiar el color principal del sistema modifica estos valores
    color_primary: "#c8922a",          // Dorado ámbar
    color_dark: "#1a1209",          // Madera oscura
    color_accent: "#e8b84b",          // Dorado claro

    /* ── Usuarios del sistema ───────────────────────────── */
    // Agrega, edita o elimina usuarios aquí.
    // Roles disponibles: "Administrador", "Cajero"
    users: [
        { username: "admin", password: "admin123", role: "Administrador", name: "Administrador" },
        { username: "cajero1", password: "caja123", role: "Cajero", name: "Cajero 1" },
        { username: "cajero2", password: "caja456", role: "Cajero", name: "Cajero 2" }
    ],

    /* ── Métodos de pago habilitados ────────────────────── */
    payment_methods: ["Efectivo", "Tarjeta", "Transferencia", "QR"],

    /* ── Categorías de productos ────────────────────────── */
    // Puedes agregar o quitar categorías según tu negocio
    categories: ["Bebidas", "Comidas", "Postres", "Extras"],

    /* ── Versión del sistema ───────────────────────────── */
    version: "2.0",
    license_owner: ""   // Rellenar con nombre del cliente al entregar

};

/* ── Aplicar estilos de marca automáticamente ─────────── */
(function applyBrandColors() {
    const root = document.documentElement;
    if (APP_CONFIG.color_primary) root.style.setProperty('--color-primary', APP_CONFIG.color_primary);
    if (APP_CONFIG.color_dark) root.style.setProperty('--color-dark', APP_CONFIG.color_dark);
    if (APP_CONFIG.color_accent) root.style.setProperty('--color-accent', APP_CONFIG.color_accent);
})();

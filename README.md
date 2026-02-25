# 🎵 Sistema POS — Panel de Punto de Venta

Sistema de punto de venta (POS) completo para **fuentes de soda, cafeterías, restaurantes y negocios similares**. Funciona directamente en el navegador, sin instalación de servidores ni base de datos externa.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat&logo=chartdotjs&logoColor=white)
![Licencia Comercial](https://img.shields.io/badge/Licencia-Comercial-gold)

---

## ✨ Características

| Módulo | Descripción |
|--------|-------------|
| 🛒 **Punto de Venta** | Caja rápida con búsqueda, categorías y métodos de pago |
| 📦 **Productos** | Gestión de catálogo con precio, categoría y stock |
| 📈 **Reportes** | Gráficos de ventas, categorías y métodos de pago |
| 🧾 **Historial** | Registro completo de transacciones por vendedor |
| 💾 **Backup** | Exportar/importar datos en JSON y CSV |
| 🔐 **Multi-usuario** | Administrador y cajeros con credenciales configurables |
| 🎨 **White-label** | Nombre, colores y usuarios en un solo archivo de configuración |

---

## 🚀 Instalación en 3 pasos

```bash
# 1. Descarga o clona el repositorio
git clone https://github.com/bastiascid/la-blueseria.git

# 2. Abre en tu navegador
# (doble clic en login.html, o usa el servidor Python)
python server.py   # Acceso en red local: http://[TU-IP]:8080

# 3. Personaliza el negocio
# Edita js/config.js con el nombre, colores y usuarios de tu negocio
```

> **Sin instalación de Node.js, bases de datos ni servidores externos.**

---

## ⚙️ Personalización

Edita el archivo `js/config.js` para adaptar el sistema a tu negocio:

```js
const APP_CONFIG = {
  business_name:     "Mi Negocio",       // Nombre que aparece en todo el sistema
  business_subtitle: "Subtítulo",
  color_primary:     "#c8922a",          // Color principal (dorado por defecto)
  
  users: [
    { username: "admin",   password: "TuContraseñaSegura", role: "Administrador", name: "Admin" },
    { username: "cajero1", password: "OtraContraseña",     role: "Cajero",        name: "Cajero 1" }
  ],

  payment_methods: ["Efectivo", "Tarjeta", "Transferencia", "QR"],
  categories:      ["Bebidas", "Comidas", "Postres", "Extras"]
};
```

---

## 📋 Páginas del sistema

| Archivo | Descripción |
|---------|-------------|
| `landing.html` | Página de presentación del producto |
| `login.html` | Inicio de sesión |
| `dashboard.html` | Panel principal con KPIs y gráficos |
| `pos.html` | Pantalla de caja / punto de venta |
| `cajero.html` | Vista simplificada para cajeros |
| `ventas.html` | Historial de ventas |
| `reportes.html` | Reportes avanzados con exportación |
| `productos.html` | Gestión de productos |

---

## 💾 Backup de datos

Desde la página de **Reportes** puedes:
- 📥 **Exportar CSV** — Las ventas del período en formato Excel
- 💾 **Backup JSON** — Todos los datos (ventas + productos)
- 📤 **Importar** — Restaurar desde un backup JSON anterior

---

## 🛠 Tecnologías

- **HTML5 · CSS3 · JavaScript ES6+** — Sin frameworks, carga instantánea
- **[Chart.js](https://www.chartjs.org/)** — Gráficos interactivos
- **localStorage** — Persistencia de datos en el navegador
- **Python http.server** — Opcional, para acceso en red local

---

## 📖 Manual de instalación

Abre `MANUAL_INSTALACION.html` para el paso a paso completo con capturas de pantalla.

---

## 👨‍💻 Autor

**Bastián Scid**  
- GitHub: [@bastiascid](https://github.com/bastiascid)  
- Email: bastiascid@gmail.com

---

## 📄 Licencia

Este sistema está bajo **Licencia Comercial Propietaria**. Ver `LICENSE` para los términos de uso.  
Prohibida la redistribución o reventa sin autorización escrita del autor.

---

> ⭐ ¿Te fue útil? Dale una estrella en GitHub.

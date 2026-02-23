# La Blueseria 🎵

Sistema web y punto de venta para **La Blueseria** – Fuente de Soda & Shopería.

## 🚀 Cómo usar

### Opción 1: Solo en tu PC (sin servidor)
Abre directamente `index.html` o `login.html` en tu navegador.

### Opción 2: Acceso desde múltiples PCs en la misma red
```bash
python server.py
```
O haz doble clic en `INICIAR_SERVIDOR.bat` (Windows).

Luego accede desde otro PC en la misma red:
```
http://[IP-DE-TU-PC]:8080/cajero.html
```

## 📋 Páginas del sistema

| Archivo | Función |
|---------|---------|
| `index.html` | Página pública (landing) |
| `login.html` | Acceso administrador |
| `dashboard.html` | Panel con KPIs y gráficos |
| `pos.html` | Punto de Venta |
| `ventas.html` | Historial de ventas |
| `productos.html` | Gestión de productos |
| `reportes.html` | Reportes avanzados |
| `cajero.html` | Acceso rápido para cajeros (red local) |

## 🔐 Credenciales demo

| Usuario | Contraseña | Rol |
|---------|-----------|-----|
| `admin` | `blueseria2024` | Administrador |
| `cajero1` | `caja123` | Carlos Pérez |
| `cajero2` | `caja456` | María López |

## 🛠 Tecnologías
- HTML5 · CSS3 · JavaScript (ES6+)
- [Chart.js](https://www.chartjs.org/) para gráficos
- `localStorage` para persistencia de datos
- Python `http.server` para servidor de red local

## 📖 Manual de instalación
Abre `MANUAL_INSTALACION.html` para el paso a paso completo de instalación.

## 🎨 Diseño
Paleta basada en el logo original: madera oscura + dorado ámbar vintage.

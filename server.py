#!/usr/bin/env python3
"""
La Blueseria - Servidor Web Local
Permite acceder al sistema desde cualquier computador en la misma red WiFi/LAN.

Uso: Ejecutar "INICIAR_SERVIDOR.bat" o este script directamente.
Luego acceder desde otro PC con: http://[IP_DE_ESTE_PC]:8080
"""

import http.server
import socketserver
import socket
import os
import sys
import webbrowser
import threading
import time

PORT = 8080
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

def get_local_ip():
    """Get the local network IP address."""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "127.0.0.1"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        client = self.client_address[0]
        print(f"  [{client}] {format % args}")

    def end_headers(self):
        # Allow cross-origin for localStorage sync
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

def open_browser_delayed(url, delay=1.5):
    time.sleep(delay)
    webbrowser.open(url)

if __name__ == "__main__":
    local_ip = get_local_ip()
    url_local  = f"http://localhost:{PORT}"
    url_lan    = f"http://{local_ip}:{PORT}"
    url_pos    = f"http://{local_ip}:{PORT}/pos.html"
    url_cajero = f"http://{local_ip}:{PORT}/cajero.html"

    print()
    print("=" * 58)
    print("     🎵  LA BLUESERIA - Servidor Web Local")
    print("=" * 58)
    print()
    print("  ✅ Servidor iniciado correctamente")
    print()
    print("  📍 ACCESOS DISPONIBLES:")
    print()
    print(f"  🌐 Página principal (este PC):")
    print(f"     {url_local}")
    print()
    print(f"  📡 Acceso desde OTRA PC en la misma red:")
    print(f"     {url_lan}")
    print()
    print(f"  🛒 PUNTO DE VENTA para cajero (otra PC):")
    print(f"     {url_cajero}")
    print()
    print("  ⚠️  IMPORTANTE:")
    print("     - Ambos PCs deben estar en la MISMA red WiFi/LAN")
    print("     - Si el firewall pregunta, hacer clic en 'Permitir acceso'")
    print("     - Para detener el servidor: presionar Ctrl+C")
    print()
    print("=" * 58)
    print("  📋 Registro de conexiones:")
    print()

    # Open browser automatically
    threading.Thread(target=open_browser_delayed, args=(url_local,), daemon=True).start()

    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            httpd.allow_reuse_address = True
            httpd.serve_forever()
    except KeyboardInterrupt:
        print()
        print("  🛑 Servidor detenido.")
    except OSError as e:
        if "10048" in str(e) or "Address already in use" in str(e):
            print(f"  ❌ Error: el puerto {PORT} ya está en uso.")
            print(f"     Intenta cerrar el servidor anterior o cambia PORT en server.py")
        else:
            print(f"  ❌ Error: {e}")
        sys.exit(1)

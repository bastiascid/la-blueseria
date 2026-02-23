/* =============================================
   AUTH.JS - La Blueseria Authentication
   ============================================= */

const AUTH_KEY = 'blueseria_auth';
const USERS = [
  { username: 'admin', password: 'blueseria2024', role: 'Administrador', name: 'Administrador' },
  { username: 'cajero1', password: 'caja123', role: 'Cajero', name: 'Carlos Pérez' },
  { username: 'cajero2', password: 'caja456', role: 'Cajero', name: 'María López' },
];

function login(username, password) {
  const user = USERS.find(u => u.username === username && u.password === password);
  if (user) {
    const session = { ...user, loginAt: Date.now() };
    delete session.password;
    localStorage.setItem(AUTH_KEY, JSON.stringify(session));
    return { success: true, user: session };
  }
  return { success: false, error: 'Usuario o contraseña incorrectos' };
}

function logout() {
  localStorage.removeItem(AUTH_KEY);
  window.location.href = 'login.html';
}

function getSession() {
  const raw = localStorage.getItem(AUTH_KEY);
  return raw ? JSON.parse(raw) : null;
}

function requireAuth() {
  const session = getSession();
  if (!session) {
    window.location.href = 'login.html';
    return null;
  }
  return session;
}

function isAdmin() {
  const s = getSession();
  return s && s.role === 'Administrador';
}

// Inject user info into sidebar
function populateSidebar() {
  const s = getSession();
  if (!s) return;
  const nameEl = document.getElementById('sidebar-user-name');
  const roleEl = document.getElementById('sidebar-user-role');
  const initEl = document.getElementById('sidebar-avatar-init');
  if (nameEl) nameEl.textContent = s.name;
  if (roleEl) roleEl.textContent = s.role;
  if (initEl) initEl.textContent = s.name.charAt(0).toUpperCase();
}

// Toast notifications
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container') || (() => {
    const c = document.createElement('div');
    c.id = 'toast-container';
    document.body.appendChild(c);
    return c;
  })();
  const icons = { success: '✅', error: '❌', info: 'ℹ️', warning: '⚠️' };
  const t = document.createElement('div');
  t.className = `toast toast-${type}`;
  t.innerHTML = `<span>${icons[type] || 'ℹ️'}</span><span>${message}</span>`;
  container.appendChild(t);
  setTimeout(() => t.remove(), 3200);
}

// Update clock
function startClock() {
  const el = document.getElementById('topbar-time');
  if (!el) return;
  const tick = () => {
    const now = new Date();
    el.textContent = now.toLocaleTimeString('es-CL', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };
  tick();
  setInterval(tick, 1000);
}

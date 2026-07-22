/* ============================================================
   OdontoCirúrgica — Bespoke Application Logic
   ============================================================ */

// ==================== DATA ====================
const products = [
    { id: 1, name: "Implante Cônico Titânio Grau V", category: "Implantes", desc: "Superfície SLA, conexão Morse. Alta previsibilidade estética.", fullDesc: "Implante cônico fabricado em titânio grau V (Ti-6Al-4V) com superfície tratada por duplo ataque ácido (SLA), garantindo rugosidade ideal para osseointegração em 6 a 8 semanas.", price: 289.90, oldPrice: 349.90, image: "assets/hero_implant.jpg", rating: 4.8, reviews: 234, isNew: false, discount: 17, anvisa: "80104530012", specs: { "Material": "Titânio Grau V", "Superfície": "SLA", "Conexão": "Morse" }, stock: 142 },
    { id: 2, name: "Motor Cirúrgico Digital 80N", category: "Motores", desc: "Torque regulável, display LED, irrigação interna.", fullDesc: "Motor cirúrgico de alta performance com controle digital de torque (5-80 Ncm), rotação ajustável de 15 a 40.000 RPM, display LED retroiluminado.", price: 4899.00, oldPrice: 5990.00, image: "assets/product_motor.jpg", rating: 4.9, reviews: 89, isNew: true, discount: 18, anvisa: "80104530045", specs: { "Torque": "5-80 Ncm", "Rotação": "40.000 RPM", "Irrigação": "Peristáltica" }, stock: 28 },
    { id: 3, name: "Kit de Sutura Cirúrgica", category: "Suturas", desc: "Fios absorvíveis e não-absorvíveis com instrumentais.", fullDesc: "Kit profissional com 24 fios de sutura, porta-agulha Castroviejo e tesoura Goldman-Fox.", price: 459.90, oldPrice: 549.90, image: "assets/product_suture.jpg", rating: 4.7, reviews: 176, isNew: false, discount: 16, anvisa: "80104530023", specs: { "Fios": "24 unidades", "Agulha": "3/8 cortante", "Estojo": "Aço Inox" }, stock: 67 },
    { id: 4, name: "Enxerto Ósseo Sintético 1g", category: "Biomateriais", desc: "Hidroxiapatita e beta-TCP biocompatível e osteocondutivo.", fullDesc: "Substituto ósseo sintético bifásico composto por Hidroxiapatita (60%) e Beta-Tricálcio Fosfato (40%).", price: 275.00, oldPrice: 330.00, image: "assets/product_biomaterial.jpg", rating: 4.7, reviews: 91, isNew: false, discount: 17, anvisa: "80104530089", specs: { "Composição": "HA 60% + β-TCP 40%", "Volume": "1g", "Porosidade": "60-80%" }, stock: 120 }
];

const categories = [
    { name: "Todos", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
    { name: "Implantes", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' },
    { name: "Motores", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' },
    { name: "Suturas", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12c-5.5 0-10-4.5-10-10S7.5 2 2 2c0 5.5 4.5 10 10 10s10 4.5 10 10c0-5.5-4.5-10-10-10z"/></svg>' },
    { name: "Biomateriais", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>' }
];

// ==================== STATE ====================
let cart = JSON.parse(localStorage.getItem("odonto_cart_bespoke")) || [];
let activeCategory = "Todos";

// ==================== DOM REFS ====================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        $("#page-loader").classList.add("hidden");
        document.body.classList.remove("locked");
        initAOS();
    }, 1500);
    document.body.classList.add("locked");

    initCursorGlow();
    initTheme();
    renderCategories();
    renderProducts();
    updateCartUI();
    setupEventListeners();
});

// ==================== UTILS ====================
const formatPrice = (val) => val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const saveCart = () => localStorage.setItem("odonto_cart_bespoke", JSON.stringify(cart));

// ==================== CURSOR & EFFECTS ====================
function initCursorGlow() {
    const cursor = $("#cursor-glow");
    if(!cursor) return;
    document.addEventListener("mousemove", (e) => {
        requestAnimationFrame(() => {
            cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
        });
    });
}

function initTheme() {
    const btn = $("#theme-toggle");
    let isDark = localStorage.getItem("theme") !== "light";
    const applyTheme = () => document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    applyTheme();
    btn.addEventListener("click", () => {
        isDark = !isDark;
        localStorage.setItem("theme", isDark ? "dark" : "light");
        applyTheme();
    });
}

function initAOS() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add("aos-animate");
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });

    $$("[data-aos]").forEach(el => observer.observe(el));
}

// ==================== RENDERERS ====================
function renderCategories() {
    $("#category-list").innerHTML = categories.map(c => `
        <button class="cat-btn ${c.name === activeCategory ? 'active' : ''}" data-cat="${c.name}">
            ${c.svg} ${c.name}
        </button>
    `).join("");

    $$(".cat-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            activeCategory = btn.dataset.cat;
            renderCategories();
            renderProducts();
        });
    });
}

function renderProducts() {
    let filtered = products;
    if (activeCategory !== "Todos") filtered = filtered.filter(p => p.category === activeCategory);

    $("#results-count").textContent = `${filtered.length} produto(s)`;

    if (filtered.length === 0) {
        $("#products-grid").style.display = "none";
        $("#no-results").style.display = "block";
        return;
    }

    $("#products-grid").style.display = "grid";
    $("#no-results").style.display = "none";

    $("#products-grid").innerHTML = filtered.map((p, i) => `
        <article class="product-card" onclick="openProductModal(${p.id})" data-aos style="--delay: ${i * 0.1}s">
            <div class="product-image-box">
                <img src="${p.image}" alt="${p.name}" class="product-img">
                <div class="product-badges">
                    ${p.discount ? `<span class="badge">-${p.discount}%</span>` : ''}
                    ${p.isNew ? `<span class="badge">Novo</span>` : ''}
                </div>
            </div>
            <div class="product-meta">
                <div>
                    <span class="product-category">${p.category}</span>
                    <h3 class="product-name">${p.name}</h3>
                </div>
                <div class="product-price">${formatPrice(p.price)}</div>
            </div>
        </article>
    `).join("");
    
    initAOS();
}

// ==================== MODALS ====================
window.openProductModal = (id) => {
    const p = products.find(prod => prod.id === id);
    if (!p) return;

    $("#product-modal-body").innerHTML = `
        <div class="detail-grid">
            <img src="${p.image}" class="detail-img">
            <div class="detail-info">
                <h2 class="detail-name">${p.name}</h2>
                <p class="detail-desc">${p.fullDesc}</p>
                <div class="detail-price">${formatPrice(p.price)}</div>
                <div class="detail-actions">
                    <button class="btn btn-primary" onclick="addToCart(${p.id}); closeModal('product-modal-overlay');">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    `;
    $("#product-modal-overlay").classList.add("open");
    document.body.classList.add("locked");
};

window.closeModal = (id) => {
    $(`#${id}`).classList.remove("open");
    document.body.classList.remove("locked");
};

// ==================== CART ====================
window.addToCart = (id) => {
    const p = products.find(prod => prod.id === id);
    const existing = cart.find(i => i.id === id);
    if (existing) existing.qty++;
    else cart.push({ id: p.id, name: p.name, price: p.price, image: p.image, qty: 1 });
    saveCart(); updateCartUI();
    $("#cart-sidebar").classList.add("open"); 
    $("#cart-overlay").classList.add("open");
};

window.updateQty = (id, delta) => {
    const item = cart.find(i => i.id === id);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) cart = cart.filter(i => i.id !== id);
    saveCart(); updateCartUI();
};

function updateCartUI() {
    const totalItems = cart.reduce((s, i) => s + i.qty, 0);
    const totalVal = cart.reduce((s, i) => s + (i.price * i.qty), 0);

    $("#cart-count").textContent = totalItems;
    if (totalItems > 0) $("#cart-count").classList.add("visible");
    else $("#cart-count").classList.remove("visible");

    if (cart.length === 0) {
        $("#cart-items").style.display = "none";
        $("#cart-footer").style.display = "none";
        $("#cart-empty").style.display = "flex";
    } else {
        $("#cart-items").style.display = "flex";
        $("#cart-footer").style.display = "block";
        $("#cart-empty").style.display = "none";

        $("#cart-items").innerHTML = cart.map(i => `
            <div class="cart-item">
                <img src="${i.image}" class="cart-item-img">
                <div class="cart-item-info" style="flex:1;">
                    <h4>${i.name}</h4>
                    <div style="color:var(--text-secondary);">${formatPrice(i.price)}</div>
                </div>
                <div style="display:flex; align-items:center; gap:8px;">
                    <button onclick="updateQty(${i.id}, -1)" style="color:var(--text-primary)">-</button>
                    <span>${i.qty}</span>
                    <button onclick="updateQty(${i.id}, 1)" style="color:var(--text-primary)">+</button>
                </div>
            </div>
        `).join("");

        $("#cart-total-value").textContent = formatPrice(totalVal);
    }
}

// ==================== EVENTS ====================
function setupEventListeners() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) $("#navbar").classList.add("scrolled");
        else $("#navbar").classList.remove("scrolled");
    });

    $("#cart-toggle").addEventListener("click", () => { $("#cart-sidebar").classList.add("open"); $("#cart-overlay").classList.add("open"); document.body.classList.add("locked"); });
    $("#cart-close").addEventListener("click", () => { $("#cart-sidebar").classList.remove("open"); closeModal("cart-overlay"); });
    $("#cart-overlay").addEventListener("click", () => { $("#cart-sidebar").classList.remove("open"); closeModal("cart-overlay"); });

    $("#checkout-btn").addEventListener("click", () => {
        closeModal("cart-overlay");
        $("#cart-sidebar").classList.remove("open");
        $("#checkout-modal-overlay").classList.add("open");
        document.body.classList.add("locked");
    });
    
    $("#checkout-form").addEventListener("submit", (e) => {
        e.preventDefault();
        closeModal("checkout-modal-overlay");
        cart = []; saveCart(); updateCartUI();
        $("#order-id").textContent = Math.floor(100000 + Math.random() * 900000);
        $("#success-modal-overlay").classList.add("open");
        document.body.classList.add("locked");
    });

    $("#modal-close-product").addEventListener("click", () => closeModal("product-modal-overlay"));
    $("#modal-close-checkout").addEventListener("click", () => closeModal("checkout-modal-overlay"));
    $("#success-close").addEventListener("click", () => closeModal("success-modal-overlay"));

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal("product-modal-overlay");
            closeModal("checkout-modal-overlay");
            closeModal("success-modal-overlay");
            $("#cart-sidebar").classList.remove("open");
            closeModal("cart-overlay");
        }
    });
}

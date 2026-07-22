/* ============================================================
   OdontoCirúrgica — Application Logic (Premium)
   ============================================================ */

// ==================== DATA ====================
const products = [
    { id: 1, name: "Implante Cônico Titânio Grau V", category: "Implantes", desc: "Superfície SLA, conexão Morse. Alta previsibilidade estética.", fullDesc: "Implante cônico fabricado em titânio grau V (Ti-6Al-4V) com superfície tratada por duplo ataque ácido (SLA), garantindo rugosidade ideal para osseointegração em 6 a 8 semanas.", price: 289.90, oldPrice: 349.90, icon: "🦷", rating: 4.8, reviews: 234, isNew: false, discount: 17, anvisa: "80104530012", specs: { "Material": "Titânio Grau V", "Superfície": "SLA", "Conexão": "Morse" }, stock: 142 },
    { id: 2, name: "Motor Cirúrgico Digital 80N", category: "Motores", desc: "Torque regulável, display LED, irrigação interna.", fullDesc: "Motor cirúrgico de alta performance com controle digital de torque (5-80 Ncm), rotação ajustável de 15 a 40.000 RPM, display LED retroiluminado.", price: 4899.00, oldPrice: 5990.00, icon: "⚙️", rating: 4.9, reviews: 89, isNew: true, discount: 18, anvisa: "80104530045", specs: { "Torque": "5-80 Ncm", "Rotação": "40.000 RPM", "Irrigação": "Peristáltica" }, stock: 28 },
    { id: 3, name: "Kit de Sutura Cirúrgica", category: "Suturas", desc: "Fios absorvíveis e não-absorvíveis com instrumentais.", fullDesc: "Kit profissional com 24 fios de sutura, porta-agulha Castroviejo e tesoura Goldman-Fox.", price: 459.90, oldPrice: 549.90, icon: "🧵", rating: 4.7, reviews: 176, isNew: false, discount: 16, anvisa: "80104530023", specs: { "Fios": "24 unidades", "Agulha": "3/8 cortante", "Estojo": "Aço Inox" }, stock: 67 },
    { id: 4, name: "Broca Cirúrgica Titânio - 8 Pçs", category: "Brocas", desc: "Kit sequencial de titânio nitretado com irrigação interna.", fullDesc: "Kit sequencial de 8 brocas de titânio nitretado com irrigação interna para perfuração óssea precisa.", price: 879.00, oldPrice: 1099.00, icon: "🔩", rating: 4.6, reviews: 143, isNew: false, discount: 20, anvisa: "80104530034", specs: { "Material": "Titânio Nitretado", "Irrigação": "Interna", "Compatibilidade": "20:1" }, stock: 53 },
    { id: 5, name: "Afastador Minnesota + Molt", category: "Instrumentais", desc: "Aço inox cirúrgico com acabamento satinado anti-reflexo.", fullDesc: "Kit com afastador de Minnesota e descolador Molt #9 em aço inox cirúrgico.", price: 189.90, oldPrice: 229.90, icon: "🔧", rating: 4.5, reviews: 312, isNew: false, discount: 17, anvisa: "80104530056", specs: { "Material": "Aço Inox AISI 420", "Acabamento": "Satinado", "Esterilização": "Autoclave" }, stock: 198 },
    { id: 6, name: "Membrana de Colágeno", category: "Biomateriais", desc: "Bovina tipo I/III reabsorvível para ROG e RTG.", fullDesc: "Membrana biológica de colágeno bovino purificado tipo I/III com estrutura bilamelar.", price: 345.00, oldPrice: 420.00, icon: "🧬", rating: 4.9, reviews: 67, isNew: true, discount: 18, anvisa: "80104530078", specs: { "Origem": "Colágeno Bovino", "Reabsorção": "12-24 semanas", "Indicação": "ROG e RTG" }, stock: 85 },
    { id: 7, name: "Enxerto Ósseo Sintético 1g", category: "Biomateriais", desc: "Hidroxiapatita e beta-TCP biocompatível e osteocondutivo.", fullDesc: "Substituto ósseo sintético bifásico composto por Hidroxiapatita (60%) e Beta-Tricálcio Fosfato (40%).", price: 275.00, oldPrice: 330.00, icon: "🦴", rating: 4.7, reviews: 91, isNew: false, discount: 17, anvisa: "80104530089", specs: { "Composição": "HA 60% + β-TCP 40%", "Volume": "1g", "Porosidade": "60-80%" }, stock: 120 },
    { id: 8, name: "Contra-Ângulo 20:1", category: "Motores", desc: "Alta precisão com irrigação interna e tratamento DLC.", fullDesc: "Contra-ângulo cirúrgico de alta precisão com redução 20:1 e irrigação externa/interna.", price: 2190.00, oldPrice: 2690.00, icon: "🔄", rating: 4.8, reviews: 58, isNew: false, discount: 19, anvisa: "80104530091", specs: { "Redução": "20:1", "Conexão": "Tipo E", "Tratamento": "DLC" }, stock: 34 },
    { id: 9, name: "Luva Cirúrgica Látex 50p", category: "EPIs", desc: "Estéril, anatômica e texturizada para melhor grip.", fullDesc: "Luvas cirúrgicas estéreis de látex natural com pó bioabsorvível. Formato anatômico.", price: 189.90, oldPrice: 219.90, icon: "🧤", rating: 4.4, reviews: 423, isNew: false, discount: 14, anvisa: "80104530102", specs: { "Material": "Látex Natural", "Tipo": "Estéril com pó", "Unidades": "50 pares" }, stock: 340 },
    { id: 10, name: "Campo Cirúrgico Fenestrado", category: "EPIs", desc: "TNT SMS estéril impermeável, pacote com 50 un.", fullDesc: "Campos cirúrgicos descartáveis de TNT (Tecido Não-Tecido) SMS tripla camada, estéreis.", price: 129.90, oldPrice: 159.90, icon: "🏥", rating: 4.6, reviews: 267, isNew: false, discount: 19, anvisa: "80104530115", specs: { "Material": "TNT SMS", "Fenestra": "Oval 8x12 cm", "Esterilização": "Óxido de Etileno" }, stock: 215 },
    { id: 11, name: "Fórceps Universal Nº 150", category: "Instrumentais", desc: "Extração segura e precisa de dentes superiores.", fullDesc: "Fórceps odontológico nº 150 (universal superior) fabricado em aço inox AISI 420 temperado.", price: 159.90, oldPrice: 199.90, icon: "🔧", rating: 4.7, reviews: 189, isNew: false, discount: 20, anvisa: "80104530128", specs: { "Material": "Aço Inox AISI 420", "Indicação": "Superiores", "Comprimento": "17.5 cm" }, stock: 155 },
    { id: 12, name: "Piezoelétrico Ultrassônico", category: "Motores", desc: "Osteotomia seletiva com modulação automática.", fullDesc: "Aparelho piezoelétrico ultrassônico de última geração para osteotomia micrométrica seletiva.", price: 7490.00, oldPrice: 8990.00, icon: "📡", rating: 5.0, reviews: 42, isNew: true, discount: 17, anvisa: "80104530139", specs: { "Frequência": "24-36 kHz", "Pontas": "6 intercambiáveis", "Corte": "Seletivo" }, stock: 12 }
];

const testimonials = [
    { author: "Dr. Ricardo Almeida", role: "Cirurgião Bucomaxilofacial", text: "Os motores e contra-ângulos da OdontoCirúrgica revolucionaram meu fluxo de trabalho. A precisão do torque é excepcional, garantindo segurança total.", rating: 5 },
    { author: "Dra. Camila Santos", role: "Implantodontista", text: "Os implantes de titânio grau V são fantásticos. A osseointegração é rápida e a qualidade dos instrumentais facilita muito as cirurgias.", rating: 5 },
    { author: "Dr. Fernando Costa", role: "Periodontista", text: "A qualidade das membranas e enxertos ósseos é inquestionável. Entrega super rápida e atendimento impecável sempre que preciso.", rating: 4.5 }
];

const categories = [
    { name: "Todos", icon: "🏪" },
    { name: "Implantes", icon: "🦷" },
    { name: "Motores", icon: "⚙️" },
    { name: "Suturas", icon: "🧵" },
    { name: "Brocas", icon: "🔩" },
    { name: "Instrumentais", icon: "🔧" },
    { name: "Biomateriais", icon: "🧬" },
    { name: "EPIs", icon: "🧤" }
];

// ==================== STATE ====================
let cart = JSON.parse(localStorage.getItem("odonto_cart_v2")) || [];
let activeCategory = "Todos";
let searchQuery = "";

// ==================== DOM REFS ====================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ==================== INITIALIZATION ====================
document.addEventListener("DOMContentLoaded", () => {
    // Hide Loader
    setTimeout(() => {
        $("#page-loader").classList.add("hidden");
        document.body.classList.remove("locked");
        initAnimations();
    }, 1500);
    document.body.classList.add("locked");

    initCursorGlow();
    initTheme();
    renderCategories();
    renderProducts();
    renderTestimonials();
    updateCartUI();
    setupEventListeners();
});

// ==================== UTILS ====================
const formatPrice = (val) => val.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const getStars = (r) => "★".repeat(Math.floor(r)) + (r % 1 >= 0.5 ? "★" : "") + "☆".repeat(5 - Math.ceil(r));
const saveCart = () => localStorage.setItem("odonto_cart_v2", JSON.stringify(cart));

function showToast(msg, type = "info") {
    const toast = document.createElement("div");
    toast.className = `toast toast-${type}`;
    toast.innerHTML = `<span class="toast-icon">${type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}</span> <span>${msg}</span>`;
    $("#toast-container").appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
}

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
    const applyTheme = () => {
        document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
        btn.innerHTML = isDark 
            ? `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
            : `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    };
    applyTheme();
    btn.addEventListener("click", () => {
        isDark = !isDark;
        localStorage.setItem("theme", isDark ? "dark" : "light");
        applyTheme();
    });
}

function initAnimations() {
    // Scroll reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.style.opacity = "1";
                e.target.style.transform = "translateY(0)";
                observer.unobserve(e.target);
            }
        });
    }, { threshold: 0.1 });

    $$("[data-aos]").forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
        el.style.transition = "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)";
        observer.observe(el);
    });

    // Number counters
    $$(".counter").forEach(counter => {
        const target = parseInt(counter.dataset.target);
        const duration = 2000;
        let start = null;
        const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            counter.innerText = Math.floor(progress * target);
            if (progress < 1) window.requestAnimationFrame(step);
            else counter.innerText = target;
        };
        window.requestAnimationFrame(step);
    });
}

// ==================== RENDERERS ====================
function renderCategories() {
    $("#category-grid").innerHTML = categories.map(c => `
        <div class="category-card ${c.name === activeCategory ? 'active' : ''}" data-cat="${c.name}">
            <div class="category-icon">${c.icon}</div>
            <span class="category-name">${c.name}</span>
            <span class="category-count">${c.name === "Todos" ? products.length : products.filter(p => p.category === c.name).length} itens</span>
        </div>
    `).join("");

    $$(".category-card").forEach(c => {
        c.addEventListener("click", () => {
            activeCategory = c.dataset.cat;
            renderCategories();
            renderProducts();
            $("#catalogo").scrollIntoView({ behavior: "smooth" });
        });
    });
}

function renderProducts() {
    let filtered = products;
    if (activeCategory !== "Todos") filtered = filtered.filter(p => p.category === activeCategory);
    if (searchQuery) {
        const q = searchQuery.toLowerCase();
        filtered = filtered.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));
    }

    $("#results-count").textContent = `Exibindo ${filtered.length} produto(s)`;
    if (activeCategory !== "Todos") {
        $("#active-filter").style.display = "inline-flex";
        $("#filter-label").textContent = activeCategory;
    } else {
        $("#active-filter").style.display = "none";
    }

    if (filtered.length === 0) {
        $("#products-grid").style.display = "none";
        $("#no-results").style.display = "block";
        return;
    }

    $("#products-grid").style.display = "grid";
    $("#no-results").style.display = "none";

    $("#products-grid").innerHTML = filtered.map(p => `
        <article class="product-card">
            <div class="product-image">
                <span class="product-image-placeholder">${p.icon}</span>
                <div class="product-badges">
                    ${p.discount ? `<span class="badge badge-discount">-${p.discount}%</span>` : ''}
                    ${p.isNew ? `<span class="badge badge-new">NOVO</span>` : ''}
                    <span class="badge badge-anvisa">ANVISA</span>
                </div>
            </div>
            <div class="product-info">
                <span class="product-category-tag">${p.category}</span>
                <h3 class="product-name">${p.name}</h3>
                <p class="product-desc">${p.desc}</p>
                <div class="product-rating">
                    <span class="stars">${getStars(p.rating)}</span>
                    <span class="rating-count">(${p.reviews})</span>
                </div>
                <div class="product-price-row">
                    <div>
                        ${p.oldPrice ? `<div class="price-old">${formatPrice(p.oldPrice)}</div>` : ''}
                        <div class="price-current">${formatPrice(p.price)}</div>
                    </div>
                </div>
                <div class="product-actions">
                    <button class="btn btn-detail" onclick="openProductModal(${p.id})">Detalhes</button>
                    <button class="btn btn-cart-add" onclick="addToCart(${p.id})" aria-label="Adicionar">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    </button>
                </div>
            </div>
        </article>
    `).join("");
}

function renderTestimonials() {
    $("#testimonials-grid").innerHTML = testimonials.map(t => `
        <div class="testimonial-card" data-aos>
            <div class="quote-icon">"</div>
            <div class="testimonial-stars">${getStars(t.rating)}</div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
                <div class="author-avatar">${t.author.charAt(0)}</div>
                <div class="author-info">
                    <h4>${t.author}</h4>
                    <span>${t.role}</span>
                </div>
            </div>
        </div>
    `).join("");
}

// ==================== MODALS ====================
window.openProductModal = (id) => {
    const p = products.find(prod => prod.id === id);
    if (!p) return;

    $("#product-modal-body").innerHTML = `
        <div class="detail-grid">
            <div class="detail-image-wrap">
                <span class="detail-icon">${p.icon}</span>
            </div>
            <div class="detail-info">
                <span class="detail-category">${p.category}</span>
                <h2 class="detail-name">${p.name}</h2>
                <div class="detail-rating">
                    <span class="stars">${getStars(p.rating)}</span>
                    <span class="rating-count">(${p.reviews} avaliações) | ANVISA: ${p.anvisa}</span>
                </div>
                <div class="detail-prices">
                    ${p.oldPrice ? `<span class="price-old">${formatPrice(p.oldPrice)}</span>` : ''}
                    <span class="detail-price-current">${formatPrice(p.price)}</span>
                    <span class="detail-pix">💚 ${formatPrice(p.price * 0.95)} no PIX (5% off)</span>
                </div>
                <p class="detail-desc">${p.fullDesc}</p>
                <div class="detail-specs">
                    ${Object.entries(p.specs).map(([k,v]) => `
                        <div class="spec-item"><span class="spec-label">${k}</span><span class="spec-value">${v}</span></div>
                    `).join("")}
                </div>
                <div class="detail-actions">
                    <button class="btn btn-glass" onclick="closeModal('product-modal-overlay')">Voltar</button>
                    <button class="btn btn-primary btn-glow" onclick="addToCart(${p.id}); closeModal('product-modal-overlay');">
                        <span>Adicionar ao Carrinho</span>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                    </button>
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
    else cart.push({ id: p.id, name: p.name, price: p.price, icon: p.icon, qty: 1 });
    saveCart(); updateCartUI(); showToast(`Adicionado: ${p.name}`, "success");
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
                <div class="cart-item-icon">${i.icon}</div>
                <div>
                    <h4 class="cart-item-name">${i.name}</h4>
                    <div style="color:var(--brand-green-light); font-weight:700;">${formatPrice(i.price)}</div>
                </div>
                <div style="display:flex; flex-direction:column; align-items:center; gap:8px;">
                    <button class="qty-btn" onclick="updateQty(${i.id}, 1)">+</button>
                    <span style="font-weight:700;">${i.qty}</span>
                    <button class="qty-btn" onclick="updateQty(${i.id}, -1)">-</button>
                </div>
            </div>
        `).join("");

        $("#cart-total-value").textContent = formatPrice(totalVal);
        $("#cart-frete-msg").textContent = totalVal >= 500 ? "Frete Expresso GRÁTIS!" : `Faltam ${formatPrice(500 - totalVal)} para Frete Grátis`;
    }
}

// ==================== CHECKOUT ====================
function openCheckout() {
    if (cart.length === 0) return showToast("Seu carrinho está vazio.", "error");
    closeModal("cart-overlay");
    $("#cart-sidebar").classList.remove("open");
    
    const subtotal = cart.reduce((s, i) => s + (i.price * i.qty), 0);
    const frete = subtotal >= 500 ? 0 : 39.90;
    
    $("#checkout-summary").innerHTML = `
        <div style="display:flex;justify-content:space-between;margin-bottom:8px;color:var(--text-secondary)"><span>Subtotal:</span><span>${formatPrice(subtotal)}</span></div>
        <div style="display:flex;justify-content:space-between;margin-bottom:16px;color:var(--text-secondary)"><span>Frete Expresso:</span><span style="color:${frete === 0 ? 'var(--brand-green-light)' : 'inherit'}">${frete === 0 ? 'Grátis' : formatPrice(frete)}</span></div>
        <div style="display:flex;justify-content:space-between;padding-top:16px;border-top:1px solid var(--border-light);font-weight:700;font-size:1.2rem;color:var(--brand-cyan-light)"><span>Total a Pagar:</span><span>${formatPrice(subtotal + frete)}</span></div>
    `;

    $("#checkout-modal-overlay").classList.add("open");
    document.body.classList.add("locked");
}

$("#checkout-form").addEventListener("submit", (e) => {
    e.preventDefault();
    closeModal("checkout-modal-overlay");
    cart = []; saveCart(); updateCartUI();
    
    const orderId = Math.floor(100000 + Math.random() * 900000);
    $("#order-id").textContent = orderId;
    
    $("#success-modal-overlay").classList.add("open");
    document.body.classList.add("locked");
});

// ==================== EVENTS ====================
function setupEventListeners() {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) $("#navbar").classList.add("scrolled");
        else $("#navbar").classList.remove("scrolled");

        if (window.scrollY > 500) $("#back-to-top").classList.add("visible");
        else $("#back-to-top").classList.remove("visible");
    });

    $("#search-input").addEventListener("input", (e) => { searchQuery = e.target.value; renderProducts(); });
    $("#clear-filter").addEventListener("click", () => { activeCategory = "Todos"; renderCategories(); renderProducts(); });

    $("#cart-toggle").addEventListener("click", () => { $("#cart-sidebar").classList.add("open"); $("#cart-overlay").classList.add("open"); document.body.classList.add("locked"); });
    $("#cart-close").addEventListener("click", () => { $("#cart-sidebar").classList.remove("open"); closeModal("cart-overlay"); });
    $("#cart-overlay").addEventListener("click", () => { $("#cart-sidebar").classList.remove("open"); closeModal("cart-overlay"); });

    $("#checkout-btn").addEventListener("click", openCheckout);
    $("#modal-close-product").addEventListener("click", () => closeModal("product-modal-overlay"));
    $("#modal-close-checkout").addEventListener("click", () => closeModal("checkout-modal-overlay"));
    $("#success-close").addEventListener("click", () => closeModal("success-modal-overlay"));

    $("#back-to-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    $("#nl-form").addEventListener("submit", (e) => {
        e.preventDefault();
        showToast("Inscrição realizada com sucesso! Verifique seu e-mail.", "success");
        e.target.reset();
    });

    // Handle ESC key for modals
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal("product-modal-overlay");
            closeModal("checkout-modal-overlay");
            closeModal("success-modal-overlay");
            $("#cart-sidebar").classList.remove("open");
            closeModal("cart-overlay");
        }
        if (e.key === "k" && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            $("#search-input").focus();
        }
    });

    // Close modals on overlay click
    $$(".modal-overlay").forEach(overlay => {
        overlay.addEventListener("click", (e) => {
            if (e.target === overlay) closeModal(overlay.id);
        });
    });
}

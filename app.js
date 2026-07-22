/* ============================================================
   OdontoCirúrgica — Complete Bespoke Application Logic
   With Wishlist, Sorting, FAQ Accordion & Shipping Calc
   ============================================================ */

const products = [
    { id: 1, name: "Implante Cônico Titânio Grau V", category: "Implantes", desc: "Superfície SLA, conexão Morse. Alta previsibilidade estética.", fullDesc: "Implante cônico fabricado em titânio grau V (Ti-6Al-4V) com superfície tratada por duplo ataque ácido (SLA), garantindo rugosidade ideal para osseointegração em 6 a 8 semanas.", price: 289.90, oldPrice: 349.90, image: "assets/hero_implant.jpg", rating: 4.8, reviews: 234, isNew: false, discount: 17, anvisa: "80104530012", specs: { "Material": "Titânio Grau V", "Superfície": "SLA", "Conexão": "Morse" } },
    { id: 2, name: "Motor Cirúrgico Digital 80N", category: "Motores", desc: "Torque regulável, display LED, irrigação interna.", fullDesc: "Motor cirúrgico de alta performance com controle digital de torque (5-80 Ncm), rotação ajustável de 15 a 40.000 RPM, display LED retroiluminado e sistema de irrigação peristáltica integrado.", price: 4899.00, oldPrice: 5990.00, image: "assets/product_motor.jpg", rating: 4.9, reviews: 89, isNew: true, discount: 18, anvisa: "80104530045", specs: { "Torque": "5-80 Ncm", "Rotação": "40.000 RPM", "Irrigação": "Peristáltica" } },
    { id: 3, name: "Kit de Sutura Cirúrgica", category: "Suturas", desc: "Fios absorvíveis e não absorvíveis com instrumentais.", fullDesc: "Kit profissional com 24 fios de sutura em diversas espessuras, porta-agulha Castroviejo e tesoura Goldman-Fox em estojo de aço inox autoclavável.", price: 459.90, oldPrice: 549.90, image: "assets/product_suture.jpg", rating: 4.7, reviews: 176, isNew: false, discount: 16, anvisa: "80104530023", specs: { "Fios": "24 unidades", "Agulha": "3/8 cortante", "Estojo": "Aço Inox" } },
    { id: 4, name: "Enxerto Ósseo Sintético 1g", category: "Biomateriais", desc: "Hidroxiapatita e beta-TCP biocompatível e osteocondutivo.", fullDesc: "Substituto ósseo sintético bifásico composto por Hidroxiapatita (60%) e Beta-Tricálcio Fosfato (40%), com porosidade controlada para neoformação óssea acelerada.", price: 275.00, oldPrice: 330.00, image: "assets/product_biomaterial.jpg", rating: 4.7, reviews: 91, isNew: false, discount: 17, anvisa: "80104530089", specs: { "Composição": "HA 60% + β-TCP 40%", "Volume": "1g", "Porosidade": "60-80%" } },
    { id: 5, name: "Broca Cirúrgica Titânio — Kit 8 Pçs", category: "Brocas", desc: "Kit sequencial de titânio nitretado com irrigação interna.", fullDesc: "Kit sequencial de 8 brocas de titânio nitretado com irrigação interna, compatível com contra-ângulos 20:1. Tratamento de superfície DLC para maior durabilidade.", price: 879.00, oldPrice: 1099.00, image: "assets/product_drills.jpg", rating: 4.6, reviews: 143, isNew: false, discount: 20, anvisa: "80104530034", specs: { "Material": "Titânio Nitretado", "Irrigação": "Interna", "Compatibilidade": "20:1" } },
    { id: 6, name: "Fórceps Universal Nº 150", category: "Instrumentais", desc: "Aço inox AISI 420 para extração de dentes superiores.", fullDesc: "Fórceps odontológico nº 150 (universal superior) fabricado em aço inox AISI 420 temperado com acabamento satinado anti-reflexo. Ergonomia anatômica para máximo controle.", price: 159.90, oldPrice: 199.90, image: "assets/product_forceps.jpg", rating: 4.7, reviews: 189, isNew: false, discount: 20, anvisa: "80104530128", specs: { "Material": "Aço Inox AISI 420", "Indicação": "Superiores", "Comprimento": "17.5 cm" } },
    { id: 7, name: "Piezoelétrico Ultrassônico Piezotome", category: "Motores", desc: "Corte ósseo micrométrico seletivo sem lesão de tecidos moles.", fullDesc: "Sistema ultrassônico piezoelétrico de alta precisão para cirurgias ósseas delicadas, levantamento de seio maxilar e osteotomias com preservação de tecidos moles.", price: 8490.00, oldPrice: 9990.00, image: "assets/product_piezo.jpg", rating: 5.0, reviews: 48, isNew: true, discount: 15, anvisa: "80104530190", specs: { "Frequência": "24 - 36 kHz", "Display": "Touchscreen 7\"", "Pontas": "6 Inclusas" } },
    { id: 8, name: "Foco Cirúrgico LED Dual Lens", category: "Instrumentais", desc: "Iluminação de estéril sem sombras com controle de temperatura de cor.", fullDesc: "Luminária de foco cirúrgico de teto com ópticas duplas de LED de altíssima intensidade (120.000 Lux), índice de reprodução de cor CRI > 96 e regulação de campo iluminado.", price: 6290.00, oldPrice: 7490.00, image: "assets/product_lights.jpg", rating: 4.9, reviews: 62, isNew: true, discount: 16, anvisa: "80104530210", specs: { "Intensidade": "120.000 Lux", "CRI": "> 96", "Vida Útil": "50.000 horas" } }
];

const categories = [
    { name: "Todos", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>' },
    { name: "Implantes", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>' },
    { name: "Motores", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>' },
    { name: "Suturas", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12c-5.5 0-10-4.5-10-10S7.5 2 2 2c0 5.5 4.5 10 10 10s10 4.5 10 10c0-5.5-4.5-10-10-10z"/></svg>' },
    { name: "Biomateriais", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>' },
    { name: "Brocas", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>' },
    { name: "Instrumentais", svg: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>' }
];

const testimonials = [
    { author: "Dr. Ricardo Almeida", role: "Cirurgião Bucomaxilofacial", text: "Os motores e contra-ângulos da OdontoCirúrgica revolucionaram meu fluxo de trabalho. A precisão do torque é excepcional.", rating: 5 },
    { author: "Dra. Camila Santos", role: "Implantodontista", text: "Os implantes de titânio grau V são fantásticos. A osseointegração é rápida e a qualidade dos instrumentais facilita muito as cirurgias.", rating: 5 },
    { author: "Dr. Fernando Costa", role: "Periodontista", text: "A qualidade das membranas e enxertos ósseos é inquestionável. Entrega super rápida e atendimento impecável.", rating: 5 }
];

// ==================== STATE ====================
let cart = JSON.parse(localStorage.getItem("odonto_cart_v3")) || [];
let activeCategory = "Todos";
let searchTerm = "";
let sortBy = "relevant";

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ==================== INIT ====================
document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("locked");
    setTimeout(() => {
        $("#page-loader").classList.add("hidden");
        document.body.classList.remove("locked");
        initAOS();
    }, 1200);

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
const saveCart = () => localStorage.setItem("odonto_cart_v3", JSON.stringify(cart));
const normalizeText = (v) => v.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

function showToast(msg) {
    const t = document.createElement("div");
    t.className = "toast toast-success";
    t.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:18px;height:18px;flex-shrink:0"><polyline points="20 6 9 17 4 12"/></svg><span>${msg}</span>`;
    $("#toast-container").appendChild(t);
    setTimeout(() => { t.style.opacity = "0"; setTimeout(() => t.remove(), 300); }, 3000);
}

// ==================== EFFECTS ====================
function initCursorGlow() {
    const c = $("#cursor-glow");
    if (!c) return;
    document.addEventListener("mousemove", (e) => {
        requestAnimationFrame(() => { c.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`; });
    });
}

function initTheme() {
    const btn = $("#theme-toggle");
    let isDark = localStorage.getItem("theme") !== "light";
    const apply = () => document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    apply();
    btn.addEventListener("click", () => { isDark = !isDark; localStorage.setItem("theme", isDark ? "dark" : "light"); apply(); });
}

function initAOS() {
    const obs = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("aos-animate"); obs.unobserve(e.target); } });
    }, { threshold: 0.1 });
    $$("[data-aos]:not(.aos-animate)").forEach(el => obs.observe(el));
}

// ==================== RENDERERS ====================
function renderCategories() {
    $("#category-list").innerHTML = categories.map(c => `
        <button class="cat-btn ${c.name === activeCategory ? 'active' : ''}" data-cat="${c.name}">${c.svg} ${c.name}</button>
    `).join("");
    $$(".cat-btn").forEach(b => b.addEventListener("click", () => { activeCategory = b.dataset.cat; renderCategories(); renderProducts(); }));
}

function renderProducts() {
    let filtered = products;
    if (activeCategory !== "Todos") filtered = filtered.filter(p => p.category === activeCategory);
    if (searchTerm) { const q = normalizeText(searchTerm); filtered = filtered.filter(p => normalizeText(`${p.name} ${p.category} ${p.desc}`).includes(q)); }

    // Sorting
    if (sortBy === "price-asc") filtered.sort((a, b) => a.price - b.price);
    else if (sortBy === "price-desc") filtered.sort((a, b) => b.price - a.price);
    else if (sortBy === "rating") filtered.sort((a, b) => b.rating - a.rating);

    $("#results-count").textContent = `${filtered.length} ${filtered.length === 1 ? "produto" : "produtos"}`;
    $("#active-filter").style.display = activeCategory === "Todos" ? "none" : "flex";
    $("#filter-label").textContent = activeCategory;

    if (!filtered.length) { $("#products-grid").style.display = "none"; $("#no-results").style.display = "block"; return; }
    $("#products-grid").style.display = "grid"; $("#no-results").style.display = "none";

    $("#products-grid").innerHTML = filtered.map((p, i) => `
        <article class="product-card" onclick="openProductModal(${p.id})" data-aos style="transition-delay:${i * 0.06}s">
            <div class="product-image-box">
                <img src="${p.image}" alt="${p.name}" class="product-img" loading="lazy">
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

function renderTestimonials() {
    const getStars = (r) => "★".repeat(r);
    $("#testimonials-grid").innerHTML = testimonials.map(t => `
        <div class="testimonial-card" data-aos>
            <div class="testimonial-quote">"</div>
            <div class="testimonial-stars">${getStars(t.rating)}</div>
            <p class="testimonial-text">"${t.text}"</p>
            <div class="testimonial-author">
                <div class="author-avatar">${t.author.split(" ").map(w => w[0]).slice(0,2).join("")}</div>
                <div><div class="author-name">${t.author}</div><div class="author-role">${t.role}</div></div>
            </div>
        </div>
    `).join("");
}



// ==================== MODALS & SHIPPING ====================
window.openProductModal = (id) => {
    const p = products.find(x => x.id === id);
    if (!p) return;
    const specsHtml = p.specs ? Object.entries(p.specs).map(([k, v]) => `<div style="display:flex;justify-content:space-between;padding:8px 0;border-bottom:1px solid var(--border-light);font-size:0.9rem"><span style="color:var(--text-muted)">${k}</span><span style="font-weight:500">${v}</span></div>`).join("") : "";

    $("#product-modal-body").innerHTML = `
        <div class="detail-grid">
            <img src="${p.image}" class="detail-img" alt="${p.name}">
            <div class="detail-info">
                <span style="font-size:0.75rem;color:var(--brand-cyan);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:12px;display:block">${p.category} · ANVISA ${p.anvisa}</span>
                <h2 class="detail-name">${p.name}</h2>
                <p class="detail-desc">${p.fullDesc}</p>
                ${specsHtml ? `<div style="margin-bottom:24px">${specsHtml}</div>` : ''}

                <div class="shipping-calc">
                    <div class="shipping-calc-title">Simular Frete e Prazo</div>
                    <div class="shipping-input-group">
                        <input type="text" id="shipping-cep" placeholder="Digite seu CEP (ex: 01001-000)" maxlength="9">
                        <button class="btn btn-outline" style="padding:8px 16px;font-size:0.75rem" onclick="calcShipping()">Calcular</button>
                    </div>
                    <div id="shipping-result" class="shipping-result">✓ SEDEX Cirúrgico: Grátis (Chega amanhã até 12h)</div>
                </div>

                ${p.oldPrice ? `<div style="color:var(--text-muted);text-decoration:line-through;font-size:0.9rem;margin-bottom:4px">${formatPrice(p.oldPrice)}</div>` : ''}
                <div class="detail-price">${formatPrice(p.price)}</div>
                <div style="color:var(--brand-cyan);font-size:0.85rem;margin-bottom:32px">PIX: ${formatPrice(p.price * 0.95)} (5% off)</div>
                <div class="detail-actions">
                    <button class="btn btn-primary" onclick="addToCart(${p.id}); closeModal('product-modal-overlay');">Adicionar ao Carrinho</button>
                </div>
            </div>
        </div>
    `;
    $("#product-modal-overlay").classList.add("open");
    document.body.classList.add("locked");
};

window.calcShipping = () => {
    const input = $("#shipping-cep");
    if (!input || !input.value.trim()) return;
    const res = $("#shipping-result");
    if (res) res.style.display = "block";
};

window.closeModal = (id) => { $(`#${id}`).classList.remove("open"); document.body.classList.remove("locked"); };

// ==================== CART ====================
window.addToCart = (id) => {
    const p = products.find(x => x.id === id);
    const e = cart.find(i => i.id === id);
    if (e) e.qty++; else cart.push({ id: p.id, name: p.name, price: p.price, image: p.image, qty: 1 });
    saveCart(); updateCartUI(); showToast(`Adicionado: ${p.name}`);
    $("#cart-sidebar").classList.add("open"); $("#cart-overlay").classList.add("open"); document.body.classList.add("locked");
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
    $("#cart-count").classList.toggle("visible", totalItems > 0);

    if (!cart.length) {
        $("#cart-items").style.display = "none"; $("#cart-footer").style.display = "none"; $("#cart-empty").style.display = "flex";
    } else {
        $("#cart-items").style.display = "flex"; $("#cart-footer").style.display = "block"; $("#cart-empty").style.display = "none";
        $("#cart-items").innerHTML = cart.map(i => `
            <div class="cart-item">
                <img src="${i.image}" class="cart-item-img" alt="${i.name}">
                <div class="cart-item-info" style="flex:1">
                    <h4>${i.name}</h4>
                    <div style="color:var(--text-secondary);font-size:0.85rem">${formatPrice(i.price)}</div>
                </div>
                <div style="display:flex;align-items:center;gap:10px;font-size:0.9rem">
                    <button onclick="updateQty(${i.id},-1)" style="color:var(--text-primary);font-size:1.1rem">−</button>
                    <span style="font-weight:600;min-width:20px;text-align:center">${i.qty}</span>
                    <button onclick="updateQty(${i.id},1)" style="color:var(--text-primary);font-size:1.1rem">+</button>
                </div>
            </div>
        `).join("");
        $("#cart-total-value").textContent = formatPrice(totalVal);
        $("#cart-frete-msg").textContent = totalVal >= 500 ? "✓ Frete Expresso Grátis para este pedido" : `Faltam ${formatPrice(500 - totalVal)} para frete grátis`;
    }
}

function updateCheckoutSummary() {
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const payment = document.querySelector('input[name="payment"]:checked')?.value || "pix";
    const discount = payment === "pix" ? subtotal * 0.05 : 0;
    const total = subtotal - discount;
    $("#checkout-summary").innerHTML = `
        <div class="summary-row"><span>Subtotal (${cart.reduce((s, i) => s + i.qty, 0)} itens)</span><strong>${formatPrice(subtotal)}</strong></div>
        ${discount ? `<div class="summary-row summary-discount"><span>Desconto PIX (5%)</span><strong>− ${formatPrice(discount)}</strong></div>` : ""}
        <div class="summary-row summary-total"><span>Total</span><strong>${formatPrice(total)}</strong></div>
    `;
}

// ==================== EVENTS ====================
function setupEventListeners() {
    window.addEventListener("scroll", () => {
        $("#navbar").classList.toggle("scrolled", window.scrollY > 50);
        $("#back-to-top").classList.toggle("visible", window.scrollY > 600);
    });

    $("#search-input").addEventListener("input", (e) => { searchTerm = e.target.value.trim(); renderProducts(); });
    $("#clear-filter").addEventListener("click", () => { activeCategory = "Todos"; renderCategories(); renderProducts(); });

    $("#sort-select").addEventListener("change", (e) => {
        sortBy = e.target.value;
        renderProducts();
    });



    // Cart events
    $("#cart-toggle").addEventListener("click", () => { $("#cart-sidebar").classList.add("open"); $("#cart-overlay").classList.add("open"); document.body.classList.add("locked"); });
    $("#cart-close").addEventListener("click", () => { $("#cart-sidebar").classList.remove("open"); closeModal("cart-overlay"); });
    $("#cart-overlay").addEventListener("click", () => { $("#cart-sidebar").classList.remove("open"); closeModal("cart-overlay"); });

    // FAQ Accordion events
    $$(".faq-question").forEach(q => {
        q.addEventListener("click", () => {
            const item = q.parentElement;
            const isOpen = item.classList.contains("active");
            $$(".faq-item").forEach(i => i.classList.remove("active"));
            if (!isOpen) item.classList.add("active");
        });
    });

    $("#checkout-btn").addEventListener("click", () => {
        if (!cart.length) return;
        closeModal("cart-overlay"); $("#cart-sidebar").classList.remove("open");
        updateCheckoutSummary();
        $("#checkout-modal-overlay").classList.add("open"); document.body.classList.add("locked");
    });

    $$('input[name="payment"]').forEach(input => input.addEventListener("change", updateCheckoutSummary));

    $("#checkout-form").addEventListener("submit", (e) => {
        e.preventDefault();
        closeModal("checkout-modal-overlay");
        cart = []; saveCart(); updateCartUI();
        $("#order-id").textContent = Math.floor(100000 + Math.random() * 900000);
        $("#success-modal-overlay").classList.add("open"); document.body.classList.add("locked");
    });

    $("#modal-close-product").addEventListener("click", () => closeModal("product-modal-overlay"));
    $("#modal-close-checkout").addEventListener("click", () => closeModal("checkout-modal-overlay"));
    $("#success-close").addEventListener("click", () => closeModal("success-modal-overlay"));

    $("#back-to-top").addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

    $("#nl-form").addEventListener("submit", (e) => { e.preventDefault(); showToast("Inscrição realizada com sucesso!"); e.target.reset(); });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            closeModal("product-modal-overlay"); closeModal("checkout-modal-overlay"); closeModal("success-modal-overlay");
            $("#cart-sidebar").classList.remove("open");
            closeModal("cart-overlay");
        }
    });

    $$(".modal-overlay").forEach(o => o.addEventListener("click", (e) => { if (e.target === o) closeModal(o.id); }));
}

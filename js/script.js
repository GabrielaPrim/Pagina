// BASE DE DATOS DE PRODUCTOS
const productos = [
        {
            id: 1,
            nombre: "Panel Solar Sunpal BiMAX5N 440W TOPCON",
            precio: 125.00,
            imagen: "./imagenes/Panel Solar Sunpal BiMAX5N 440W TOPCON.jpg",
            descripcion: "Panel solar bifacial ultra negro tipo N, tecnología TOPCON, doble vidrio para máxima eficiencia.",
            caracteristicas: [
                "Potencia: 410-440W",
                "Tipo: Bifacial TOPCON",
                "Tecnología: BiMAX5N - Media Celda",
                "Doble vidrio ultra negro",
                "Alta eficiencia en condiciones difíciles"
            ],
            categoria: "paneles"
        },
        {
            id: 2,
            nombre: "Panel Solar Sunpal SP200M-39 200W",
            precio: 0.00,
            imagen: "./imagenes/Panel Solar Sunpal SP200M-39 200W.jpg",
            descripcion: "Panel solar de media celda para instalaciones compactas y sistemas pequeños.",
            caracteristicas: [
                "Potencia: 200W",
                "Tecnología: Media Celda",
                "Ideal para espacios reducidos",
                "Alta eficiencia",
                "Fácil instalación"
            ],
            categoria: "paneles"
        },
        {
            id: 3,
            nombre: "Inversor Onda Sinusoidal Sunpal 1000W",
            precio: 0.00,
            imagen: "./imagenes/Inversor Onda Sinusoidal Sunpal 1000W.jpg",
            descripcion: "Inversor de onda sinusoidal pura de 1000W, ideal para aplicaciones básicas.",
            caracteristicas: [
                "Potencia: 1000W",
                "Pico: 2000W",
                "Voltaje: 12V",
                "Salida: 220V",
                "Onda sinusoidal pura"
            ],
            categoria: "convertidores"
        },
        {
            id: 4,
            nombre: "Inversor Onda Sinusoidal Sunpal 2000W",
            precio: 0.00,
            imagen: "./imagenes/Inversor Onda Sinusoidal Sunpal 2000W.jpg",
            descripcion: "Inversor de mayor capacidad para aplicaciones más exigentes.",
            caracteristicas: [
                "Potencia: 2000W",
                "Pico: 4000W",
                "Voltaje: 12V/24V",
                "Salida: 220V",
                "Onda sinusoidal pura"
            ],
            categoria: "convertidores"
        },
        {
            id: 5,
            nombre: "Controlador Carga MPPT Sunpal 40A",
            precio: 0.00,
            imagen: "./imagenes/Controlador Carga MPPT Sunpal 40A.jpg",
            descripcion: "Controlador de carga solar MPPT de 40A para maximizar la energía de los paneles.",
            caracteristicas: [
                "Corriente: 40A",
                "Tecnología: MPPT",
                "Max. potencia solar: 400W-800W",
                "Voltaje batería: 12V/24V",
                "Alta eficiencia de carga"
            ],
            categoria: "convertidores"
        },
        {
            id: 6,
            nombre: "Controlador Carga MPPT Sunpal 60A",
            precio: 0.00,
            imagen: "./imagenes/Controlador Carga MPPT Sunpal 60A.jpg",
            descripcion: "Controlador de carga MPPT de mayor capacidad para sistemas más grandes.",
            caracteristicas: [
                "Corriente: 60A",
                "Tecnología: MPPT",
                "Mayor capacidad de carga",
                "Voltaje batería: 12V/24V",
                "Ideal para sistemas grandes"
            ],
            categoria: "convertidores"
        },
        {
            id: 7,
            nombre: "Batería LiFePO4 Sunpal 48V 100Ah",
            precio: 0.00,
            imagen: "./imagenes/Batería LiFePO4 Sunpal 48V 100Ah.jpg",
            descripcion: "Batería de litio fosfato de 48V y 100Ah para sistemas de almacenamiento.",
            caracteristicas: [
                "Voltaje: 48V",
                "Capacidad: 100Ah",
                "Tecnología: LiFePO4",
                "Montaje en pared",
                "Larga vida útil"
            ],
            categoria: "baterias"
        },
        {
            id: 8,
            nombre: "Batería LiFePO4 Sunpal 48V 200Ah",
            precio: 0.00,
            imagen: "./imagenes/Batería LiFePO4 Sunpal 48V 200Ah.jpg",
            descripcion: "Batería de litio de alta capacidad para sistemas de gran consumo.",
            caracteristicas: [
                "Voltaje: 48V",
                "Capacidad: 200Ah",
                "Tecnología: LiFePO4",
                "Montaje en pared",
                "Alta capacidad de descarga"
            ],
            categoria: "baterias"
        },
        {
            id: 9,
            nombre: "Batería LiFePO4 Sunpal 12V 100Ah",
            precio: 0.00,
            imagen: "./imagenes/Batería LiFePO4 Sunpal 12V 100Ah.jpg",
            descripcion: "Batería de 12V para sistemas más pequeños y aplicaciones específicas.",
            caracteristicas: [
                "Voltaje: 12V",
                "Capacidad: 100Ah",
                "Tecnología: LiFePO4",
                "Compacta y eficiente",
                "Múltiples aplicaciones"
            ],
            categoria: "baterias"
        },
        {
            id: 10,
            nombre: "Estructura Montaje Techo - Gancho SUS304",
            precio: 0.00,
            imagen: "./imagenes/Estructura Montaje Techo - Gancho SUS304.jpg",
            descripcion: "Gancho de acero inoxidable SUS304 para sistema de montaje en techo.",
            caracteristicas: [
                "Material: Acero inoxidable SUS304",
                "Para techo de tejas",
                "Incluye tornillos Spandek",
                "Resistente a corrosión",
                "Fácil instalación"
            ],
            categoria: "accesorios"
        },
        {
            id: 11,
            nombre: "Rieles Montaje Solar R10 2.4m",
            precio: 0.00,
            imagen: "./imagenes/Rieles Montaje Solar R10 2.4m.jpg",
            descripcion: "Perfiles de riel para sistema de montaje en techo, 2.4 metros de longitud.",
            caracteristicas: [
                "Longitud: 2.4 metros",
                "Modelo: R10",
                "Material: Aluminio resistente",
                "Fácil ensamblaje",
                "Compatibilidad universal"
            ],
            categoria: "accesorios"
        },
        {
            id: 12,
            nombre: "Tablero Melamina Instalación Solar",
            precio: 0.00,
            imagen: "./imagenes/Tablero Melamina Instalación Solar.jpg",
            descripcion: "Tablero de melamina para base de instalación de paneles solares.",
            caracteristicas: [
                "Material: Melamina resistente",
                "Para base de instalación",
                "Superficie uniforme",
                "Fácil montaje",
                "Duradero"
            ],
            categoria: "accesorios"
        },
        {
            id: 13,
            nombre: "Conector MC4 60A",
            precio: 1.95,
            imagen: "./imagenes/Conector MC4 60A.jpg",
            descripcion: "Conector MC4 de 60A para conexión segura de paneles solares.",
            caracteristicas: [
                "Corriente: 60A",
                "Tipo: MC4",
                "IP67 resistente al agua",
                "Fácil conexión",
                "Alta seguridad"
            ],
            categoria: "accesorios"
        },
        {
            id: 14,
            nombre: "Control Solar con Disyuntor 63A",
            precio: 0.00,
            imagen: "./imagenes/Control Solar con Disyuntor 63A.jpg",
            descripcion: "Tablero de control con disyuntor Hager de 63A para protección del sistema.",
            caracteristicas: [
                "Disyuntor: 63A Hager",
                "Protección CC",
                "Seguridad integrada",
                "Fácil instalación",
                "Alta calidad"
            ],
            categoria: "accesorios"
        },
        {
            id: 15,
            nombre: "Interruptor Transferencia Automática ATS 63A",
            precio: 0.00,
            imagen: "./imagenes/Interruptor Transferencia Automática ATS 63A.jpg",
            descripcion: "Interruptor de transferencia automática GEYA para sistemas ininterrumpidos.",
            caracteristicas: [
                "Corriente: 63A/100A",
                "Voltaje: 220V",
                "Tipo: ATS 2P",
                "Transferencia automática",
                "Cuerpo antiinflamable"
            ],
            categoria: "accesorios"
        },
        {
            id: 16,
            nombre: "Cable Batería Cobre 16mm",
            precio: 1.95,
            imagen: "./imagenes/Cable Batería Cobre 16mm.jpg",
            descripcion: "Cable de batería de cobre puro 16mm para conexiones de alta corriente.",
            caracteristicas: [
                "Sección: 16mm²",
                "Material: Cobre puro",
                "Colores: Rojo y negro",
                "Alta conductividad",
                "Flexible y durable"
            ],
            categoria: "accesorios"
        },
        {
            id: 17,
            nombre: "Interruptor Batería 275A",
            precio: 0.00,
            imagen: "./imagenes/Interruptor Batería 275A.jpg",
            descripcion: "Interruptor de batería de 275A para trabajo pesado en sistemas solares.",
            caracteristicas: [
                "Corriente: 275A",
                "Voltaje: 12V-48V",
                "Para trabajo pesado",
                "Seguridad máxima",
                "Fácil operación"
            ],
            categoria: "accesorios"
        },
        {
            id: 18,
            nombre: "Cable Solar 4mm 10 metros",
            precio: 0.00,
            imagen: "./imagenes/Cable Solar 4mm 10 metros.jpg",
            descripcion: "Cable de cobre puro para paneles solares, 4mm de sección, 10 metros.",
            caracteristicas: [
                "Sección: 4mm²",
                "Longitud: 10 metros",
                "Material: Cobre puro",
                "Color: Rojo",
                "Con conector incluido"
            ],
            categoria: "accesorios"
        }
    ];

// CARRITO DE COMPRAS
let carrito = [];

// ELEMENTOS DEL DOM
const productosContainer = document.getElementById('productos-container');
const modal = document.getElementById('product-modal');
const modalTitle = document.getElementById('modal-title');
const modalImage = document.getElementById('modal-image');
const modalProductTitle = document.getElementById('modal-product-title');
const modalDescription = document.getElementById('modal-description');
const modalPrice = document.getElementById('modal-price');
const modalFeatures = document.getElementById('modal-features');
const whatsappLink = document.getElementById('whatsapp-link');
const closeModalBtn = document.querySelector('.close-modal');
const closeModalBtn2 = document.getElementById('close-modal-btn');
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartIcon = document.querySelector('.cart-icon');
const cartModal = document.getElementById('cart-modal');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalPrice = document.getElementById('cart-total-price');
const cartCount = document.getElementById('cart-count');
const closeCartModal = document.getElementById('close-cart-modal');
const whatsappCart = document.getElementById('whatsapp-cart');
const categoryCards = document.querySelectorAll('.category-card');

// CARGAR PRODUCTOS EN LA PÁGINA
function cargarProductos(productosArray = productos) {
    productosContainer.innerHTML = '';
    
    if (productosArray.length === 0) {
        productosContainer.innerHTML = '<p style="grid-column: 1 / -1; text-align: center; padding: 2rem; color: #666;">No se encontraron productos que coincidan con tu búsqueda.</p>';
        return;
    }
    
    productosArray.forEach(producto => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="product-image" onerror="this.src='https://via.placeholder.com/300x200?text=Imagen+No+Disponible'">
            <div class="product-info">
                <h3 class="product-title">${producto.nombre}</h3>
                <p class="product-price">$${producto.precio.toFixed(2)}</p>
                <p class="product-description">${producto.descripcion}</p>
                <div class="product-buttons">
                    <button class="product-btn" data-id="${producto.id}">Ver Detalles</button>
                    <button class="product-btn add-to-cart-btn" data-id="${producto.id}">Agregar al Carrito</button>
                </div>
            </div>
        `;
        productosContainer.appendChild(productCard);
    });
    
    // Añadir event listeners a los botones de productos
    document.querySelectorAll('.product-btn:not(.add-to-cart-btn)').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            mostrarDetallesProducto(productId);
        });
    });

    // Añadir event listeners a los botones de agregar al carrito
    document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const productId = parseInt(e.target.getAttribute('data-id'));
            agregarAlCarrito(productId);
        });
    });
}

// MOSTRAR DETALLES DEL PRODUCTO EN EL MODAL
function mostrarDetallesProducto(id) {
    const producto = productos.find(p => p.id === id);
    
    if (producto) {
        modalTitle.textContent = producto.nombre;
        modalImage.src = producto.imagen;
        modalImage.alt = producto.nombre;
        modalProductTitle.textContent = producto.nombre;
        modalDescription.textContent = producto.descripcion;
        modalPrice.textContent = `$${producto.precio.toFixed(2)}`;
        
        // Limpiar y cargar características
        modalFeatures.innerHTML = '';
        producto.caracteristicas.forEach(caracteristica => {
            const li = document.createElement('li');
            li.textContent = caracteristica;
            modalFeatures.appendChild(li);
        });
        
        // Configurar enlace de WhatsApp
        const mensaje = `Hola, estoy interesado en este artículo: ${producto.nombre} - $${producto.precio.toFixed(2)}`;
        const mensajeCodificado = encodeURIComponent(mensaje);
        whatsappLink.href = `https://wa.me/5354973495?text=${mensajeCodificado}`;
        
        // Mostrar modal
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
}

// CERRAR MODAL
function cerrarModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// CERRAR MODAL DEL CARRITO
function cerrarCartModal() {
    cartModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// AGREGAR PRODUCTO AL CARRITO
function agregarAlCarrito(id) {
    const producto = productos.find(p => p.id === id);
    if (producto) {
        // Verificar si el producto ya está en el carrito
        const itemExistente = carrito.find(item => item.id === id);
        if (itemExistente) {
            itemExistente.cantidad += 1;
        } else {
            carrito.push({
                id: producto.id,
                nombre: producto.nombre,
                precio: producto.precio,
                cantidad: 1
            });
        }
        actualizarCarrito();
        mostrarNotificacion(`¡${producto.nombre} agregado al carrito!`);
    }
}

// MOSTRAR NOTIFICACIÓN
function mostrarNotificacion(mensaje) {
    // Eliminar notificación anterior si existe
    const notificacionAnterior = document.querySelector('.notificacion-temporal');
    if (notificacionAnterior) {
        notificacionAnterior.remove();
    }
    
    const notificacion = document.createElement('div');
    notificacion.className = 'notificacion-temporal';
    notificacion.textContent = mensaje;
    notificacion.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        z-index: 1000;
        transition: opacity 0.3s;
    `;
    document.body.appendChild(notificacion);
    
    setTimeout(() => {
        notificacion.style.opacity = '0';
        setTimeout(() => {
            if (notificacion.parentNode) {
                notificacion.parentNode.removeChild(notificacion);
            }
        }, 300);
    }, 3000);
}

// ACTUALIZAR CARRITO
function actualizarCarrito() {
    // Actualizar contador
    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    cartCount.textContent = totalItems;

    // Actualizar modal del carrito si está abierto
    if (cartModal.style.display === 'block') {
        renderCarrito();
    }
}

// RENDERIZAR CARRITO EN EL MODAL
function renderCarrito() {
    cartItemsContainer.innerHTML = '';

    if (carrito.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart-message">Tu carrito está vacío</div>';
        cartTotalPrice.textContent = '0.00';
        whatsappCart.style.display = 'none';
        return;
    }

    let total = 0;
    carrito.forEach(item => {
        const itemTotal = item.precio * item.cantidad;
        total += itemTotal;

        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-title">${item.nombre}</div>
                <div class="cart-item-price">$${item.precio.toFixed(2)} x ${item.cantidad} = $${itemTotal.toFixed(2)}</div>
            </div>
            <div class="cart-item-actions">
                <button class="decrease-quantity" data-id="${item.id}">-</button>
                <span>${item.cantidad}</span>
                <button class="increase-quantity" data-id="${item.id}">+</button>
                <button class="remove-item" data-id="${item.id}">🗑️</button>
            </div>
        `;
        cartItemsContainer.appendChild(cartItem);
    });

    cartTotalPrice.textContent = total.toFixed(2);
    whatsappCart.style.display = 'flex';

    // Añadir event listeners a los botones del carrito
    document.querySelectorAll('.decrease-quantity').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            disminuirCantidad(id);
        });
    });

    document.querySelectorAll('.increase-quantity').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            aumentarCantidad(id);
        });
    });

    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = parseInt(e.target.getAttribute('data-id'));
            eliminarDelCarrito(id);
        });
    });

    // Actualizar enlace de WhatsApp para el carrito completo
    let mensajeCarrito = "Hola, estoy interesado en los siguientes artículos:\n";
    carrito.forEach(item => {
        mensajeCarrito += `- ${item.nombre} (Cantidad: ${item.cantidad}) - $${(item.precio * item.cantidad).toFixed(2)}\n`;
    });
    mensajeCarrito += `Total: $${total.toFixed(2)}`;
    const mensajeCarritoCodificado = encodeURIComponent(mensajeCarrito);
    whatsappCart.href = `https://wa.me/5354973495?text=${mensajeCarritoCodificado}`;
}

// AUMENTAR CANTIDAD DE UN PRODUCTO EN EL CARRITO
function aumentarCantidad(id) {
    const item = carrito.find(item => item.id === id);
    if (item) {
        item.cantidad += 1;
        actualizarCarrito();
    }
}

// DISMINUIR CANTIDAD DE UN PRODUCTO EN EL CARRITO
function disminuirCantidad(id) {
    const item = carrito.find(item => item.id === id);
    if (item) {
        if (item.cantidad > 1) {
            item.cantidad -= 1;
        } else {
            // Si la cantidad es 1, eliminar el producto
            eliminarDelCarrito(id);
            return;
        }
        actualizarCarrito();
    }
}

// ELIMINAR PRODUCTO DEL CARRITO
function eliminarDelCarrito(id) {
    carrito = carrito.filter(item => item.id !== id);
    actualizarCarrito();
}

// FILTRAR PRODUCTOS POR BÚSQUEDA
function filtrarProductos() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    if (searchTerm === '') {
        cargarProductos();
        return;
    }
    
    const productosFiltrados = productos.filter(producto => 
        producto.nombre.toLowerCase().includes(searchTerm) || 
        producto.descripcion.toLowerCase().includes(searchTerm)
    );
    cargarProductos(productosFiltrados);
}

// FILTRAR PRODUCTOS POR CATEGORÍA
function filtrarPorCategoria(categoria) {
    // Actualizar botones activos
    filterBtns.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Encontrar el botón que fue clickeado
    const botonClickeado = Array.from(filterBtns).find(btn => btn.getAttribute('data-category') === categoria);
    if (botonClickeado) {
        botonClickeado.classList.add('active');
    }

    if (categoria === 'todos') {
        cargarProductos();
    } else {
        const productosFiltrados = productos.filter(producto => producto.categoria === categoria);
        cargarProductos(productosFiltrados);
    }
}

// TOGGLE MENÚ MÓVIL
function toggleMenu() {
    navMenu.classList.toggle('show');
}

// INICIALIZAR
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos();
    
    // Event listeners
    closeModalBtn.addEventListener('click', cerrarModal);
    closeModalBtn2.addEventListener('click', cerrarModal);
    menuToggle.addEventListener('click', toggleMenu);
    searchBtn.addEventListener('click', filtrarProductos);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            filtrarProductos();
        }
    });
    cartIcon.addEventListener('click', () => {
        cartModal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        renderCarrito();
    });
    closeCartModal.addEventListener('click', cerrarCartModal);
    
    // Event listeners para filtros de categoría
    filterBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const categoria = e.target.getAttribute('data-category');
            filtrarPorCategoria(categoria);
        });
    });

    // Event listeners para categorías en tarjetas
    categoryCards.forEach(card => {
        card.addEventListener('click', (e) => {
            const categoria = e.currentTarget.getAttribute('data-category');
            // Encontrar y activar el botón correspondiente
            filterBtns.forEach(btn => {
                if (btn.getAttribute('data-category') === categoria) {
                    btn.click();
                }
            });
        });
    });
    
    // Cerrar modales al hacer clic fuera del contenido
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            cerrarModal();
        }
        if (e.target === cartModal) {
            cerrarCartModal();
        }
    });
    
    // Cerrar menú móvil al hacer clic en un enlace
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('show');
        });
    });
});
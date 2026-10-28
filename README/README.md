# Documentación Técnica: Proyecto "Rincones Escondidos" (Rutas y Destinos)

Este documento detalla la estructura técnica, las clases de Bootstrap 5.3.3, la librería de animaciones (AOS) y la lógica de JavaScript utilizadas en la construcción de la interfaz de usuario y la interactividad del sitio web.

---

## 1. Estructura Global y Navegación (Aplica a todas las páginas)

### Barra de Navegación (`Navbar`)
- **`<nav class="navbar navbar-expand-md navbar-light shadow-sm">`**
  - **Función:** Define la barra de navegación. `navbar-expand-md` asegura que el menú se muestre horizontal en pantallas medianas/grandes y colapse en celulares. `shadow-sm` añade una sombra sutil en la parte inferior.
- **Logotipo (`<a class="navbar-brand d-flex align-items-center">`)**
  - **Función:** Redirige al inicio. Utiliza *Flexbox* (`d-flex align-items-center`) para alinear verticalmente el logotipo (SVG) con el resto de los elementos.
- **Botón Hamburguesa (`<button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavMenu">`)**
  - **Función:** Controlador visible solo en móviles. Mediante `data-bs-target`, le ordena al contenedor del menú que se abra o cierre al hacer clic.
- **Contenedor del Menú (`<div class="collapse navbar-collapse justify-content-end" id="navbarNavMenu">`)**
  - **Identificador:** Su `id="navbarNavMenu"` lo conecta directamente con el botón hamburguesa.
  - **Función:** `collapse` oculta los enlaces por defecto en móviles. `justify-content-end` empuja todos los enlaces hacia la derecha en pantallas de escritorio.

---

## 2. Sistema de Diseño y Maquetación (Grid y Contenedores)

- **Contenedores Principales (`.container` y `.container-fluid`)**
  - **Función:** `.container` centra el contenido y aplica márgenes laterales automáticos (con ancho máximo). `.container-fluid` permite que el fondo abarque el 100% del ancho de la pantalla (usado en la sección familiar del `index.html`).
- **Sistema de Cuadrícula (`.row g-4` y `.col-*`)**
  - **`.row g-4`:** Define una fila de elementos con una separación (gap) uniforme de nivel 4 entre ellos.
  - **`.col-12 col-md-6 col-lg-4` (y variantes):** Hace el sitio responsivo. `col-12` obliga a ocupar todo el ancho en celulares; `col-md-6` divide en 2 columnas en tablets; `col-lg-4` o `col-xl-4` divide en 3 columnas en escritorio.

---

## 3. Componentes Visuales de Bootstrap

### Tarjetas (`Cards`)
Utilizadas en los catálogos de Destinos, Experiencias y en el Formulario.
- **`class="card border-0 shadow-sm h-100"`**
  - **Función:** `card` agrupa el contenido. `border-0` elimina los bordes duros por defecto. `shadow-sm` da profundidad. `h-100` es crucial: fuerza a que todas las tarjetas de una fila tengan exactamente la misma altura.
- **`class="card-img-top"`**
  - **Función:** Adapta la imagen en la parte superior de la tarjeta para que cubra el ancho sin deformarse.
- **`class="card-body p-4"`**
  - **Función:** Contenedor interno que da un relleno simétrico (`padding` de nivel 4) a los textos y botones.

### Tipografía y Espaciados
- **`.display-4` / `.display-5`:** Clases para títulos principales (`<h1>`), creando textos muy grandes y llamativos.
- **`.lead` y `.text-muted`:** `lead` estiliza y agranda ligeramente los subtítulos; `text-muted` les aplica un tono gris elegante.
- **`.fw-bold`:** Aplica negrita (font-weight: bold) a los textos.
- **`.mb-4`, `.my-5`, `.py-5`:** Clases de utilidad espaciadora. `m` es margin (exterior), `p` es padding (interior). `y` aplica arriba y abajo, `b` (bottom) solo abajo.

### Botones y Enlaces
- **`class="btn btn-terracota btn-sm / btn-lg w-100"`**
  - **Función:** Estructura de botón (`btn`). `btn-sm` (pequeño) o `btn-lg` (grande). `w-100` hace que ocupe todo el ancho disponible (usado en el planificador). `btn-terracota` es una clase CSS personalizada.
- **`target="_blank"`**
  - **Función:** Atributo HTML vital en los enlaces externos. Obliga al navegador a abrir la página de destino en una **pestaña nueva**, evitando que el usuario abandone el sitio web del proyecto.

### Acordeón (Sección FAQ)
- **Botón Disparador (`<button class="accordion-button" data-bs-target="#collapseOne">`)**
  - **Función:** Interfaz interactiva. El `data-bs-target` apunta al ID de la respuesta que debe mostrar.
- **Contenedor de Respuesta (`<div id="collapseOne" class="accordion-collapse collapse show">`)**
  - **Función:** Mantiene el texto oculto (`collapse`). La clase `show` (solo en la primera pregunta) hace que inicie desplegada por defecto.

---

## 4. Trucos de Maquetación Avanzada (CSS / Bootstrap)

- **Posicionamiento Absoluto (Tarjetas del `index.html`)**
  - **`position-relative` y `position-absolute`:** Permiten superponer elementos. Se utilizó para fijar una imagen de fondo (`background: url(...) center/cover`) y colocarle un velo degradado oscuro (`linear-gradient`) encima para que el texto blanco resalte perfectamente.
- **Mapa Embebido (`<iframe>`)**
  - **Función:** Inserta Google Maps en el `planificador.html`. Se envuelve en un `card overflow-hidden` con bordes redondeados (`border-radius: 14px`) para estilizar su apariencia.

---

## 5. Sistema de Animaciones (AOS - Animate On Scroll)

Librería externa (`aos.css` y `aos.js`) para efectos visuales fluidos al deslizar la página.
- **`data-aos="fade-up"`:** Indica que el elemento aparecerá flotando de abajo hacia arriba.
- **`data-aos-delay="100"` (200, 300, etc.):** Aplica un retraso en milisegundos. Usado en las tarjetas de Destinos y Experiencias para crear un efecto de aparición en cascada (escalonado).
- **Inicialización:** Requiere ejecutar `AOS.init();` en JavaScript para activarse.

---

## 6. Lógica de Interacción y Validaciones (`script.js`)

Controla el comportamiento del formulario en `planificador.html`.

- **Eventos y Prevención:**
  - `DOMContentLoaded`: Asegura que el JS arranque solo cuando el HTML esté 100% cargado.
  - `event.preventDefault()`: Bloquea la recarga de la página al hacer clic en "Enviar", permitiendo la validación en tiempo real.
- **Identificadores (DOM):**
  - `document.getElementById('formPlanificador')` y variables (`inputNombre`, `inputEmail`, etc.) para capturar los datos ingresados por el usuario.
- **Motor de Validación:**
  - **Campos Vacíos:** Verifica con `.trim() === ''`.
  - **Expresiones Regulares (Regex):** 
    - Correo: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/` (valida formato x@y.z).
    - Teléfono: `/^\d{10}$/` (exige exactamente 10 dígitos numéricos).
  - **Fechas y Edad:** Evita fechas futuras (`fechaIngresada > hoy`) y restringe la edad (`edad < 1 || edad > 120`).
- **Retroalimentación Visual (Feedback):**
  - Agrega/quita las clases `is-valid` (borde verde) e `is-invalid` (borde rojo y mensaje de error).
- **Gestión de Alertas (`mensajeAlerta`):**
  - Si hay error: Muestra una alerta roja (`alert-danger`).
  - Si hay éxito: Muestra una alerta verde (`alert-success`) concatenando el nombre del usuario (`¡Excelente, ${nombre}!`), arroja un `alert()` nativo, y usa `formulario.reset()` para vaciar los campos y dejarlos listos para un nuevo uso.

  ---

  # Documentación Técnica: Hoja de Estilos Personalizada (`style.css`)

Este archivo CSS complementa y sobrescribe los estilos predeterminados de Bootstrap para dotar al sitio de una identidad visual única (basada en tonos terracota, fondos texturizados y efectos de profundidad).

---

### 1. Estilos Globales y Fondo de Página
- **`body`**
  - **Patrón y Textura:** Utiliza `radial-gradient` para generar un sutil patrón geométrico de puntos sobre un fondo claro (`#f7f4ef`), creando textura.
  - **Fondo con Imagen:** Aplica un fondo superpuesto con gradiente semi-transparente y una imagen (`fondo.jpg`) ajustada al tamaño de la pantalla (`background-size: cover`) y fija al hacer scroll (`background-attachment: fixed`).
  - **Tipografía y Legibilidad:** Establece una fuente moderna sin patines (sans-serif) priorizando `Segoe UI` y adaptándose al sistema operativo, con una altura de línea (`line-height: 1.6`) que mejora la lectura.

---

### 2. Barra de Navegación (`Navbar`)
- **`.navbar`**
  - **Función (Efecto Cristal):** Aplica un fondo blanco casi transparente (`rgba(255, 255, 255, 0.95)`) combinado con `backdrop-filter: blur(10px)`, lo que genera un efecto de vidrio esmerilado o desenfoque dinámico sobre el contenido que pasa por detrás.
- **`.navbar-brand`**
  - **Función:** Estiliza el texto del logotipo con un peso de fuente extra grueso (`font-weight: 800`) y reduce el espacio entre letras (`letter-spacing: -0.5px`) para darle un aspecto de marca sólida.
- **`.navbar-nav .nav-link` y estados `:hover` / `.active`**
  - **Función:** Cambia el color de los enlaces del menú de un tono café grisáceo a un naranja terracota (`#a84e26`) al pasar el cursor o al estar en la página activa, utilizando una transición suave de 0.25 segundos.

---

### 3. Banner Principal (Hero Section)
- **`.hero-banner`**
  - **Función:** Crea un bloque destacado con una imagen de fondo (`fondo-mexico.jpg`). Aplica un filtro oscuro encima mediante un `linear-gradient` negro al 60% de opacidad para garantizar que el texto blanco de encima se pueda leer sin problemas.
- **`.hero-banner h1` y `.hero-banner p`**
  - **Función:** Añade sombras de texto (`text-shadow`) para darles profundidad y despegarlos visualmente del fondo fotográfico.

---

### 4. Sistema de Tarjetas (`.card`) y Efectos Hover
- **`.card`**
  - **Comportamiento Flexbox:** Define `display: flex` y `flex-direction: column` junto con `height: 100%`. Esto estructura la tarjeta para que el contenido fluya verticalmente, permitiendo alinear los botones siempre abajo.
  - **Estética:** Bordes redondeados (`border-radius: 14px`), fondo blanco puro y una sombra sutil.
- **`.card:hover`**
  - **Animación:** Al pasar el cursor, la tarjeta se eleva 6 píxeles (`transform: translateY(-6px)`) y su sombra se intensifica, creando un efecto de interacción física (3D).
- **`.card img` y `.card:hover img`**
  - **Función:** Fija la altura de las imágenes en 220px y usa `object-fit: cover` para recortarlas sin deformarlas. Al pasar el cursor (`hover`), la imagen hace un ligero zoom (`scale(1.03)`) mientras la tarjeta se eleva.
- **`.card-body` y Botones Inferiores**
  - **Función (`flex: 1` y `margin-top: auto`):** Hace que el cuerpo de la tarjeta crezca para llenar el espacio vacío y empuja los botones (`.btn`) obligatoriamente hacia el borde inferior, asegurando que todos los botones de una fila queden perfectamente alineados sin importar la cantidad de texto.

---

### 5. Botones Personalizados de Marca
- **`.btn-terracota`**
  - **Función:** Sobrescribe los botones de Bootstrap dándoles el color de identidad corporativa (`#a84e26`), quitando bordes, redondeando las esquinas a 8px y aplicando una sombra del mismo tono terracota.
- **`.btn-terracota:hover`**
  - **Función:** Al interactuar, oscurece ligeramente el color de fondo (`#92411e`), hace la sombra más amplia y eleva el botón un píxel (`translateY(-1px)`).

---

### 6. Campos de Formulario (`.form-control`, `.form-select`)
- **Estilos Base:**
  - **Función:** Suaviza los formularios predeterminados dándoles un fondo gris muy claro (`#fcfbfa`), bordes sutiles, esquinas más redondeadas (8px) y un relleno interior más amplio para facilitar la escritura en móviles.
- **Estado de Enfoque (`:focus`):**
  - **Función:** Cuando el usuario hace clic para escribir, el borde cambia al color terracota de la marca y se proyecta un halo luminoso (sombra exterior) del mismo tono, sustituyendo el clásico aro azul por defecto de Bootstrap.

---

### 7. Acordeón de Preguntas Frecuentes (FAQ)
- **Sobrescritura de Variables Nativas (`.accordion`)**
  - **Función:** Utiliza CSS custom properties (`--bs-accordion-*`) para inyectar los colores de la marca directamente en el motor de Bootstrap.
- **`.accordion-button.collapsed` y `.accordion-button:not(.collapsed)`**
  - **Función:** Fuerza, mediante el uso de `!important`, que los botones del acordeón sean siempre de color terracota con letras blancas, tanto si están cerrados (`.collapsed`) como si están abiertos, eliminando además los bordes azules de selección (`box-shadow: none`).

---

### 8. Pie de Página (`footer`)
- **`footer`**
  - **Función:** Configura el bloque inferior de la página con un fondo casi negro (`#211c18`), texto gris claro para contraste bajo y una línea sutil superior (`border-top`) para separarlo del contenido principal.

  ---

  # Documentación Técnica: Lógica de Interacción (`script.js`)

Este archivo JavaScript se encarga de inicializar las animaciones de la página y de gestionar toda la lógica de validación del formulario del planificador en el lado del cliente, proporcionando retroalimentación visual al usuario sin necesidad de recargar la página.

---

### 1. Inicialización del DOM y Librerías
- **`document.addEventListener('DOMContentLoaded', ...)`**
  - **Función:** Asegura que el código JavaScript se ejecute únicamente cuando el navegador haya terminado de construir el árbol DOM (es decir, cuando todo el HTML ya está cargado), evitando errores de elementos no encontrados.
- **`AOS.init()`**
  - **Función:** Verifica si la librería AOS (Animate On Scroll) existe en el documento y la inicializa, activando los efectos visuales de aparición al deslizar la página.

---

### 2. Captura del Formulario y Prevención de Envío
- **`getElementById('formPlanificador')` y `getElementById('mensajeAlerta')`**
  - **Función:** Conectan el script con los elementos clave del HTML para poder manipularlos.
- **`formulario.addEventListener('submit', ...)`**
  - **Función:** Escucha el evento de envío (cuando el usuario hace clic en el botón "Enviar Planificador").
- **`event.preventDefault()`**
  - **Función:** Detiene el comportamiento por defecto del navegador (que es recargar la página al enviar un formulario). Esto permite procesar y validar los datos en segundo plano usando JavaScript.

---

### 3. Extracción de Datos y Limpieza
- **`inputNombre.value.trim()` (y similares)**
  - **Función:** Extrae el valor escrito por el usuario en cada campo. El método `.trim()` elimina los espacios en blanco accidentales al principio y al final del texto, evitando que un campo de puros espacios sea considerado válido.

---

### 4. Motor de Validaciones (Clases de Bootstrap)
El script evalúa cada campo y utiliza las clases nativas de Bootstrap (`is-valid` para borde verde e `is-invalid` para borde rojo) para darle respuesta visual inmediata al usuario. Se apoya en una bandera booleana (`let formValido = true`) que cambia a `false` si alguna prueba falla.

- **Nombre y Destino:**
  - Verifica simplemente que los campos no estén vacíos (`=== ''`).
- **Correo Electrónico (Regex):**
  - **Patrón:** `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
  - **Función:** Expresión regular que asegura que el texto ingresado tenga un formato de correo válido (texto + @ + texto + . + texto), sin espacios en blanco.
- **Teléfono (Regex):**
  - **Patrón:** `/^\d{10}$/`
  - **Función:** Exige estrictamente que la cadena contenga **exactamente 10 dígitos numéricos**, sin letras ni caracteres especiales.
- **Fecha de Nacimiento:**
  - **Función:** Compara la fecha ingresada (`new Date(fechaNacimiento)`) con la fecha actual del sistema (`new Date()`). Es inválida si está vacía o si pertenece al futuro (`fechaIngresada > hoy`).
- **Edad:**
  - **Función:** Convierte el texto a un número entero con `parseInt()`. Valida que sea un número real (`!isNaN`) y que esté en un rango lógico humano (mayor a 1 y menor o igual a 120).

---

### 5. Retroalimentación Final y Restablecimiento

Al terminar de evaluar todos los campos, el script revisa el estado final de la variable `formValido`:

- **Si el formulario tiene errores (`!formValido`):**
  - Cambia el contenedor de alerta a color rojo (`alert-danger`).
  - Muestra un mensaje pidiendo corregir los campos marcados.
  - Elimina la clase `d-none` para hacer la alerta visible.
- **Si el formulario es exitoso:**
  - Cambia la alerta a color verde (`alert-success`).
  - Utiliza plantillas literales (*template literals*) para personalizar el mensaje de éxito con el nombre del usuario: `¡Excelente, ${nombre}!`.
  - Dispara una ventana emergente nativa del navegador (`alert(...)`) informando los siguientes pasos.
  - **`formulario.reset()`:** Vacía todos los campos del formulario, dejándolo como nuevo.
  - **Limpieza de clases:** Recorre todos los campos (`querySelectorAll`) y les quita las clases `is-valid` e `is-invalid` para que los bordes verdes o rojos desaparezcan de la pantalla tras un envío exitoso.
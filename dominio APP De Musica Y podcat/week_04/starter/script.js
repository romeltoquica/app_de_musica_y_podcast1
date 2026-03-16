// ==========================================
// Generador de Mensajes
// Dominio: App de Música y Podcast
// ==========================================


// ------------------------------------------
// 1. DATOS DEL DOMINIO
// ------------------------------------------

// nombre del contenido con espacios para usar trim()
const nombreContenido = "  sonidos del universo  "

// categoría
const categoria = "Podcast educativo"

// descripción larga
const descripcion = "Un episodio que explora cómo la música y los sonidos influyen en nuestras emociones y creatividad."

// código identificador
const codigo = "POD-101"


// ------------------------------------------
// 2. MÉTODOS DE STRING
// ------------------------------------------

// quitar espacios
const nombreLimpio = nombreContenido.trim()

// convertir a mayúsculas
const nombreMayusculas = nombreLimpio.toUpperCase()

// verificar si la descripción contiene una palabra
const contieneMusica = descripcion.includes("música")

// verificar si el código empieza con POD
const empiezaPodcast = codigo.startsWith("POD")

// extraer número del código
const numeroCodigo = codigo.slice(4)

// reemplazar palabra
const descripcionNueva = descripcion.replace("emociones", "sentimientos")


// ------------------------------------------
// 3. FICHA DEL CONTENIDO
// ------------------------------------------

const ficha = `
============================================
 APP DE MÚSICA Y PODCAST — FICHA DE CONTENIDO
============================================

Contenido:  ${nombreMayusculas}
Categoría:  ${categoria}
Código:     ${codigo}

Descripción:
${descripcionNueva}

--- Validaciones ---

¿Código empieza con POD?: ${empiezaPodcast}
¿Descripción contiene "música"?: ${contieneMusica}
Número del código: ${numeroCodigo}

============================================
`

console.log(ficha)


// ------------------------------------------
// 4. MENSAJE DE NOTIFICACIÓN
// ------------------------------------------

const notificacion = `📢 Nuevo contenido disponible: ${nombreLimpio} (${codigo})`

console.log(notificacion)
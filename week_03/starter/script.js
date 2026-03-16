// ==========================================
// Calculadora de dominio: App de Música y Podcast
// Este programa calcula ingresos, usuarios,
// reproducciones y validaciones de suscripción
// usando operadores de JavaScript.
// ==========================================


// ==========================================
// 1. VARIABLES INICIALES
// ==========================================

// precio de la suscripción mensual
let precioSuscripcion = 12;

// cantidad de usuarios premium
let usuariosPremium = 150;

// cantidad de usuarios gratis
let usuariosGratis = 850;

// separador numérico para almacenamiento total
let almacenamientoTotal = 1_000_000; // en MB


// ==========================================
// 2. OPERACIONES ARITMÉTICAS
// ==========================================

// calcular ingresos mensuales
let ingresosMensuales = precioSuscripcion * usuariosPremium;

console.log("Ingresos mensuales por suscripciones:", ingresosMensuales);


// calcular total de usuarios
let totalUsuarios = usuariosPremium + usuariosGratis;

console.log("Total de usuarios en la app:", totalUsuarios);


// promedio de reproducciones por usuario
let reproduccionesTotales = 50_000;

let promedioReproducciones = reproduccionesTotales / totalUsuarios;

console.log("Promedio de reproducciones por usuario:", promedioReproducciones);


// operador módulo para saber canciones sobrantes en listas de 10
let canciones = 127;

let sobrantes = canciones % 10;

console.log("Canciones sobrantes en listas de 10:", sobrantes);


// ==========================================
// 3. OPERADORES DE ASIGNACIÓN COMPUESTA
// ==========================================

// llegan nuevos usuarios premium
usuariosPremium += 25;

console.log("Usuarios premium actualizados:", usuariosPremium);


// algunos usuarios cancelan
usuariosPremium -= 5;

console.log("Usuarios premium después de cancelaciones:", usuariosPremium);


// se agregan más reproducciones
reproduccionesTotales += 10_000;

console.log("Reproducciones totales actualizadas:", reproduccionesTotales);


// ==========================================
// 4. COMPARACIÓN ESTRICTA
// ==========================================

// verificar si un usuario es premium
let tipoUsuario = "premium";

let esPremium = tipoUsuario === "premium";

console.log("¿El usuario es premium?:", esPremium);


// verificar si hay muchos usuarios
let muchosUsuarios = totalUsuarios >= 1000;

console.log("¿La app tiene más de 1000 usuarios?:", muchosUsuarios);


// ==========================================
// 5. OPERADORES LÓGICOS
// ==========================================

// verificar si aplica descuento
let esEstudiante = true;
let tieneCuentaPremium = true;

// descuento solo si es estudiante Y premium
let aplicaDescuento = esEstudiante && tieneCuentaPremium;

console.log("¿Aplica descuento de estudiante?:", aplicaDescuento);


// acceso a contenido exclusivo
let accesoExclusivo = tieneCuentaPremium || esEstudiante;

console.log("¿Puede acceder a contenido exclusivo?:", accesoExclusivo);


// negación lógica
let cuentaSuspendida = false;

let puedeEscucharMusica = !cuentaSuspendida;

console.log("¿El usuario puede escuchar música?:", puedeEscucharMusica);


// ==========================================
// 6. CAPACIDAD DE ALMACENAMIENTO
// ==========================================

// espacio usado por canciones y podcasts
let espacioUsado = 650_000;

// verificar si queda espacio
let espacioDisponible = almacenamientoTotal - espacioUsado;

console.log("Espacio disponible en el servidor (MB):", espacioDisponible);
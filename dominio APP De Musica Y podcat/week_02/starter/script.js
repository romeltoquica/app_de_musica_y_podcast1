// Dominio del proyecto
const DOMAIN_NAME = "App de Música y Podcasts";

// Datos de la entidad (playlist)
const itemName = "Playlist Top Hits";
const itemCategory = "Música Pop";
const itemQuantity = 42;
const isItemAvailable = true;
const pendingValue = null;

// Información principal
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");

console.log("");
console.log(`Nombre: ${itemName}`);
console.log(`Categoría: ${itemCategory}`);
console.log(`Cantidad: ${itemQuantity}`);
console.log(`Disponible: ${isItemAvailable}`);

console.log("");
console.log("--- Tipos de datos ---");
console.log("typeof itemName:", typeof itemName);
console.log("typeof itemQuantity:", typeof itemQuantity);
console.log("typeof isItemAvailable:", typeof isItemAvailable);

console.log("");
console.log("--- Conversiones ---");

// Conversión número a string
const quantityAsText = String(itemQuantity);
console.log("Cantidad como texto:", quantityAsText);
console.log("Tipo:", typeof quantityAsText);

// Conversión string a número
const extraTracks = "8";
const totalTracks = itemQuantity + Number(extraTracks);
console.log("Total con valores convertidos:", totalTracks);

// Conversión a boolean
console.log("Boolean(\"\"):", Boolean(""));

console.log("");
console.log("--- Valor nulo ---");
console.log("Valor pendiente:", pendingValue);
console.log("¿Es null?:", pendingValue === null);

console.log("");
console.log("===========================");
console.log("FIN DE FICHA");
console.log("===========================");
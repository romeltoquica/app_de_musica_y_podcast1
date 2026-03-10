# Proyecto Semanal — Semana 02: Ficha de Datos del Dominio

> 🎯 **ÚNICO ENTREGABLE**: Este proyecto es el **único entregable obligatorio** para aprobar la semana.

---

## 🎯 Objetivo

Crear una ficha de datos en consola usando **variables y tipos de datos en JavaScript**.
Cada aprendiz adapta el proyecto a su **dominio único asignado**.

En este caso, el dominio trabajado es **App de Música y Podcasts**, donde se muestra información sobre una **playlist dentro de una aplicación de streaming**.

---

## 📋 Tu Dominio Asignado

**Dominio:** App de Música y Podcasts

La aplicación representa una plataforma donde los usuarios pueden escuchar música, crear playlists y acceder a podcasts.

> ⚠️ **Política anticopia**: Cada aprendiz trabaja sobre un dominio diferente. La implementación debe ser coherente con el dominio asignado.

---

## 📦 Estructura del proyecto

```
3-proyecto/
├── README.md
└── starter/
    └── script.js
```

---

## ✅ Requisitos funcionales

El script debe mostrar en consola una **ficha de datos sobre una entidad del dominio**.

En este proyecto la entidad será una **playlist musical** dentro de la aplicación.

---

### 1. Datos con tipo correcto

El script utiliza variables `const` con tipos adecuados al dominio:

* **string** → nombre de la playlist
* **number** → cantidad de canciones
* **boolean** → estado de disponibilidad
* **null** → valor aún no asignado dentro de la aplicación

Ejemplo de variables del dominio:

* `playlistName`
* `trackCount`
* `isPlaylistPublic`
* `featuredSponsor`

---

### 2. `typeof` para verificar tipos

El script utiliza `typeof` para verificar el tipo de variables como:

* nombre de la playlist
* cantidad de canciones
* estado de disponibilidad

---

### 3. Conversión explícita de tipos

Se realiza al menos una conversión usando funciones como:

* `String()`
* `Number()`
* `Boolean()`

Por ejemplo, convertir la cantidad de canciones a texto para mostrarla.

---

### 4. Buena nomenclatura

Las variables siguen las buenas prácticas:

* **camelCase** para variables
* **UPPER_SNAKE_CASE** para constantes del dominio
* booleanos con prefijos semánticos como:

```
isPlaylistPublic
isAvailable
```

---

### 5. Números con separadores

Si se usan números grandes (por ejemplo reproducciones o precios premium) se pueden usar separadores para mejorar la lectura:

```
1_000_000
```

---

## 📊 Ejemplo de salida esperada

```
==============================
FICHA DE DATOS: Música y Podcasts
==============================

Nombre playlist:   Top Hits 2024
Canciones:         42
Reproducciones:    1_200_000
Pública:           true

--- Tipos de datos ---
typeof playlistName: string
typeof trackCount: number
typeof isPlaylistPublic: boolean

--- Conversiones ---
Canciones como texto: "42"
typeof trackCount string: string

--- Valor nulo ---
Patrocinador destacado: null
¿Es null?: true

==============================
FIN DE FICHA
==============================
```

---

## 🛠️ Instrucciones

1. Abre el archivo:

```
starter/script.js
```

2. Define las variables relacionadas con tu dominio **App de Música y Podcasts**.

3. Implementa la ficha de datos en consola usando `console.log()`.

4. Ejecuta el script:

```
node starter/script.js
```

5. Verifica que la salida sea clara y cumpla con todos los requisitos.

---

## 📝 Criterios de evaluación

| Criterio                                 | Puntos      |
| ---------------------------------------- | ----------- |
| Script funciona sin errores              | 20 pts      |
| Uso correcto de `const` / `let`          | 20 pts      |
| Tipos de datos correctos y `typeof`      | 20 pts      |
| Al menos una conversión explícita        | 15 pts      |
| Nomenclatura correcta                    | 15 pts      |
| Adaptación coherente al dominio asignado | 10 pts      |
| **Total**                                | **100 pts** |

**Mínimo para aprobar:** 70 pts

---

## 🔗 Navegación

[← Prácticas](../2-practicas/) | [README semana →](../README.md)

# Tripleten web_project_around_express

# web_project_around_express

Servidor Express para el proyecto **“Alrededor de los EE. UU.”** (Sprint Backend).
Expone endpoints de solo lectura que devuelven datos desde archivos JSON locales.

## 🚀 Scripts
- `npm run start` – arranca el servidor con Node.
- `npm run dev` – arranca con **nodemon** (hot reload).
- `npm run lint` – ejecuta **ESLint** con la guía Airbnb + reglas del sprint.

## 🛠️ Tecnologías
- Node.js, Express
- `fs/promises` y `path` para leer JSON desde disco
- ESLint 8.56.0 + `eslint-config-airbnb-base` + `eslint-plugin-import`
- EditorConfig (indentación 2 espacios, LF, UTF-8)

## 📁 Estructura del proyecto

.
├── app.js
├── data
│ ├── users.json
│ └── cards.json
├── routes
│ ├── index.js
│ ├── users.js
│ └── cards.js
├── .editorconfig
├── .eslintrc
├── .gitignore
├── package.json
└── README.md

## 🔌 Endpoints
Base URL: `http://localhost:3000`

### Usuarios
- **GET** `/users`  
  Devuelve la lista completa de usuarios (JSON).
- **GET** `/users/:id`  
  Devuelve un usuario por su `_id`.  
  - Si **no existe**, responde **404**:
    ```json
    { "message": "ID de usuario no encontrado" }
    ```

### Tarjetas
- **GET** `/cards`  
  Devuelve la lista completa de tarjetas (JSON).

### Rutas inexistentes
- Cualquier ruta no definida (incluida `/`) responde **404**:
  ```json
  { "message": "Recurso solicitado no encontrado" }

  ## Cómo ejecutar

  npm install
  npm run dev
  # Servidor en http://localhost:3000

  Pruebas rápidas (curl)

  # Lista de usuarios
    curl http://localhost:3000/users

  # Usuario por ID (reemplaza por un _id real del JSON)
  curl http://localhost:3000/users/8340d0ec33270a25f2413b69

  # Lista de tarjetas
  curl http://localhost:3000/cards

  # Ruta inexistente
  curl http://localhost:3000/no-existe

  ✅ Linter

  npm run lint


  ✍️ Autor
  Lina Castro

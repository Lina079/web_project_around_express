# Around (Express) — API REST con Node.js + Express

**Stack:** Node.js · Express · MongoDB · Mongoose · Postman · ESLint

## 🧭 Resumen
Servidor backend que provee la API para la aplicación **Around**, una galería social con usuarios y tarjetas.  
Implementa un **CRUD completo** para usuarios y tarjetas, con validaciones y manejo centralizado de errores.

---

## ✨ Funcionalidades
- **Usuarios**
  - Crear usuario
  - Consultar todos los usuarios
  - Consultar usuario por ID
  - Actualizar información (nombre, bio, avatar)
  - Manejo de errores (ID inválido, usuario no encontrado, validaciones de esquema)

- **Tarjetas**
  - Crear tarjeta
  - Consultar todas las tarjetas
  - Eliminar tarjeta
  - Dar y quitar like
  - Manejo de errores (ID inválido, tarjeta no encontrada)

- **Middlewares**
  - Validación de datos con Joi/Celebrate
  - Centralización de manejo de errores
  - Logs básicos de peticiones

---

## 🧱 Arquitectura
- **Node.js + Express** para la lógica del servidor
- **MongoDB + Mongoose** para la persistencia de datos
- **Rutas separadas** para usuarios y tarjetas
- **Controladores** con lógica de negocio desacoplada
- **Middlewares personalizados** para validación y errores
- **Linter (ESLint)** para mantener calidad de código
## 📁 Estructura del proyecto

~~~text
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
~~~

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

## ▶️ Cómo ejecutar
```bash
npm install
npm run dev
```
# Servidor en http://localhost:3000

🧪 Pruebas rápidas (curl)
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

## ✍️ Autora 
Lina Castro - Full Stack Dev Jr.
LinkedIn: https://www.linkedin.com/in/lina-castro079/

GitHub: https://github.com/Lina079

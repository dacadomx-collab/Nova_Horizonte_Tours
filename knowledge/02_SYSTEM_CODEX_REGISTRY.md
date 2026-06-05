# 🧬 SYSTEM CODEX & REGISTRY (DICCIONARIO DE ORO)

## 📊 MAPEO DE VARIABLES VALIDADAS (FRONT VS BACK)
| Concepto | DB / Backend (snake_case) | Frontend (camelCase) | Tipo de Dato |
| :--- | :--- | :--- | :--- |
| [CONCEPTO_1] | `variable_back` | `variableFront` | [String/Int/Bool] |
| [CONCEPTO_2] | `variable_back` | `variableFront` | [String/Int/Bool] |

> **NOTA DE FUNDACIÓN:** Todas las conexiones a esta base de datos deben realizarse obligatoriamente a través de la clase centralizada en `api/conexion.php`, leyendo las variables `DB_HOST`, `DB_NAME`, `DB_USER` y `DB_PASS` del archivo `.env`.

## 🗄️ ESTRUCTURA DE TABLAS (SCHEMA)
### Tabla: `[NOMBRE_TABLA]`
- `[columna_1]`: [Tipo] - [Descripción]
- `[columna_2]`: [Tipo] - [Descripción]

## 🧠 REGISTRO SEMÁNTICO (VOCABULARIO CONTROLADO)
- ✅ **Términos Permitidos:** `[termino_1]`, `[termino_2]`, `[termino_3]`
- ❌ **Términos Prohibidos:** `[sinonimo_1]`, `[sinonimo_2]`, `[traduccion_libre]`

## 🧩 REGISTRO DE COMPONENTES FRONTEND
| Componente | Ruta | Tipo (UI/Logic/Page) | Estado | Props Principales |
| :--- | :--- | :--- | :--- | :--- |
| `[NombreComponente]` | `[ruta/del/archivo.tsx]` | `[Tipo]` | `[Status]` | `[prop1, prop2]` |

**Reglas de Interfaz Aplicadas:**
- `[Componente_1]`: [Breve descripción de la regla de negocio que cumple, ej. Advertencias de inmutabilidad, formatos, etc.]
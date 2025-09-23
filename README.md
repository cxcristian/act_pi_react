# Nombre del Proyecto  

**Rate Movies**

## Descripción  
**Rate Movies** es una aplicación web desarrollada en **React** que permite a los usuarios explorar, calificar y gestionar películas. La plataforma ofrece una experiencia sencilla e intuitiva para visualizar información básica de películas y realizar operaciones de creación, edición y eliminación.  

El sistema funciona con datos obtenidos desde un servidor simulado utilizando **Mockoon**, lo que permite manejar información como si proviniera de una API real. Cada película contiene:  

- Imagen/Poster  
- Título  
- Sinopsis  
- Calificación (1-10)  
- Comentarios  

## Integrantes
- **Lider:** Cristian David Giraldo Alvarez
- **Colaboradores:**
- Santigo Pinzon Gallego 
- Estefany Botina Perez

## Características  
- Visualización de una lista de películas.  
- Agregar nuevas películas con todos sus datos.  
- Editar la información de una película existente.  
- Eliminar películas de la lista.  
- Manejo de datos mediante una API simulada con **Mockoon**.  

## Tecnologías utilizadas  
- **React**: Framework principal para la construcción de la interfaz.  
- **Mockoon**: Simulación de API para el almacenamiento y consulta de datos.  
- **JavaScript (ES6+)**: Lógica de programación.  
- **HTML5 y CSS3**: Estructura y estilos de la aplicación.  
- **Git y GitHub**: Control de versiones y colaboración en equipo.  

## Registro de Avances por Clase  
Cada avance del proyecto será documentado en esta sección, reflejando el progreso alcanzado en cada sesión de trabajo.  

- Todos los avances deberán estar respaldados en el repositorio mediante **commits descriptivos** que indiquen claramente la tarea realizada.  
- Los commits deben incluir el **nombre del autor** que realizó el cambio.  
- Cada tarea debe marcarse como **pendiente, en progreso o completada**, de acuerdo con el estado actual del desarrollo.  

## Metodologia de trabajo:
Para dividir el trabajo se dividira por componentes ej
SideBar: Estefany.
Navar: Santiago pinzon.
Cards: Cristian Giraldo.

Para crear los componentes se utilizaran carpetas dentro de app, dentro de la carpeta components las cuales van a contener el module.css, el jsx y cualquier archivo necesario para que el componente funcione

### Clase 1
- **Fecha**: [20/08/2025]
- **Objetivos**:
  - [Determinarcion_Proyecto]
    Determinar la tematica y alcance del proyecto integrador
  - [Definicion_Tareas]
    Definir que tareas van a existir.
  
- **Avances**:
  -  [completo] [Tarea completada 1] - Responsable: [Grupo_trabajo] - Commit: [Definicion de: Nombre   proyecto-Descripcion-Integrantes-Caracteristicas actualizacion en el Readme]
  - [completo] [Tarea completada 2] - Responsable: [Grupo_trabajo] - Commit: [Crear la carpeta donde iran los componentes]

- **En progreso**:
  -  [Tarea en progreso] - Responsable: [Grupo_trabajo] - Commit: [Definicion de trabajo]
- **Pendiente**:
  -  [Tarea pendiente] - Responsable: [Nombre]
- **Notas**:
  - [Hoy se definio la idea principal del proyecto y se **actualizo** el repositorio principal]

### Clase 2
- **Fecha**: [25/08/2025-/7/08/2025]
- **Objetivos**:
  - sincronizar con el fork original y guardar la informacion.
  - Crear el plan de acción.
  - Crear la api (mockapi.io)
  - Crear el componente de nav bar
  - Organizar las carpetas de la api (donde se hacen las peticiones) y la carpeta de los componentes
  - Crear el componente navbar
  - Crear el componente donde se van a mostrar los card de cada pelicula.
  - Crear el componente que va a crear los card de cada pelicula.
- **Avances**:
  - ✅ [Tarea completada 1] - Responsable: [Cristian] - Commit: Creación del plan de accion.
  - ✅ [Tarea completada 2] - Responsable: [Cristian] - Commit: Creacion de las carpetas components-api y el archivo moviesApi.js.
  - ✅ [Tarea completada 3] - Responsable: [Cristian] - Commit: Sincronizacion con el fork original admeas de dar la informacion a info.json
    ✅ [Tarea completada 4] - Responsable: [Santiago] - Commit: se crea componente navbar y se genera codigo en loyaut y page.js para vista inicial
  - ✅ [Tarea completada 5] - Responsable: [Santiago] - Commit: Creacion de la api en mockappi.io https://68acd091b996fea1c08af3e7.mockapi.io/peliculas y se crea el archivo "moviesApi.tsx con el codigo para realzar las peticiones
  - ✅ [Tarea completada 5] - Responsable: [Cristian] - Commit: Creacion de los componentes catalogo y cards, y unificacion de la api.
- **En progreso**:
  - 🔄 [Tarea en progreso] - Responsable: [Nombre] - Commit: [Hash o descripción del commit]
- **Pendiente**:
  - ⏳ [Tarea pendiente] - Responsable: [Nombre]
- **Notas**:
  - [Descripción de problemas, soluciones o decisiones tomadas]

### Clase [N]
- **Fecha**: [2/09/2025]
- [Repetir estructura anterior]
**Objetivos**:
  - Darle la funcionalidad al formulario, para que suba los datos.
- **Avances**:
  - ✅ [Tarea completada 1] - Responsable: [Cristian] - Commit: Se le dio funcionalidad al boton guardar peliculas ubicado en el navBar
  - ✅ [Tarea completada 2] - Responsable: [Santiago] - Commit: se actualizo el Readme
  - **En progreso**:
  - ✅ [Tarea completada 3] - Responsable: [Santiago] - Commit: [se actualiza el componente Navbar y se le cambian los estilos a modulos CSS v.2]
  - ✅ [Tarea completada 4] - Responsable: [Santiago] - Commit: [se crea el componente MovieDetailModal.tsx con  su componente CSS y también se integra al código del componente catalogo.tsx, se hace integración con el servidor local para actualizar la info de la Api]
  - ✅ [Tarea completada 5] - Responsable: [Santiago] - Commit: [se actualizan algunos aspectos visuales de los componentes]
- **Pendiente**:
  - ⏳ [Tarea pendiente] - Responsable: [Nombre]
- **Notas**:
  - [Descripción de problemas, soluciones o decisiones tomadas]


### Clase [N]
- **Fecha**: [9/09/2025]
- [Repetir estructura anterior]
**Objetivos**:
  - Se mejora la comunicacion de la app con la api
- **Avances**:
  - ✅ [Tarea completada 1] - Responsable: [Santiago] - Commit: se actualiza los componentes Catalogo.tsx y MovieDetailModal.tsx para una mejor integración con la api.
  - ✅ [Tarea completada 2] - Responsable: [Cristian] - Commit: se actualizo el Readme
  - **En progreso**:
  - 🔄 [Tarea en progreso] - Responsable: [Nombre] - Commit: [Hash o descripción del commit]
- **Pendiente**:
  - ⏳ [Tarea pendiente] - Responsable: [Nombre]
- **Notas**:
  - [Descripción de problemas, soluciones o decisiones tomadas]


### Clase [N]
- **Fecha**: [DD/MM/YYYY]
- [Repetir estructura anterior]
**Objetivos**:
  - Actualizacion de los componentes de NavBar
  - Creacion para ver las Cards.
- **Avances**:
  - ✅ [Tarea completada 1] - Responsable: [Santiago] - Commit: Se actualiza el componente NavBar y se cambian los estilos a modules.css v2
  - ✅ [Tarea completada 2] - Responsable: [Santiago] - Commit: Se crea el componente css y tambien se integra al codigo del componpente catalogo tsx, se hace integracion con e servidor local para actualizar la info de la api
  - ✅ [Tarea completada 3] - Responsable: [Santiago] - Commit: Se actualizan algunos aspectos visuales de los componentes
  - ✅ [Tarea completada ] - Responsable: [Santiago] - Commit: se ajuste page.tsx y layout.tsx para mostrar un banner de inicio antes de ingresar al catalogo, se crea archivo inicio.css para mostrar el banner.
  - **En progreso**:
  - 🔄 [Tarea en progreso] - Responsable: [Nombre] - Commit: [Hash o descripción del commit]
- **Pendiente**:
  - ⏳ [Tarea pendiente] - Responsable: [Nombre]
- **Notas**:
  - [Descripción de problemas, soluciones o decisiones tomadas]

### Clase [5]
- **Fecha**: [22/09/2025]
- [Repetir estructura anterior]
**Objetivos**:
  - Crear el boton de eliminar - Estefany
  - Darle Funcionalidad a la barra de busqueda - Estefany
  - Crear un Aside -Cristian
  - Darle Mejor presentacion de inicio (como cuavana) - Santiago 
- **Avances**:
  - ✅ [Tarea completada 1] - Responsable: [Cristian] - Commit:  Crear Aside
  - ✅ [Tarea completada 1] - Responsable: [Santiago] - Commit:  Mejora visual y creacion del componente Movie Baner
  - **En progreso**:
  - 🔄 [Tarea en progreso] - Responsable: [] - Commit: 
- **Pendiente**:
  - ⏳ [Tarea pendiente] - Responsable: [Estefany]  En trabajo de boton eliminar y funcionalidad barra de bus
- **Notas**:
  - [Descripción de problemas, soluciones o decisiones tomadas]

## Contacto
### Información del Grupo
- **Institución**: SENA
- **Programa**: [Tecnologia En Analisis y Desarrollo de Software]
- **Ficha**: [3114227]
- **Instructor**: [Jonh Fredy Valencia]
- **Período**: [2025 - 3]

-- Obtener todas las tareas registradas.
select * from tareas;
-- Obtener los usuarios que no cuenten con un teléfono registrado.
SELECT * from Usuario WHERE telefono is NULL;
-- Obtener las tareas registradas por el usuario con el id 1.
select * from tareas where user_id = 1;
-- Obtener las tareas que no cuenten con categoría
SELECT t.id, t.name
FROM tarea t
    LEFT JOIN CategoriasXTareas ct ON t.id = ct.tarea_id
WHERE
    ct.categoria_id IS NULL;
-- Obtener las categorías que no se encuentren asociadas a tareas.
SELECT c.id, c.name
FROM
    categorias c
    LEFT JOIN CategoriasXTarea ct ON c.id = ct.categoria_id
WHERE
    ct.categoria_id IS NULL;
-- Obtener los comentarios y nombre de quien realizo el comentario a la tarea con id 1.
SELECT c.comentarios, u.nombre AS nombre_usuario
FROM Comentarios c
    JOIN Usuarios u ON c.user_id = u.id
WHERE
    c.tarea_id = 1;
-- Obtener todas las tareas con categoria id 1 y mostrar los siguientes campos: Titulo (Tarea), Descripción (Tarea), nombre (Categoria), nombre (Usuario), email (Usuario).SELECT
t.titulo,
t.description AS Descripcion,
cat.name AS nombre_categoria,
u.name AS nombre_usuario,
u.email AS email_usuario
FROM
    Tareas t
    JOIN CategoriaXTarea ct ON t.id = ct.tarea_id
    JOIN Categorias cat ON ct.categoria_id = cat.id
    JOIN Usuarios u ON t.id = u.id
WHERE
    cat.id = 1;
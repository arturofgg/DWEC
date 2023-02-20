
CREATE TABLE user(
    dni VARCHAR(255) UNIQUE,
    nombre VARCHAR(255),
    apellido VARCHAR(255),
    estudios VARCHAR(255)
);

INSERT INTO user (dni, nombre, apellido, estudios)
VALUES ('12345678A', 'Paco', 'Diaz', 'DWES');
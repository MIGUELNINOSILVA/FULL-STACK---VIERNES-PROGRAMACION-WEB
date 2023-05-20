
CREATE DATABASE sistemaWebViernes IF NOT EXISTS;

USE sistemaWebViernes;

CREATE TABLE usuarios (
  id_usuario INT PRIMARY KEY,
  nombre_usuario VARCHAR(255),
  telefono INT,
  cargo VARCHAR(255),
  despacho VARCHAR(255),
  correo_electronico FLOAT
);



CREATE TABLE ticket (
  id_ticket INT PRIMARY KEY,
  nombre_usuario VARCHAR(255),
  id_usuario INT,
  correo_electronico FLOAT,
  telefono INT,
  despacho VARCHAR(255),
  area VARCHAR(255),
  estado VARCHAR(255),
  cargo VARCHAR(255),
  fecha_creacion DATE,
  fecha_modificacion DATE,
  fecha_cierre DATE,
  descripcion_problema VARCHAR(255),
  doc_adjuntos VARCHAR(255),
  FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

CREATE TABLE categorias (
  id_categorias INT PRIMARY KEY,
  hardware INT,
  software INT,
  redes_comunicaciones INT,
  id_area INT,
  FOREIGN KEY (id_area) REFERENCES area(id_area)
);

CREATE TABLE despacho (
  id_despacho INT PRIMARY KEY,
  despacho INT,
  departamento INT,
  ciudad INT
);

DROP TABLE despacho;
DROP TABLE categorias;
DROP TABLE area;
DROP TABLE ticket;

CREATE TABLE area (
  id_area INT PRIMARY KEY,
  area_administrativa INT,
  grupo_mantenimiento_soporte_tecnologico INT
);

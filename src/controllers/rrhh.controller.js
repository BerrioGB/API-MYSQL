import { pool } from "../db.js"

export const getRrhh = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM rrhh')
  res.json(rows)
}

export const getRrhhs = async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM rrhh where cedula = ?', [req.params.cedula])
  if (rows.length <= 0) return res.status(404).json({
    message: 'Employee Not Found'
  })
  res.json(rows[0])
}

export const createRrhh = async (req, res) => {
  const { cedula, nombre, apellido, cargo } = req.body
  const [rows] = await pool.query('INSERT INTO rrhh (cedula, nombre, apellido, cargo) VALUES (?,?,?,?)', [cedula, nombre, apellido, cargo])
  res.send({
    cedula,
    nombre,
    apellido,
    cargo
  })
}

export const updateRrhh = async (req, res) => {
  const { cedula, nombre, apellido, cargo } = req.body
  const [rows] = await pool.query('UPDATE rrhh SET cedula=?, nombre=?, apellido=?, cargo=? WHERE cedula = ?', [cedula, nombre, apellido, cargo, req.params.cedula])
  res.send({
    cedula,
    nombre,
    apellido,
    cargo
  })
}

export const deleteRrhh = async (req, res) => {
  const [result] = await pool.query('DELETE FROM rrhh WHERE cedula = ?', [req.params.cedula])
  if (result.affectedRows <= 0) return res.status(404).json({
    message: 'Employee Not Found'
  })
  res.sendStatus(204)

}
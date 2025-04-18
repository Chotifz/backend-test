const { body, validationResult } = require('express-validator');

const validateCreateUser = [
  body('name').notEmpty().withMessage('Nama pengguna harus diisi'),
  body('email')
    .notEmpty().withMessage('Email harus diisi')
    .isEmail().withMessage('Format email tidak valid'),
  body('phone')
    .notEmpty().withMessage('Nomor telepon harus diisi')
    .matches(/^(?:\+62|62|0)[0-9]{8,15}$/).withMessage('Format nomor telepon tidak valid'),
  body('departement').notEmpty().withMessage('Departemen harus diisi'),
  body('password')
    .notEmpty().withMessage('Password harus diisi')
    .matches(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    .withMessage('Password harus minimal 8 karakter dan mengandung setidaknya 1 huruf dan 1 angka'),
  validateErrors
];

const validateUpdateUser = [
  body('name')
    .optional()
    .isLength({ min: 2 }).withMessage('Nama minimal 2 karakter'),
  body('email')
    .optional()
    .isEmail().withMessage('Format email tidak valid'),
  body('phone')
    .optional()
    .matches(/^(?:\+62|62|0)[0-9]{8,15}$/).withMessage('Format nomor telepon tidak valid'),
  body('departement')
    .optional()
    .notEmpty().withMessage('Departemen tidak boleh kosong'),
  validateErrors
];


function validateErrors(req, res, next) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const message = errors.array().map(err => err.msg);
    return res.status(400).json({ success: false, message });
  }
  next();
}
module.exports = {validateCreateUser, validateUpdateUser};

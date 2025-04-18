const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'User Management API',
      version: '1.1.0',
      description: 'Aplikasi sederhana untuk manajemen user dengan fitur CRUD',
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Development server',
      },
    ],
    components: {
      schemas: {
        User: {
          type: 'object',
          required: ['name', 'email', 'phone', 'departement', 'password'],
          properties: {
            _id: {
              type: 'string',
              description: 'Auto-generated MongoDB ID',
              example: '60d21b4667d0d8992e610c85',
            },
            name: {
              type: 'string',
              description: 'Nama pengguna',
              example: 'Xiao Ming',
            },
            email: {
              type: 'string',
              format: 'email',
              description: 'Email pengguna (harus unik)',
              example: 'xiaoxi@email.com',
            },
            phone: {
              type: 'string',
              description: 'Nomor telepon dengan format Indonesia',
              example: '+6281234567890',
            },
            departement: {
              type: 'string',
              description: 'Departemen pengguna',
              example: 'Engineering',
            },
            password: {
              type: 'string',
              format: 'password',
              description: 'Password pengguna (akan di-hash)',
              example: 'Password123',
            },
            isActive: {
              type: 'boolean',
              description: 'Status aktivasi pengguna',
              default: true,
              example: true,
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Tanggal pembuatan akun',
              example: '2023-04-18T10:15:30Z',
            },
          },
        },
        UserInput: {
          type: 'object',
          required: ['name', 'email', 'phone', 'departement', 'password'],
          properties: {
            name: {
              type: 'string',
              example: 'Xiao Ming',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'xiaoxi@email.com',
            },
            phone: {
              type: 'string',
              example: '+6281234567890',
            },
            departement: {
              type: 'string',
              example: 'Engineering',
            },
            password: {
              type: 'string',
              format: 'password',
              example: 'Password123',
            },
          },
        },
        UserUpdate: {
          type: 'object',
          properties: {
            name: {
              type: 'string',
              example: 'Xiao Ming v2',
            },
            email: {
              type: 'string',
              format: 'email',
              example: 'xiaoxi@email.com',
            },
            phone: {
              type: 'string',
              example: '6281234567890',
            },
            departement: {
              type: 'string',
              example: 'Human Resources',
            },
          },
        },
        Error: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: false,
            },
            message: {
              type: 'array',
              items: {
                type: 'string',
              },
              example: ['Format email tidak valid', 'Password harus minimal 8 karakter'],
            },
          },
        },
        Success: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true,
            },
            message: {
              type: 'string',
              example: 'User berhasil dibuat',
            },
          },
        },
        UsersList: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true,
            },
            data: {
              type: 'array',
              items: {
                $ref: '#/components/schemas/User',
              },
            },
          },
        },
        UserDetail: {
          type: 'object',
          properties: {
            success: {
              type: 'boolean',
              example: true,
            },
            data: {
              $ref: '#/components/schemas/User',
            },
          },
        },
      },
    },
    tags: [
      {
        name: 'Users',
        description: 'Operasi API untuk manajemen pengguna',
      },
    ],
  },
  apis: ['./routes/*.js', './swagger-docs.js'], // path ke router dan dokumentasi tambahan
};

const specs = swaggerJsdoc(options);

module.exports = {
  specs,
  swaggerUi,
};
import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('admin', 10),
    isAdmin: true,
  },
  {
    name: ' John',
    email: 'john@example.com',
    password: bcrypt.hashSync('admin', 10),
  },
  {
    name: 'Jane',
    email: 'jane@example.com',
    password: bcrypt.hashSync('admin', 10),
  },
]

export default users

import bcrypt from 'bcryptjs'


const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('98765', 10),
        isAdmin: true
    },
    {
        name: 'Jone Doe',
        email: 'jone@example.com',
        password: bcrypt.hashSync('98765', 10),
    },
    {
        name: 'Jane Doe',
        email: 'Jane@example.com',
        password: bcrypt.hashSync('98765', 10),
    },
    {
        name: 'Suman Maji',
        email: 'sumanmaji401@gmail.com',
        password: bcrypt.hashSync('1234566', 10),
        isAdmin: true
    },


]

export default users
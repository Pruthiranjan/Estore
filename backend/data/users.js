import bcrypt from 'bcryptjs'
const users = [
    {
        name:'Admin User',
        email:'admin@gmail.com',
        password:bcrypt.hashSync('admin',10),
        isAdmin:true
    },
    {
        name:'User',
        email:'user@gmail.com',
        password:bcrypt.hashSync('user',10)
    },
    {
        name:'User1',
        email:'user1@gmail.com',
        password:bcrypt.hashSync('user1',10)
    }
]
export default users
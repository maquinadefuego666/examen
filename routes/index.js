import {Router} from "express";
const router = Router();

let users = [
    {
        id:1,
        name:"Alvaro",
        address:"xd",
        age:19,
    }
]
router.post('/users/create',(req,res)=>{
    //body
    users.push(req.body);
    res.send("chido");
});



router.get('/users', (req,res)=>{
    res.status(200).json(users);
});

router.put('/users/update/:id',(req,res)=>{
    const user=users.find(u=>u.id===req.params.id);
    if (!user){
        res.status(404).send("NO se encuentra");
    return;
    }
    const updateUser={...user,...req.body}
    users=users.map(u=>u.id===req.params.id ? updateUser:u);
    res.status(200).send("Recurso Actualizado");
});

export default router;
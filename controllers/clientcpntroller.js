import { db } from "./db/db.js"

export const getclients = async(req,res)=>{

    const sql = `select * from clients `
    const result = await db.query(sql)
    res.json(result)
}

export const postclients = async (req,res)=>{
    const temp = req.body
    const params = (temp.id,temp.name,temp.email)
    const sql = `insert into clients(id,name,email) values ($1,$2,$3) return id_client`
    const result = await db.query(sql,params)
    res.json(result)
}

export const putClients = async(req,res)=>{
const temp = req.body
const id_client = req.params.id
const params = [temp.id,temp.name,temp.email, id_client]
const sql = `update clients
                set id = $1,
                    email = $2,
                    name = $3
                    where id_client = $4`
    const result = await db.query(sql,params)
            res.json({message:"object modified"})
}

export const deleteclients = async (req,res)=>{

    const id_client = req.params.id
    const params = [id_client]
    const sql = `delete from clients where id_client = $1`
    const result = await db.query(sql,params)
    res.json({message: "object deleted"})
}
import {db} from "../db/cn.js"

export const getphones = async(req,res)=>{

    const sql = `select * from phones `
    const result = await db.query(sql)
    res.json(result)
}

export const postphones = async (req,res)=>{
    const temp = req.body
    const params = (temp.id,temp.client_id,temp.phone_number)
    const sql = `insert into phones(id,client_id,phone_number) values ($1,$2,$3) return id_phone`
    const result = await db.query(sql,params)
    res.json(result)
}

export const putphones = async(req,res)=>{
const temp = req.body
const id_client = req.params.id
const params = [temp.id,temp.phone_number,temp.client_id, id_phone]
const sql = `update phone
                set id = $1,
                    phone_number = $2,
                    id_client  = $3
                    where id_phone= $4`
    const result = await db.query(sql,params)
            res.json({message:"object modified"})
}

export const deletephones = async (req,res)=>{

    const id_client = req.params.id
    const params = [id_phone]
    const sql = `delete from phone where id_phone = $1`
    const result = await db.query(sql,params)
    res.json({message: "object deleted"})
}
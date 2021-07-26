import { useState } from "react"

interface Props {
    handlerOnAdd: (obj:any) => void

}

const Form = ({handlerOnAdd}: Props) => {
    const [name, setName] = useState("")
    const [price, setPrice] = useState<any>(0)

    const handlerOnSubmit = (e:any) => {
        e.preventDefault()
        const obj = {id: 1000, name: name, price:price}
        handlerOnAdd(obj)
    }

    return (
        <>
            <form onSubmit={handlerOnSubmit}>

            <input type="text" className="form-control" placeholder="Nombre" value={name} onChange={e => (setName(e.target.value))} />
            <input type="number" className="form-control mt-5" placeholder="Precio" value={price} onChange={e => (setPrice(e.target.value))}/>
            <input name="" id="" className="btn btn-primary mt-5" type="submit" value="Agregar Producto"/>
            </form>
        </>
    )
}

export default Form

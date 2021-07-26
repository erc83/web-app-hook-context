import { useState } from 'react'
import Table from '../../components/table/Table'
import ProductContext from '../../contexts/ProductContext'
import stock1 from '../../data/stock.json'
import Form from '../../components/form/Form'


const Home = () => {
    const [products, setProduct] = useState<any>(stock1)

    const handlerOnAdd = (obj:any) => {
        setProduct([...products, obj])
    }

    const addProduct = () => {
        // generamos un id a partir de la fecha para luego poder buscar
        // ademas de esta manera no se repetira
        const id = new Date().getTime()
        console.log(id)
    }

    const delProduct = (id: any) => {
        console.log(`delete ${id}`);
        
    }

    const getProduct = () => {
        
    }
    return (
        <>
        <ProductContext.Provider value={{
            products,
            addProduct,
            delProduct,
            getProduct,
        }}>
            <div className="row">
            <div className="col-md-6">
                <Table />
            </div>
        </div>
        </ProductContext.Provider>
            <div className="col-md-6">
                <Form handlerOnAdd={handlerOnAdd} />
            </div>   
        </>
    )
}

export default Home

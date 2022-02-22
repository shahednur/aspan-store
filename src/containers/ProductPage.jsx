import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Audio } from  'react-loader-spinner'
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/actions/productsActions'
import ProductComponent from './ProductComponent'

const ProductPage = ({showWish}) => {
    const [isLoading, setIsLoading] = useState(true)
    const products = useSelector(state => state.products)
    const dispatch = useDispatch()
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            dispatch(setProducts(response.data))
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchProducts()
    } , [fetchProducts]);
    return (<>{!showWish &&
        <div className="bg-[#F3F4F6]">
            <div className="container mx-auto relative">
                <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
                    <div className="flex flex-wrap -mx-4">
                    {isLoading?<Audio
                        height="100"
                        width="100"
                        color='grey'
                        ariaLabel='loading'
                        wrapperStyle={{marginLeft:'45%'}}
                    /> :<ProductComponent />}
                    </div>
                </section>
            </div>
        </div>
        }
    </>)
}

export default ProductPage
import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector  } from 'react-redux'

const ProductComponent = () => {
    const products = useSelector(state => state.allProducts.products)
    //create a function to shorten the title of the product
    const shortenTitle = (title) => {
        if(title.length > 30) {
            return title.substring(0,30) + "..."
        }
        return title
    }
    const renderList = products.map((product) => {
        const { id, title, price, image, category } = product
    return (
        <div className="w-full md:w-1/2 xl:w-1/3 px-4" key={id}>
            <div className="bg-white rounded-lg overflow-hidden mb-10 image">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-80 object-cover object-center"
                />
                <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                    <h3>
                        <Link
                            to={`/product/${id}`}
                            className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                        >
                            {shortenTitle(title)}
                        </Link>
                    </h3>
                    <p className="text-base text-body-color leading-relaxed mb-7">
                        {category} - ${price}
                    </p>
                    <Link
                        to={`/product/${id}`}
                        className="
                     inline-block
                     py-2
                     px-7
                     border border-[#E5E7EB]
                     rounded-full
                     text-base text-body-color
                     font-medium
                     hover:border-primary hover:bg-primary hover:text-gray-400
                     transition
                     "
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
    });
    return (<>{renderList}</>);
}

export default ProductComponent
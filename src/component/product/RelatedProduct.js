import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, getProduct } from '../../actions/productAction';
import ProductCard from '../Home/ProductCard';
import './RelatedProduct.scss';

const RelatedProduct = () => {
    const dispatch = useDispatch();
    const { products, error } = useSelector((state) => state.products);
    useEffect(() => {
        if (error) {
            dispatch(clearError());
        }
        dispatch(getProduct());
    }, [error, dispatch]);
    return (
        <div className="related-products">
            <h2 className="featuredHeading">Related Products</h2>
            <p>Browse The Collection of Top Products</p>
            <div className="rel-product">
                {products &&
                    products
                        .slice(1, 5)
                        .map((product, index) => <ProductCard key={index} product={product} />)}
            </div>
        </div>
    );
};

export default RelatedProduct;

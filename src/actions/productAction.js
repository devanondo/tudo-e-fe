import {
    ADMIN_PRODUCT_FAIL,
    ADMIN_PRODUCT_REQUEST,
    ADMIN_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_REVIEW_FAIL,
    ALL_REVIEW_REQUEST,
    ALL_REVIEW_SUCCESS,
    CLEAR_ERROR,
    DELETE_CATEGORY_FAIL,
    DELETE_CATEGORY_REQUEST,
    DELETE_CATEGORY_SUCCESS,
    DELETE_PRODUCT_FAIL,
    DELETE_PRODUCT_REQUEST,
    DELETE_PRODUCT_SUCCESS,
    DELETE_REVIEW_FAIL,
    DELETE_REVIEW_REQUEST,
    DELETE_REVIEW_SUCCESS,
    GET_CATEGORY_FAIL,
    GET_CATEGORY_REQUEST,
    GET_CATEGORY_SUCCESS,
    NEW_CATEGORY_FAIL,
    NEW_CATEGORY_REQUEST,
    NEW_CATEGORY_SUCCESS,
    NEW_PRODUCT_FAIL,
    NEW_PRODUCT_REQUEST,
    NEW_PRODUCT_SUCCESS,
    NEW_REVIEW_FAIL,
    NEW_REVIEW_REQUEST,
    NEW_REVIEW_SUCCESS,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    UPDATE_PRODUCT_FAIL,
    UPDATE_PRODUCT_REQUEST,
    UPDATE_PRODUCT_SUCCESS,
} from '../constants/productConstants';
import apiInstance from '../utils/apiInstance';

export const getProduct =
    (keyword = '', currentPage, price = [0, 3000000], category) =>
    async (dispatch) => {
        try {
            dispatch({
                type: ALL_PRODUCT_REQUEST,
            });

            let link = `products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}`;

            if (category) {
                link = `products?keyword=${keyword}&page=${currentPage}&price[gte]=${price[0]}&price[lte]=${price[1]}&category=${category}`;
            }

            const { data } = await apiInstance.get(link);

            console.log(data);
            dispatch({
                type: ALL_PRODUCT_SUCCESS,
                payload: data,
            });
        } catch (error) {
            dispatch({
                type: ALL_PRODUCT_FAIL,
                payload: error.response?.data.message,
            });
        }
    };

//Get product Details
export const getProductDetails = (id) => async (dispatch) => {
    try {
        dispatch({
            type: PRODUCT_DETAILS_REQUEST,
        });
        const { data } = await apiInstance.get(`product/${id}`);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response?.data.message,
        });
    }
};

//Create Product
export const createProduct = (reviewData) => async (dispatch) => {
    try {
        dispatch({
            type: NEW_PRODUCT_REQUEST,
        });
        const config = {
            headers: { 'Content-Type': 'application/json' },
        };
        const { data } = await apiInstance.post(`admin/product/new`, reviewData, config);
        dispatch({
            type: NEW_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_PRODUCT_FAIL,
            payload: error.response?.data.message,
        });
    }
};

//newReview
export const newReview = (reviewData) => async (dispatch) => {
    try {
        dispatch({
            type: NEW_REVIEW_REQUEST,
        });
        const config = {
            headers: { 'Content-Type': 'application/json' },
        };
        const { data } = await apiInstance.put(`review`, reviewData, config);
        dispatch({
            type: NEW_REVIEW_SUCCESS,
            payload: data.success,
        });
    } catch (error) {
        dispatch({
            type: NEW_REVIEW_FAIL,
            payload: error.response?.data.message,
        });
    }
};

//Clear all error
export const clearError = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERROR });
};

//Get all products Admin
export const getAdminProducts = () => async (dispatch) => {
    try {
        dispatch({ type: ADMIN_PRODUCT_REQUEST });

        const { data } = await apiInstance.get('admin/products');

        dispatch({ type: ADMIN_PRODUCT_SUCCESS, payload: data.products });
    } catch (error) {
        dispatch({
            type: ADMIN_PRODUCT_FAIL,
            payload: error.response?.data.message,
        });
    }
};

//Delete Product
export const deleteProduct = (id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_PRODUCT_REQUEST });

        const { data } = await apiInstance.delete(`admin/product/${id}`);

        dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({
            type: DELETE_PRODUCT_FAIL,
            payload: error.response?.data.message,
        });
    }
};

//Update Product
export const updateProduct = (id, productData) => async (dispatch) => {
    try {
        dispatch({
            type: UPDATE_PRODUCT_REQUEST,
        });
        const config = {
            headers: { 'Content-Type': 'application/json' },
        };
        const { data } = await apiInstance.put(`admin/product/${id}`, productData, config);
        console.log(data);
        dispatch({
            type: UPDATE_PRODUCT_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: UPDATE_PRODUCT_FAIL,
            payload: error.response?.data.message,
        });
    }
};

//Get all Reviews Admin
export const getAllReview = (id) => async (dispatch) => {
    try {
        dispatch({ type: ALL_REVIEW_REQUEST });

        const { data } = await apiInstance.get(`admin/reviews?id=${id}`);

        dispatch({ type: ALL_REVIEW_SUCCESS, payload: data.reviews });
    } catch (error) {
        dispatch({
            type: ALL_REVIEW_FAIL,
            payload: error.response?.data.message,
        });
    }
};

//Deleted review of a product
export const deleteReviews = (reviewId, productId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_REVIEW_REQUEST });

        const { data } = await apiInstance.delete(
            `admin/reviews?id=${reviewId}&productId=${productId}`
        );

        dispatch({ type: DELETE_REVIEW_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({
            type: DELETE_REVIEW_FAIL,
            payload: error.response?.data.message,
        });
    }
};

//Get all CATEGORIES Admin
export const getAllCategory = () => async (dispatch) => {
    try {
        dispatch({ type: GET_CATEGORY_REQUEST });

        const { data } = await apiInstance.get(`admin/category`);

        dispatch({ type: GET_CATEGORY_SUCCESS, payload: data.categories });
    } catch (error) {
        dispatch({
            type: GET_CATEGORY_FAIL,
            payload: error.response?.data.message,
        });
    }
};

//Create Product category
export const createCategory = (categoryData) => async (dispatch) => {
    try {
        dispatch({
            type: NEW_CATEGORY_REQUEST,
        });
        const config = {
            headers: { 'Content-Type': 'application/json' },
        };
        const { data } = await apiInstance.post(`admin/category/new`, categoryData, config);
        dispatch({
            type: NEW_CATEGORY_SUCCESS,
            payload: data,
        });
    } catch (error) {
        dispatch({
            type: NEW_CATEGORY_FAIL,
            payload: error.response?.data.message,
        });
    }
};

//Deleted review of a product
export const deleteCategory = (id, subId) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_CATEGORY_REQUEST });

        const { data } = await apiInstance.delete(`admin/category/delete?id=${id}&subId=${subId}`);

        dispatch({ type: DELETE_CATEGORY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({
            type: DELETE_CATEGORY_FAIL,
            payload: error.response?.data.message,
        });
    }
};

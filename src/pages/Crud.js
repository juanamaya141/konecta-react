import React from 'react';
import '../components/styles/crud.css';
import Table from '../components/Table';
import Head from '../components/Head';
import Modal from '../components/Modal';
class Crud extends React.Component{
    constructor(){
        super();
        this.state = {
            product: {
                name: '',
                reference: '',
                price: 0,
                weight: 0,
                category: '',
                stock: 0,
            },
            products: []
        }
    }
    
    editProduct = (product, key) => {

        this.setState({product, key});
    }

    createProduct = (e, product) =>{
        product.created_at = new Date().toJSON();
        product.sold_at = "";
        fetch('http://localhost:3000/products', {
            method: 'POST',
            body: JSON.stringify(product), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((resp) => {
            return resp.json();
        }).then((data) => {
            this.setState(prevState => ({
                products: [product, ...prevState.products ]
            }));
            this.props.notification(e, 'se ha creado el producto', 'success');
        });
    }

    updateProduct = (e, product) => {
        fetch(`http://localhost:3000/products/${product.id}`, {
            method: 'PUT',
            body: JSON.stringify(product), // data can be `string` or {object}!
            headers:{
                'Content-Type': 'application/json'
            }
        }).then((resp) => {
            return resp.json();
        }).then((data) => {
            this.props.notification(e, 'se ha actualizado el producto', 'success');
            let products = this.state.products;
            products[this.state.key] = product;
            this.setState({products, key: null})
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.product.id){
            this.updateProduct(e, this.state.product);
        }else{
            this.createProduct(e, this.state.product);
            
        }
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({
            product : {
                ...this.state.product,
                [name]: value
            }
        });
    }

    componentDidMount(){
        fetch('http://localhost:3000/products')
        .then((response) => {
            return response.json();
        })
        .then((data)  => {
            this.setState({products: data});
        });
    }

    resetForm = ()=>{
        this.setState({
            product : {
                name: '',
                reference: '',
                price: 0,
                weight: 0,
                category: '',
                stock: 0,
            }
        });
    }

    deleteProduct = (e, id, key) => {
        fetch(`http://localhost:3000/products/${id}`, {
            method: 'DELETE',
        }).then((resp) => {
            return resp.json();
        }).then((data) => {
            this.props.notification(e, 'se ha eliminado el producto', 'success');
            let products = this.state.products;
            products.splice(key, 1);
            this.setState({products})
        });
    }

    sell = (e, product, key) =>{
        this.setState({key});
        if(product.stock > 0) {
            this.updateProduct(e,product);
            product.sold_at = new Date().toJSON();
            product.stock--;
        }else{
            this.props.notification(e, 'el producto no tiene el stock suficiente para ser vendido', 'error');
        }
    }

    render(){
        return (
            <div className="container">
                <Modal 
                    product={this.state.product}
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    resetForm={this.resetForm}
                />
                <Head/>
                <Table update={this.editProduct} products={this.state.products} deleteProduct={this.deleteProduct} sell={this.sell}/>
            </div>
        )
    }
}

export default Crud;
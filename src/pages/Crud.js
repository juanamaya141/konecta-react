import React from 'react';
import '../components/styles/crud.css';
import Table from '../components/Table';
import Head from '../components/Head';
import Modal from '../components/Modal';
class Crud extends React.Component{
    editProduct(product, key){
        console.log(product)
    }
    render(){
        return (
            <div className="container">
                <Modal/>
                <Head/>
                <Table editProduct={this.editProduct}/>
            </div>
        )
    }
}

export default Crud;
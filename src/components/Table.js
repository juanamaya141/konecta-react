import React from 'react';

class Table extends React.Component{
    constructor(){
        super();
        this.state = {
            products: []
        }

    }

    sell(id, key){
        console.log("sell");
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
    update(product, key){
        console.log(product)
    }

    delete(id, key){
        console.log(id);
    }

    render(){
        const key = 1;
        const {update} = this.props;
        return (
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Vender</th>
                            <th>Nombre</th>
                            <th>Referencia</th>
                            <th>Precio</th>
                            <th>Peso</th>
                            <th>Categoria</th>
                            <th>stock</th>
                            <th>Fecha de Creación</th>
                            <th>Fecha última venta</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            this.state.products.map((product, key) => {
                                return (
                                    <tr key={key}>
                                        <td><a href="#" onClick={(e) => this.sell(product.id, key)}><i className="fa fa-shopping-cart"></i></a></td>
                                        <td>{product.name}</td>
                                        <td>{product.reference}</td>
                                        <td>{product.price}</td>
                                        <td>{product.weight}</td>
                                        <td>{product.category.name}</td>
                                        <td>{product.stock}</td>
                                        <td>{product.created_at}</td>
                                        <td>{product.sold_at}</td>
                                        <td>
                                            <a href="#addProductModal" onClick={(e) => update(product, key)} className="edit" data-toggle="modal"><i className="fa fa-pencil"></i></a>
                                            <a href="#" onClick={(e) => this.delete(product.id, key)} className="delete"><i className="fa fa-trash"></i></a>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Table;
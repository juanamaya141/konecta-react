import React from 'react';

class Table extends React.Component{

    render(){
        const {update, products, deleteProduct, sell} = this.props;
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
                            products.map((product, key) => {
                                return (
                                    <tr key={key}>
                                        <td><a href="#" onClick={(e) => sell(e, product, key)}><i className="fa fa-shopping-cart"></i></a></td>
                                        <td>{product.name}</td>
                                        <td>{product.reference}</td>
                                        <td>{product.price}</td>
                                        <td>{product.weight}</td>
                                        <td>{product.category}</td>
                                        <td>{product.stock}</td>
                                        <td>{new Intl.DateTimeFormat('en-GB').format(new Date(product.created_at))}</td>
                                        <td>{product.sold_at}</td>
                                        <td>
                                            <a href="#addProductModal" onClick={(e) => update(product, key)} className="edit" data-toggle="modal"><i className="fa fa-pencil"></i></a>
                                            <a href="#" onClick={(e) => deleteProduct(e, product.id, key)} className="delete"><i className="fa fa-trash"></i></a>
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
import React from 'react';

class Modal extends React.Component{

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
            }
        }
    }
    handleSubmit(){
        console.log("hola");
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

    render(){
        return (
            <div id="addProductModal" className="modal fade">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={this.handleSubmit}>
                            <div className="modal-header">						
                                <h4 className="modal-title">Producto</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control" onChange={this.handleChange} name="name" value={this.state.product.name} required />
                                </div>
                                <div className="form-group">
                                    <label>Referencia</label>
                                    <input type="text" className="form-control" onChange={this.handleChange} name="reference" value={this.state.product.reference} required />
                                </div>
                                <div className="form-group">
                                    <label>Precio</label>
                                    <input type="number" className="form-control" onChange={this.handleChange} name="price" value={this.state.product.price} required />
                                </div>
                                <div className="form-group">
                                    <label>Peso</label>
                                    <input type="number" className="form-control" onChange={this.handleChange} name="weight" value={this.state.product.weight} required />
                                </div>
                                <div className="form-group">
                                    <label>Categoria</label>
                                    <select value={this.state.product.category} onChange={this.handleChange} name="category" className="form-control" required>
                                        
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Stock</label>
                                    <input type="number" className="form-control" onChange={this.handleChange} name="stock" value={this.state.product.stock} />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancelar" />
                                <input type="submit" className="btn btn-success" value="Guardar" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Modal;
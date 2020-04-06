import React from 'react';

class Modal extends React.Component{

    render(){
        const {onChange, onSubmit, product, resetForm} = this.props;
        return (
            <div id="addProductModal" className="modal fade" data-backdrop="static">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <form onSubmit={onSubmit}>
                            <div className="modal-header">						
                                <h4 className="modal-title">Producto</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={resetForm}>&times;</button>
                            </div>
                            <div className="modal-body">					
                                <div className="form-group">
                                    <label>Nombre</label>
                                    <input type="text" className="form-control" onChange={onChange} name="name" value={product.name} required />
                                </div>
                                <div className="form-group">
                                    <label>Referencia</label>
                                    <input type="text" className="form-control" onChange={onChange} name="reference" value={product.reference} required />
                                </div>
                                <div className="form-group">
                                    <label>Precio</label>
                                    <input type="number" className="form-control" onChange={onChange} name="price" value={product.price} required />
                                </div>
                                <div className="form-group">
                                    <label>Peso</label>
                                    <input type="number" className="form-control" onChange={onChange} name="weight" value={product.weight} required />
                                </div>
                                <div className="form-group">
                                    <label>Categoria</label>
                                    <select value={product.category} onChange={onChange} name="category" className="form-control" required>
                                        <option value=""></option>
                                        <option value="hola">hola</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Stock</label>
                                    <input type="number" className="form-control" onChange={onChange} name="stock" value={product.stock} />
                                </div>

                            </div>
                            <div className="modal-footer">
                                <input type="button" className="btn btn-default" data-dismiss="modal" value="Cancelar" onClick={resetForm}/>
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
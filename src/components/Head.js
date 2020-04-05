import React from 'react';

class Head extends React.Component{
    render(){
        return (
            <div className="table-wrapper">
                <div className="table-title">
                    <div className="row">
                        <div className="col-sm-6">
                            <h2>Productos</h2>
                        </div>
                        <div className="col-sm-6">
                            <a href="#addProductModal" className="btn btn-success" data-toggle="modal"><i className="fa fa-plus"></i> <span>Agregar Producto</span></a>
                        </div>
                    </div>
                </div>                
            </div>
        )
    }
}

export default Head;
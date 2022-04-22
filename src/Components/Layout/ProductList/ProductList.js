import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Link } from 'react-router-dom';
import { productRows } from '../../dummydata';
import './ProductList.css';

const ProductList = () => {
    const [data, setData] = useState(productRows);

    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 80 },
        {
            field: 'product', headerName: 'Product', width: 200, renderCell: (params) => {
                return (
                    <div className='productListItem'>
                        <img className='productListImg' src={params.row.img} alt='' />
                        {params.row.name}
                    </div>
                )
            }
        },
        { field: 'stock', headerName: 'Stock', width: 220 },
        { field: 'status', headerName: 'Status', width: 140 },
        { field: 'price', headerName: 'Price', width: 145 },
        {
            field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
                return (
                    <>
                        <Link to={'/product/' + params.row.id}>
                            <button className='productListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlineIcon className='productListDelete' onClick={() => handleDelete(params.row.id)} />
                    </>
                )
            }
        },
    ];


    return (
        <div className='productList'>
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={5} rowsPerPageOptions={[5]} checkboxSelection />
        </div>
    )
}

export default ProductList;
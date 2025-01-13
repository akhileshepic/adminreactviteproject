import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'

import { CiFilter } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import {
    Checkbox,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TablePagination,
    TableRow,
    Paper,

} from '@mui/material';
import { Mycontext } from '../../context/Mycontext';

const ProductItem = () => {
    const context = useContext(Mycontext)
    const initialProducts = [
        { id: 1, name: 'Product A', image: 'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp', brand: 'Men', category: 'Fashion', price: 100, sale: 90 },
        { id: 2, name: 'Rustic Steel Computer', image: 'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp', brand: 'Men', category: 'Fashion', price: 200, sale: 180 },
        { id: 3, name: 'Product C', image: 'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp', brand: 'Men', category: 'Fashion', price: 300, sale: 270 },
        { id: 4, name: 'Product D', image: 'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp', brand: 'Femen', category: 'Fashion', price: 400, sale: 360 },
        { id: 5, name: 'Product E', image: 'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp', brand: 'Men', category: 'Fashion', price: 500, sale: 450 },
        { id: 6, name: 'Product F', image: 'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp', brand: 'Femen', category: 'Fashion', price: 600, sale: 540 },
        { id: 7, name: 'Product G', image: 'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp', brand: 'Men', category: 'Fashion', price: 700, sale: 630 },
    ];

    // State management
    const [products, setProducts] = useState(initialProducts);
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [categoryFilterVal, setCategoryFilterVal] = useState('');

    // Selection handlers
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = products.map((product) => product.id);
            setSelected(newSelected);
            return;
            alert(selected);
        }
        setSelected([]);

    };

    const handleClick = (id) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = [...selected, id];
        } else {
            newSelected = selected.filter((selectedId) => selectedId !== id);
        }

        setSelected(newSelected);
    };

    const isSelected = (id) => selected.includes(id);

    // Pagination handlers
    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // Action handlers
    const handleEdit = (id) => {
        alert(`Edit product with ID: ${id}`);
        // Add your edit logic here
    };
    const handleChangeCategory = (event) => {
        setCategoryFilterVal(event.target.value);
    };


    const handleDelete = (id) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete product with ID: ${id}?`);
        if (confirmDelete) {
            setProducts(products.filter((product) => product.id !== id));
        }
    };
    return (
        <div>
            <div className="TableItem w-full px-6  py-6 border rounded-md mt-6 bg-white">
                <h1 className='mb-3 font-bold text-[20px]'>Product</h1>
                <div className='flex items-center justify-between pb-4 pr-2'>
                    <div className='SerachCategort w-[25%]'>
                        <h2 className='text-[13px] mb-2 font-bold'>Search By Category</h2>
                        <Select
                            className='w-full'
                            size='small'
                            labelId="Category"
                            id="category"
                            value={categoryFilterVal}
                            label="Category"
                            onChange={handleChangeCategory}
                        >
                            <MenuItem value={'Men'}>Men</MenuItem>
                            <MenuItem value={'Female'}>Female</MenuItem>
                            <MenuItem value={'Kids'}>Kids</MenuItem>
                        </Select>
                    </div>
                    <div className='export w-[20%] ml-auto flex gap-2'>
                        <Button className='!bg-[#10B981] !text-white !capitalize '>Export</Button>
                        <Button className='bg-blue !text-white !capitalize' onClick={() => context.setIsOpenFullScreenPanel({
                            open: true,
                            model: 'Add Product'
                        })}>Add Product</Button>
                    </div>
                </div>

                <div className='w-full'>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            color="primary"
                                            indeterminate={
                                                selected.length > 0 && selected.length < products.length
                                            }
                                            checked={products.length > 0 && selected.length === products.length}
                                            onChange={handleSelectAllClick}
                                            inputProps={{
                                                'aria-label': 'select all products',
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>Product Name</TableCell>
                                    <TableCell>Category</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Sale</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((product) => {
                                        const isItemSelected = isSelected(product.id);
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={product.id}
                                                selected={isItemSelected}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        onChange={() => handleClick(product.id)}
                                                    />
                                                </TableCell>
                                                <TableCell>
                                                    <div className='flex items-center gap-4 '>
                                                        <img
                                                            src={product.image}
                                                            alt={product.name}
                                                            style={{ width: 50, height: 50, borderRadius: 5 }}
                                                        />
                                                        <div className='flex flex-col'>
                                                            <span className="text-[15px] font-[500]">{product.name}</span>
                                                            <span className="text-[13px] font-[400] text-[rgba(0,0,0,0.7)]">{product.brand}</span>
                                                        </div>

                                                    </div>
                                                </TableCell>
                                                <TableCell>{product.category}</TableCell>
                                                <TableCell>${product.price}</TableCell>
                                                <TableCell>${product.sale}</TableCell>
                                                <TableCell align="center">
                                                    <Button className='!min-w-[20px] !w-[35px] !text-black' onClick={() => handleEdit(product.id)} >
                                                        <CiEdit className='text-[20px]' />
                                                    </Button>
                                                    <Button className='!min-w-[20px] !w-[35px] !text-black'>
                                                        <FaRegEye className='text-[20px]' />
                                                    </Button>
                                                    <Button className='!min-w-[20px] !w-[35px] !text-black'>
                                                        <RiDeleteBin6Line className='text-[20px]' />
                                                    </Button>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[5, 10, 25]}
                        component="div"
                        count={products.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default ProductItem
import { Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'

import { CiFilter } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

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
import { useMyContext } from '../../context/Mycontext';
import { getAll } from '../../utils/api';
const baseUrl = import.meta.env.VITE_BASE_FILE_URL;
const Category = () => {
    const context = useMyContext()


    // State management
    const [category, setcategory] = useState([]);
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const fetchall = async () => {
        try {
            const response = await getAll('category');

            if (response.success && Array.isArray(response.data.data)) {

                setcategory(response.data.data);
            } else {
                context.messageBox({ status: 'error', msg: response.message });

            }
        } catch (error) {
            console.error('Error fetching sliders:', error);
        }
    }

    useEffect(() => {
        fetchall();
    }, [context])

    // Selection handlers
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = category.map((product) => product.id);
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


    const handleDelete = (id) => {
        const confirmDelete = window.confirm(`Are you sure you want to delete product with ID: ${id}?`);
        if (confirmDelete) {
            setcategory(category.filter((product) => product.id !== id));
        }
    };
    return (
        <div>
            <div className="TableItem w-full px-6  py-6 border rounded-md mt-6 bg-white">
                <h1 className='mb-3 font-bold text-[20px]'>Category List</h1>
                <div className='flex items-center justify-between pb-4 pr-2'>

                    <div className='export w-[20%] ml-auto flex gap-2'>
                        <Button className='!bg-[#10B981] !text-white !capitalize '>Export</Button>
                        <Button className='bg-blue !text-white !capitalize' onClick={() => context.setIsOpenFullScreenPanel({
                            open: true,
                            model: 'Add Category'
                        })}>Add Category</Button>
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
                                                selected.length > 0 && selected.length < category.length
                                            }
                                            checked={category.length > 0 && selected.length === category.length}
                                            onChange={handleSelectAllClick}
                                            inputProps={{
                                                'aria-label': 'select all products',
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Image</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {category
                                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                    .map((product) => {
                                        const isItemSelected = isSelected(product.id);
                                        return (
                                            <TableRow
                                                hover
                                                role="checkbox"
                                                tabIndex={-1}
                                                key={product._id}
                                                selected={isItemSelected}
                                            >
                                                <TableCell padding="checkbox">
                                                    <Checkbox
                                                        color="primary"
                                                        checked={isItemSelected}
                                                        onChange={() => handleClick(product.id)}
                                                    />
                                                </TableCell>
                                                <TableCell>{product.name}</TableCell>
                                                <TableCell>
                                                    <div className='flex items-center gap-4 '>
                                                        <img
                                                            src={`${baseUrl}${product.image}`}
                                                            alt={product.name}
                                                            style={{ width: 100, height: 50, borderRadius: 5 }}
                                                        />

                                                    </div>
                                                </TableCell>
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
                        count={category.length}
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

export default Category
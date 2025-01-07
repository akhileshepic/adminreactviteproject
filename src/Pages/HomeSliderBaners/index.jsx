import { Button } from '@mui/material'
import React, { useContext, useState } from 'react'

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
import { Mycontext } from '../../App';
const HomeSliderBaners = () => {
    const context = useContext(Mycontext)
    const initialProducts = [
        { id: 1, image: 'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp' },
        { id: 2, image: 'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp' },
        { id: 3, image: 'https://isomorphic-furyroad.s3.amazonaws.com/public/products/modern/7.webp' },
    ];

    // State management
    const [homeSlider, setHomeSlider] = useState(initialProducts);
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);


    // Selection handlers
    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = homeSlider.map((product) => product.id);
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
            setHomeSlider(homeSlider.filter((product) => product.id !== id));
        }
    };
    return (
        <div>
            <div className="TableItem w-full px-6  py-6 border rounded-md mt-6 bg-white">
                <h1 className='mb-3 font-bold text-[20px]'>Home Slider Banner</h1>
                <div className='flex items-center justify-between pb-4 pr-2'>

                    <div className='export w-[20%] ml-auto flex gap-2'>
                        <Button className='!bg-[#10B981] !text-white !capitalize '>Export</Button>
                        <Button className='bg-blue !text-white !capitalize' onClick={() => context.setIsOpenFullScreenPanel({
                            open: true,
                            model: 'Add Slider'
                        })}>Add Slider</Button>
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
                                                selected.length > 0 && selected.length < homeSlider.length
                                            }
                                            checked={homeSlider.length > 0 && selected.length === homeSlider.length}
                                            onChange={handleSelectAllClick}
                                            inputProps={{
                                                'aria-label': 'select all products',
                                            }}
                                        />
                                    </TableCell>
                                    <TableCell>Image</TableCell>
                                    <TableCell align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {homeSlider
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
                                                            style={{ width: 300, height: 50, borderRadius: 5 }}
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
                        count={homeSlider.length}
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

export default HomeSliderBaners
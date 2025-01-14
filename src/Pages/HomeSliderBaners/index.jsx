import { Button } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'

import { CiFilter } from "react-icons/ci";
import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
const baseUrl = import.meta.env.VITE_BASE_FILE_URL;
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
import { deleteApi, getAll } from '../../utils/api';
import { useNavigate } from 'react-router-dom';
import { useMyContext } from '../../context/Mycontext';
const HomeSliderBaners = () => {
    const context = useMyContext();
    const navigate = useNavigate();

    const [homeSlider, setHomeSlider] = useState([]);
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const fetchData = async () => {
        try {
            const response = await getAll('slider');

            if (response.success && Array.isArray(response.data.data)) {

                setHomeSlider(response.data.data);
            } else {
                context.messageBox({ status: 'error', msg: response.message });

            }
        } catch (error) {
            console.error('Error fetching sliders:', error);
        }
    };
    useEffect(() => {

        fetchData();
    }, [context, navigate]);

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelected = homeSlider.map((product) => product.id);
            setSelected(newSelected);
            return;
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

    const handleChangePage = (event, newPage) => setPage(newPage);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const handleEdit = (id) => alert(`Edit slider with ID: ${id}`);

    const handleDelete = (id) => {
        if (window.confirm(`Are you sure you want to delete slider with ID: ${id}?`)) {
            setHomeSlider(homeSlider.filter((product) => product.id !== id));
        }
    };
    const deletslide = async (id) => {
        try {

            const response = await deleteApi(`slider/${id}`)
            if (response.success) {
                console.log(response)
                context.messageBox({ status: 'success', msg: response.data.message });
                fetchData();
            } else {
                context.messageBox({ status: 'error', msg: response.message });
            }
        } catch (error) {
            console.error('Error fetching sliders:', error);
        }
    }
    return (
        <div className="TableItem w-full px-6 py-6 border rounded-md mt-6 bg-white">
            <h1 className="mb-3 font-bold text-[20px]">Home Slider Banner</h1>
            <div className="flex items-center justify-between pb-4 pr-2">
                <div className="export w-[20%] ml-auto flex gap-2">
                    <Button className="!bg-[#10B981] !text-white !capitalize">Export</Button>
                    <Button
                        className="bg-blue !text-white !capitalize"
                        onClick={() =>
                            context.setIsOpenFullScreenPanel({ open: true, model: 'Add Slider' })
                        }
                    >
                        Add Slider
                    </Button>
                </div>
            </div>
            <div className="w-full">
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox
                                        color="primary"
                                        indeterminate={selected.length > 0 && selected.length < homeSlider.length}
                                        checked={homeSlider.length > 0 && selected.length === homeSlider.length}
                                        onChange={handleSelectAllClick}
                                    />
                                </TableCell>
                                <TableCell>Image</TableCell>
                                <TableCell align="center">Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Array.isArray(homeSlider) && homeSlider.length > 0 ? (
                                homeSlider.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((product) => {
                                    const isItemSelected = isSelected(product.id);
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={product._id} selected={isItemSelected}>
                                            <TableCell padding="checkbox">
                                                <Checkbox
                                                    color="primary"
                                                    checked={isItemSelected}
                                                    onChange={() => handleClick(product.id)}
                                                />
                                            </TableCell>
                                            <TableCell>
                                                <img
                                                    src={`${baseUrl}${product.image}`}
                                                    alt={product.name}
                                                    style={{ width: 150, height: 50, borderRadius: 5 }}
                                                />
                                            </TableCell>
                                            <TableCell align="center">
                                                <Button onClick={() => handleEdit(product._id)}>
                                                    <CiEdit className="text-[20px]" />
                                                </Button>
                                                <Button>
                                                    <FaRegEye className="text-[20px]" />
                                                </Button>
                                                <Button onClick={() => deletslide(product._id)}>
                                                    <RiDeleteBin6Line className="text-[20px]" />
                                                </Button>
                                            </TableCell>
                                        </TableRow>
                                    );
                                })
                            ) : (
                                <TableRow>
                                    <TableCell colSpan={3} align="center">
                                        No data available
                                    </TableCell>
                                </TableRow>
                            )}
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
    )
}

export default HomeSliderBaners
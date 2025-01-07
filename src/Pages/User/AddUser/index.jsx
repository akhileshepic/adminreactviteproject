import React, { useState } from 'react'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Rating from '@mui/material/Rating';
import UploadBox from '../../../Components/UploadBox';
import { FaRegImages } from 'react-icons/fa6';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { IoMdClose } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Button } from '@mui/material';
const AddUser = () => {
    const [productCategory, setProductCategory] = useState('');
    const [productCategorySub, setProductCategorySub] = useState('');
    const [productFeatured, setProductFeatured] = useState('');
    const [productRms, setProductRms] = useState('');
    const [productWeight, setProductWeight] = useState('');
    const [productSize, setProductSize] = useState('');

    const handleChangeCategory = (event) => {
        setProductCategory(event.target.value);
    };
    const handleChangeCategorySub = (event) => {
        setProductCategorySub(event.target.value);
    };
    const handleChangeProductFeatured = (event) => {
        setProductFeatured(event.target.value);
    };
    const handleChangeProductRms = (event) => {
        setProductRms(event.target.value);
    };
    const handleChangeProductWeight = (event) => {
        setProductWeight(event.target.value);
    };
    const handleChangeProductSize = (event) => {
        setProductSize(event.target.value);
    };
    return (
        <div className='p-5'>
            <form className='addProduct p-8 py-3'>
                <div className='scroll max-h-[70vh] overflow-y-scroll pr-4'>
                    <div className='grid grid-cols-1 mb-3'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Name</h3>
                            <input type='text' className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-sm p-3 text-sm' />
                        </div>
                    </div>

                    <div className='grid grid-cols-1 mb-3'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Description</h3>
                            <textarea type='text' className='w-full h-[140px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-sm p-3 text-sm' />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4  gap-4 mb-3'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Category</h3>
                            <Select
                                className='w-full h-[40px]'
                                labelId="productcategory"
                                size='small'
                                id="productcategory"
                                value={productCategory}
                                label="productcategory"
                                onChange={handleChangeCategory}

                            >
                                <MenuItem value={''}>None</MenuItem>
                                <MenuItem value={'Men'}>Men</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                                <MenuItem value={'Kids'}>Kids</MenuItem>
                            </Select>
                        </div>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Sub Category</h3>
                            <Select
                                className='w-full h-[40px]'
                                labelId="productcategory"
                                size='small'
                                id="productcategorysub"
                                value={productCategorySub}
                                label="productcategorysub"
                                onChange={handleChangeCategorySub}

                            >
                                <MenuItem value={''}>None</MenuItem>
                                <MenuItem value={'Men'}>Men</MenuItem>
                                <MenuItem value={'Female'}>Female</MenuItem>
                                <MenuItem value={'Kids'}>Kids</MenuItem>
                            </Select>
                        </div>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Price</h3>
                            <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-sm p-3 text-sm' />
                        </div>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Old Price</h3>
                            <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-sm p-3 text-sm' />
                        </div>
                    </div>
                    <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-4 mb-3'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Is Featured?</h3>
                            <Select
                                className='w-full h-[40px]'
                                labelId="productFeatured"
                                size='small'
                                id="productFeatured"
                                value={productFeatured}
                                label="productFeatured"
                                onChange={handleChangeProductFeatured}

                            >
                                <MenuItem value={'Men'}>True</MenuItem>
                                <MenuItem value={'Female'}>False</MenuItem>
                            </Select>
                        </div>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Stock</h3>
                            <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-sm p-3 text-sm' />
                        </div>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Brand</h3>
                            <input type='texbox' className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-sm p-3 text-sm' />
                        </div>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Discount</h3>
                            <input type='number' className='w-full h-[40px] border border-[rgba(0,0,0,0.3)] focus:outline-none focus:border-[rgba(0,0,0,0.5)] rounded-sm p-3 text-sm' />
                        </div>
                    </div>

                    <div className='grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 gap-4 mb-3'>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product RAMS</h3>
                            <Select
                                className='w-full h-[40px]'
                                labelId="productRms"
                                size='small'
                                id="productRms"
                                value={productRms}
                                label="productRms"
                                onChange={handleChangeProductRms}

                            >
                                <MenuItem value={'4GB'}>4GB</MenuItem>
                                <MenuItem value={'6GB'}>6GB</MenuItem>
                                <MenuItem value={'8GB'}>8GB</MenuItem>
                            </Select>
                        </div>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Weight</h3>
                            <Select
                                className='w-full h-[40px]'
                                labelId="productWeight"
                                size='small'
                                id="productWeight"
                                value={productWeight}
                                label="productWeight"
                                onChange={handleChangeProductWeight}

                            >
                                <MenuItem value={' '}>None</MenuItem>
                                <MenuItem value={'4GB'}>4KG</MenuItem>
                                <MenuItem value={'5GB'}>5KG</MenuItem>
                                <MenuItem value={'6GB'}>6KG</MenuItem>
                            </Select>
                        </div>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Size</h3>

                            <Select
                                className='w-full h-[40px]'
                                labelId="productSize"
                                size='small'
                                id="productSize"
                                value={productSize}
                                label="productSize"
                                onChange={handleChangeProductSize}

                            >
                                <MenuItem value={' '}>None</MenuItem>
                                <MenuItem value={'S'}>S</MenuItem>
                                <MenuItem value={'M'}>M</MenuItem>
                                <MenuItem value={'L'}>L</MenuItem>
                                <MenuItem value={'XL'}>XL</MenuItem>
                            </Select>
                        </div>
                        <div className='col'>
                            <h3 className='text-[14px] font-[500] mb-1'>Product Rating</h3>
                            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                        </div>
                    </div>

                    <div className='col w-full mt-5 border border-[rgba(0,0,0,0.3)] p-4 rounded-md shadow-md'>
                        <h1 className='font-[700] text-[18px]'>Media & Image</h1>
                        <div className="grid grid-cols-2 lg:grid-cols-6 md:grid-cols-6 gap-4">
                            <div className='uploadWrapper relative'>
                                <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] z-50 flex items-center justify-center cursor-pointer'><IoMdClose className='text-white text-[17px]' /></span>
                                <div className='uploadBox p-3 mb-2 rounded-md overflow-hidden border  border-dashed border-[rgba(0,0,0,0.3)]
                                 h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-50 flex items-center justify-center flex-col relative'>
                                    <span ></span>
                                    <LazyLoadImage
                                        alt={'image'}
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "1s" },
                                        }}
                                        className='w-full h-full object-cover'

                                        src={'https://api.spicezgold.com/download/file_1734772189809_op-nord-ce-3-lite-128-gb-8-gb-ram-pastel-lime-mobile-phone-digital-o493666102-p608711337-1-202404091704.webp'} // use normal <img> attributes as props
                                    />
                                </div>
                            </div>
                            <div className='uploadWrapper relative'>
                                <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] z-50 flex items-center justify-center cursor-pointer'><IoMdClose className='text-white text-[17px]' /></span>
                                <div className='uploadBox p-3 mb-2 rounded-md overflow-hidden border  border-dashed border-[rgba(0,0,0,0.3)]
                                 h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-50 flex items-center justify-center flex-col relative'>
                                    <span ></span>
                                    <LazyLoadImage
                                        alt={'image'}
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "1s" },
                                        }}
                                        className='w-full h-full object-cover'

                                        src={'https://api.spicezgold.com/download/file_1734772189809_op-nord-ce-3-lite-128-gb-8-gb-ram-pastel-lime-mobile-phone-digital-o493666102-p608711337-1-202404091704.webp'} // use normal <img> attributes as props
                                    />
                                </div>
                            </div>
                            <div className='uploadWrapper relative'>
                                <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] z-50 flex items-center justify-center cursor-pointer'><IoMdClose className='text-white text-[17px]' /></span>
                                <div className='uploadBox p-3 mb-2 rounded-md overflow-hidden border  border-dashed border-[rgba(0,0,0,0.3)]
                                 h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-50 flex items-center justify-center flex-col relative'>
                                    <span ></span>
                                    <LazyLoadImage
                                        alt={'image'}
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "1s" },
                                        }}
                                        className='w-full h-full object-cover'

                                        src={'https://api.spicezgold.com/download/file_1734772189809_op-nord-ce-3-lite-128-gb-8-gb-ram-pastel-lime-mobile-phone-digital-o493666102-p608711337-1-202404091704.webp'} // use normal <img> attributes as props
                                    />
                                </div>
                            </div>
                            <div className='uploadWrapper relative'>
                                <span className='absolute w-[20px] h-[20px] rounded-full overflow-hidden bg-red-700 -top-[5px] -right-[5px] z-50 flex items-center justify-center cursor-pointer'><IoMdClose className='text-white text-[17px]' /></span>
                                <div className='uploadBox p-3 mb-2 rounded-md overflow-hidden border  border-dashed border-[rgba(0,0,0,0.3)]
                                 h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-50 flex items-center justify-center flex-col relative'>
                                    <span ></span>
                                    <LazyLoadImage
                                        alt={'image'}
                                        effect="blur"
                                        wrapperProps={{
                                            // If you need to, you can tweak the effect transition using the wrapper style.
                                            style: { transitionDelay: "1s" },
                                        }}
                                        className='w-full h-full object-cover'

                                        src={'https://api.spicezgold.com/download/file_1734772189809_op-nord-ce-3-lite-128-gb-8-gb-ram-pastel-lime-mobile-phone-digital-o493666102-p608711337-1-202404091704.webp'} // use normal <img> attributes as props
                                    />
                                </div>
                            </div>
                            <UploadBox muliple={true} />
                        </div>
                    </div>
                </div>
                <hr />
                <br />
                <Button type="button" className="!bg-blue-700 !text-white !w-full flex gap-4"><IoCloudUploadOutline className='text-[25px]' />Publish and View</Button>

            </form>
        </div>
    )
}

export default AddUser
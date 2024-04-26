/* eslint-disable react/prop-types */
import { Button, Dialog, DialogBody } from "@material-tailwind/react";
import { useState } from "react";

const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);
  return (
    <>
      <Button
        type='button'
        onClick={handleOpen}
        className='w-full px-4 py-3 text-center text-gray-100 bg-[#798F46] border border-transparent dark:border-gray-700 hover:border-transparent hover:text-white hover:bg-[#353434] rounded-xl'
      >
        Buy now
      </Button>
      <Dialog open={open} handler={handleOpen} className=' bg-[#798F46]'>
        <DialogBody className=''>
          <div className='mb-3'>
            <input
              type='text'
              name='name'
              value={addressInfo.name}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  name: e.target.value,
                });
              }}
              placeholder='Enter your name'
              className='bg-white border border-transparent px-2 py-2 w-full rounded-md outline-none text-[#798F46] placeholder-[#798F46]'
            />
          </div>
          <div className='mb-3'>
            <input
              type='text'
              name='address'
              value={addressInfo.address}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  address: e.target.value,
                });
              }}
              placeholder='Enter your address'
              className='bg-white border border-transparent px-2 py-2 w-full rounded-md outline-none text-[#798F46]  placeholder-[#798F46] '
            />
          </div>

          <div className='mb-3'>
            <input
              type='number'
              name='pincode'
              value={addressInfo.pincode}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  pincode: e.target.value,
                });
              }}
              placeholder='Enter your pincode'
              className='bg-white border border-transparent px-2 py-2 w-full rounded-md outline-none text-[#798F46]  placeholder-[#798F46]'
            />
          </div>

          <div className='mb-3'>
            <input
              type='text'
              name='mobileNumber'
              value={addressInfo.mobileNumber}
              onChange={(e) => {
                setAddressInfo({
                  ...addressInfo,
                  mobileNumber: e.target.value,
                });
              }}
              placeholder='Enter your mobileNumber'
              className='bg-white border border-transparent px-2 py-2 w-full rounded-md outline-none text-[#798F46]  placeholder-[#798F46] '
            />
          </div>

          <div className=''>
            <Button
              type='button'
              onClick={() => {
                handleOpen();
                buyNowFunction();
              }}
              className='w-full px-4 py-3 text-center text-gray-100 bg-[#353434] border border-transparent dark:border-gray-700 rounded-lg'
            >
              Buy now
            </Button>
          </div>
        </DialogBody>
      </Dialog>
    </>
  );
};

export default BuyNowModal;

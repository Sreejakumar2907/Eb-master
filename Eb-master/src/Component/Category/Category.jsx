import { useNavigate } from "react-router";

const category = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Coconut_Drink%2C_Pangandaran.JPG",
    name: "Coconut",
  },
  {
    image:
      "https://pinklemontree.in/wp-content/uploads/2018/02/Nongu-gigantic.jpg",
    name: "Nungu",
  },
  {
    image: "https://dicencook.com/storage/2019/04/ragi-ambali-1-500x375.jpeg",
    name: "Millets",
  },
];

const Category = () => {
  const navigate = useNavigate();
  return (
    <div className='bg-[#1F4E3D]'>
      <div className='flex flex-col mt-5'>
        <h1 className='text-center text-7xl m-10 text-white leading-28'>
          Healthy Life With<br></br> Natural Fresh Products
        </h1>
        <div className='flex overflow-x-scroll lg:justify-center  hide-scroll-bar mt-5'>
          <div className='flex '>
            {category.map((item, index) => {
              return (
                <div key={index} className='px-3 lg:px-10 '>
                  <div
                    onClick={() => navigate(`/category/${item.name}`)}
                    className='max-w-xs rounded-full  transition-all cursor-pointer mb-1 '
                  >
                    <div className='flex justify-center mb-2 w-96 h-72 '>
                      <img src={item.image} alt='img' className='rounded-sm' />
                    </div>
                  </div>

                  <h1 className=' text-sm lg:text-2xl text-center font-medium title-font mt-6 mb-10 text-white '>
                    {item.name}
                  </h1>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;

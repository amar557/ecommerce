import { IoMdSearch } from "react-icons/io";
import { RiDeleteBin6Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";

function Categories() {
  return (
    <div className="mx-6  bg-slate-100 p-4">
      <h1 className="text-lg font-semibold capitalize">all Categories</h1>
      <p className="capitalize ">you have total 0 Categories</p>
      <div className="gap-4 flex items-start justify-center my-4">
        <div className="w-3/5 bg-white py-4 shadow-sm rounded-sm ">
          <div className="flex items-center  justify-between px-4 gap-3">
            <h1 className="text-lg font-semibold capitalize"> Categories</h1>
            <div className="border flex items-stretch justify-center ps-2 overflow-hidden rounded-md h-10">
              <input
                type="search"
                name=""
                id=""
                placeholder="search here"
                className="  placeholder:capitalize placeholder:text-slate-500 placeholder:font-medium  outline-none "
              />
              <button className="bg-black p-3 text-white  h-full  text-base">
                <IoMdSearch />
              </button>
            </div>
          </div>
          <div className="flex  gap-2 bg-slate-100  py-2 px-4 items-center mt-4 mx-2  justify-between">
            <p className="text-center w-1/5 capitalize font-semibold ">#</p>
            <p className="text-center w-1/5 capitalize font-semibold ">title</p>
            <p className="text-center w-1/5 capitalize font-semibold ">
              Options
            </p>
          </div>
          <div className="flex  gap-2 bg-white  py-2 px-4 items-center  mx-2  justify-between">
            <p className="text-center w-1/5 capitalize font-semibold ">1</p>
            <p className="text-center w-1/5 capitalize font-semibold ">bata</p>

            <p className="text-center w-20 capitalize font-semibold flex  items-center justify-center  gap-2">
              <button className="text-sm h-6 grid place-items-center w-6 rounded-full bg-slate-200">
                <TbEdit />
              </button>

              <button className="text-sm h-6 grid place-items-center w-6 rounded-full bg-red-100 text-red-500">
                <RiDeleteBin6Line />
              </button>
            </p>
          </div>
        </div>
        <div className="w-2/5 bg-white p-4">
          <h1 className="text-lg font-bold capitalize">add Categories</h1>
          <form action="">
            <label
              htmlFor=""
              className="block text-sm capitalize font-semibold my-2"
            >
              title*
            </label>
            <input
              type="text"
              name=""
              className="block p-3 placeholder:capitalize border rounded-md focus:border-blue-200 focus:border outline-none bg-slate-50 w-full"
              placeholder="brand title"
              id=""
            />
            <button className="bg-black text-white py-2 w-full rounded-md my-3">
              publish
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Categories;

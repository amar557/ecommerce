import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { top100Films } from "../Data";
import { useRef, useState } from "react";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FiUploadCloud } from "react-icons/fi";
function AddProduct() {
  const navigate = useNavigate();
  const thumbnailImg = useRef();
  const galleryImgs = useRef();
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [age, setAge] = useState("");
  const [file, setFile] = useState(null);
  const [galleryImages, setGalleryImages] = useState(null);
  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    setSelectedSizes((prevSelectedSizes) => {
      if (isChecked) {
        return [...prevSelectedSizes, value];
      } else {
        return prevSelectedSizes.filter((size) => size !== value);
      }
    });
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="px-6 bg-slate-100">
      <div className="flex items-center justify-between w-full">
        <h2 className="capitalize font-semibold text-xl">add product</h2>
        <button
          className="bg-black uppercase  rounded-sm text-white flex gap-1  py-2 px-4 items-center justify-center"
          onClick={() => navigate(-1)}
        >
          <GoArrowLeft />
          <span className="font-semibold text-sm  ">back</span>
        </button>
      </div>

      <form action="" className="w-1/2 mx-auto bg-white p-4 my-8">
        <h1 className="text-xl font-semibold border-b py-4 capitalize">
          product information
        </h1>
        <label
          htmlFor=""
          className="block text-sm capitalize font-semibold my-2"
        >
          Product Name*
        </label>
        <input
          type="text"
          name=""
          className="block p-3 placeholder:capitalize border rounded-md focus:border-blue-200 focus:border outline-none bg-slate-50 w-full"
          placeholder="product name"
          id=""
        />
        <label
          htmlFor=""
          className="block text-sm capitalize font-semibold my-2"
        >
          description
        </label>
        <textarea
          name=""
          id=""
          placeholder="product description "
          rows={4}
          className="p-2 border rounded-md bg-slate-50 placeholder:capitalize block w-full outline-none "
        ></textarea>
        <div className="flex w-full items-center justify-between gap-3 my-4">
          <Stack className="grow">
            <label
              htmlFor=""
              className="block text-sm capitalize font-semibold my-2"
            >
              category*
            </label>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              className="grow  rounded-md bg-slate-50 "
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Stack>
          <Stack className="grow">
            <label
              htmlFor=""
              className="block text-sm capitalize font-semibold my-2"
            >
              brand*
            </label>
            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              className="grow   rounded-md bg-slate-50"
              options={top100Films.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search input"
                  InputProps={{
                    ...params.InputProps,
                    type: "search",
                  }}
                />
              )}
            />
          </Stack>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              value="9"
              className="transform scale-110"
              checked={selectedSizes.includes("9")}
              onChange={handleCheckboxChange}
            />
            <span>9</span>
          </label>
        </div>
        <div>
          <label
            htmlFor=""
            className="block text-sm capitalize font-semibold my-2"
          >
            color
          </label>
          <input type="color" className=" border w-1/2 box-border" />
        </div>

        <FormControlLabel label="offer" control={<Checkbox />} />

        <label
          htmlFor=""
          className="block text-sm capitalize font-semibold my-2"
        >
          gender
        </label>
        <Box sx={{ minWidth: 120, marginY: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              className="bg-slate-50"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={"female"}>male</MenuItem>
              <MenuItem value={"male"}>female</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <label
          htmlFor=""
          className="block text-sm capitalize font-semibold my-2"
        >
          for*
        </label>
        <Box sx={{ minWidth: 120, marginY: 2 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
              className="bg-slate-50"
            >
              <MenuItem value={"female"}>man</MenuItem>
              <MenuItem value={"male"}>woman</MenuItem>
              <MenuItem value={"boys"}>boys</MenuItem>
              <MenuItem value={"girls"}>girls</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <div>
          <label
            htmlFor=""
            className="block text-sm capitalize font-semibold my-2"
          >
            price*
          </label>
          <input
            type="number"
            name=""
            className="block appearance-none p-3 placeholder:capitalize border rounded-md focus:border-blue-200 focus:border outline-none bg-slate-50 w-full"
            placeholder="price"
            id=""
          />
          <label
            htmlFor=""
            className="block text-sm capitalize font-semibold my-2"
          >
            discount price
          </label>
          <input
            type="number"
            name=""
            className="block p-3 placeholder:capitalize border rounded-md focus:border-blue-200 focus:border outline-none bg-slate-50 w-full"
            placeholder="discount price should be less than original price"
            id=""
          />
        </div>
        <div>
          <label
            htmlFor=""
            className="block text-sm capitalize font-semibold my-2"
          >
            select thumbnail image: *
          </label>
          <input
            type="file"
            name=""
            id=""
            onChange={(e) => setFile(e.target.files[0])}
            ref={thumbnailImg}
            hidden
          />
          <label
            htmlFor=""
            className="flex items-center justify-start border-blue-200 border w-max p-3 text-base transition-all gap-3  hover:bg-blue-200 hover:shadow-2xl shadow-blue-100 capitalize font-semibold my-2 cursor-pointer "
            onClick={() => thumbnailImg.current.click()}
          >
            <FiUploadCloud />
            <span>select image</span>
          </label>
        </div>
        <div>
          <label
            htmlFor=""
            className="block text-sm capitalize font-semibold my-2"
          >
            select gallery images: (max: 6 images) *
          </label>
          <input
            type="file"
            name=""
            id=""
            multiple
            onChange={(e) => setGalleryImages(e.target.files)}
            ref={galleryImgs}
            hidden
          />
          <label
            htmlFor=""
            className="flex items-center cursor-pointer justify-start border-blue-200 border w-max p-3 text-base transition-all gap-3  hover:bg-blue-200 hover:shadow-2xl shadow-blue-100 capitalize font-semibold my-2 "
            onClick={() => galleryImgs.current.click()}
          >
            <FiUploadCloud />
            <span>select images</span>
          </label>
        </div>
        <button
          className="w-full bg-black text-white py-2 rounded-md uppercase my-2"
          type="submit"
        >
          create list
        </button>
      </form>
    </div>
  );
}

export default AddProduct;

import { fetchCategories, postCategories } from "../../helpers/axiosHelper";
import { toast } from "react-toastify";
import { setCategories } from "./CategorySlice";

export const postCatToDb = (data) => async (dispatch) => {
  const { status, message } = await postCategories(data);
  toast[status](message);
  status === "success" && dispatch(getAllCat());
};

export const getAllCat = (id) => async (dispatch) => {
  const { status, result } = await fetchCategories(id);
  status === "success" && dispatch(setCategories(result));
};

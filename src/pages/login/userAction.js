import { loginAdminUser } from "../../helpers/axiosHelper";
import { toast } from "react-toastify";
import { setAdminUser } from "./userSlice";

export const loginUserAction = (data) => async (dispatch) => {
  const resultPromise = loginAdminUser(data);
  toast.promise(resultPromise, { pending: "please wait..." });
  const { status, message, user, signToken, refreshJwt } = await resultPromise;
  toast[status](message);
  if (status === "success") {
    sessionStorage.setItem("accessJwt", signToken);
    localStorage.setItem("refreshJwt", refreshJwt);
    dispatch(setAdminUser(user));
  }
};

export const adminLogout = (dispatch) => {
  dispatch(setAdminUser({}));
};

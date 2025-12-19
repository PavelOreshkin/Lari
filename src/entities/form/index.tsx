import type { ChangeEvent } from "react";
import { create } from "zustand";

const initialState = {
  name: "",
  secondName: "",
  phone: "",
  additional: "",
};

type FromType = {
  form: {
    name: string;
    secondName: string;
    phone: string;
    additional: string;
  };
  changeField: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const useForm = create<FromType>((set) => ({
  form: initialState,
  changeField: (event) =>
    set((state) => {
      const { value, name } = event.target || {};
      return { ...state, form: { ...state.form, [name]: value } };
    }),
}));

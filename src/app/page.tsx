"use client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useUser } from "../context/UserContext";
import { saveAs } from "file-saver";
import PDFDocument from "../components/PDFDocument";
import { pdf } from "@react-pdf/renderer";

const schema = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.string().min(10).required(),
  position: yup.string(),
  description: yup.string(),
});

export default function Home() {
  const router = useRouter();
  const { setUserData } = useUser();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data: any, action: "view" | "download") => {
    setUserData(data);
    if (action === "view") {
      router.push("/preview");
    } else {
      const blob = await pdf(<PDFDocument {...data} />).toBlob();
      saveAs(blob, "resume.pdf");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <form className="bg-white rounded-lg shadow-md p-8 space-y-4 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4">Add Your Details</h2>

        <div className="relative">
          <img src="/user.svg" alt="User" className="absolute left-3 top-3 w-5 h-5" />
          <input
            {...register("name")}
            placeholder="e.g. John Doe"
            className="w-full border p-2 pl-10 rounded"
          />
          {errors.name && <p className="text-red-500 text-sm">Name is required</p>}
        </div>

        <div className="relative">
          <img src="/mail.svg" alt="Email" className="absolute left-3 top-3 w-5 h-5" />
          <input
            {...register("email")}
            placeholder="e.g. johndoe@gmail.com"
            className="w-full border p-2 pl-10 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">Email is invalid</p>}
        </div>

        <div className="relative">
          <img src="/phone-call.svg" alt="Phone" className="absolute left-3 top-3 w-5 h-5" />
          <input
            {...register("phone")}
            placeholder="e.g. +91 9876543210"
            className="w-full border p-2 pl-10 rounded"
          />
          {errors.phone && <p className="text-red-500 text-sm">Phone number is invalid</p>}
        </div>

        <div className="relative">
          <img src="/position.svg" alt="Position" className="absolute left-3 top-3 w-5 h-5" />
          <input
            {...register("position")}
            placeholder="e.g. Junior Frontend Developer"
            className="w-full border p-2 pl-10 rounded"
          />
        </div>

        <div className="relative">
          <img src="/Description.svg" alt="Description" className="absolute left-3 top-3 w-5 h-5" />
          <textarea
            {...register("description")}
            placeholder="e.g. Work experiences"
            className="w-full border p-2 pl-10 rounded"
          />
        </div>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={handleSubmit((data) => onSubmit(data, "view"))}
            className="bg-green-700 text-white w-full py-2 rounded hover:bg-green-800"
          >
            View PDF
          </button>
          <button
  type="button"
  onClick={handleSubmit((data) => onSubmit(data, "download"))}
  className="bg-green-700 text-white w-full py-2 rounded hover:bg-green-800 flex items-center justify-center gap-2"
>
  <img src="/Download.svg" alt="Download" className="w-5 h-5" />
  Download PDF
</button>

        </div>
      </form>
    </div>
  );
}

import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { additems } from "../Redux/reservationslice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { unwrapResult } from "@reduxjs/toolkit";

export default function Reservation() {
  const [isDisabled, setIsDisabled] = useState(true);

  const Schema = Yup.object({
    patientName: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(11, "Name must be less than 11 characters")
      .required("Name is required"),
    gender: Yup.string()
      .oneOf(["Male", "Female"], "Invalid gender selection")
      .required("Gender is required"),
    toggle: Yup.boolean().required("You must select a status"),
    age: Yup.number()
      .min(1, "Age must be greater than 0")
      .max(120, "Age must be realistic")
      .required("Age is required"),
    bookingDate: Yup.date().required("Booking date is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phoneNumber: Yup.string()
      .matches(/^(01[0125][0-9]{8})$/, "Must be a valid Egyptian phone number")
      .required("Phone number is required"),
    whatsApp: Yup.string()
      .matches(
        /^(01[0125][0-9]{8})$/,
        "Must be a valid Egyptian WhatsApp number"
      )
      .required("WhatsApp number is required"),
    details: Yup.string().max(500, "Details must be less than 500 characters"),
  });

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  async function handleReservation(values) {
    try {
      const response = await dispatch(additems(values));
      const Result = unwrapResult(response);
      // console.log(Result);
      toast.success("تم تسجيل الحجز بنجاح!");

      setTimeout(() => {
        Navigate("/");
      }, 2600);
    } catch (err) {
      console.log(err);
    }
  }

  const formik = useFormik({
    initialValues: {
      patientName: "",
      gender: "",
      age: "",
      bookingDate: "",
      phoneNumber: "",
      toggle: "",
      whatsApp: "",
      email: "",
      detials: "",
    },
    validationSchema: Schema,
    onSubmit: (values) => handleReservation(values),
  });

  useEffect(() => {
    if (formik.dirty && formik.isValid) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [formik.dirty, formik.isValid]);

  return (
    <div
      className="container mx-auto"
      style={{
        backgroundImage: `url(Tools.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="flex justify-center items-center mt-10">
        <span className="text-3xl md:text-4xl my-10 bg-blue-500 font-bold text-white px-4 py-2 rounded-lg shadow-lg">
          Register Now
        </span>
      </div>

      <form
        onSubmit={formik.handleSubmit}
        className="max-w-xl mx-auto mt-10 bg-white shadow-lg rounded-lg p-6 opacity-90"
      >
        <div className="mb-6">
          <label
            htmlFor="patientName"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            name="patientName"
            id="patientName"
            value={formik.values.patientName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {formik.errors.patientName && formik.touched.patientName && (
            <div className="text-sm text-red-600 mt-1">
              {formik.errors.patientName}
            </div>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {formik.errors.email && formik.touched.email && (
            <div className="text-sm text-red-600 mt-1">
              {formik.errors.email}
            </div>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="gender"
            className="block text-sm font-medium text-gray-700"
          >
            Gender:
          </label>
          <select
            name="gender"
            id="gender"
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          >
            <option value="" label="Select gender" />
            <option value="Male" label="Male" />
            <option value="Female" label="Female" />
          </select>
          {formik.errors.gender && formik.touched.gender && (
            <div className="text-sm text-red-600 mt-1">
              {formik.errors.gender}
            </div>
          )}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">
            Have you visited before?
          </label>
          <div className="flex items-center mt-2 gap-3">
            <input
              type="radio"
              name="toggle"
              id="toggleYes"
              value="true"
              checked={formik.values.toggle === true}
              onChange={() => formik.setFieldValue("toggle", true)}
              onBlur={formik.handleBlur}
              className="w-4 h-4"
            />
            <label htmlFor="toggleYes" className="ml-2 text-sm text-gray-900">
              Yes
            </label>
            <input
              type="radio"
              name="toggle"
              id="toggleNo"
              value="false"
              checked={formik.values.toggle === false}
              onChange={() => formik.setFieldValue("toggle", false)}
              onBlur={formik.handleBlur}
              className="w-4 h-4 ml-4"
            />
            <label htmlFor="toggleNo" className="ml-2 text-sm text-gray-900">
              No
            </label>
          </div>
          {formik.touched.toggle && formik.errors.toggle && (
            <div className="text-sm text-red-600 mt-1">
              {formik.errors.toggle}
            </div>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age:
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={formik.values.age}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {formik.errors.age && formik.touched.age && (
            <div className="text-sm text-red-600 mt-1">{formik.errors.age}</div>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number:
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            value={formik.values.phoneNumber}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {formik.errors.phoneNumber && formik.touched.phoneNumber && (
            <div className="text-sm text-red-600 mt-1">
              {formik.errors.phoneNumber}
            </div>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="bookingDate"
            className="block text-sm font-medium text-gray-700"
          >
            Booking Date:
          </label>
          <input
            type="date"
            name="bookingDate"
            id="bookingDate"
            value={formik.values.bookingDate}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {formik.errors.bookingDate && formik.touched.bookingDate && (
            <div className="text-sm text-red-600 mt-1">
              {formik.errors.bookingDate}
            </div>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="whatsApp"
            className="block text-sm font-medium text-gray-700"
          >
            WhatsApp:
          </label>
          <input
            type="tel"
            name="whatsApp"
            id="whatsApp"
            value={formik.values.whatsApp}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          />
          {formik.errors.whatsApp && formik.touched.whatsApp && (
            <div className="text-sm text-red-600 mt-1">
              {formik.errors.whatsApp}
            </div>
          )}
        </div>

        <div className="mb-6">
          <label
            htmlFor="detials"
            className="block text-sm font-medium text-gray-700"
          >
            Details:
          </label>
          <textarea
            name="detials"
            id="detials"
            value={formik.values.detials}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            rows="4"
          ></textarea>
          {formik.errors.detials && formik.touched.detials && (
            <div className="text-sm text-red-600 mt-1">
              {formik.errors.detials}
            </div>
          )}
        </div>

        <div className="mt-6 flex justify-center gap-6">
          <button
            type="submit"
            className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            disabled={isDisabled}
          >
            Submit
          </button>
          <button
            onClick={() => formik.resetForm()}
            type="button"
            className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}

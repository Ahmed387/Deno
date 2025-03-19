import { useFormik } from "formik";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { additems } from "../Redux/reservationslice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { unwrapResult } from "@reduxjs/toolkit";
import { useTranslation } from "../../hooks/useTranslation"; // استيراد useTranslation

export default function Reservation() {
  const [isDisabled, setIsDisabled] = useState(true);
  const { t } = useTranslation(); // استخدام الترجمة

  const Schema = Yup.object({
    patientName: Yup.string()
      .min(3, t("nameMin")) // ترجمة النصوص
      .max(11, t("nameMax"))
      .required(t("nameRequired")),
    gender: Yup.string()
      .oneOf([t("male"), t("female")], t("genderInvalid"))
      .required(t("genderRequired")),
    toggle: Yup.boolean().required(t("statusRequired")),
    age: Yup.number()
      .min(1, t("ageMin"))
      .max(120, t("ageMax"))
      .required(t("ageRequired")),
    bookingDate: Yup.date().required(t("bookingDateRequired")),
    email: Yup.string().email(t("emailInvalid")).required(t("emailRequired")),
    phoneNumber: Yup.string()
      .matches(/^(01[0125][0-9]{8})$/, t("phoneInvalid"))
      .required(t("phoneRequired")),
    whatsApp: Yup.string()
      .matches(/^(01[0125][0-9]{8})$/, t("whatsAppInvalid"))
      .required(t("whatsAppRequired")),
    details: Yup.string().max(500, t("detailsMax")),
  });

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  async function handleReservation(values) {
    try {
      const response = await dispatch(additems(values));
      const Result = unwrapResult(response);
      toast.success(t("reservationSuccess"));

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
      toggle: "false",
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
    <>
      <div
        className=" mx-auto w-auto"
        style={{
          backgroundImage: `url(Tools.webp)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div className="flex justify-center items-center mb-5">
          <span className="text-3xl md:text-4xl  bg-blue-500 font-bold text-white px-4 py-2 rounded-lg shadow-lg">
            {t("registerNow")}
          </span>
        </div>

        <form
          onSubmit={formik.handleSubmit}
          className="md:max-w-xl mx-auto  bg-transparent shadow-lg rounded-lg p-6 opacity-90"
        >
          <div className="mb-6">
            <label
              htmlFor="patientName"
              className="block text-md font-semibold text-gray-700"
            >
              {t("name")}
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
              className="block text-md font-semibold text-gray-700"
            >
              {t("email")}
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
              className="block text-md font-semibold text-gray-700"
            >
              {t("gender")}
            </label>
            <select
              name="gender"
              id="gender"
              value={formik.values.gender}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            >
              <option value="" label={t("selectGender")} />
              <option value="Male" label={t("male")} />
              <option value="Female" label={t("female")} />
            </select>
            {formik.errors.gender && formik.touched.gender && (
              <div className="text-sm text-red-600 mt-1">
                {formik.errors.gender}
              </div>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="age"
              className="block text-md font-semibold text-gray-700"
            >
              {t("age")}
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
              <div className="text-sm text-red-600 mt-1">
                {formik.errors.age}
              </div>
            )}
          </div>

          <div className="mb-6">
            <label
              htmlFor="phoneNumber"
              className="block text-md font-semibold text-gray-700"
            >
              {t("phoneNumber")}
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
              className="block text-md font-semibold text-gray-700"
            >
              {t("bookingDate")}
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
              className="block text-md font-semibold text-gray-700"
            >
              {t("whatsApp")}
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
              className="block text-md font-semibold text-gray-700"
            >
              {t("details")}
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
              {t("submit")}
            </button>
            <button
              onClick={() => formik.resetForm()}
              type="button"
              className="text-white bg-red-600 hover:bg-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              {t("clear")}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

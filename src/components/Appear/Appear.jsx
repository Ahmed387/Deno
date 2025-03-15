import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getitems } from "../Redux/getitemslice";
import { deleteitem } from "../Redux/Deleteslice";
import { getspecialitem } from "../Redux/Searchslice";

export default function Appear() {
  let items = useSelector((state) => state.getallData.items);
  let searcheditem = useSelector((state) => state.searchData.items);
  let searchError = useSelector((state) => state.searchData.error);
  const [searchId, setSearchId] = useState("");
  const [loading, setLoading] = useState(false); // إضافة حالة التحميل

  let dispatch = useDispatch();

  async function fetchData() {
    setLoading(true); // تعيين حالة التحميل إلى true
    await dispatch(getitems());
    setLoading(false); // تعيين حالة التحميل إلى false بعد الجلب
  }

  async function Delete(id) {
    await dispatch(deleteitem(id)); // انتظار إتمام الحذف
    await fetchData(); // جلب البيانات بعد الحذف
  }

  async function Search(id, event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    if (searchId.length === 0) {
      fetchData();
    } else {
      await dispatch(getspecialitem(id));
    }
  }

  useEffect(() => {
    fetchData();
  }, [dispatch]);

  const dataToRender = searchId.length > 0 ? searcheditem : items;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 relative">
      <form className="max-w-md mx-auto my-6">
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Search by ID..."
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            required
          />
          <button
            onClick={(e) => Search(searchId, e)} // تمرير الحدث لمنع إعادة تحميل الصفحة
            type="button"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2"
          >
            Search
          </button>
        </div>
      </form>
      {searchError && searchId && (
        <p className="text-red-500 text-center">{searchError}</p>
      )}
      {loading && <div className="text-center">Loading...</div>}{" "}
      {/* عرض حالة التحميل */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dataToRender.map((item) => (
          <div
            key={item.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md p-4"
          >
            <div className="flex items-center space-x-4">
              <h5 className="text-xl font-bold text-gray-900">
                {item.patientName}
              </h5>
              <div className="px-2 text-red-600 font-semibold text-xl">
                ID: {item.id}
              </div>
            </div>
            <div className="mt-4 text-gray-700">
              <p>
                Booking:{" "}
                <span className="font-semibold">
                  {new Date(item.bookingDate).toLocaleDateString()}
                </span>
              </p>
              <p>
                Phone:{" "}
                <a href={`tel:${item.phoneNumber}`} className="text-blue-500">
                  {item.phoneNumber}
                </a>
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${item.email}`} className="text-blue-500">
                  {item.email}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href={`https://wa.me/${item.whatsApp}`}
                  className="text-blue-500"
                >
                  {item.whatsApp}
                </a>
              </p>
            </div>
            <div className="mt-5 flex justify-center items-center">
              <span className="text-sm text-gray-500">
                Created On: {new Date(item.createdAt).toLocaleDateString()}
              </span>
            </div>
            <div className="flex justify-center items-center mt-5 gap-4">
              <button
                type="button"
                onClick={() => Delete(item.id)}
                className="text-white bg-red-600 hover:bg-red-800 font-medium rounded-lg text-xl px-5 py-2.5"
              >
                Delete
              </button>
              <button
                type="button"
                className="text-white bg-blue-600 hover:bg-blue-800 font-medium rounded-lg text-xl px-5 py-2.5"
              >
                Update
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

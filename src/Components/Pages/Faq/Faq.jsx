import React, { useState } from "react";
import JoditEditor from "jodit-react";
import { IoPencil, IoTrash, IoEye } from "react-icons/io5";

const Faq = () => {
  const [banners] = useState([
    {
      question: "How Can This System Help Manage Inventory?",
      answer: [
          "Track all medicines and supplies in stock, categorized by name, batch, and expiry dates.",
          "Get low-stock alerts to ensure timely restocking.",
          "Maintain detailed logs for purchases, returns, and damages.",
      ],
  },
  {
      question: "Can I Track Medicine Expiry Dates?",
      answer: [
          "Yes, the system provides detailed tracking of expiry dates for all stocked medicines.",
          "Receive automated notifications for upcoming expirations to ensure timely action.",
          "Generate reports to identify and remove expired medicines from inventory.",
      ],
  },
  {
      question: "What Reports Can I Generate?",
      answer: [
          "Daily, weekly, and monthly sales reports for better business insights.",
          "Inventory usage reports to track high-demand medicines.",
          "Profit and loss statements to analyze business performance over time.",
      ],
  },
  {
      question: "How Does This System Handle Customer Records?",
      answer: [
          "Maintain a database of customer details, including contact information and prescription history.",
          "Easily retrieve past purchase records for customer inquiries.",
          "Streamline customer loyalty programs with automated points tracking.",
      ],
  },
  {
      question: "Is This System User-Friendly for My Staff?",
      answer: [
          "Yes, the system is designed with an intuitive interface that is easy to learn and use.",
          "Provide role-based access to ensure security and data privacy.",
          "Includes training documentation and support for quick onboarding.",
      ],
  },]);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [previewData, setPreviewData] = useState(null);

  const handleEditClick = () => {
    setEditModalVisible(true);
  };

  const handleDeleteClick = () => {
    setDeleteModalVisible(true);
  };

  const handlePreviewClick = (banner) => {
    setPreviewData(banner);
  };

  const closeModals = () => {
    setEditModalVisible(false);
    setDeleteModalVisible(false);
    setPreviewData(null);
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-gray-100 h-max p-8">
      <div className="w-full bg-white shadow-xl rounded-lg overflow-hidden p-8">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-6 rounded-lg mb-6">
          <h1 className="text-3xl font-bold">FAQ  SECTION</h1>
          <p className="mt-2 text-sm">Edit the faq  section content below</p>
        </div>

        {/* Form Section */}
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Edit Content</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-600 font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                placeholder="Enter your title"
                className="px-4 py-2 border w-full max-w-md border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>
            <div>
              <label className="block text-gray-600 font-medium mb-1">Description</label>
              <JoditEditor />
            </div>
            <div className="text-left">
              <button
                type="button"
                className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-200">
                Save Changes
              </button>
            </div>
          </form>
        </div>

        {/* Manage Data Table */}
        <div className="bg-white w-11/12 mx-auto border rounded py-6 shadow-md">
          <h2 className="text-lg w-11/12 mx-auto font-medium mb-4">Manage Data</h2>
          <div className="md:w-11/12 mx-auto">
            <table className="w-full bg-white rounded shadow-lg border-collapse border border-gray-200">
              <thead>
                <tr className="bg-gray-200 text-gray-700 font-semibold">
                  <th className="p-4 text-left">Title</th>
                  <th className="p-4 text-left">Subtitle</th>
                  <th className="p-4 text-center">Actions</th>
                  <th className="p-4 text-center">Preview</th>
                </tr>
              </thead>
              <tbody>
                {banners.map((banner, index) => (
                  <tr key={index} className="border-b hover:bg-gray-100 transition">
                    <td className="p-4">{banner.question}</td>
                    <td className="p-4">{banner.answer}</td>
                    <td className="p-4 text-center">
                      <div className="flex gap-2 justify-center items-center">
                        <button
                          onClick={handleEditClick}
                          className="px-4 py-2 bg-yellow-400 text-white rounded-md flex items-center gap-2 hover:bg-yellow-500 transition">
                          <IoPencil />
                          Edit
                        </button>
                        <button
                          onClick={handleDeleteClick}
                          className="px-4 py-2 bg-red-500 text-white rounded-md flex items-center gap-2 hover:bg-red-600 transition">
                          <IoTrash />
                          Delete
                        </button>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <button
                        onClick={() => handlePreviewClick(banner)}
                        className="px-4 py-2 bg-green-500 text-white rounded-md flex items-center gap-2 hover:bg-green-600 transition">
                        <IoEye />
                        Preview
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Edit Modal */}
      {editModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-center">Edit Banner</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-gray-600 font-medium mb-1">Title</label>
                <input
                  type="text"
                  placeholder="Banner Title"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
              <div>
                <label className="block text-gray-600 font-medium mb-1">Subtitle</label>
                <input
                  type="text"
                  placeholder="Banner Subtitle"
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"/>
              </div>
            </form>
            <div className="flex justify-end gap-4 mt-6">
              <button
                onClick={closeModals}
                className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition">
                Cancel
              </button>
              <button
                onClick={closeModals}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      {deleteModalVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white px-6 py-8 rounded shadow-md max-w-sm w-full">
            <p className="text-lg text-center font-medium mb-4">
              Are you sure you want to delete this banner?
            </p>
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={closeModals}
                className="px-8 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                Yes
              </button>
              <button
                onClick={closeModals}
                className="px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Preview Modal */}
      {previewData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800 text-left">Preview Banner</h2>
            <div className="text-left">
              <h3 className="text-lg font-bold">{previewData.question}</h3>
              <p className="text-gray-700 mt-2">{previewData.answer}</p>
            </div>
            <div className="flex justify-start gap-4 mt-4">
              <button
                onClick={closeModals}
                className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Faq;

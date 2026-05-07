import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IoMdClose } from "react-icons/io";
import { IoMdCheckmarkCircle } from "react-icons/io";

export default function UnsubscribeConfirmationModal({
  onClose,
  token,
}) {
  const [selectedReason, setSelectedReason] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const reasons = [
    "Too many emails",
    "Not relevant to me",
    "I didn’t sign up for this",
    "Just taking a break",
    "Others"
  ];

  const handleUnsubscribe = async () => {
    if (!selectedReason) return;

    try {
      setLoading(true);

      const res = await fetch("/api/unsubscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token, reason: selectedReason }),
      });

     const data = await res.json();

    if (!res.ok) {
    alert(data.message || "Something went wrong");
    setLoading(false);
  return;
}
      setSuccess(true);
      setLoading(false);

      // clean URL
      window.history.replaceState({}, document.title, "/");

    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-center justify-center
                 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative bg-[#0B0F14]/60 border border-cyan-600 border-t-8
                   rounded-xl px-8 py-10 w-[90%] max-w-md
                   overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <motion.button
          whileHover={{ scale: 1.1, rotate: 90 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={onClose}
          className="absolute top-4 right-4
                     w-9 h-9 flex items-center justify-center
                     rounded-full
                     text-cyan-600
                     hover:text-white
                     hover:bg-red-600
                     transition-colors"
        >
          <IoMdClose size={22} />
        </motion.button>

        <AnimatePresence mode="wait">
          {!success ? (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-6 text-center mt-6"
            >
              <h1 className="text-cyan-400 text-xl font-semibold">
                Are you sure you want to unsubscribe?
              </h1>

              <p className="text-gray-400 text-sm">
                Help us improve. Why are you leaving?
              </p>

              <div className="flex flex-col gap-3 text-left">
                {reasons.map((reason, index) => (
                  <label
                    key={index}
                    className={`border rounded-lg px-3 py-2 cursor-pointer transition
                      ${
                        selectedReason === reason
                          ? "border-cyan-500 bg-cyan-900/30"
                          : "border-gray-700"
                      }`}
                  >
                    <input
                      type="radio"
                      name="reason"
                      value={reason}
                      onChange={() => setSelectedReason(reason)}
                      className="hidden"
                    />
                    <span className="text-gray-300 text-sm">{reason}</span>
                  </label>
                ))}
              </div>

              <button
                onClick={handleUnsubscribe}
                disabled={!selectedReason || loading}
                className={`mt-4 py-2 rounded-lg font-medium transition
                  ${
                    !selectedReason
                      ? "bg-gray-700 text-gray-400 cursor-not-allowed"
                      : "bg-cyan-600 hover:bg-red-600 text-white"
                  }`}
              >
                {loading ? "Processing..." : "Unsubscribe Now"}
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center gap-4 text-center mt-8"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-green-500"
              >
                <IoMdCheckmarkCircle size={60} />
              </motion.div>

              <h2 className="text-green-400 text-xl font-semibold">
                Successfully Unsubscribed
              </h2>

              <p className="text-gray-400 text-sm">
                You will no longer receive project update emails.
              </p>

              <button
                onClick={onClose}
                className="mt-4 px-6 py-2 bg-cyan-600 hover:bg-cyan-700
                           text-white rounded-lg transition"
              >
                Close
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
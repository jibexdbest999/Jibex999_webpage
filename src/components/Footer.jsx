import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react"
import toast, { Toaster } from "react-hot-toast";
import { FiCheckCircle } from "react-icons/fi";
import { FiXCircle } from "react-icons/fi";


const subscribedEmail = {
  email : ""
}

export default function Footer() {
  const [ userEmail, setUserEmail ] = useState(subscribedEmail)
  const [ error, setError ] = useState("")

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e)=>{
    setUserEmail({...userEmail, [e.target.name] : e.target.value})
    setError("")
  }

  const formValidate = ()=>{
    const { email } = userEmail;
    const emailRegex = /^\S+@\S+\.\S+$/
    if (!email.trim()) {
      setError("Email is required")
      return false
    }else if (!emailRegex.test(email)) {
      setError("Invalid email")
      return false
    }
    return true
  }

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!formValidate()) return;

  setIsSubmitting(true);

  const toastId = toast.loading("Subscribing...");

  try {
    const response = await fetch(`http://localhost:5000/api/subscribe/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail.email }),
    });

    const data = await response.json();
    console.log(data)

    if (!response.ok) {
      throw new Error(data.message);
    }

    // ✅ Success Toast
    toast.custom(
      () => (
        <div className="flex gap-3 bg-[#0b1220] border border-green-600 rounded-lg px-4 py-3 shadow-xl">
          <FiCheckCircle className="text-green-500 text-2xl mt-1" />
          <div>
            <p className="text-green-400 font-semibold">
              Thank you!
            </p>
            <p className="text-gray-300 text-sm">
              Successfully subscribed. A confirmation message has been sent to your email.
            </p>
          </div>
        </div>
      ),
      { id: toastId }
    );

    setUserEmail({ email: "" });
    setIsSuccess(true);

    setTimeout(() => {
      setIsSuccess(false);
    }, 2000);

  } catch (error) {
    // ❌ Error Toast
    toast.custom(
      () => (
        <div className="flex gap-3 bg-[#0b1220] border border-red-600 rounded-lg px-4 py-3 shadow-xl">
          <FiXCircle className="text-red-500 text-2xl mt-1" />
          <div>
            <p className="text-red-400 font-semibold">
              Subscription failed
            </p>
            <p className="text-gray-300 text-sm">
              {error.message}
            </p>
          </div>
        </div>
      ),
      { id: toastId }
    );
  } finally {
    setIsSubmitting(false);
  }
};


  const hoverAnim = {
  scale: 1.08,
  borderColor: "#dc2626", // red-600
  color: "#dc2626",
};

  return (
    <div className="bg-gray-900/30  items-center text-center py-3 text-gray-300 ">
      <Toaster position="top-center" />
      <form onSubmit={handleSubmit}>
        <h1 className="text-gray-200 pb-2 font-semibold text-[15px] md:text-[18px]">Kindly subscribe to get updated for new arrivals...</h1>
      <div className="">
        <input onChange={handleChange} value={userEmail.email} name="email" type="email" className="border rounded-md bg-gray-700 h-8 w-60 md:h-10 md:w-80 px-1 pb-0.5 mb-1.5 sm:mb-0 md:mb-0 lg:mb-0 xl:mb-0" placeholder="Enter email address" />
        {error && <p className="text-red-600 font-semibold">{error}</p>}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          disabled={isSubmitting}
          className={`ml-2.5 rounded-md border px-4 py-1.5 font-medium 
          transition-all duration-300 shadow-md
        ${
          isSuccess
          ? "bg-green-600 border-green-600 text-white shadow-green-600/30"
          : "bg-cyan-500 border-cyan-500 hover:bg-cyan-700 hover:border-cyan-700 text-white"
        }
        ${isSubmitting ? "opacity-80 cursor-not-allowed" : ""}
        `}
        >
      {isSubmitting ? (
      <span className="flex items-center gap-2">
      <motion.span
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
        className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"
      />
      Subscribing...
    </span>
  ) : isSuccess ? (
    "✓ Subscribed"
  ) : (
    "Subscribe"
  )}
      </motion.button>
  </div>
      </form>

      <div className="">
        <div className="py-2">
          <h3 className="text-gray-400">Tech Stack:</h3>

        <div className="grid text-gray-400 md:grid-cols-4 md:space-y-2 place-items-center mx-auto ">
  <motion.div whileHover={hoverAnim} >
    <Link
      to="https://en.wikipedia.org/wiki/JavaScript"
      className="border border-transparent rounded-md px-2 py-1 transition-colors"
    >
      Javascript
    </Link>
  </motion.div>

  <motion.div whileHover={hoverAnim} >
    <Link
      to="https://tailwindcss.com/"
      className="border border-transparent rounded-md px-2 py-1"
    >
      TailwindCss
    </Link>
  </motion.div>

  <motion.div whileHover={hoverAnim}>
    <Link
      to="https://react.dev/"
      className="border border-transparent rounded-md px-2 py-1"
    >
      React.js
    </Link>
  </motion.div>

  <motion.div whileHover={hoverAnim}>
    <Link
      to="https://legacy.reactjs.org/docs/react-dom.html"
      className="border border-transparent rounded-md px-2 py-1"
    >
      ReactDom
    </Link>
  </motion.div>

  <motion.div whileHover={hoverAnim} >
    <Link
      to="https://nodejs.org/en"
      className="border border-transparent rounded-md px-2 py-1"
    >
      Node.js
    </Link>
  </motion.div>

  <motion.div whileHover={hoverAnim}>
    <Link
      to="https://swiperjs.com/"
      className="border border-transparent rounded-md px-2 py-1"
    >
      Swiper.js
    </Link>
  </motion.div>

  <motion.div whileHover={hoverAnim} >
    <Link
      to="https://www.mongodb.com/"
      className="border border-transparent rounded-md px-2 py-1"
    >
      MongoDB 
    </Link>
  </motion.div>

  <motion.div whileHover={hoverAnim}>
    <Link
      to="https://motion.dev/"
      className="border border-transparent rounded-md px-2 py-1"
    >
      MotionDev
    </Link>
  </motion.div>
</div>


        </div>
        
        <div className="text-gray-500 ">
          <p className="text-[15px]">@2026 Jibex999_web</p>
          <p className="text-[14px]">All rights reserved.</p>
        </div>

      </div>
    </div>
  );
}

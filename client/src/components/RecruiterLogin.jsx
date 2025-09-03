import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const RecruiterLogin = () => {
  const [state, setState] = useState("Login");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(false);
  const [isTextDataSubmited, setIsTextDataSubmited] = useState(false);

  const { setShowRecruiterLogin } = useContext(AppContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (state === "Sign Up") {
      if (!isTextDataSubmited) {
        setIsTextDataSubmited(true);
      } else {
        console.log("Sign up completed with:", {
          name,
          email,
          password,
          image,
        });
        setState("Login");
        setName("");
        setEmail("");
        setPassword("");
        setImage(false);
        setIsTextDataSubmited(false);
      }
    } else {
      console.log("Login with:", { email, password });
    }
  };

  const toggleState = () => {
    setState(state === "Login" ? "Sign Up" : "Login");
    setIsTextDataSubmited(false);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden">
        {/* Close button */}
        <div>
          <img
            onClick={e => setShowRecruiterLogin (false)}
            className="absolute top-5 right-5 cursor-pointer"
            src={assets.cross_icon}
            alt="close"
          />
        </div>

        <form onSubmit={handleSubmit} className="px-8 py-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">
              Recruiter {state}
            </h1>
            <p className="text-gray-600">
              {state === "Login"
                ? "Welcome back! Please sign in to continue"
                : isTextDataSubmited
                ? "Upload your company logo"
                : "Create your account to get started"}
            </p>
          </div>

          {state === "Sign Up" && isTextDataSubmited ? (
            <div className="mb-6">
              <label
                htmlFor="company-logo"
                className="flex flex-col items-center cursor-pointer"
              >
                <div className="w-32 h-32 rounded-full border-2 border-dashed border-blue-300 flex items-center justify-center mb-4 overflow-hidden bg-blue-50">
                  {image ? (
                    <img
                      src={URL.createObjectURL(image)}
                      alt="Company logo preview"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-12 w-12 text-blue-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                </div>
                <span className="text-blue-600 font-medium">
                  Click to upload company logo
                </span>
                <input
                  id="company-logo"
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  required
                />
              </label>
            </div>
          ) : (
            <div className="space-y-4 mb-6">
              {state === "Sign Up" && (
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    type="text"
                    placeholder="Company Name"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                    required
                  />
                </div>
              )}
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  placeholder="Email ID"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  type="password"
                  placeholder="Password"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  required
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition"
          >
            {state === "Login"
              ? "Login"
              : isTextDataSubmited
              ? "Complete Sign Up"
              : "Continue"}
          </button>

          <div className="text-center mt-6">
            <p className="text-gray-600">
              {state === "Login"
                ? "Don't have an account? "
                : "Already have an account? "}
              <button
                type="button"
                onClick={toggleState}
                className="text-blue-600 font-medium hover:text-blue-800 focus:outline-none focus:underline transition"
              >
                {state === "Login" ? "Sign Up" : "Login"}
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RecruiterLogin;

// // import { useState } from "react";
// // import API from "../api/api";
// // import { useNavigate } from "react-router-dom";

// // function Login() {
// //   const [form, setForm] = useState({ email: "", password: "" });
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     try {
// //       const res = await API.post("/auth/login", form);

// //       localStorage.setItem("token", res.data.token);
// //       localStorage.setItem("role", res.data.user.role);

// //       if (res.data.user.role === "admin") {
// //         navigate("/admin");
// //       } else {
// //         navigate("/dashboard");
// //       }

// //     } catch (err) {
// //       alert(err.response?.data?.msg || "Login failed");
// //     }
// //   };

// //   return (
// //     <div className="h-screen flex items-center justify-center bg-gray-900">
// //       <form
// //         onSubmit={handleSubmit}
// //         className="bg-white p-6 rounded w-80"
// //       >
// //         <h2 className="text-xl mb-4">Login</h2>

// //         <input
// //           type="email"
// //           placeholder="Email"
// //           className="w-full mb-3 p-2 border"
// //           onChange={(e) =>
// //             setForm({ ...form, email: e.target.value })
// //           }
// //         />

// //         <input
// //           type="password"
// //           placeholder="Password"
// //           className="w-full mb-3 p-2 border"
// //           onChange={(e) =>
// //             setForm({ ...form, password: e.target.value })
// //           }
// //         />

// //         <button className="w-full bg-blue-500 text-white p-2">
// //           Login
// //         </button>

// //         <p
// //           className="mt-3 text-sm cursor-pointer text-blue-500"
// //           onClick={() => navigate("/register")}
// //         >
// //           Don't have an account?
// //         </p>
// //       </form>
// //     </div>
// //   );
// // }

// // export default Login;
// import { useState } from "react";
// import API from "../api/api";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const [form, setForm] = useState({ email: "", password: "" });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       const res = await API.post("/auth/login", form);

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("role", res.data.user.role);

//       if (res.data.user.role === "admin") {
//         navigate("/admin");
//       } else {
//         navigate("/dashboard");
//       }
//     } catch (err) {
//       setError(err.response?.data?.msg || "Login failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex bg-slate-50">
//       {/* Left Branding Panel */}
//       <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-indigo-700 to-blue-800 flex-col justify-between p-12 relative overflow-hidden">
//         {/* Background decorative circles */}
//         <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
//         <div className="absolute bottom-0 left-0 w-72 h-72 bg-white opacity-5 rounded-full translate-y-1/2 -translate-x-1/2" />
//         <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-indigo-500 opacity-20 rounded-full -translate-x-1/2 -translate-y-1/2" />

//         {/* Logo */}
//         <div className="relative z-10 flex items-center gap-3">
//           <div className="w-9 h-9 bg-white rounded-lg flex items-center justify-center shadow-lg">
//             <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
//               <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
//               <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
//             </svg>
//           </div>
//           <span className="text-white font-semibold text-lg tracking-tight">TaskFlow</span>
//         </div>

//         {/* Center content */}
//         <div className="relative z-10 space-y-6">
//           <div className="inline-flex items-center gap-2 bg-white bg-opacity-10 text-white text-sm px-3 py-1.5 rounded-full border border-white border-opacity-20">
//             <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
//             Trusted by 10,000+ teams worldwide
//           </div>
//           <h1 className="text-4xl font-bold text-white leading-snug">
//             Manage tasks,<br />
//             <span className="text-indigo-200">ship faster.</span>
//           </h1>
//           <p className="text-indigo-200 text-base leading-relaxed max-w-sm">
//             Organize your work, collaborate with your team, and stay on top of every deadline — all in one place.
//           </p>

//           {/* Feature pills */}
//           <div className="flex flex-wrap gap-2 pt-2">
//             {["Task tracking", "Team roles", "Deadlines", "Analytics"].map((f) => (
//               <span key={f} className="bg-white bg-opacity-10 border border-white border-opacity-20 text-white text-xs px-3 py-1 rounded-full">
//                 {f}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Bottom quote */}
//         <div className="relative z-10 bg-white bg-opacity-10 rounded-xl p-4 border border-white border-opacity-20">
//           <p className="text-white text-sm italic opacity-90">"TaskFlow cut our project delivery time by 40%. It's the only tool our team needs."</p>
//           <div className="flex items-center gap-2 mt-3">
//             <div className="w-7 h-7 bg-indigo-400 rounded-full flex items-center justify-center text-white text-xs font-bold">S</div>
//             <div>
//               <p className="text-white text-xs font-medium">Sarah Chen</p>
//               <p className="text-indigo-300 text-xs">Product Lead, Acme Inc.</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Form Panel */}
//       <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12">
//         <div className="w-full max-w-md">
//           {/* Mobile logo */}
//           <div className="flex items-center gap-2 mb-8 lg:hidden">
//             <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
//               <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                 <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
//                 <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
//               </svg>
//             </div>
//             <span className="text-slate-800 font-semibold text-base">TaskFlow</span>
//           </div>

//           {/* Heading */}
//           <div className="mb-8">
//             <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome back</h2>
//             <p className="text-slate-500 text-sm mt-1">Sign in to your account to continue</p>
//           </div>

//           {/* Error Banner */}
//           {error && (
//             <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-6">
//               <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                 <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//               </svg>
//               <span>{error}</span>
//             </div>
//           )}

//           {/* Form */}
//           <form onSubmit={handleSubmit} className="space-y-5">
//             {/* Email */}
//             <div>
//               <label className="block text-sm font-medium text-slate-700 mb-1.5">
//                 Email address
//               </label>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
//                   </svg>
//                 </div>
//                 <input
//                   type="email"
//                   placeholder="you@company.com"
//                   className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-150 hover:border-slate-300"
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   required
//                 />
//               </div>
//             </div>

//             {/* Password */}
//             <div>
//               <div className="flex items-center justify-between mb-1.5">
//                 <label className="block text-sm font-medium text-slate-700">Password</label>
//                 <span className="text-xs text-indigo-600 hover:text-indigo-700 cursor-pointer transition-colors">
//                   Forgot password?
//                 </span>
//               </div>
//               <div className="relative">
//                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//                   <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
//                   </svg>
//                 </div>
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   placeholder="Enter your password"
//                   className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-150 hover:border-slate-300"
//                   onChange={(e) => setForm({ ...form, password: e.target.value })}
//                   required
//                 />
//                 <button
//                   type="button"
//                   onClick={() => setShowPassword(!showPassword)}
//                   className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
//                 >
//                   {showPassword ? (
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
//                     </svg>
//                   ) : (
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
//                     </svg>
//                   )}
//                 </button>
//               </div>
//             </div>

//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition-all duration-150 shadow-sm hover:shadow-md active:scale-[0.99] mt-2"
//             >
//               {loading ? (
//                 <>
//                   <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
//                     <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
//                     <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
//                   </svg>
//                   Signing in...
//                 </>
//               ) : (
//                 <>
//                   Sign in
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//                   </svg>
//                 </>
//               )}
//             </button>
//           </form>

//           {/* Divider */}
//           <div className="relative my-6">
//             <div className="absolute inset-0 flex items-center">
//               <div className="w-full border-t border-slate-200" />
//             </div>
//             <div className="relative flex justify-center">
//               <span className="bg-slate-50 px-3 text-xs text-slate-400">New to TaskFlow?</span>
//             </div>
//           </div>

//           {/* Register Link */}
//           <button
//             type="button"
//             onClick={() => navigate("/register")}
//             className="w-full flex items-center justify-center gap-1.5 border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-medium text-sm py-2.5 px-4 rounded-lg transition-all duration-150"
//           >
//             Create a free account
//           </button>

//           <p className="text-center text-xs text-slate-400 mt-6">
//             By signing in, you agree to our{" "}
//             <span className="text-slate-500 cursor-pointer hover:text-indigo-600 transition-colors">Terms</span>
//             {" "}and{" "}
//             <span className="text-slate-500 cursor-pointer hover:text-indigo-600 transition-colors">Privacy Policy</span>.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

import { useState } from "react";
import API from "../api/api";
import { useNavigate } from "react-router-dom";

function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      if (res.data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Logo */}
        <div className="flex items-center gap-2 mb-8">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
          </div>
          <span className="text-slate-800 font-semibold text-base">TaskFlow</span>
        </div>

        {/* Heading */}
        <div className="mb-7">
          <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Welcome back</h2>
          <p className="text-slate-500 text-sm mt-1">Sign in to your account to continue</p>
        </div>

        {/* Error Banner */}
        {error && (
          <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-6">
            <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Email address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                </svg>
              </div>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-150 hover:border-slate-300"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="block text-sm font-medium text-slate-700">Password</label>
              <span className="text-xs text-indigo-600 hover:text-indigo-700 cursor-pointer transition-colors">
                Forgot password?
              </span>
            </div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                className="w-full pl-10 pr-10 py-2.5 bg-white border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-150 hover:border-slate-300"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 transition-colors"
              >
                {showPassword ? (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-medium text-sm py-2.5 px-4 rounded-lg transition-all duration-150 shadow-sm hover:shadow-md active:scale-[0.99]"
          >
            {loading ? (
              <>
                <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Signing in...
              </>
            ) : (
              <>
                Sign in
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </>
            )}
          </button>
        </form>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-white px-3 text-xs text-slate-400">New to TaskFlow?</span>
          </div>
        </div>

        {/* Register Link */}
        <button
          type="button"
          onClick={() => navigate("/register")}
          className="w-full flex items-center justify-center border border-slate-200 hover:border-indigo-300 hover:bg-indigo-50 text-slate-700 hover:text-indigo-700 font-medium text-sm py-2.5 px-4 rounded-lg transition-all duration-150"
        >
          Create a free account
        </button>
      </div>
    </div>
  );
}

export default Login;
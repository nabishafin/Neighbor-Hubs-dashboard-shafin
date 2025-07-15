import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import logo from "../../assets/signlogo.png";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", { email, password, rememberPassword });
  };

  return (
    <div className="min-h-screen bg-[#FCEED4] flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        <div className="bg-[#FCEED4]">
          <div className="flex flex-col lg:flex-row min-h-[600px] justify-center items-center">
            {/* Left Side - Logo and Welcome */}
            <div className="flex-1 lg:border-r-[1px] lg:border-black w-full lg:w-auto mb-8 lg:mb-0">
              <div className="text-center px-4 lg:px-8 pb-10">
                {/* Logo Container */}
                <img src={logo} className="" alt="Neighbor Hubs Logo"></img>
                {/* Brand Name */}
                <div className="mb-4 lg:mb-0">
                  <p className="text-base sm:text-lg lg:text-xl text-teal-600 font-medium m-0 p-0">
                    Welcome to Neighbor Hubs
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Sign In Form */}
            <div className="flex-1 flex items-center justify-center w-full lg:w-auto px-4 sm:px-6 lg:px-12">
              <div className="w-full max-w-md space-y-6">
                {/* Form Header */}
                <div className="text-center lg:text-left space-y-2">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#181F81]">
                    Sign to Account!
                  </h2>
                  <p className="text-sm sm:text-base text-gray-600">
                    Please enter your email and password to continue.
                  </p>
                </div>

                {/* Sign In Form */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-5"
                >
                  {/* Email Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="email"
                      className="text-sm font-medium text-gray-700"
                    >
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="smith.mail@gmail.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent text-sm sm:text-base"
                      required
                    />
                  </div>

                  {/* Password Field */}
                  <div className="space-y-2">
                    <Label
                      htmlFor="password"
                      className="text-sm font-medium text-gray-700"
                    >
                      Password
                    </Label>
                    <div className="relative">
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 pr-10 sm:pr-12 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent text-sm sm:text-base"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-2 sm:right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 p-1"
                      >
                        {showPassword ? (
                          <EyeOff size={18} className="sm:w-5 sm:h-5" />
                        ) : (
                          <Eye size={18} className="sm:w-5 sm:h-5" />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Password and Forgot Password */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={rememberPassword}
                        onCheckedChange={(checked) =>
                          setRememberPassword(checked)
                        }
                      />
                      <Label
                        htmlFor="remember"
                        className="text-sm text-[#181F81]"
                      >
                        Remember password
                      </Label>
                    </div>
                    <button
                      type="button"
                      className="text-sm text-[#181F81] hover:underline text-left sm:text-right"
                    >
                      Forgot password?
                    </button>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#D46A6A] text-white font-semibold py-2 sm:py-3 px-6 rounded-lg hover:bg-[#D46A6A]/90 shadow-lg text-sm sm:text-base transition-colors"
                  >
                    Log In
                  </Button>
                </form>

                {/* Mobile-only additional spacing */}
                <div className="h-4 sm:hidden"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

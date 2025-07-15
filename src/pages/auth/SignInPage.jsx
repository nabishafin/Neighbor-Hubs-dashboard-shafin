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
            <div className="flex-1 border-r-[1px] pb-10 border-black hidden md:block">
              <div className="text-center ">
                {/* Logo Container */}
                <div className="hidden lg:flex items-center justify-center flex-1  border-black">
                  <img src={logo} alt="" />
                </div>
                {/* Brand Name */}
                <div className="">
                  <p className="text-lg text-teal-600 font-medium libertinus m-0 p-0">
                    Welcome to Neighbor Hubs
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Sign In Form */}
            <div className="flex-1 flex items-center justify-center p-8 lg:p-12">
              <div className="w-full max-w-md space-y-6">
                {/* Form Header */}
                <div className="text-center space-y-2">
                  <h2 className="text-2xl text-start lg:text-3xl font-bold text-[#181F81]">
                    Sign to Account!
                  </h2>
                  <p className="text-gray-600 text-start">
                    Please enter your email and password to continue.
                  </p>
                </div>

                {/* Sign In Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
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
                      className="w-full px-4 py-3 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
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
                        className="w-full px-4 py-3 pr-12 border border-gray-300 bg-white rounded-lg focus:ring-2 focus:ring-red-400 focus:border-transparent"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                      >
                        {showPassword ? (
                          <EyeOff size={20} />
                        ) : (
                          <Eye size={20} />
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Password and Forgot Password */}
                  <div className="flex items-center justify-between">
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
                    <button type="button" className="text-sm text-[#181F81]">
                      Forgot password?
                    </button>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    className="w-full bg-[#D46A6A] text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#D46A6A]  shadow-lg"
                  >
                    Log In
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;

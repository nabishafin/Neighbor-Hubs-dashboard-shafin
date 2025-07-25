import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import logo from "../../assets/Forgotlogo.png";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen bg-[#FCEED4] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
        {/* Logo Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <div className="relative lg:border-r-2 lg:pr-12 lg:border-black">
            <img
              src={logo}
              alt="Logo"
              className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-contain"
            />
          </div>
        </div>

        {/* Forgot Password Form */}
        <div className="w-full max-w-lg">
          <Card className="border-none shadow-none bg-[#FCEED4]">
            <CardContent className="pt-6 sm:pt-8 pb-10 px-4 sm:px-8">
              {/* Back Button + Title */}
              <div className="flex items-center gap-3 mb-6">
                <button
                  onClick={() => { }}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <ArrowLeft className="h-6 w-6" />
                </button>
                <h1 className="text-2xl font-bold text-gray-800">
                  Forgot Password
                </h1>
              </div>

              {/* Description */}
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Please enter your email address to receive a One Time Password
                (OTP) for resetting your password.
              </p>

              {/* Form */}
              <form className="space-y-5">
                {/* Email Field */}
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className="text-base font-medium text-gray-700"
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 text-[16px] border-gray-300 focus:border-red-900 focus:ring-red-900"
                    required
                  />
                </div>

                {/* Submit Button */}
                <Button className="w-full h-12 text-[16px] bg-[#D46A6A] text-white font-semibold transition-all duration-200">
                  Send OTP
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

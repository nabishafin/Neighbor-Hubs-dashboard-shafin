import { useState } from "react";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import logo from "../../assets/newpasslogo.png";

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.newPassword) {
      newErrors.newPassword = "New password is required";
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = "Password must be at least 8 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSuccess(true);
    } catch {
      setErrors({ general: "Failed to reset password. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleBackToOTP = () => {
    console.log("Navigate back to OTP verification");
  };

  const handleBackToSignIn = () => {
    console.log("Navigate to sign in page");
  };

  return (
    <div className="min-h-screen bg-[#FCEED4] flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16">
        {/* Logo Section */}
        <div className="w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
          <div className="relative lg:border-r-2 lg:pr-10 lg:border-black">
            <img
              src={logo}
              alt="Logo"
              className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-contain"
            />
          </div>
        </div>

        {/* Reset Password Form */}
        <div className="w-full max-w-md">
          <Card className="border-none shadow-none bg-[#FCEED4]">
            <CardHeader className="pb-4">
              <div className="flex items-center gap-3 mb-4">
                <button
                  onClick={handleBackToOTP}
                  className="text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <h1 className="text-2xl font-bold text-gray-800">
                  Reset Password
                </h1>
              </div>
            </CardHeader>
            <CardContent className="space-y-6 px-4 sm:px-6 pb-10">
              {!isSuccess ? (
                <>
                  <p className="text-base text-gray-600">
                    Use a different password for better security.
                  </p>

                  <form className="space-y-5" onSubmit={handleSubmit}>
                    {/* New Password */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="newPassword"
                        className="text-base font-medium text-gray-700"
                      >
                        New Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="newPassword"
                          name="newPassword"
                          type={showNewPassword ? "text" : "password"}
                          value={formData.newPassword}
                          onChange={handleInputChange}
                          placeholder="Enter new password"
                          className={`h-12 pr-10 border-gray-300 focus:border-red-900 focus:ring-red-900 ${
                            errors.newPassword ? "border-red-300" : ""
                          }`}
                          required
                        />
                        <button
                          type="button"
                          onClick={() => setShowNewPassword(!showNewPassword)}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showNewPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      {errors.newPassword && (
                        <p className="text-sm text-red-600">
                          {errors.newPassword}
                        </p>
                      )}
                    </div>

                    {/* Confirm Password */}
                    <div className="space-y-2">
                      <Label
                        htmlFor="confirmPassword"
                        className="text-base font-medium text-gray-700"
                      >
                        Confirm Password
                      </Label>
                      <div className="relative">
                        <Input
                          id="confirmPassword"
                          name="confirmPassword"
                          type={showConfirmPassword ? "text" : "password"}
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          placeholder="Confirm new password"
                          className={`h-12 pr-10 border-gray-300 focus:border-red-900 focus:ring-red-900 ${
                            errors.confirmPassword ? "border-red-300" : ""
                          }`}
                          required
                        />
                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                        >
                          {showConfirmPassword ? (
                            <EyeOff className="h-5 w-5" />
                          ) : (
                            <Eye className="h-5 w-5" />
                          )}
                        </button>
                      </div>
                      {errors.confirmPassword && (
                        <p className="text-sm text-red-600">
                          {errors.confirmPassword}
                        </p>
                      )}
                    </div>

                    {/* General Error */}
                    {errors.general && (
                      <p className="text-sm text-red-600 text-center">
                        {errors.general}
                      </p>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 bg-[#D46A6A] text-white font-semibold transition duration-200 disabled:opacity-50"
                    >
                      {isLoading ? "Resetting Password..." : "Reset Password"}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="text-center space-y-5">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800">
                    Password Reset Successfully!
                  </h3>
                  <p className="text-sm text-gray-600">
                    You can now sign in with your new password.
                  </p>
                  <Button
                    onClick={handleBackToSignIn}
                    className="w-full h-12 bg-[#D46A6A] text-white font-semibold"
                  >
                    Back to Sign In
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

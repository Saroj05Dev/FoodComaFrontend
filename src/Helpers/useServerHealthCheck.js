import axiosInstance from "../Helpers/axiosInstance";
import toast from "react-hot-toast";
import { useEffect, useRef } from "react";

/**
 * Custom hook to check server health on app load
 * Shows a toast notification if server is starting up (Render cold start)
 */
export function useServerHealthCheck() {
  const hasChecked = useRef(false);

  useEffect(() => {
    // Only check once when app loads
    if (hasChecked.current) return;
    hasChecked.current = true;

    const checkServerHealth = async () => {
      const startTime = Date.now();
      let toastId;

      try {
        // Show loading toast
        toastId = toast.loading(
          "Connecting to server... This may take up to a minute if the server is starting.",
          {
            duration: 90000, // 90 seconds for Render cold start
          }
        );

        // Try to hit the base URL or a simple health endpoint
        // Using a simple GET request to check if server is alive
        const response = await axiosInstance.get("/", {
          timeout: 30000, // 30 second timeout
          validateStatus: function (status) {
            // Accept any status code as long as we get a response
            // This means server is running even if endpoint doesn't exist
            return status >= 200 && status < 600;
          },
        });

        const responseTime = Date.now() - startTime;

        // Dismiss loading toast
        toast.dismiss(toastId);

        // If server took more than 5 seconds, it was likely cold starting
        if (responseTime > 5000) {
          toast.success("Server is now ready! Thanks for your patience.", {
            duration: 4000,
          });
        } else {
          // Server was already running, show quick success
          toast.success("Connected to server", {
            duration: 2000,
          });
        }
      } catch (error) {
        // Dismiss loading toast
        if (toastId) toast.dismiss(toastId);

        console.error("Server health check failed:", error);

        // Check if it's a timeout error
        if (
          error.code === "ECONNABORTED" ||
          error.message?.includes("timeout")
        ) {
          toast.error(
            "Server is taking longer than expected. Please wait a moment and try refreshing.",
            {
              duration: 8000,
            }
          );
        } else if (
          error.code === "ERR_NETWORK" ||
          error.message?.includes("Network Error")
        ) {
          // Network error - server might be down or CORS issue
          toast.error(
            "Cannot reach server. Please ensure your backend is running on " +
              (import.meta.env.VITE_BACKEND_URL || "http://localhost:3000"),
            {
              duration: 8000,
            }
          );
        } else if (error.response) {
          // Server responded but with an error status
          // This actually means server IS running, just the endpoint doesn't exist
          toast.success("Server is connected", {
            duration: 2000,
          });
        } else {
          // Other errors
          toast.error(
            "Unable to connect to server. Please check your connection and try again.",
            {
              duration: 6000,
            }
          );
        }
      }
    };

    // Run health check
    checkServerHealth();
  }, []);
}

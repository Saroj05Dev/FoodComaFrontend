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

      try {
        // Show loading toast
        const toastId = toast.loading("Connecting to server...", {
          duration: 30000, // 30 seconds max
        });

        const response = await axiosInstance.get("/ping", {
          timeout: 30000, // 30 second timeout
        });

        const responseTime = Date.now() - startTime;

        // Dismiss loading toast
        toast.dismiss(toastId);

        // If server took more than 3 seconds, it was likely cold starting
        if (responseTime > 3000) {
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
        toast.dismiss();

        // Show error toast
        toast.error("Server connection failed. Please refresh the page.", {
          duration: 6000,
        });

        console.error("Server health check failed:", error);
      }
    };

    // Run health check
    checkServerHealth();
  }, []);
}

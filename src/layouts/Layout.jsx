import React, { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    setDarkMode(storedTheme === "dark");
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="bg-white dark:bg-black text-black dark:text-white min-h-screen transition-colors duration-700">
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="fixed top-5 right-5 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-lg shadow z-50"
      >
        {darkMode ? "☀️ Light" : "🌙 Dark"}
      </button>
      {children}
    </div>
  );
};

export default Layout;

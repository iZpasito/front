import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/Nav.css";

function NavPage() {
  const [categories, setCategories] = useState([]);
  const [subCategory, setSubCategory] = useState(null);

  useEffect(() => {
    axios.get("https://www.themealdb.com/api/json/v1/1/categories.php")
      .then(response => setCategories(response.data.categories))
      .catch(error => console.error("Error fetching categories:", error));
  }, []);

  const handleMouseEnter = (category) => {
    setSubCategory(category);
  };

  const handleMouseLeave = () => {
    setSubCategory(null);
  };

  return (
    <div className="relative">
      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            {categories.map((category) => (
              <li
                key={category.idCategory}
                onMouseEnter={() => handleMouseEnter(category)}
                onMouseLeave={handleMouseLeave}
              >
                <a style={{ color: "black" }}>{category.strCategory}</a>
                {subCategory && subCategory.idCategory === category.idCategory && (
                  <div className="absolute left-0 mt-2 py-2 bg-white shadow-lg rounded-lg">
                    <p className="text-sm text-gray-600 px-4 py-2">
                      {category.strCategoryDescription}
                    </p>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavPage;

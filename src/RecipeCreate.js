import React, { useState } from "react";
import "./RecipeCreate.css";

function RecipeCreate({ addRecipe }) {
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers.

  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };
  const [formData, setFormData] = useState({ ...initialFormState });
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRecipe(formData);
    console.log("Submitted:", formData);
    setFormData({ ...initialFormState });
  };

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td className="add-row">
              <input
                id="name"
                name="name"
                type="text"
                required={true}
                rows={1}
                onChange={handleChange}
                value={formData.name}
                placeholder="Name"
              />
            </td>
            <td className="add-row">
              <input
                id="cuisine"
                name="cuisine"
                type="text"
                required={true}
                rows={1}
                onChange={handleChange}
                value={formData.cuisine}
                placeholder="Cuisine"
              />
            </td>
            <td className="add-row">
              <input
                id="photo"
                name="photo"
                type="text"
                required={true}
                rows={1}
                onChange={handleChange}
                value={formData.photo}
                placeholder="URL"
              />
            </td>
            <td className="add-row">
              <textarea
                id="ingredients"
                name="ingredients"
                required={true}
                rows={2}
                onChange={handleChange}
                value={formData.ingredients}
                placeholder="Ingredients"
              />
            </td>
            <td className="add-row">
              <textarea
                id="preparation"
                name="preparation"
                required={true}
                rows={2}
                onChange={handleChange}
                value={formData.preparation}
                placeholder="Preparation"
              />
            </td>
            <td className="add-row">
              <button type="submit" className="create-btn">
                Create
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;

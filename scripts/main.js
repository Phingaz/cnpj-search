import { infoItems, searchFormIds } from "./constants";
import { handleInput, hide, submitForm, updateToggleState } from "./helpers";

document.addEventListener("DOMContentLoaded", () => {
  let isEditable = false;
  let hasData = false;

  const hideError = () => hide(searchFormIds.error);

  const searchForm = document.getElementById(searchFormIds.form);
  const cnpjInput = document.getElementById(searchFormIds.cnpj);

  const toggleContainer = document.querySelector(".toggle-switch-container");
  const toggleLabel = document.querySelector(".toggle-label");
  const toggleState = document.getElementById("editToggle");

  // initial toggle state
  updateToggleState({ toggleState, hasData });

  // Focus on the CNPJ input on page load
  cnpjInput.focus();

  // show label on hover
  toggleContainer.addEventListener("mouseover", () => {
    toggleLabel.classList.add("visible");
  });

  toggleContainer.addEventListener("mouseout", () => {
    toggleLabel.classList.remove("visible");
  });

  // handle input in CNPJ field
  cnpjInput.addEventListener("input", () => {
    handleInput({ cnpjInput, hideError });
  });

  // handle toggle state change
  toggleState.addEventListener("change", () => {
    const isCheck = toggleState.checked;

    infoItems.map((item) => {
      const inputElement = document.getElementById(`${item.id}-input`);
      const isCnpj = item.id === "cnpj";

      if (isCheck) {
        inputElement.removeAttribute("disabled");
        inputElement.classList.add("can-edit");
        isCnpj && inputElement.setAttribute("readonly", true);
        isEditable = true;
      } else {
        inputElement.setAttribute("disabled", true);
        inputElement.classList.remove("can-edit");
        isEditable = false;
      }
    });
  });

  // handle search form submission
  searchForm.addEventListener("submit", async (event) => {
    const success = await submitForm({ event, cnpjInput, isEditable });
    hasData = success;
    updateToggleState({ toggleState, hasData });
  });
});

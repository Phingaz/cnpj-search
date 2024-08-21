import { searchFormIds, infoItems, stateIds } from "./constants";

export function show(id, display = "block") {
  document.getElementById(id).style.display = display;
}

export function hide(id) {
  document.getElementById(id).style.display = "none";
}

export function createInfoItem(id, icon, label, value) {
  const element = document.getElementById(id);
  const isEmail = id === "email";
  const isDate =
    id === "data_inicio_atividade" || id === "data_situacao_cadastral";
  const isPhone = id === "ddd_telefone_1";
  const isCnpj = id === "cnpj";

  if (element) {
    element.innerHTML = `
        ${icon}
        <div>
          <p class="label">${label}</p>
        <input
          id="${id}-input" 
          disabled
          type="${isDate ? "date" : isPhone ? "number" : "text"}" 
          class="value${isEmail ? " is-email" : ""} ${isCnpj ? "is-cnpj" : ""}"
          value="${
            value
              ? typeof value === "number"
                ? value
                : typeof value === "string"
                ? value.toLowerCase()
                : "N/A"
              : "N/A"
          }" 
        />
        </div>
      `;
  }
}

export async function fetchCompanyData(cnpj) {
  try {
    const response = await fetch(
      `https://brasilapi.com.br/api/cnpj/v1/${cnpj}`
    );
    if (!response.ok) {
      throw new Error("CNPJ invalido");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export function handleInput({ cnpjInput, hideError }) {
  cnpjInput.classList.remove("error");
  const value = cnpjInput.value;
  const cleanedCNPJ = value.replace(/[./-]/g, "");
  cnpjInput.value = cleanedCNPJ;
  hideError();
}

export function updateToggleState({ toggleState, hasData }) {
  if (hasData) {
    toggleState.removeAttribute("disabled");
  } else {
    toggleState.setAttribute("disabled", true);
    toggleState.checked = false;
  }
}

export async function submitForm({ event, cnpjInput }) {
  const showLoading = () => show(stateIds.loading);
  const hideLoading = () => hide(stateIds.loading);
  const showError = () => show(searchFormIds.error);
  const showEmptyState = () => show(stateIds.emptyState, "flex");
  const hideEmptyState = () => hide(stateIds.emptyState);
  const showData = () => show(stateIds.data);
  const hideData = () => hide(stateIds.data);
  const errorInput = document.getElementById(searchFormIds.error);

  try {
    event.preventDefault();
    showLoading();
    const cnpj = document.getElementById(searchFormIds.cnpj).value.trim();

    if (!cnpj) {
      throw new Error("Minimo de 14 caracteres");
    }

    const companyData = await fetchCompanyData(cnpj);

    const fullAddress = `${companyData.logradouro}, ${companyData?.numero}, ${companyData?.complemento}, ${companyData?.bairro}, ${companyData?.municipio}, ${companyData?.uf}, ${companyData?.cep}`;

    companyData.fullAddress = fullAddress;

    infoItems.forEach((item) => {
      createInfoItem(item.id, item.icon, item.label, companyData[item.id]);
    });

    hideEmptyState();
    showData();
    return true;
  } catch (error) {
    const errorMsg = error.message;
    cnpjInput.classList.add("error");
    errorInput.innerText = errorMsg;
    hideData();
    showEmptyState();
    showError();
    return false;
  } finally {
    hideLoading();
  }
}

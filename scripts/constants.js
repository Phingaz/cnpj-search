const icons = {
  user: '<i class="fas fa-user"></i>',
  building: '<i class="fas fa-building"></i>',
  hash: '<i class="fas fa-hashtag"></i>',
  calendar: '<i class="fas fa-calendar-alt"></i>',
  checkCircle: '<i class="fas fa-check-circle"></i>',
  briefcase: '<i class="fas fa-briefcase"></i>',
  mapPin: '<i class="fas fa-map-pin"></i>',
  phone: '<i class="fas fa-phone"></i>',
  mail: '<i class="fas fa-envelope"></i>',
  dollarSign: '<i class="fas fa-dollar-sign"></i>',
};

export const infoItems = [
  { id: "nome_fantasia", icon: icons.building, label: "Nome" },
  { id: "razao_social", icon: icons.user, label: "Razão Social" },
  { id: "cnpj", icon: icons.hash, label: "CNPJ" },
  {
    id: "data_inicio_atividade",
    icon: icons.calendar,
    label: "Data de Abertura",
  },
  {
    id: "situacao_cadastral",
    icon: icons.checkCircle,
    label: "Situação Cadastral",
  },
  {
    id: "data_situacao_cadastral",
    icon: icons.calendar,
    label: "Data da Situação",
  },
  {
    id: "cnae_fiscal_descricao",
    icon: icons.briefcase,
    label: "Atividade Principal",
  },
  { id: "natureza_juridica", icon: icons.building, label: "Natureza Jurídica" },
  { id: "fullAddress", icon: icons.mapPin, label: "Endereço Completo" },
  { id: "ddd_telefone_1", icon: icons.phone, label: "Telefone" },
  { id: "email", icon: icons.mail, label: "E-mail" },
];

export const stateIds = {
  loading: "loading",
  emptyState: "empty-state",
  data: "data",
};

export const searchFormIds = {
  cnpj: "input-cnpj",
  form: "search",
  error: "errorAlert",
};

export const currencyFormatter = Intl.NumberFormat('fr-FR', {style: "currency", currency: "EUR", maximumFractionDigits: 2});

export const dateFormatter = Intl.DateTimeFormat('fr-FR', { year: "numeric", month: "2-digit", day: "2-digit"});
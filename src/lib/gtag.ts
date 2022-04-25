export const GOOGLE_ANALYTICS_ID =
  process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID ?? "";

export const isExistGaId = GOOGLE_ANALYTICS_ID !== "";

export const pageView = (path) => {
  window.gtag("config", GOOGLE_ANALYTICS_ID, {
    page_path: path,
  });
};

export const event = ({ action, category, label, value = "" }) => {
  if (!isExistGaId) return;

  window.gtag("event", action, {
    event_category: category,
    event_label: JSON.stringify(label),
    value,
  });
};

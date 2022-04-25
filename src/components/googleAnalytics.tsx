import Script from "next/script";

import { isExistGaId, GOOGLE_ANALYTICS_ID } from "../lib/gtag";

export const GoogleAnalytics: React.VFC = () => (
  <>
    {isExistGaId && (
      <>
        {/* Google Analytics */}
        <Script
          id="ga-id"
          defer
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
          strategy="afterInteractive"
        />
        <Script
          id="gtag"
          defer
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ANALYTICS_ID}');`,
          }}
          strategy="afterInteractive"
        />
        {/* End Google Analytics */}
      </>
    )}
  </>
);

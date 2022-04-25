import Script from "next/script";

import { isExistGaId, GOOGLE_ANALYTICS_ID } from "../lib/gtag";

export const GoogleAnalytics: React.VFC = () => (
  <>
    {isExistGaId && (
      <>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        />
        <Script
          id="gtag"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${GOOGLE_ANALYTICS_ID}', {
              page_path: window.location.pathname,
            });
            `,
          }}
        />
        {/* End Google Analytics */}
      </>
    )}
  </>
);

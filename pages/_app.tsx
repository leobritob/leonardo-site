import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import { Fragment } from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <div
          dangerouslySetInnerHTML={{
            __html: `
          <!-- Global site tag (gtag.js) - Google Analytics -->
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-71277057-1"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'UA-71277057-1');
          </script>

          <!-- Facebook Pixel Code -->
          <script>
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '554067208928075');
          fbq('track', 'PageView');
          </script>
          <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=554067208928075&ev=PageView&noscript=1"
          /></noscript>
          <!-- End Facebook Pixel Code -->
        `,
          }}
        />
      </Head>
      <NextSeo
        title="Leonardo Brito | Desenvolvedor"
        defaultTitle="Leonardo Brito"
        description="Te ajudo a ser um desenvolvedor desejado e bem pago no mercado de TI com Javascript"
        canonical="https://leonardobrito.com.br"
      />

      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;

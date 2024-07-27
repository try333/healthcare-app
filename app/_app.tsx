import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export default function App({ Component, pageProps }: AppProps) {

  const recaptchaRef :any = React.createRef();

  const onChange = () => {
    // on captcha change
  }

  const asyncScriptOnLoad = () => {
    console.log('Google recaptcha loaded just fine')
  }
  return (
    <>
      <Component {...pageProps} />
      <ReCAPTCHA
        ref={recaptchaRef}
        size="invisible"
        sitekey="your site key"
        onChange={onChange}
        asyncScriptOnLoad={asyncScriptOnLoad}
      />
    </>
  )
}
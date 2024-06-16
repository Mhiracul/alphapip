/* eslint-disable */
import { useEffect } from "react";

const SmartsuppScript = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://www.smartsuppchat.com/loader.js?";
    script.charset = "utf-8";

    const noscript = document.createElement("noscript");
    noscript.innerHTML =
      'Powered by <a href="https://www.smartsupp.com" target="_blank">Smartsupp</a>';

    script.onload = () => {
      window._smartsupp = window._smartsupp || {};
      window._smartsupp.key = "af6d6313f52d40877e8c89654609bb9fba16a8f6";
      window.smartsupp ||
        ((d) => {
          var s,
            c,
            o = (smartsupp = function () {
              o._.push(arguments);
            });
          o._ = [];
          s = d.getElementsByTagName("script")[0];
          c = d.createElement("script");
          c.type = "text/javascript";
          c.charset = "utf-8";
          c.async = true;
          c.src = "https://www.smartsuppchat.com/loader.js?";
          s.parentNode.insertBefore(c, s);
        })(document);
    };

    document.body.appendChild(script);
    document.body.appendChild(noscript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(noscript);
    };
  }, []);

  return null;
};

export default SmartsuppScript;

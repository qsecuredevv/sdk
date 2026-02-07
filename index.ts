import { initializeSecureContext } from "./runtime/secureInit";

(async () => {
  const context = await initializeSecureContext({
    component: "Qsecure-Core",
    version: "0.1.0",
    protocol: "qsecure-v1"
  });

  console.log("🔐 Secure Context Initialized");
  console.log(context);
})();

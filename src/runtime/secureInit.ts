import { attestComponent } from "../core/attestation";
import { initializeProtocol } from "../core/protocol";
import { registerTrust } from "../registry/trustRegistry";

export async function initializeSecureContext(options: {
  component: string;
  version: string;
  protocol: string;
}) {
  const attestation = attestComponent(
    options.component,
    options.version
  );

  registerTrust(attestation);

  const protocolState = initializeProtocol(options.protocol);

  return {
    secure: true,
    attestation,
    protocolState
  };
}

type Attestation = {
  component: string;
  version: string;
  attestationHash: string;
  timestamp: number;
};

const registry: Attestation[] = [];

export function registerTrust(attestation: Attestation) {
  registry.push(attestation);
  return registry.length;
}

export function getRegistry() {
  return registry;
}

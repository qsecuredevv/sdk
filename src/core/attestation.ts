import { sha256 } from "../utils/hash";

export function attestComponent(name: string, version: string) {
  const payload = `${name}:${version}:${Date.now()}`;
  return {
    component: name,
    version,
    attestationHash: sha256(payload),
    timestamp: Date.now()
  };
}

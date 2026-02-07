export function initializeProtocol(protocol: string) {
  if (!protocol.startsWith("qsecure")) {
    throw new Error("Untrusted protocol");
  }

  return {
    protocol,
    status: "initialized",
    startedAt: Date.now()
  };
}

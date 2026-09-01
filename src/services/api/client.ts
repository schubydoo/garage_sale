const BASE_URL = "/api/";

const request = async <T>(path: string, init?: RequestInit): Promise<T> => {
  const res = await fetch(`${BASE_URL}${path}`, init);

  // fetch only rejects on network errors, so non-2xx has to be raised manually
  // to keep the callers' try/catch behaviour.
  if (!res.ok) throw new Error(`Request to ${path} failed: ${res.status}`);

  return (await res.json()) as T;
};

export const apiGet = <T>(path: string): Promise<T> => request<T>(path);

export const apiPost = <T>(path: string, body: unknown): Promise<T> =>
  request<T>(path, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

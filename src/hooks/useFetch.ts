import axios, { AxiosRequestConfig } from "axios";
import { useRef, useState } from "react";

const API_URL = "http://localhost:5000";

const useFetch = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  const abortControllerRef = useRef<AbortController | null>(null);

  const fetchData = async (endpoint: string, config?: AxiosRequestConfig) => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    abortControllerRef.current = new AbortController();

    try {
      // setTimeout pushes setIsLoading(true) to macrotask queue, thus prev request abortion wont affect new state.
      setTimeout(() => {
        setIsLoading(true);
      }, 0);

      const response = await axios.get<T>(`${API_URL}${endpoint}`, {
        ...config,
        signal: abortControllerRef.current.signal,
      });

      setData(response.data);
    } catch (err: unknown) {
      setError(err);
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { data, isLoading, error, fetchData };
};

export { useFetch };

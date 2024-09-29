import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";

const API_URL = "http://localhost:5000";

const useFetch = <T>() => {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);

  const fetchData = async (endpoint: string, config?: AxiosRequestConfig) => {
    try {
      setIsLoading(true);

      const response = await axios.get<T>(`${API_URL}${endpoint}`, config);

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

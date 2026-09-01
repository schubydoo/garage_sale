import { useEffect, useState, useCallback } from "react";

import { apiGet, apiPost } from "../services/api/client";
import { BookRequest, BookResponse, Good } from "../types";

export const useFetchGoods = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPosting, setIsPosting] = useState<boolean>(false);

  const fetchGoods = useCallback(async () => {
    setIsLoading(true);

    try {
      const goods = await apiGet<Good[]>("goods");

      setGoods(goods);
    } catch (error) {
      setGoods([]);
      alert("Unexpected error. Please refresh the browser and try again");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchGoods();
  }, [fetchGoods]);

  const bookGoods = useCallback(
    async (req: BookRequest): Promise<BookResponse> => {
      setIsPosting(true);

      try {
        return await apiPost<BookResponse>("goods", req);
      } catch (error) {
        alert("Unexpected error. Please refresh the browser and try again");
      } finally {
        setIsPosting(false);
      }
    },
    []
  );

  return [goods, isLoading, isPosting, fetchGoods, bookGoods] as const;
};

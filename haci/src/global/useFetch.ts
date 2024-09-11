import { useState, useCallback } from "react";
import { getCheckinUrl, getCheckoutUrl, getFetchDataUrl } from "../backend/getUrl";
import { CheckInType, FetchApiResponse } from "../backend/types";

interface ApiResponse<T> {
    data: T | null;
    error: Error | null;
    loading: boolean;
    fn: () => Promise<void>;
}
function useFetch<T>(url: string, method: string): ApiResponse<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(true);

    const fn = useCallback(async () => {
        try {
            const response = await fetch(url, { method });
            const responseData = await response.json();
            console.log(responseData);
            setData(responseData);
        } catch (err) {
            if (err instanceof Error) {
                setError(err);
            } else {
                throw err;
            }
        } finally {
            setLoading(false);
        }
    }, [url, method]);

    return { fn, data, error, loading };
}

export const useFetchChildren = () => {
    const url = getFetchDataUrl();
    return useFetch<FetchApiResponse>(url, "GET");
};

export const useCheckIn = (childId: string) => {
    const url = getCheckinUrl(childId);
    return useFetch<CheckInType>(url, "POST");
};
export const useCheckOut = (childId: string) => {
    const url = getCheckoutUrl(childId);
    return useFetch<CheckInType>(url, "POST");
};

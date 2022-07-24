import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getCharacters from "../utilities/getCharacters";

const useGetCharacters = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      if (!searchParams.get("page")) {
        setSearchParams({ page: 1 });
      }
      setLoading(true);
      getCharacters(searchParams.get("page")).then((res) => {
        setLoading(false);
        if (res.error) {
          setError(true);
          return;
        }
        if (res) {
          setData(res);
          setError(false);
          return;
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, [searchParams]);
  return { data, loading, error };
};

export default useGetCharacters;

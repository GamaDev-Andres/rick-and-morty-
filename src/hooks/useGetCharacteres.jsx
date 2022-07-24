import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import getCharacteres from "../utilities/getCharacteres";

const useGetCharacteres = () => {
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
      getCharacteres(searchParams.get("page")).then((res) => {
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

export default useGetCharacteres;

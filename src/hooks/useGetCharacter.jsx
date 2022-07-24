import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import getCharacter from "../utilities/getCharacter";

const useGetCharacter = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const isMounted = useRef(true);
  useEffect(() => {
    isMounted.current = true;
    if (isMounted.current) {
      setLoading(true);
      getCharacter(id).then((res) => {
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
  }, [id]);
  return { data, loading, error };
};

export default useGetCharacter;

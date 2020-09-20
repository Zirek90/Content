import { useState, useEffect, useRef } from "react";

export const useFetch = (url, resource) => {
  const isComponentMounted = useRef(true);

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url + resource);
        const response = await res.json();
        if (response.errors) throw Error(response.errors.description);
        setData(response);
      } catch (err) {
        setErrors(err);
      } finally {
        setLoading(false);
      }
    };
    if (isComponentMounted.current) {
      fetchData();
    }

    return () => {
      isComponentMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { data, loading, errors };
};

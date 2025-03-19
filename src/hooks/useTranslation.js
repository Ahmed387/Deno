import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectTranslation } from "../redux/features/languageSlice";

export const useTranslation = () => {
  const t = useMemo(
    () => (key) => useSelector((state) => selectTranslation(state, key)),
    []
  );

  return { t };
};

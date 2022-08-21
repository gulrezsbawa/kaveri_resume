import { createContext, useContext } from "react";
import { applicantData } from "../../Data";
const ApplicantDataContext = createContext();

export const useApplicantData = () => {
  const context = useContext(ApplicantDataContext);
  /* istanbul ignore next */
  if (context === undefined && process.env.NODE_ENV !== "production") {
    throw new Error(
      "useApplicantData must be used within a ApplicantDataProvider"
    );
  }

  return context;
};

export const ApplicantDataProvider = ({ children }) => (
  <ApplicantDataContext.Provider value={applicantData}>
    {children}
  </ApplicantDataContext.Provider>
);

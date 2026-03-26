import { AuthProvider } from "./AuthProvider";
import { DataProvider } from "./DataProvider";

export const AppProviders = ({ children }) => {
  return (
    <AuthProvider>
      <DataProvider>{children}</DataProvider>
    </AuthProvider>
  );
};

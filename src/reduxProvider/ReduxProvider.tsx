import Store from "@/store/Store";
import { Provider } from "react-redux";


export default function ReduxProvider({children}: {
  children: React.ReactNode;
}) {
  return <Provider store={Store}>{children}</Provider>;
}

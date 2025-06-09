import "./App.css";
import AppTracker from "./Components/appTracker";
import WalletBalance from './Components/wallet';
import Expenses from './Components/expenses';
import PieChartTracker from './Components/pieChart';
import { SnackbarProvider } from "notistack";


function App() {
  return (
    <SnackbarProvider>
      <AppTracker />
    </SnackbarProvider>
  );
}

export default App;

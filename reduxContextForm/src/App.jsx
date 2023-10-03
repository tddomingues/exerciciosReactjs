import "./App.css";
import Counter from "./components/Counter";
import CounterPrevious from "./components/CounterPrevious";
import Form from "./components/Form";

import { Provider } from "react-redux";
import store from "./store.jsx";

import { TaskProvider } from "./context/TaskContext";
import List from "./components/List";
//import Pagination from "./components/Pagination";
import VerificacaoLogin from "./components/VerificacaoLogin";
import storeRedux from "./redux/store";
import FormPerformatico from "./components/FormPerformatico"

function App() {
  return (
    <>
      <Provider store={store}>
        <Counter />
        <CounterPrevious />
      </Provider>
      <TaskProvider>
        <Form />
        <List />
      </TaskProvider>
      <Provider store={storeRedux}>
        {/* <Pagination /> */}
        <VerificacaoLogin />
      </Provider>
      <FormPerformatico/>
    </>
  );
}

export default App;

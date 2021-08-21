import { Switch, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Favorites } from "./pages/Favorites";

function App() {
  return (
    <Switch>
      <Route path="/favorites" component={Favorites} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default App;

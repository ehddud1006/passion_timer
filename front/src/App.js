import Date from "./components/date/Date";
import TopBar from "./components/topBar/TopBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "./components/singnIn/SignIn";
import Study from "./components/study/Study";
import TopBarStudy from "./components/topBarStudy/TopBarStudy";
import TotalDate from "./components/date/TotalDate"

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <TopBar category={"일간"}></TopBar>
          <Date category={"일간"}></Date>
        </Route>
        <Route path="/su">
          <TopBar category={"주간"}></TopBar>
          <Date category={"주간"}></Date>
        </Route>
        <Route path="/gong">
          <TopBar category={"월간"}></TopBar>
          <Date category={"월간"}></Date>
        </Route>
        <Route path="/ja">
          <TopBar category={"누적"}></TopBar>
          <TotalDate category={"누적"}></TotalDate>
        </Route>
        <Route path="/mypage">
          <TopBar category={"마이페이지"}></TopBar>
          <Mypage category={"마이페이지"}></Mypage>
        </Route>
        {/* <Route path="/dae">
          <TopBar category={"대학생"}></TopBar>
          <Date category={"대학생"}></Date>
        </Route> */}
        <Route path="/signIn">
          <SignIn></SignIn>
        </Route>
        <Route path="/study">
          <TopBarStudy></TopBarStudy>
          <Study></Study>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
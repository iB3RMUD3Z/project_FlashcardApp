import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./components/Home";
import CreateDeck from "./components/decks/CreateDeck";
import DisplayDeck from "./components/decks/DisplayDeck";
import EditDeck from "./components/decks/EditDeck";
import Study from "./components/decks/Study";
import AddCard from "./components/cards/AddCard";
import EditCard from "./components/cards/EditCard";
import NotFound from "./NotFound";

function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <DisplayDeck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <NotFound />
        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;

/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { NotFound } from '@strapi/helper-plugin';
import pluginId from '../../pluginId';
import HomePage from '../HomePage';
import styled from "styled-components";


const App = () => {
  return (
    <Page>
      <Switch>
        <Route path={`/plugins/${pluginId}`} component={HomePage} exact />
        <Route component={NotFound} />
      </Switch>
    </Page>
  );
};


export const Page = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  height: 100vh;

  text-align: center;
  color: #747474;

  h1 {
    margin-bottom: 1rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #383838;
  }

  ul {
    margin: 30px 0;
    text-align: left;
  }
  ul li {
    margin-bottom: 0.75rem;
    list-style-type: auto;
  }

  ul li:last-child {
    margin-bottom: 0;
  }
`;


export default App;

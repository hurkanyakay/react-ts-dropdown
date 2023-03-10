import React from 'react';
import '../styles/app.css';
import { containerBuilder } from './app.container';
import './app.i18n';
import AppRouter from './AppRouter';
import jss from 'jss';
import preset from 'jss-preset-default';

containerBuilder();
jss.setup(preset());

export default function App() {
  return (
    <div>
      <AppRouter />
    </div>
  );
}

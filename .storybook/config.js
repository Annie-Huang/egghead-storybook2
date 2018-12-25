import { addDecorator, configure, setAddon } from '@storybook/react';
import JSXAddon from 'storybook-addon-jsx';
import {withInfo} from '@storybook/addon-info';

setAddon(JSXAddon);

// Register decorator
addDecorator(withInfo);

const req = require.context('../src/', true, /.stories.js$/);

function loadStories() {
    require('./welcomeStory');
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

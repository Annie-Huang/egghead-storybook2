import { configure } from '@storybook/react';

const req = require.context('../src/', true, /.stories.js$/);
function loadStories() {
    require('./welcomeStory');
    req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

import { configure } from '@kadira/storybook';

function loadStories() {
  /* eslint-disable global-require */
  require('vclub/stories/views/clubLayout/ClubLayoutRoot');
  /* eslint-enable global-require */
}

configure(loadStories, module);

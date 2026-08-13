import { createBrowserRouter } from 'react-router';
import Root from './Root';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import { StoryPage } from './components/StoryPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: 'about', Component: AboutPage },
      { path: 'story/:id', Component: StoryPage },
    ],
  },
]);

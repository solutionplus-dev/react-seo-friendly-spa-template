import { Home, About } from '../containers';

import type { ComponentType } from 'react';
import ComponentRenderer from '../ComponentRenderer';
import ThankYouPage from '../ThankYouPage';
import MainLandingPage from '../demos/AgencyLandingPage';

const DESC_SUFFIX = 'description - length <= 160 chars.';

export type MetaInfoProps = Partial<
  Readonly<{
    meta: any[];
    lang: string;
    title: string;
    defer: boolean;
    locale: string;
    description: string;
  }>
>;

export type Route = Readonly<{
  path: string;
  name: string;
  metaInfo: MetaInfoProps;
  Component: any;
}>;

export const routes: Route[] = [
  {
    path: '/',
    name: 'Home',
    Component: MainLandingPage,
    metaInfo: {
      title: 'Home',
      description: `Home ${DESC_SUFFIX}`
    }
  },
  {
    path: '/about',
    name: 'About',
    Component: About,
    metaInfo: {
      title: 'About',
      description: `About ${DESC_SUFFIX}`
    }
  },
  {
    path: '/components/:type/:subtype/:name',
    name: 'ComponentRenderer',
    Component: ComponentRenderer,
    metaInfo: {
      title: 'ComponentRenderer',
      description: `ComponentRenderer ${DESC_SUFFIX}`
    }
  },
  {
    path: '/components/:type/:name',
    name: 'ComponentRenderer1',
    Component: About,
    metaInfo: {
      title: 'ComponentRenderer1',
      description: `ComponentRenderer1 ${DESC_SUFFIX}`
    }
  },
  {
    path: '/thank-you',
    name: 'ThankYouPage',
    Component: ThankYouPage,
    metaInfo: {
      title: 'ThankYouPage',
      description: `ComponentRenderer1 ${DESC_SUFFIX}`
    }
  },
];


export const getRouteMetaInfo = (name: string): MetaInfoProps => {
  const route = routes.find((x) => x.name === name);
  return route?.metaInfo ?? {};
};
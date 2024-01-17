import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://ryancollingham.com/logobig.svg',
    brandTitle: 'Ryan Collingham',
    brandUrl: 'https://ryancollingham.com',
  },
});

import { MdHome, MdPublic, MdSubscriptions, MdMoveDown, MdMoveUp } from 'react-icons/md'

export const sideBarItems = [
    {
      text: 'Home',
      route: '/',
      icon: MdHome,
    },
    {
      text: 'Website',
      icon: MdPublic,
      children: [
        {
          text: 'Page 1',
          route: '/website/page1',
        },
        {
          text: 'Page 2',
          route: '/website/page2',
        },
      ],
    },
    {
      text: 'Subscriptions',
      route: '/subscriptions',
      icon: MdSubscriptions,
    },
  ];
  
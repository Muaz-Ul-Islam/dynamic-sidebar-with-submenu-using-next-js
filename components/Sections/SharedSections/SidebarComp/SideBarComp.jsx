import React, { useState } from 'react';

import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';

import { MdHome, MdPublic, MdSubscriptions, MdMoveDown, MdMoveUp } from 'react-icons/md'


import Link from 'next/link';
import { useRouter } from 'next/router';

const drawerWidth = '10%';

const styles = {
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    toolbar: {
        minHeight: '64px',
    },
    content: {
        flexGrow: 1,
        padding: '24px',
    },
    nested: {
        paddingLeft: '32px',
    },
};

const SidebarComp = () => {
    const router = useRouter();
    const [websiteOpen, setWebsiteOpen] = useState(false);

    const toggleWebsite = () => {
        setWebsiteOpen(!websiteOpen);
    };

    const menuItems = [
        { text: 'Dashboard', icon: <MdHome />, to: '/' },
        {
            text: 'Website',
            icon: <MdPublic />,
            to: '',
            subItems: [
                { text: 'Home', to: '/customization/home' },
                { text: 'About Us', to: '/customization/about-us' },
                { text: 'Locations', to: '/customization/locations' },
                { text: 'Contact Us', to: '/customization/contact-us' },
                { text: 'How it works', to: '/customization/how-it-works' },
                { text: 'Blog', to: '/customization/blog' },
                { text: 'Subscription', to: '/customization/subscription' },
            ],
        },
        { text: 'Partners', icon: <MdHome />, to: '/partners' },
        { text: 'Subscribers', icon: <MdHome />, to: '/subscriber' },
        { text: 'Notification', icon: <MdSubscriptions />, to: '/notification' },
        { text: 'Services', icon: <MdHome />, to: '/services' },
        { text: 'Settings', icon: <MdHome />, to: '/settings' },


    ];

    const activeLinkStyle = {

        // // @@ BOTH ACTIVE AND HOVER EFFECT 
        // '&.Mui-selected , &:hover': {
        //     backgroundColor: 'black',
        //     color: 'white',
        //     '& .MuiListItemIcon-root': {
        //         color: 'white',
        //     },
        // },

        // @@ ACTIVE LINK 
        '&.Mui-selected': {
            backgroundColor: 'black',
            color: 'white',
            '& .MuiListItemIcon-root': {
                color: 'white',
            },
        },

        //   @@ HOVER EFFECT
        // ' &:hover': {
        //     backgroundColor: 'purple',
        //     '&, & .MuiListItemIcon-root': {
        //       color: 'white',
        //     },


    };

    const renderMenuItems = () => {
        return menuItems.map((item, index) => {
            if (!item.subItems) {
                return (
                    <ListItem
                        button
                        key={index}
                        component={Link}
                        href={item.to}
                        selected={router.pathname === item.to}
                        sx={router.pathname === item.to ? activeLinkStyle : {}}
                    // sx={activeLinkStyle}

                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                );
            } else {
                return (
                    <React.Fragment key={index}>
                        <ListItem button onClick={toggleWebsite}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text} />
                            {websiteOpen ? <MdMoveUp /> : <MdMoveDown />}
                        </ListItem>
                        <List component="div" disablePadding hidden={!websiteOpen}>
                            {item.subItems.map((subItem, subIndex) => (
                                <ListItem
                                    button
                                    key={subIndex}
                                    style={styles.nested}
                                    component={Link}
                                    href={subItem.to}
                                    selected={router.pathname === subItem.to}
                                    sx={activeLinkStyle}
                                    // sx={router.pathname === item.to ? activeLinkStyle : {}}
                                >
                                    <ListItemText primary={subItem.text} />
                                </ListItem>
                            ))}
                        </List>
                    </React.Fragment>
                );
            }
        });
    };

    return (
        <Drawer
            style={styles.drawer}
            variant="permanent"
            classes={{
                paper: styles.drawerPaper,
            }}
        >
            <div style={styles.toolbar} />
            <List>{renderMenuItems()}</List>
        </Drawer>
    );
};

export default SidebarComp;

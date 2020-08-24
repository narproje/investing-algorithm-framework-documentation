import React from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {withRouter} from 'react-router-dom';
import ListItem from "@material-ui/core/ListItem";
import {Divider} from "@material-ui/core";

import NestedSideNavItem from "../navigation/NestedSideNavItem";
import SideNavItem from "../navigation/SideNavItem";

const useStyles = makeStyles(theme => ({
    header: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(2)
    },
    primaryHeader: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        maxWidth: 250,
        marginBottom: theme.spacing(2),
        backgroundColor: theme.palette.primary.light
    },
    primaryHeaderText: {
        color: '#ffffff'
    },
    activeItem: {
        backgroundColor: theme.palette.primary.main
    },
    headerItem: {
        backgroundColor: '#eeeeee'
    }
}));

const SideNavContent = props => {
    const classes = useStyles();
    const {location} = props;

    const listItems = () => {
        const {pathname} = location;

        if (pathname.includes('documentation/general')) {
            return <>
                <ListItem className={classes.primaryHeader}>
                    <Typography className={classes.primaryHeaderText}>General</Typography>
                </ListItem>
                <Divider/>
                <SideNavItem label={'Overview'} link={'/documentation/general/overview'}/>
                <SideNavItem label={'Installation'} link={'/documentation/general/installation'}/>
            </>
        } else if(pathname.includes('documentation/guides')) {
            return <>
                    <ListItem className={classes.primaryHeader}>
                        <Typography className={classes.primaryHeaderText}>Guides</Typography>
                    </ListItem>
                    <Divider/>
                <SideNavItem label={'Overview'} link={'/documentation/guides/overview'}/>
                <NestedSideNavItem header={'Basic Algorithm Guide'} subItems={
                        [
                            {label: 'Intro', link: '/documentation/guides/basic-algorithm/intro'},
                            {label: 'Template', link: '/documentation/guides/basic-algorithm/template'},
                            {label: 'Models', link: '/documentation/guides/basic-algorithm/models'},
                            {label: 'Setup State', link: '/documentation/guides/basic-algorithm/setup_state'},
                            {
                                label: 'Data providing State',
                                link: '/documentation/guides/basic-algorithm/data-providing'
                            },
                            {label: 'Strategy State', link: '/documentation/guides/basic-algorithm/strategy'},
                            {
                                label: 'Order execution State',
                                link: '/documentation/guides/basic-algorithm/order-executors'
                            },
                            {label: 'Deployment', link: '/documentation/guides/basic-algorithm/deployment'},
                        ]
                    }/>
                </>
        } else if(pathname.includes('documentation/framework-features')) {
            return <>
                <ListItem className={classes.primaryHeader}>
                    <Typography className={classes.primaryHeaderText}>Framework Features</Typography>
                </ListItem>
                <Divider/>
                <SideNavItem label={'Overview'} link={'/documentation/framework-features/overview'}/>
                <NestedSideNavItem header={'Databases'} subItems={
                    [
                        {label: 'Database Resolver', link: '/documentation/framework-features/databases/database-resolver'},
                        {label: 'Models', link: '/documentation/framework-features/databases/models'},
                        {label: 'Querying', link: '/documentation/framework-features/databases/querying'},
                    ]
                }/>            </>
        } else if(pathname.includes('/development/general/')) {
            return <>
                <ListItem className={classes.primaryHeader}>
                    <Typography className={classes.primaryHeaderText}>General</Typography>
                </ListItem>
                <Divider/>
                <SideNavItem label={'Overview'} link={'/development/general/overview'}/>
                <SideNavItem label={'Contributing'} link={'/development/general/contributing'}/>
                <SideNavItem label={'Code of Conduct'} link={'/development/general/code-of-conduct'}/>
                <SideNavItem label={'Code Review'} link={'/development/general/code-review'}/>
            </>
        } else if(pathname.includes('/development/framework/')) {
            return <>
                <ListItem className={classes.primaryHeader}>
                    <Typography className={classes.primaryHeaderText}>Development</Typography>
                </ListItem>
                <Divider/>
                <SideNavItem label={'Overview'} link={'/development/framework/overview'}/>
                <SideNavItem label={'Roadmap'} link={'/development/framework/roadmap'}/>
                <SideNavItem label={'Changelog'} link={'/development/framework/changelog'}/>
                <SideNavItem
                    label={'Development Environment'}
                    link={'/development/framework/development-environment'}
                />
            </>
        } else if(pathname.includes('/development/documentation/')) {
            return <>
                <ListItem className={classes.primaryHeader}>
                    <Typography className={classes.primaryHeaderText}>Framework</Typography>
                </ListItem>
                <Divider/>
                <SideNavItem label={'Overview'} link={'/development/documentation/overview'}/>
                <SideNavItem label={'Roadmap'} link={'/development/documentation/roadmap'}/>
                <SideNavItem label={'Changelog'} link={'/development/documentation/changelog'}/>
                <SideNavItem label={'Documentation Style Guide'} link={'/development/documentation/style-guide'}/>
            </>
        }
    }

    return (
        <div>
            <br/>
            {listItems()}
        </div>
    );
};

export default withRouter(SideNavContent);
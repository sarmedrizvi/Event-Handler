import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import './Tab.scss'

const StyledTabs = withStyles({
	indicator: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		'& > div': {
			maxWidth: 40,
			width: '100%',
			backgroundColor: '#635ee7',
		},
	},
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

const StyledTab = withStyles(theme => ({
	root: {
		textTransform: 'none',
		color: '#fff',
		fontWeight: theme.typography.fontWeightRegular,
		fontSize: theme.typography.pxToRem(15),
		marginRight: theme.spacing(1),
		'&:focus': {
			opacity: 1,
		},
	},
}))(props => <Tab disableRipple {...props} />);

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1,
	},
	padding: {
		padding: theme.spacing(3),
	},
	demo1: {
		backgroundColor: theme.palette.background.paper,
	},
	demo2: {
		backgroundColor: '#2e1534',
	},
}));

export default function CustomizedTabs({ tabsArray }) {
	const classes = useStyles();
	const [value, setValue] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<div className={`${classes.demo2} Tab`}>
				<StyledTabs value={value} onChange={handleChange} aria-label="styled tabs example" id='size' >
					{tabsArray.map(tab => <StyledTab label={tab} className='Tab1' />)}
				</StyledTabs>
				<Typography className={`${classes.padding}`}  />
			</div>
		</div>
	);
}
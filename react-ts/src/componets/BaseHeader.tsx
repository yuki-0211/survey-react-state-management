import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {ThemeProvider} from '@mui/material/styles';
import {darkTheme} from 'css/mui';

const BaseHeader: React.FC = () => {
	return (
		<Stack spacing={2} sx={{flexGrow: 1}}>
			<ThemeProvider theme={darkTheme}>
				<AppBar position="static" color="primary">
					<Toolbar>
						<IconButton
							edge="start"
							color="inherit"
							aria-label="menu"
							sx={{mr: 2}}
						>
							<MenuIcon />
						</IconButton>
						<Typography noWrap variant="h6" component="div" sx={{flexGrow: 1}}>
							test
						</Typography>
					</Toolbar>
				</AppBar>
			</ThemeProvider>
		</Stack>
	);
};

export default BaseHeader;

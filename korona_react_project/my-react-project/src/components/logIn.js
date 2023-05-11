
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useState, useEffect } from 'react';
import { getAllPersonal_details } from '../services/personal_detail_service';
import { getAllCorona_detail } from '../services/corona_details_service'

const theme = createTheme();

export default function LogIn_manager() {
  const [username, setUsername] = useState('');
  const [identity, setIdentity] = useState('');
  const [administrator_password, setAdministrator_password] = useState('');
  const [alert, setAlert] = useState(null);
  const [all_client, setAll_client] = useState([]);
  // const [all_client,setAll_client]=useState([]);

  const navigate = useNavigate()
  const [personalDetails, setPersonalDetails] = useState([]);
  const [coronaDetails, setCoronaDetails] = useState([]);

  useEffect(() => {
    getAllPersonal_details().then((data) => {
      setAll_client(data)
    })
  })
  useEffect(() => {
    getAllCorona_detail().then((data) => {
      setAll_client(data)
    })
  })
  function handleSubmit() {
    const user = all_client.find((item) => item.name === username && item.identity === identity);
    if (user) {

    } else {
      setAlert(
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">The data does not match. try again!</Alert>
        </Stack>
      );
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Log in
          </Typography>
          {alert && <Stack sx={{ mt: 2 }}>{alert}</Stack>}
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="identity"
              label="identity"
              type="identity"
              id="identity"
              autoComplete="current-identity"
              value={identity}
              onChange={(event) => setIdentity(event.target.value)}
            />

            <Button onClick={handleSubmit} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} >
              Log In
            </Button>
          </Box>
        </Box>
        <Box mt={8}></Box>
      </Container>
    </ThemeProvider>
  );
}
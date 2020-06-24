import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="https://material-ui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));
  class Zero1 extends Component
  {
constructor()
{
super();
 this.state={
     ema:'',
     pass:'',
     st:false

}

}
handlelogin=()=>
{
if(this.state.ema =="abc"&&this.state.pass=="xyz")
{
    alert("welcome")
    this.setstate({st:true})
}
else
{
    alert("not able to login")
}

}
handleChangeFields=(event)=>
{
    this.setState({
        ...this.state,
        [event.target.name]:event.target.value
    })
}
render()
{
const {classes}=this.props
return(
    <div>
        {this.state.pass}
        {this.state.st?(<div>WELCOME</div>):(
             <Container component="main" maxWidth="xs">
             <CssBaseline />
             <div className={classes.paper}>
               <Avatar className={classes.avatar}>
                 <LockOutlinedIcon />
               </Avatar>
               <Typography component="h1" variant="h5">
                 Sign in
               </Typography>

<div className={classes.form} novalidate>
   <TextField varient ="outlined" margin="normal" required fullWidth id ="email"  label="Email Addres" type="text"></TextField>
   <TextField varient ="outlined" margin="normal" required fullWidth id ="pass"  label="password" type="password"></TextField>
<TextField varient ="outlined" margin="normal" required fullWidth id ="ans"  label="value" naem="ans"></TextField>

<FormControlLabel
control={<Checkbox value="remember" color="primary" />}
label="Remember me"
/>
<Button
type="submit"
fullWidth
variant="contained"
color="primary"
className={classes.submit}
>
Sign In
</Button>
<Grid container>
<Grid item xs>
  <Link href="#" variant="body2">
    Forgot password?
  </Link>
</Grid>
<Grid item>
  <Link href="#" variant="body2">
    {"Don't have an account? Sign Up"}
  </Link>
</Grid>
</Grid>

</div>

</div>
</Container>
        )}
        </div>
);
        }


  }export default withStyles(useStyles)(Zero1);
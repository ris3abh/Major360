import React from 'react';
import Appbar from "@material-ui/core/Appbar";
import ToolBar from "@material-ui/core/ToolBar";
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ChatIcon from '@material-ui/icons/PlayArrow';
import Grid from "@material-ui/core/Grid";
import Divider from '@material-ui/core/Divider';
import List from "@material-ui/core/List";
import TextField from "@material-ui/core/TextField";
import IconButton from '@material-ui/core/IconButton';
import SendIcon from "@material-ui/icons/Send";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import HappyIcon from '@material-ui/icons/SentimentSatisfiedTwoTone';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from "@material-ui/core/TableCell";

const Raaaz=()=>{

const [message,setMessage]=React.useState("");

const [messages,setMessages]=React.useState([]);
const [botMessages,setBotMessages]=React.useState([]);
const [mood,setMood]=React.useState("");
const [songs,setSongs]=React.useState([]);

const sendMessage=(obj)=>{
var promise=new Promise((resolve,reject)=>{
fetch("/sendMessage",{
method: "POST",
headers: {
"Content-type": "application/json"
},
body: JSON.stringify(obj)
}).then(res=>res.json()).then((jsonData)=>{resolve(jsonData)});
});
return promise;
}


const messageList=messages.map((m,idx)=>{
return (
<>
<ListItem>
<ListItemText align='right'><span style={{border:"1px solid black",padding: '5px',borderRadius: '7px',backgroundColor:'#2929aa',color:'white'}}>{m}</span></ListItemText>
</ListItem>
<ListItem>
<ListItemText><span style={{border:"1px solid black",padding: '5px',borderRadius: '7px',backgroundColor:'gray',color:'white'}}>{botMessages[idx]}</span></ListItemText>
</ListItem>
</>
)
})

const sendButtonClickHandler=(ev)=>{
//alert(message);
var obj={"message": message}
sendMessage(obj).then((res)=>{
setMessages([...messages,message])
setBotMessages([...botMessages,res.botMessage]);
setMessage("");
setMood(res.mood);
setSongs(res.songs);
});
}

return (
<div style={{padding: '5px'}}>
<Appbar>
<ToolBar>
<ChatIcon fontSize="large" /> &nbsp;&nbsp;&nbsp;&nbsp;
<Typography variant="h4">Song Recommendor</Typography>
</ToolBar>
</Appbar>
<div style={{marginTop:'75px'}} />
<Grid container spacing={2}>
<Grid item xs={4}>
<Paper elevation={4}>
<Typography variant="h5" align="center">Chat Bot</Typography>
<Divider />
<Grid container spacing={1}>
<Grid item xs={12}>
<List style={{height:"520px",overflow:"scroll"}}>
{
messageList
}
</List>
</Grid>
<Grid item xs={10}>
<TextField value={message} onChange={(ev)=>{setMessage(ev.target.value)}} variant='outlined' label='Enter message here'  fullWidth/>
</Grid>
<Grid item xs={2}>
<IconButton onClick={sendButtonClickHandler}>
<SendIcon color='primary' fontSize="large"/>
</IconButton>
</Grid>
</Grid>
</Paper>
</Grid >
<Grid item xs={8}>
<Grid container>
<Grid item xs={12}>
<Paper style={{height: "100px",padding: "10px"}}>
<Typography variant="h3">
Mood: {mood}
</Typography>

</Paper>
</Grid>
<Grid item xs={12}>
<Table>
<TableHead>
<TableRow>
<TableCell><b>S. No.</b></TableCell>
<TableCell><b>Song Name</b></TableCell>
</TableRow>
</TableHead>
<TableBody>
{
songs.map((song,idx)=>{
return (
<TableRow>
<TableCell>{idx+1}</TableCell>
<TableCell>{song}</TableCell>
</TableRow>
)
})
}
</TableBody>
</Table>
</Grid>
</Grid>
</Grid>
</Grid>
</div>
)
}

export default Raaaz;
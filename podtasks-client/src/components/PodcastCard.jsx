import React from 'react'

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import DeleteIcon from '@mui/icons-material/Delete';
import Grid from '@mui/material/Grid';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const PodcastCard = ({ podcast, deletePodcast }) => {
    const todoList = podcast.tasks

    // capitalizes only first letter of word in string
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
      }
    
      // capitalizes first letter of *each* word in string
      const toTitleCase = (str) => {
        return str.replace(/\w\S*/g, function(txt){
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }

  return (
    <Grid item sx={{ width: '100%' }}>
    <Card variant="outlined" sx={{ minWidth: 275, bgcolor: '' }}>
        <CardHeader
            avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    <PodcastsIcon />
                </Avatar>
            }
            action={
                <div>
                <IconButton href={`/podcasts/${podcast.id}`} aria-label="edit">
                    <EditIcon />
                </IconButton>
                <IconButton onClick={ () => deletePodcast( podcast.id ) } aria-label="edit">
                    <DeleteIcon />
                </IconButton>
                </div>

            }
            subheader={
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    Featuring Guest: { podcast.guest }
                </Typography>}
            title={
                <Typography variant="h5" component="div">
                    { toTitleCase(podcast.topic) }
                </Typography>}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary">
                    Topic
                </Typography>
        </CardHeader>
        <CardContent>
            <Typography variant="subtitle2">
                Description
            </Typography>
            <Typography variant="body2">
                { podcast.description }
            </Typography>
            <br />
            <Typography variant="subtitle2">
                Release Date
            </Typography>
            <Typography variant="body2">
                { podcast.release_date }
            </Typography>
        </CardContent>
        <CardContent>
            { todoList.length == 0 ? <Typography variant="overline" align="center">There's currently no tasks to complete for this podcast.</Typography> :
                <TableContainer component={Paper} elevation={24}>
                <Table sx={{ minWidth: 650 }} size="small" aria-label="simple table" >
                    <TableHead>
                    <TableRow>
                        <TableCell>Tasks</TableCell>
                        <TableCell align="center">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                        { todoList.map((todo, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                <TableCell component="th" scope="row">
                                    { todo.to_do }
                                </TableCell>
                                <TableCell align="center">{ capitalizeFirst(todo.todo_status) }</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            }
    </CardContent>
    </Card>
    </Grid>
  )
}

export default PodcastCard


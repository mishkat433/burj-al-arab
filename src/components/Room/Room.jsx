import React from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import AtachMoney from '@material-ui/icons/AttachMoney';
import LocalHotel from '@material-ui/icons/LocalHotel';
import WcIcon from "@material-ui/icons/Wc"
import CardActions from '@material-ui/core/CardActions';
import './Room.css'
import { Button, IconButton } from '@material-ui/core';
import { useHistory } from 'react-router';

const Room = (props) => {
    const room = props.room
    const histoty = useHistory()
    const handleBook=(bedType)=>{
        histoty.push(`/book/${bedType}`)
    }
    return (
        <Card >
            <CardHeader
                avatar={
                    <Avatar className="avatar" aria-label="recipe" >
                        {room.avatar}
                    </Avatar>
                }
                title={room.title}
                subheader="September 14, 2121"
            />
            <img className="imgUrl" src={room.imgUrl} alt="Conner internet" />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {room.description}
        </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton>
                    <LocalHotel />: {room.bad}
                </IconButton>

                <IconButton>
                    <WcIcon />: {room.capacity}
                </IconButton>

                <IconButton>
                   <AtachMoney />: {room.price}
                </IconButton>
                
                <Button onClick={() => handleBook(room.badType)} variant="contained" color="primary"  >Book</Button>
                
            </CardActions>
            
        </Card>
    );
};

export default Room;
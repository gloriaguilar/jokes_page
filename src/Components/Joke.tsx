import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box, Grid } from "@mui/material";


type propsJoke = {
    category: string,
    type: string,
    icon: any,
    joke?: string,
    setup?: string,
    delivery?: string
}
export default function Joke(props: propsJoke) {

    const singleJoke = () => {
        return (
            <Typography variant="body1" sx={{ letterSpacing: '1px' }}>
                {props.joke}
            </Typography>
        )
    }
    const [checked, setChecked] = React.useState(false);

    const handleChange = () => {
        setChecked((prev) => !prev);
    };
    const doubleJoke = () => {

        return (
            <Typography variant="body1" sx={{ letterSpacing: '1px' }}>
                {props.setup}
                <br />
                <FormControlLabel
                    control={<Switch checked={checked} onChange={handleChange} />}
                    label={checked ? 'Please, stop :(' : 'Ready? '}
                />
                <Fade in={checked}>
                    <Typography color={'#001c81'} fontWeight={700} variant="body2">
                        {props.delivery}
                    </Typography>
                </Fade>

            </Typography>
        )
    }

    const getJokes = (type: string) => {

        if (type === 'single') {
            return singleJoke();
        } else {
            return doubleJoke();
        }
    }

    return (
        <Grid item xs={12} sm={12} lg={3.5}>
            <Card sx={{ height: '100%' }}>
                <CardContent>
                    <Typography variant="subtitle2" gutterBottom color={'gray'}>
                        {props.category}
                    </Typography>
                    {getJokes(props.type)}
                    <Box sx={{ textAlign: 'end' }} >
                        {props.icon}
                    </Box>
                </CardContent>
            </Card>
        </Grid>

    );
}
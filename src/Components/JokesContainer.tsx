import { Box, Grid } from "@mui/material";
import Joke from "./Joke";
import axios from "axios";
import * as React from 'react'
import Typography from '@mui/material/Typography';
import ParkTwoToneIcon from '@mui/icons-material/ParkTwoTone';
import SentimentVeryDissatisfiedTwoToneIcon from '@mui/icons-material/SentimentVeryDissatisfiedTwoTone';
import LaptopTwoToneIcon from '@mui/icons-material/LaptopTwoTone';
import ChurchTwoToneIcon from '@mui/icons-material/ChurchTwoTone';
import MenuBookTwoToneIcon from '@mui/icons-material/MenuBookTwoTone';
import PsychologyTwoToneIcon from '@mui/icons-material/PsychologyTwoTone';

type propsContainer = {
    type: string
}

export default function JokesContainer(props: propsContainer) {

    type responseType = {
        id: number;
        lang: string;
        category: string,
        type: string,
        joke?: string;
        setup?: string;
        delivery?: string,
    }
    const [items, setItems] = React.useState<responseType[]>([]);

    React.useEffect(() => {
        const getJokes = async () => {
            const response = await axios.get(`https://v2.jokeapi.dev/joke/${props.type}?&amount=10`);
            setItems(response.data.jokes);
        }
        getJokes();

        return;
    }, [props.type]);

    const getIcon = (category: string) => {

        switch (category) {
            case 'Christmas':
                return <ParkTwoToneIcon sx={{ fontSize: '30px' }} />
            case 'Dark':
                return <SentimentVeryDissatisfiedTwoToneIcon sx={{ fontSize: '30px' }} />
            case 'Spooky':
                return <ChurchTwoToneIcon sx={{ fontSize: '30px' }} />
            case 'Programming':
                return <LaptopTwoToneIcon sx={{ fontSize: '30px' }} />
            case 'Pun':
                return <MenuBookTwoToneIcon sx={{ fontSize: '30px' }} />
            case 'Misc':
                return <PsychologyTwoToneIcon sx={{ fontSize: '30px' }} />
            default:
                break;
        }
    }


    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'end', marginTop: '24px', gap: '3%' }}>
                <Typography variant="h5">
                    {props.type === 'Any' ? 'Random' : props.type}
                </Typography>
                {getIcon(props.type)}
            </Box>
            <Grid container justifyContent='center' p={6} gap={4.5} xs={12}>
                {
                    items?.map((item) => {
                        if (item.type === 'twopart') {
                            return (
                                < Joke setup={item.setup} delivery={item.delivery} category={item.category} type={item.type} icon={getIcon(item.category)} />
                            )
                        }
                        return (
                            < Joke joke={item.joke} category={item.category} type={item.type} icon={getIcon(item.category)} />
                        )
                    })
                }
            </Grid >
        </Box >
    )
}
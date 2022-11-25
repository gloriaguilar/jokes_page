import Box from '@mui/material/Box';
import BugReportTwoToneIcon from '@mui/icons-material/BugReportTwoTone';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


import './styles.css';
export default function Footer() {

    return (
        <Box className='footerContent flexAlignCenter' sx={{ fontSize: '15px' }}>
            <Box className='alignIcons flexDisplayBlock'>
                <Typography >
                    Hecho por Gloria Aguilar
                </Typography>
                <BugReportTwoToneIcon sx={{ color: 'darkpurple', alignSelf: 'center' }} />
            </Box>
            <Box className='alignIcons flexDisplayBlock' >
                <Typography >Pss...acá nos vemos:</Typography>
                <Box className='flexAlignCenter'>
                    <InstagramIcon onClick={() => window.open('https://www.instagram.com/la.glori_a/')} sx={{ height: '2em', width: '1em', cursor: 'pointer' }} />
                    <LinkedInIcon onClick={() => window.open('https://www.linkedin.com/in/gloria-aguilar-130198')} sx={{ height: '2em', width: '1em', cursor: 'pointer' }} />
                    <GitHubIcon onClick={() => window.open('https://github.com/gloriaguilar')} sx={{ height: '2em', width: '1em', cursor: 'pointer' }} />

                </Box>

            </Box>
        </Box >
    )
}
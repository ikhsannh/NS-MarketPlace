import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";
import useMediaQuery from '@mui/material/useMediaQuery';

const Footer = () => {
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const { palette: { neutral },
    } = useTheme();
    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-around"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 30px)"
            >
                <Box 
                    width={isNonMobile ? "clamp(20%, 30%, 40%)" : "clamp(20%, 100%, 100%)" }>                
                    <Typography variant="h3" fontWeight="bold" mb="10px" color={shades.primary}>NS - Market Place</Typography>
                    <Typography ml={isNonMobile ? undefined : "5px"}> 
                    Auctor, erat elementum ab similique curabitur parturient! Nostrud. 
                    Habitant, libero! Nobis in aute placeat potenti ullam maiores conubia. 
                    Blandit, atque. Labore, aperiam! Ultrices curabitur natus consectetur excepturi, 
                    doloribus sociis unde nibh, massa laoreet, culpa justo! At netus bibendum. Qui facere.
                    </Typography>
                </Box>
              <Box 
                 width={isNonMobile ? "clamp(20%, 10%, 40%)" : "clamp(100%, 25%, 30%)"}> 
                <Typography variant="h3" fontWeight="bold" mb="10px">
                    About Us
                </Typography>
                <Typography  ml={isNonMobile ? undefined : "5px"} mb="5px">Careers</Typography>
                <Typography  ml={isNonMobile ? undefined : "5px"} mb="5px">Our Stores</Typography>
                <Typography  ml={isNonMobile ? undefined : "5px"} mb="5px">Term & Conditions</Typography>
                <Typography  ml={isNonMobile ? undefined : "5px"} mb="5px">Privacy Policy</Typography>
              </Box>

              <Box 
                ml={isNonMobile ? "-10px" : "auto"} 
                width={isNonMobile ? "clamp(20%, 10%, 40%)" : "clamp(100%, 25%, 30%)"}> 
                <Typography variant="h3" fontWeight="bold" mb="10px">
                    Customer Care
                </Typography>
                <Typography  ml={isNonMobile ? undefined : "5px"} mb="5px">Help Center</Typography>
                <Typography  ml={isNonMobile ? undefined : "5px"} mb="5px">Track Your Order</Typography>
                <Typography  ml={isNonMobile ? undefined : "5px"} mb="5px">Corporate & Purchasing</Typography>
                <Typography  ml={isNonMobile ? undefined : "5px"} mb="5px">Returns & Refunds</Typography>
              </Box>

              <Box 
                ml={isNonMobile ? undefined : "-5px"}
                width={isNonMobile ? "clamp(20%, 10%, 40%)" : "clamp(100%, 25%, 30%)"}>
                 <Typography variant="h3" fontWeight="bold" mb="10px">
                    Contact Us
                 </Typography>
                <Typography ml={isNonMobile ? undefined : "5px"} mb="5px">Yogyakarta, IDN 00045</Typography>
                <Typography ml={isNonMobile ? undefined : "5px"} mb="5px">Email@gmail.com</Typography>
                <Typography ml={isNonMobile ? undefined : "5px"} mb="5px">(+62) 340 043 340</Typography>
              </Box>  

            </Box>
        </Box>
    )
};

export default Footer;

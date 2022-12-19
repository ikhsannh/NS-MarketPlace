import { useTheme } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { shades } from "../../theme";

const Footer = () => {
    const { palette: { neutral },
    } = useTheme();
    return (
        <Box mt="70px" p="40px 0" backgroundColor={neutral.light}>
            <Box
                width="80%"
                margin="auto"
                display="flex"
                justifyContent="space-between"
                flexWrap="wrap"
                rowGap="30px"
                columnGap="clamp(20px, 30px, 40px)"
            >
                <Box width="clamp(20%, 30%, 40%)">
                    <Typography variant="h4" fontWeight="bold" mb="30px" color={shades.primary}>NS - Market Place</Typography>
                    <div>
                    Auctor, erat elementum ab similique curabitur parturient! Nostrud. 
                    Habitant, libero! Nobis in aute placeat potenti ullam maiores conubia. 
                    Blandit, atque. Labore, aperiam! Ultrices curabitur natus consectetur excepturi, 
                    doloribus sociis unde nibh, massa laoreet, culpa justo! At netus bibendum. Qui facere.
                    </div>
                </Box>
              <Box> 
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    About Us
                </Typography>
                <Typography mb="30px">Careers</Typography>
                <Typography mb="30px">Our Stores</Typography>
                <Typography mb="30px">Term & Conditions</Typography>
                <Typography mb="30px">Privacy Policy</Typography>
              </Box>

              <Box> 
                <Typography variant="h4" fontWeight="bold" mb="30px">
                    Customer Care
                </Typography>
                <Typography mb="30px">Help Center</Typography>
                <Typography mb="30px">Track Your Order</Typography>
                <Typography mb="30px">Corporate & Purchasing</Typography>
                <Typography mb="30px">Returns & Refunds</Typography>
              </Box>

              <Box width="clamp(20%, 25%, 30%)">
                 <Typography variant="h4" fontWeight="bold" mb="30px">
                    Contact Us
                 </Typography>
                <Typography mb="30px">01 Special District of Yogyakarta, IDN 00045</Typography>
                <Typography mb="30px">Email: yourcompanyemail@gmail.com</Typography>
                <Typography mb="30px">(+62) 340 043 340</Typography>
              </Box>  

            </Box>
        </Box>
    )
};

export default Footer;

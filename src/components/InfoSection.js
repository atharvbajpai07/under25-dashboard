import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DescriptionIcon from '@mui/icons-material/Description';
import InboxIcon from '@mui/icons-material/Inbox';
import PersonIcon from '@mui/icons-material/Person';
import GiftIcon from '@mui/icons-material/CardGiftcard';
import userscheck from "../assets/logos/users-check.svg"
import gift from "../assets/logos/gift-02.svg"
import filecheck from "../assets/logos/file-check-02.svg"
import currencyrupee from "../assets/logos/currency-rupee.svg"
import creditcardupload from "../assets/logos/credit-card-upload.svg"
import creditcarddownload from "../assets/logos/credit-card-download.svg"
import briefcase from "../assets/logos/briefcase-02.svg"
// import userscheck from "../assets/logos/users-check.svg"




 
 


const StyledPaper = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  borderRadius: '8px',
  boxShadow: 'none',
  border: '1px solid #E8E8E8'
});

const IconWrapper = styled('div')({
  marginRight: '16px',
  background: '#F2F2F2',
  borderRadius: '8px',
  padding: '8px',
  color: '#000',
});

const TextWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
});

const ValueText = styled(Typography)({
  fontWeight: 'bold',
  fontSize: '24px',
});

const LabelText = styled(Typography)({
  color: '#757575',
});

const InfoSection = () => {
  const data = [
    { value: '2,35,000', label: 'Total Value of Missions', icon: <img src={currencyrupee} alt="Currency Rupee" width="20" height="20" /> },
    { value: '134', label: 'No. of Transactions', icon: <img src={creditcardupload} alt="File Check" width="20" height="20" /> },
    { value: '134', label: 'Total Amount Claimed', icon: <img src={creditcarddownload} alt="Credit Card Download" width="20" height="20" /> },
    { value: '2,35,000', label: 'No. of Job leads', icon: <img src={briefcase} alt="Briefcase" width="20" height="20" /> },
    { value: '12', label: 'Missions Applications', icon: <img src={userscheck} alt="Users Check" width="20" height="20" /> },
    { value: '12', label: 'Missions Submissions', icon: <img src={filecheck} alt="Credit Card Upload" width="20" height="20" /> },
    { value: '12', label: 'Giveaway Applications', icon: <img src={gift} alt="Gift" width="20" height="20" /> },
    { value: '12', label: 'Giveaway Submissions', icon: <img src={filecheck} alt="Gift" width="20" height="20" /> },
  ];
  
  

  return (
    <Box sx={{ flexGrow: 1, padding: 1 }}>
      <Grid container spacing={2}>
        {data.map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <StyledPaper>
              <IconWrapper>{item.icon}</IconWrapper>
              <TextWrapper>
                <ValueText>{item.value}</ValueText>
                <LabelText>{item.label}</LabelText>
              </TextWrapper>
            </StyledPaper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default InfoSection;
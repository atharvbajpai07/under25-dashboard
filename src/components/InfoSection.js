import React from 'react';
import { Box, Grid, Typography, Paper } from '@mui/material';
import { styled } from '@mui/system';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DescriptionIcon from '@mui/icons-material/Description';
import InboxIcon from '@mui/icons-material/Inbox';
import PersonIcon from '@mui/icons-material/Person';
import GiftIcon from '@mui/icons-material/CardGiftcard';

const StyledPaper = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  padding: '16px',
  borderRadius: '8px',
  border: '1px solid #e0e0e0',
});

const IconWrapper = styled('div')({
  marginRight: '16px',
  fontSize: '40px',
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
    { value: '23,5000', label: 'Total Value of Missions', icon: <CurrencyRupeeIcon /> },
    { value: '134', label: 'No. of Transactions', icon: <DescriptionIcon /> },
    { value: '134', label: 'Total Amount Claimed', icon: <InboxIcon /> },
    { value: '23,5000', label: 'No. of Job leads', icon: <GiftIcon /> },
    { value: '12', label: 'Missions Applications', icon: <PersonIcon /> },
    { value: '12', label: 'Missions Submissions', icon: <DescriptionIcon /> },
    { value: '12', label: 'Giveaway Applications', icon: <GiftIcon /> },
    { value: '12', label: 'Giveaway Submissions', icon: <DescriptionIcon /> },
  ];

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
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
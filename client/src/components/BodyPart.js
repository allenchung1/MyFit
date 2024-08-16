import React from 'react';
import { Stack, Typography } from '@mui/material';
import SearchIcon from '../utils/Images/SearchIcon.png';


const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className="bodyPart-card"
        sx={{
            borderTop: bodyPart === item ? '4px solid #007AFF' : '',
            backgroundColor: '#FFFFFF',
            borderBottomLeftRadius: '20px',
            width: '270px',
            height: '280px',
            cursor: 'pointer',
            gap: '47px'
        }}
        onClick={() => {
            setBodyPart(item);
        }}
    >
        <img src={SearchIcon} alt="dumbbell" style={{ width: '40px', height: '40px'}} />
        <Typography fontSize="24px" fontWeight="bold" textTransform="capitalize">
            {item}
        </Typography>
    </Stack>

  )
}

export default BodyPart;
import React from 'react';
import { Button, Stack, Typography} from '@mui/material';

const ExerciseCard = ({ exercise }) => {
    return (
    <Stack className="exercise-card" to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
        <Stack direction="row">
            {<Button sx={{ 
                ml: '21px', 
                color: '#FFFFFF', 
                background: '#000000', 
                fontSize: '14px', 
                borderRadius: '20px', 
                textTransform: 'capitalize'}}>
                    {exercise.target}
            </Button>}
        </Stack>
        <Typography 
            ml="21px" 
            color="#000000" 
            fontWeight="bold" 
            mt="11px" 
            pb="10px" 
            textTransform="capitalize" 
            fontSize="22px"
        >
            {exercise.name}
        </Typography>
    </Stack>
  )
}

export default ExerciseCard;
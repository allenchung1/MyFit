import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField } from '@mui/material';
import { exerciseOptions, fetchData } from "../api";

const SearchExercises = ({ setExercises }) => {
    const [search, setSearch] = useState('');

    const handleSearch = async () => {
        if(search) {
            const exercisesData = await fetchData(
                `https://exercisedb.p.rapidapi.com/exercises/name/${search}`,
                exerciseOptions
            );

            setSearch('');
            setExercises(exercisesData);
        }
    };

    return (
        <Stack
            alignItems="center"
            mt="37px"
            justifyContent="center"
            p="20px"
        >
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: {
                            fontWeight: '700',
                            border: 'none',
                            borderRadius: '4px'
                        },
                        width: { lg: '1000px', xs: '350px'},
                        bordeerRadius: '40px'
                    }}
                    height="76px"
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                    placeholder="Search Exercises"
                    type="text"
                />
                <Button className="search-btn"
                    sx={{
                        bgcolor: '#007AFF',
                        color: '#FFFFFF',
                        textTransform: 'none',
                        width: { lg: '100px', xs: '80px'},
                        fontSize: {lg: '20px', xs: '14px'},
                        height: '56px',
                        position: 'absolute',
                        right: '0'
                    }}
                     onClick={handleSearch}
                >
                    Search
                </Button>
            </Box>
        </Stack>
    );
};

export default SearchExercises;
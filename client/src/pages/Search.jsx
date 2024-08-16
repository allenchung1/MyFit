import React, { useState } from "react";
import styled from "styled-components";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

const Container = styled.div`
    flex: 1;
    height: 100%;
    display: flex;
    justify-content: center;
    padding: 22px 0px;
    overflow-y: scroll;
`;

const Wrapper = styled.div`
    flex: 1;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    gap: 22px;
    @media (max-width: 600px) {
        gap: 12px;
    }
`;

const Title = styled.div`
    padding: 0px 16px;
    font-size: 22px;
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
`;

const Search = () => {
    const [exercises, setExercises] = useState([]);
    const [bodyPart, setBodyPart] = useState('all');

    return (
        <Container>
            <Wrapper>
                <Title>Find New Exercises</Title>
                <SearchExercises 
                    setExercises={setExercises}
                    bodyPart={bodyPart}
                    setBodyPart={setBodyPart}
                />
                <Exercises 
                    exercises={exercises}
                    setExercises={setExercises}
                    bodyPart={bodyPart}
                />
            </Wrapper>
        </Container>
    );
};

export default Search;



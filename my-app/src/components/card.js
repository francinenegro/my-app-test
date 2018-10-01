import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
width: 300px;
height: 225px;
background: url(${props => props.image}); /*pass the image in the props*/
color: white;
background-size: cover;
border-radius:20px;
padding: 20px;
transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
&:hover {
    transform: scale(1.1,1.1);
    box-shadow: 0 10px 20px rgba (0,0,0, 0.5);

    h3 {
        transform: translateY(-10px)
    }

    p {
        opacity: 0.5;
    }
}
`


const Title = styled.h3 `
transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
`

const Text = styled.p  `
transition: 0.8s cubic-bezier(0.19, 1, 0.22, 1);
`
const Card = props => (
    <CardContainer image={props.image}>
    <Title>{props.title}</Title>
    <Text>{props.text}</Text>
    </CardContainer>
)

export default Card 
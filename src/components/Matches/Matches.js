import { Component } from 'react'
import { Container, Group, MatchDiv } from '../../styledComponents'

export default class Matches extends Component {
    constructor(props) {
        super(props)

        this.state = {
            group1: [1,2,3,4,5,6,7,8],
            group2: [1,2,3,4],
            group3: [1,2],
            group4: [4]
        }
    }

    render() {
        return (
            <Container>
                <Group>
                {this.state.group1.map((el, i) => {
                    return (
                        <MatchDiv key={i} margin="15px">

                        </MatchDiv>
                    )
                })}
                </Group>
                <Group>
                {this.state.group2.map((el, i) => {
                    return (
                        <MatchDiv key={i} margin="15px">

                        </MatchDiv>
                    )
                })}
                </Group>
                <Group>
                {this.state.group3.map((el, i) => {
                    return (
                        <MatchDiv key={i} margin="15px">

                        </MatchDiv>
                    )
                })}
                </Group>
                <Group>
                {this.state.group4.map((el, i) => {
                    return (
                        <MatchDiv key={i} margin="15px">

                        </MatchDiv>
                    )
                })}
                </Group>
            </Container>
        )
    }
}

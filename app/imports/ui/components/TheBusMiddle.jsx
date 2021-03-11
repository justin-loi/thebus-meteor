import React from 'react';
import { Container, Segment } from 'semantic-ui-react';

export default class TheBusMiddle extends React.Component {
  render() {
    return (
      <Container textAlign="center">
        <Segment inverted color="green">
            TheHandi-Van is operating normally
        </Segment>
        <Segment inverted color="red">
            COVID-19(CORONAVIRUS) UPDATE
        </Segment>
      </Container>
    );
  }
}

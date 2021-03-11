import React from 'react';
import { Container, Header, Input, Segment, Grid, Icon, Divider } from 'semantic-ui-react';

export default class TheBusLower extends React.Component {
  render() {
    return (
      <Container>
        <Grid>
          <Grid.Column width={6}>
            <Segment inverted color="orange">
              <Header as="h3">
                <Icon name="bus"/> HEA
              </Header>
              <Header as="h4">
                  Real-Time Bus Arrival
              </Header>
              <p>Enter Street name or location</p>
              <Input action='search' placeholder='Search...' />
            </Segment>
          </Grid.Column>
          <Grid.Column width={10}>
            <Segment inverted color="yellow">
              <Header as="h3">
                  Service Disruption
              </Header>
              <Header as="h4">
                  January 23, 2021 05:00am - Kuntz Gate Closed on Weekends
              </Header>
              <Divider/>
              <p>Route(s) 303</p>
              <p>No service Eastbound and Westbound on Elliott St. Please board buses on Nimitz prior to Elliott, and
                  on Kuntz Ave after the self serve car wash.</p>
              <p><a className="white" href="#">Click here to see more Service Disruptions...</a></p>
            </Segment>
          </Grid.Column>
        </Grid>
      </Container>
    );
  }
}

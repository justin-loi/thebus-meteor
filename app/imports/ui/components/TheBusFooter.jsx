import React from 'react';
import { Container, Menu, Icon } from 'semantic-ui-react';

export default class TheBusFooter extends React.Component {
  render() {
    return (
      <Container textAlign="center">
        <Menu stackable fluid borderless className="footer">
          <Container>
            <Menu.Item><Icon name="money bill alternate"/>Fares</Menu.Item>
            <Menu.Item><Icon name="map"/>System Map</Menu.Item>
            <Menu.Item><Icon name="clock"/>Transit Center</Menu.Item>
            <Menu.Item><Icon name="bus"/>Real-time Bus Arrival</Menu.Item>
            <Menu.Item><Icon name="road"/>Road Conditions</Menu.Item>
          </Container>
          <Container>
            <Menu.Item><Icon name="envelope"/>Customer Comment</Menu.Item>
            <Menu.Item><Icon name="building"/>City & County of Honolulu</Menu.Item>
            <Menu.Item><Icon name="shield alternate"/>Safety & Security</Menu.Item>
            <Menu.Item><Icon name="globe"/>Web Services API</Menu.Item>
          </Container>
        </Menu>
      </Container>
    );
  }
}

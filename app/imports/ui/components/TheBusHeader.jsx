import React from 'react';
import { Container, Image, Dropdown, Menu } from 'semantic-ui-react';

export default class TheBusHeader extends React.Component {
  render() {
    return (
      <Container>
        <Image src="http://www.thebus.org/images/newimages/titlebar.jpg" alt="TheBus Logo" fluid/>
        <Menu borderless attached>
          <Menu.Item>Home</Menu.Item>
          <Menu.Item>Ride TheBus</Menu.Item>
          <Menu.Item>Fares/Programs</Menu.Item>
          <Menu.Item>Customer Service</Menu.Item>
          <Menu.Item>Rider Info</Menu.Item>
          <Menu.Item>Careers</Menu.Item>
          <Menu.Item>About TheBus</Menu.Item>
          <Menu.Item>Alternate Navigation</Menu.Item>
          <Menu.Item>
            <Dropdown text="Translation - English">
              <Dropdown.Menu>
                <Dropdown.Item text="Chinese - 中文"/>
                <Dropdown.Item text="Japanese"/>
                <Dropdown.Item text="Korean"/>
              </Dropdown.Menu>
            </Dropdown>
          </Menu.Item>
        </Menu>
      </Container>
    );
  }
}

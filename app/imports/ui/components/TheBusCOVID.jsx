import React from 'react';
import { Container, Header, Divider, List, Segment } from 'semantic-ui-react';

export default class TheBusCOVID extends React.Component {
  render() {
    return (
      <Container className="upper">
        <Segment>
          <Container textAlign="center">
            <Header as="h1">COVID-19 UPDATE</Header>
            <div>PRESIDENTIAL EXECUTIVE ORDER </div>
            <div>FEDERAL MASK LAW – PUBLIC TRANSPORTATION</div>
            <div>Effective: Monday, February 15, 2021</div>
            <div><a href="#">Cardcard.pdf</a></div>
            <div><a href="#">Onboard Announcement.wav</a></div>
          </Container>

          <Divider/>

          <Container textAlign="left">
            <p> A Presidential Executive Order and New Centers For Disease Control (CDC) Regulations now requires ALL passengers (riders) to wear a Mask while riding public transportation.
              The regulation states specific types of mask that are acceptable and those that are no longer acceptable to wear while riding public transit.</p>
            <p>In addition to wearing a mask while boarding and throughout the ride, riders are also required to wear their masks while waiting at a transit center facility.</p>
          </Container>

          <Divider/>

          <Header as="h4">Allowed</Header>
          <List bulleted>
            <List.Item>Double/Triple Layer Cloth Mask</List.Item>
            <List.Item>Disposable Mask</List.Item>
            <List.Item>Two-layer Gaiter</List.Item>
          </List>

          <Header as="h4">Not Allowed</Header>
          <List bulleted>
            <List.Item>Shirt Pulled Over Face</List.Item>
            <List.Item>Bandana/Scarf</List.Item>
            <List.Item>Mask w/ vents, valves, holes</List.Item>
            <List.Item>Face shield only (allowed with valid medical exemption card)</List.Item>
          </List>

          <Header as="h4">Exemptions</Header>
          <List bulleted>
            <List.Item>Children under two (2) years of age</List.Item>
            <List.Item>Bandana/Scarf</List.Item>
            <List.Item>Medical exemptions require a valid NO MASK/FACE SHIELD-ONLY card</List.Item>
          </List>

          <Divider/>

          <Container textAlign="center">
            <p> To apply for a medical exemption card, contact: </p>
            <p> Customer Service </p>
            <p> 848-5555, press 3 </p>
            <p> Monday – Friday, 7:30 am – 4:00 pm </p>
            <p> Except City Holidays </p>
          </Container>

          <Divider/>

          <Container textAlign="left">
            <p> Presidential Order: <a href="https://www.whitehouse.gov/briefing-room/presidential-actions/2021/01/21/executive-order-promoting-covid-19-safety-in-domestic-and-international-travel/">
              https://www.whitehouse.gov/briefing-room/presidential-actions/2021/01/21/executive-order-promoting-covid-19-safety-in-domestic-and-international-travel/</a></p>
            <p>CDC Requirements: <a href="https://www.cdc.gov/coronavirus/2019-ncov/travelers/face-masks-public-transportation.html https://www.cdc.gov/quarantine/masks/mask-travel-guidance.html">
              https://www.cdc.gov/coronavirus/2019-ncov/travelers/face-masks-public-transportation.html https://www.cdc.gov/quarantine/masks/mask-travel-guidance.html</a></p>
          </Container>
        </Segment>
      </Container>
    );
  }
}

import React from 'react';
import TheBusCOVID from '../components/TheBusCOVID';
import TheBusMiddle from '../components/TheBusMiddle';
import TheBusLower from '../components/TheBusLower';

export default class TheBus extends React.Component {

  render() {
    return (
      <div>
        <TheBusCOVID/>
        <TheBusMiddle/>
        <TheBusLower/>
      </div>
    );
  }
}

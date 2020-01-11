import React from 'react';
import 'antd/dist/antd.css'
import { Button, Card, Col, Collapse, Icon, Input, Row, Popover } from 'antd'
const { Panel } = Collapse;

class Connect extends React.Component {
  handleSubmit(data) {
    const deviceID = document.getElementById("deviceIdInput").value;
    const password = document.getElementById("passwordInput").value;
  }

  renderForm(getFieldDecorator) {
    return (
      <div>
        <Input placeholder="DeviceID" id="deviceIdInput" style={{ margin: '20px 0 0 0'}} />
        <Input.Password placeholder="Password" id="passwordInput" style={{ margin: '20px 0 0 0'}} />
        <Button type="primary" onClick={this.handleSubmit} style={{ margin: '20px 0 0 0'}}>
          Connect
        </Button>
      </div>
    )
  }

  render() {
    return (
      <Row>
        <Col span={10} offset={7}>
          <center>
            <Card title="Connect to Lattice1" bordered={true}>
              <p>
                Please enter your Lattice's Device ID&nbsp;
                <Popover title={"Enter your DeviceID"} content={deviceIdContent}>
                  <Icon type="question-circle" />
                </Popover>
                &nbsp;and specify a password&nbsp;
                <Popover title={"Enter a Password"} content={pwContent}>
                  <Icon type="question-circle" />
                </Popover>
              </p>
              <p>Also ensure your Lattice1 is connected to the internet.</p>
              {this.renderForm()}
            </Card>
          </center>
        </Col>
      </Row>
    )
  }


}

export default Connect


const deviceIdContent = (
  <Collapse defaultActiveKey={['1']}>
    <Panel header="What is this?" key="1">
      <p>The DeviceID is a unique fingerprint of your Lattice1 device. It is used to find your Lattice over the internet.</p>
    </Panel>
    <Panel header="How do I find my DeviceID?" key="2">
      <p>Go to your Lattice1 and navigate to the "Settings" screen and then to the "Device Info" screen.</p> 
      <p>The DeviceID should be made of 8 random numbers and letters.</p>
    </Panel>
    <Panel header="Why do I need to enter this?" key="3">
      <p>This web wallet does not save any information about you or your device.<br/>
      You will need to enter your DeviceID every time you open this wallet.</p>
    </Panel>
  </Collapse>
);

const pwContent = (
  <Collapse defaultActiveKey={['1']}>
    <Panel header="What is this?" key="1">
      <p>The password you enter is used to create a unique connection to your Lattice1 device.</p>
    </Panel>
    <Panel header="Where is the password stored?" key="2">
      <p>It isn't stored at all. It never leaves this page and if you come back, it will not be saved.</p> 
      <p>You should back it up yourself.</p>
    </Panel>
    <Panel header="What if I lose my password?" key="3">
      <p>No problem! Just go to your Lattice1 device, open up your "Connections" page,<br/>and delete the connection called "GridPlus Web Wallet".</p>
      <p>Then simply create a new password here (and save it offline) to re-connect to your Lattice.</p>
    </Panel>
  </Collapse>
);
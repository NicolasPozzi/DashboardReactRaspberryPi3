import { Statistic, Row, Col } from 'antd';
import React from 'react';
import { Button } from 'reactstrap';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

export default class CountdownComp extends React.Component {

    onFinish()
    {
        console.log('finished!');
    }

    render() 
    {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Countdown title="Countdown" value={deadline} onFinish={this.onFinish} />
                    </Col>
                    <Col span={12}>
                        <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
                    </Col>
                </Row>
                <Button outline color="primary">Start</Button>{' '}
                <Button outline color="warning">Reset</Button>{' '}
            </div>
        );
    }
}
 
import React from 'react';
import { Statistic, Card, Row, Col, Icon } from 'antd';

export default class CardComp extends React.Component {

    render() 
    {
        return (
        <div style={{ background: '#ECECEC', padding: '30px' }}>
            <h2>Crypto</h2>
            <Row gutter={16}>
                <Col span={12}>
                    <Card>
                    <Statistic
                        title="Bitcoin"
                        value={11.28}
                        precision={2}
                        valueStyle={{ color: '#3f8600' }}
                        prefix={<Icon type="arrow-up" />}
                        suffix="%"
                    />
                    </Card>
                </Col>
                <Col span={12}>
                    <Card>
                    <Statistic
                        title="Ripple"
                        value={9.3}
                        precision={2}
                        valueStyle={{ color: '#cf1322' }}
                        prefix={<Icon type="arrow-down" />}
                        suffix="%"
                    />
                    </Card>
                </Col>
            </Row>
        </div>)
    }
  
}

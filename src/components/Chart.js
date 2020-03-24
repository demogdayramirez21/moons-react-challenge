import React from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";
import { Container, Row, Col } from "reactstrap";

const renderActiveShape = props => {
  const {
    cx,
    cy,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    payload
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" className="total">
        {payload.total.toLocaleString()}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};

const getTotal = (array, total = 0) => {
  array.map(el => {
    total += el.value;
  });
  return total;
};

const buildData = (data, total) =>
  data.map(el => ({
    ...el,
    total,
    percent: (el.value * 100) / total
  }));
export default ({ data, title, symbol }) => {
  const total = getTotal(data);
  data = buildData(data, total);

  return (
    <Container>
      <Row>
        <Col>
          <h4>{title}</h4>
        </Col>
      </Row>
      <Row>
        <Col>
          <PieChart width={400} height={250}>
            <Pie
              activeIndex={0}
              activeShape={renderActiveShape}
              data={data}
              cx={100}
              cy={100}
              total={100}
              innerRadius={70}
              outerRadius={80}
              paddingAngle={5}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
              ))}
            </Pie>
          </PieChart>
        </Col>
      </Row>
      <Row>
        {data.map(el => (
          <Col xs="6">
            <Row>
              <Col xs={12}>
                <span className="name-item" style={{ color: el.fill }}>
                  {el.name}
                </span>
              </Col>
              <Col xs={4}>
                <span className="percent-item">{`${el.percent}%`}</span>
              </Col>
              <Col xs={8}>
                <span className="total-item">{`${el.value.toLocaleString()} ${symbol ||
                  ""}`}</span>
              </Col>
            </Row>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';
import { FunctionComponent } from 'react';
interface Index {
  title: string;
  description: string;
  icon?: any;
  className?: string;
  style?: any;
}
const CustomAccordian: FunctionComponent<Index> = (props) => {
  const { title, description, icon, className, style } = props;
  return (
    <Accordion
      defaultActiveKey={['0']}
      //   alwaysOpen
      //   flush
      className={className}
      style={style}
    >
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          {icon && (
            <div className="mr-14 mt-1">
              <Image src={icon} alt="plugin" />
            </div>
          )}
          {title}
        </Accordion.Header>
        <Accordion.Body>{description}</Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default CustomAccordian;

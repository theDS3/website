import React from 'react';

const ContactItem = props => {
  return (
    <div
      className="box position-relative d-flex"
      style={{
        padding: '20px 0',
      }}
    >
      <div
        className="icon bg-white d-flex justify-content-center align-items-center rounded-circle"
        style={{
          minWidth: '60px',
          height: '60px',
          fontSize: '22px',
        }}
      >
        <i className={props.logoName} aria-hidden="true"></i>
      </div>
      <div
        className="text d-flex text-white flex-column font-weight-normal"
        style={{
          marginLeft: '20px',
          fontSize: '16px',
        }}
      >
        <h3 className="text-weight-bold text-info">{props.title}</h3>
        <p dangerouslySetInnerHTML={{ __html: props.content }}></p>
      </div>
    </div>
  );
};

export default ContactItem;

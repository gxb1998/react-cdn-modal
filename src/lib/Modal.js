import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component {
  render() {
    return (
      <div style={{
        position: 'fixed',
        top: '20%',
        left: '50%',
        transform: 'translateX(-50%)',
        padding: '20px',
        background: 'white',
        boxShadow: '0 0 10px rgba(0,0,0,0.3)',
        zIndex: 9999
      }}>
        <h2>我是CDN弹窗</h2>
        <button onClick={this.props.onClose}>关闭</button>
      </div>
    );
  }
}

export class ModalController {
  constructor() {
    this.containerId = 'cdn-modal-container';
  }

  show() {
    if (!document.getElementById(this.containerId)) {
      const container = document.createElement('div');
      container.id = this.containerId;
      document.body.appendChild(container);
    }
    
    ReactDOM.render(
      <Modal onClose={() => this.hide()} />,
      document.getElementById(this.containerId)
    );
  }

  hide() {
    const container = document.getElementById(this.containerId);
    if (container) {
      ReactDOM.unmountComponentAtNode(container);
      container.remove();
    }
  }
}
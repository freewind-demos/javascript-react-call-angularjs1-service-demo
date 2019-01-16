import React, {Component} from 'react';
import {getNgService} from './ng-service-getter';

const ngHelloService = getNgService('helloService');

class ReactHello extends Component {

  constructor(props) {
    super(props);
  }

  onChange = (event) => {
    const value = event.target.value;
    ngHelloService.hello(value);
  }

  render() {
    return <div>
      Hello: <input type="text" defaultValue="angular" onChange={this.onChange}/>
    </div>;
  }

}

export default ReactHello;

import React, { PureComponent } from 'react'

export class MyPureComponent extends PureComponent {
  render() {
    console.log("Pure Components");
    return (
      <div>
        <h2>MyPureComponent : {this.props.value}</h2>
      </div>
    )
  }
}

export default MyPureComponent;
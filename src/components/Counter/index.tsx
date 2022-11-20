import React from "react";
import Count from "../Count";
import Increment from "../Increment";

type Props = {
  limit: number;
  onFinish: (delay: number) => void;
};
type State = {
  count: number;
};

export default class Counter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      count: 0,
    };
    this.setCount = this.setCount.bind(this);
  }

  setCount(count: number) {
    this.setState({
      count,
    });
  }

  render(): React.ReactNode {
    return (
      <div style={{ display: "flex" }}>
        <Count value={this.state.count} />
        <Increment
          count={this.state.count}
          setCount={this.setCount}
          limit={this.props.limit}
          onFinish={this.props.onFinish}
        />
      </div>
    );
  }
}

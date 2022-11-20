import React from "react";
import Counter from "../../components/Counter";

const counterNumber = 100;
const countLimit = 500;

type Props = Record<string, never>;
type State = {
  delay: number;
};

export default class Page extends React.Component<Props, State> {
  private delays: number[] = [];

  constructor(props: Props) {
    super(props);
    this.state = {
      delay: 0,
    };
    this.addDelay = this.addDelay.bind(this);
  }

  addDelay(delay: number) {
    this.delays.push(delay);

    if (this.delays.length === counterNumber) {
      this.setState({
        delay: this.delays.sort((d1, d2) => d2 - d1)[0],
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }

  render(): React.ReactNode {
    return (
      <>
        <span style={{ visibility: this.state.delay ? "visible" : "hidden" }}>
          {this.state.delay}
        </span>
        {Array(counterNumber)
          .fill({})
          .map((_, index) => (
            <Counter key={index} limit={countLimit} onFinish={this.addDelay} />
          ))}
      </>
    );
  }
}

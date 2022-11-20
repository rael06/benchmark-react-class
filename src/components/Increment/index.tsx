import React from "react";

type Props = {
  limit: number;
  count: number;
  setCount: (value: number) => void;
  onFinish: (value: number) => void;
};
type State = {
  delay: number;
};

export default class Increment extends React.Component<Props, State> {
  private timeout: NodeJS.Timeout | null = null;
  private start = new Date().getTime();

  constructor(props: Props) {
    super(props);
    this.state = {
      delay: 0,
    };
    this.setDelay = this.setDelay.bind(this);
  }

  setDelay(delay: number) {
    this.setState({
      delay,
    });
  }

  render(): React.ReactNode {
    return (
      <>
        {this.props.count === this.props.limit && (
          <span>{this.state.delay} sec</span>
        )}
      </>
    );
  }

  runEffect() {
    this.timeout = setTimeout(
      () =>
        this.props.count < this.props.limit &&
        this.props.setCount(this.props.count + 1),
      20
    );

    if (this.props.count === this.props.limit) {
      const end = new Date().getTime();
      const delay = (end - this.start) / 1000;
      this.setDelay(delay);
      this.props.onFinish(delay);
    }
  }

  componentDidUpdate(
    prevProps: Readonly<Props>,
    prevState: Readonly<State>,
    snapshot?: any
  ): void {
    if (
      prevState.delay !== this.state.delay ||
      prevProps.count !== this.props.count
    )
      this.runEffect();
  }

  componentDidMount(): void {
    this.runEffect();
  }

  componentWillUnmount(): void {
    if (this.timeout) clearTimeout(this.timeout);
  }
}

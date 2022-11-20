type Props = {
  value: number;
};

export default function Count({ value }: Props) {
  return <span style={{ marginRight: "20px" }}>Value: {value}</span>;
}

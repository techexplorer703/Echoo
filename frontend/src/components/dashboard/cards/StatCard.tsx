import Card from "../../ui/Card";

type Props = {
  title: string;
  value: string;
};

export default function StatCard({ title, value }: Props) {
  return (
    <Card className="stat-card">
      <p className="stat-title">{title}</p>

      <h2 className="stat-value">
        {value}
      </h2>
    </Card>
  );
}
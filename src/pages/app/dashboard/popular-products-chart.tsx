import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import colors from 'tailwindcss/colors';

import {
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
  Pie,
  PieChart,
  Cell,
} from 'recharts';

const data = [
  { product: 'Pizza', revenue: 1200 },
  { product: 'Lanche', revenue: 100 },
  { product: 'Pizza', revenue: 1300 },
  { product: 'Lanche', revenue: 1100 },
  { product: 'Pizza', revenue: 5600 },
];

const COLORS = [
  colors.sky[500],
  colors.amber[500],
  colors.violet[500],
  colors.emerald[500],
  colors.rose[500],
];

export const PopularProductsChart = () => {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Produtos populares
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={'100%'} height={240}>
          <PieChart style={{ fontSize: 12 }} dataKey="revenue">
            <Pie
              data={data}
              type="monotone"
              dataKey="revenue"
              nameKey="product"
              strokeWidth={8}
              cx={'50%'}
              cy={'50%'}
              outerRadius={86}
              innerRadius={60}
            >
              {data.map((_, index) => {
                return (
                  <Cell
                    key={`cell-${index + 1}`}
                    fill={COLORS[index]}
                    className="stroke-background hover:opacity-80"
                  />
                );
              })}
            </Pie>
            <CartesianGrid className="stroke-muted" vertical={false} />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

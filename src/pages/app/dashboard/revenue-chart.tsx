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
  LineChart,
  Line,
  CartesianGrid,
} from 'recharts';

const data = [
  { date: '10/12', revenue: 1200 },
  { date: '11/12', revenue: 100 },
  { date: '12/12', revenue: 1300 },
  { date: '13/12', revenue: 1100 },
  { date: '14/12', revenue: 5600 },
  { date: '15/12', revenue: 1600 },
  { date: '16/12', revenue: 700 },
  { date: '17/12', revenue: 2200 },
];

export const RevenueChart = () => {
  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width={'100%'} height={240}>
          <LineChart data={data} style={{ fontSize: 12 }} dataKey="revenue">
            <XAxis dataKey="date" tickLine={false} axisLine={false} dy={16} />
            <YAxis
              stroke="#888"
              axisLine={false}
              tickLine={false}
              width={80}
              tickFormatter={(value: number) =>
                value.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                })
              }
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke={colors.violet['500']}
              strokeWidth={2}
            />
            <CartesianGrid className="stroke-muted" vertical={false} />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

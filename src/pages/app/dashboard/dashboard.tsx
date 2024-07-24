import { Helmet } from 'react-helmet-async';
import { MonthRevenueCard } from './month-revenue-card';
import { MonthOrdersAmountCard } from './month-orders-amount-card';
import { MonthOrdersCanceledAmountCard } from './month-canceled-orders-amount-card';
import { DaysOrdersAmountCard } from './days-orders-amount-card copy';
import { RevenueChart } from './revenue-chart';
import { PopularProductsChart } from './popular-products-chart';

export const Dashboard = () => {
  return (
    <>
      <Helmet title="Dashboard" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <div className="grid grid-cols-4 gap-4">
          <MonthRevenueCard />
          <MonthOrdersAmountCard />
          <DaysOrdersAmountCard />
          <MonthOrdersCanceledAmountCard />
        </div>

        <div className="grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  );
};

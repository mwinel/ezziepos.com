import { useState } from "react";
import { useRouter } from "next/router";
import { PlusIcon } from "@heroicons/react/solid";
import DashboardLayout from "@components/layouts/DashboardLayout";
import Button from "@components/ui/Button";
import PageHeading from "@components/ui/PageHeading";
import PagePanel from "@components/ui/PagePanel";
import EmptyState from "@components/ui/EmptyState";
import OrdersList from "@components/orders/OrdersList";

import testOrders from "../data/orders";

import en from "@locales/en";
import fr from "@locales/fr";

const Orders = () => {
  const [orders] = useState(testOrders);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <PageHeading title={t.OrdersPageTitle} />
        <div className="flex mt-3 sm:mt-0 sm:ml-4">
          <Button
            variant="secondary"
            textSize="sm"
            icon={
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            }
          >
            New Order
          </Button>
        </div>
      </div>
      <PagePanel>
        {orders.length ? (
          <OrdersList orders={orders} />
        ) : (
          <EmptyState
            title="No Orders"
            description="Get started by creating a new order."
            buttonText="New Order"
          />
        )}
      </PagePanel>
    </DashboardLayout>
  );
};

export default Orders;

import { useState } from "react";
import { useRouter } from "next/router";
import { PlusIcon } from "@heroicons/react/solid";
import DashboardLayout from "@components/layouts/DashboardLayout";
import Button from "@components/ui/Button";
import PageHeading from "@components/ui/PageHeading";
import PagePanel from "@components/ui/PagePanel";
import EmptyState from "@components/ui/EmptyState";
import ProductsList from "@components/products/ProductsList";

import testProducts from "../data/products";

import en from "@locales/en";
import fr from "@locales/fr";

const Products = () => {
  const [products] = useState(testProducts);

  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;

  return (
    <DashboardLayout>
      <div className="flex items-center justify-between">
        <PageHeading title={t.ProductsPageTitle} />
        <div className="flex mt-3 sm:mt-0 sm:ml-4 items-center">
          <Button
            variant="secondary"
            textSize="sm"
            className="ml-2"
            icon={
              <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
            }
          >
            New Product
          </Button>
        </div>
      </div>
      <PagePanel>
        {products.length ? (
          <ProductsList products={products} />
        ) : (
          <EmptyState
            title="No Products"
            description="Get started by creating a new product."
            buttonText="New Product"
          />
        )}
      </PagePanel>
    </DashboardLayout>
  );
};

export default Products;

import React from "react";
import ProcurementFlowchart from "./ProcurementFlowchart";

const data = {
  title: "RFQ-0001",
  status: "CREATED",
  href: `/rfq-detail/${"rfqId"}`,
  initialQuotations: [],
  initialPurchaseOrders: [],
  initialInvoices: [],
};

const ProcurementFlowchartStory = () => {
  return (
    <div className="p-4">
      <ProcurementFlowchart {...data} />
    </div>
  );
};

export default ProcurementFlowchartStory;
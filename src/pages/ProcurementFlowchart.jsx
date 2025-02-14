import React, { useState } from "react";

const ProcurementFlowchart = ({
  title,
  status,
  href,
  initialQuotations,
  initialPurchaseOrders,
  initialInvoices,
}) => {
  const [quotations, setQuotations] = useState(initialQuotations);
  const [purchaseOrders, setPurchaseOrders] = useState(initialPurchaseOrders);
  const [invoices, setInvoices] = useState(initialInvoices);

  const addQuotation = () => {
    const newQuotation = {
      title: `QUO-${quotations.length + 1}`,
      status: "QUO_CREATED",
      href: `/rfq-quotation/${quotations.length + 1}`,
    };
    setQuotations([...quotations, newQuotation]);
  };

  const addPurchaseOrder = () => {
    const newPurchaseOrder = {
      title: `PO-${purchaseOrders.length + 1}`,
      status: "PO_CREATED",
      href: `/rfq-po/${purchaseOrders.length + 1}`,
    };
    setPurchaseOrders([...purchaseOrders, newPurchaseOrder]);
  };

  const addInvoice = () => {
    const newInvoice = {
      title: `INV-${invoices.length + 1}`,
      status: "INV_CREATED",
      href: `/invoice/${invoices.length + 1}`,
    };
    setInvoices([...invoices, newInvoice]);
  };

  const horizontalLine = (
    <div className="flex w-full mt-20">
      <div className="w-full flex justify-center items-center">
        <div className="w-24 border-t-2 border-gray-400"></div>
      </div>
    </div>
  );

  return (
    <div className="flex items-start bg-gray-50 p-6">
      {/* RFQ */}
      <div className="flex flex-col w-full max-w-4xl items-center border border-gray-300 p-2 py-14 bg-white rounded-lg shadow-md">
        <a href={href} className="text-blue-500 font-bold">
          {title}
        </a>
        <p className="text-gray-600">{status}</p>
        <p className="text-sm text-gray-400">Link</p>
      </div>

      {horizontalLine}

      {/* Quotations */}
      <div className="flex w-full max-w-4xl justify-between mt-4">
        <div className="flex flex-col">
          {quotations.length === 0 ? (
            <div
              className="flex flex-col items-center text-gray-500 border-dotted border-2 border-gray-400 py-20 w-60 bg-white rounded-lg shadow-md cursor-pointer"
              onClick={addQuotation}
            >
              No quotations
            </div>
          ) : (
            quotations.map((quotation, index) => (
              <div
                key={index}
                className="flex flex-col items-center border border-gray-300 my-4 py-16 w-60 bg-white rounded-lg shadow-md"
              >
                <a href={quotation.href} className="text-blue-500 font-bold">
                  {quotation.title}
                </a>
                <p className="text-gray-600">{quotation.status}</p>
                <p className="text-sm text-gray-400">Link</p>
              </div>
            ))
          )}
          {quotations.length > 0 && (
            <div
              className="flex flex-col items-center text-gray-500 border-dotted border-2 border-gray-400 p-10 py-20 my-10 w-60 bg-white rounded-lg shadow-md cursor-pointer"
              onClick={addQuotation}
            >
              Add quotations
            </div>
          )}
        </div>
      </div>

      {horizontalLine}

      {/* Purchase Orders */}
      <div className="flex w-full max-w-4xl justify-between mt-4">
        <div className="flex flex-col">
          {purchaseOrders.length === 0 ? (
            <div
              className="flex flex-col items-center text-gray-500 border-dotted border-2 border-gray-400 py-20 w-60 bg-white rounded-lg shadow-md cursor-pointer"
              onClick={addPurchaseOrder}
            >
              No purchase orders
            </div>
          ) : (
            purchaseOrders.map((po, index) => (
              <div
                key={index}
                className="flex flex-col items-center border border-gray-300 my-4 py-16 w-60 bg-white rounded-lg shadow-md"
              >
                <a href={po.href} className="text-blue-500 font-bold">
                  {po.title}
                </a>
                <p className="text-gray-600">{po.status}</p>
                <p className="text-sm text-gray-400">Link</p>
              </div>
            ))
          )}
          {purchaseOrders.length > 0 && (
            <div
              className="flex flex-col items-center text-gray-500 border-dotted border-2 border-gray-400 p-10 py-20 my-10 w-60 bg-white rounded-lg shadow-md cursor-pointer"
              onClick={addPurchaseOrder}
            >
              Add purchase orders
            </div>
          )}
        </div>
      </div>

      {horizontalLine}

      {/* Invoices */}
      <div className="flex w-full max-w-4xl justify-between mt-4">
        <div className="flex flex-col">
          {invoices.length === 0 ? (
            <div
              className="flex flex-col items-center text-gray-500 border-dotted border-2 border-gray-400 py-20 w-60 bg-white rounded-lg shadow-md cursor-pointer"
              onClick={addInvoice}
            >
              No invoices
            </div>
          ) : (
            invoices.map((invoice, index) => (
              <div
                key={index}
                className="flex flex-col items-center border border-gray-300 my-4 py-16 w-60 bg-white rounded-lg shadow-md"
              >
                <a href={invoice.href} className="text-blue-500 font-bold">
                  {invoice.title}
                </a>
                <p className="text-gray-600">{invoice.status}</p>
                <p className="text-sm text-gray-400">Link</p>
              </div>
            ))
          )}
          {invoices.length > 0 && (
            <div
              className="flex flex-col items-center text-gray-500 border-dotted border-2 border-gray-400 p-10 py-20 my-10 w-60 bg-white rounded-lg shadow-md cursor-pointer"
              onClick={addInvoice}
            >
              Add invoices
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProcurementFlowchart;
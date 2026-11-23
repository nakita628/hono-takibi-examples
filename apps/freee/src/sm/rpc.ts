import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getBusinesses(
  args: InferRequestType<typeof client.businesses.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses.$get(args, options))
}

export async function postBusinesses(
  args: InferRequestType<typeof client.businesses.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses.$post(args, options))
}

export async function getBusinessesId(
  args: InferRequestType<(typeof client.businesses)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':id'].$get(args, options))
}

export async function patchBusinessesId(
  args: InferRequestType<(typeof client.businesses)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':id'].$patch(args, options))
}

export async function postBusinessesIdCancellation(
  args: InferRequestType<(typeof client.businesses)[':id']['cancellation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':id'].cancellation.$post(args, options))
}

export async function postBusinessesIdClose(
  args: InferRequestType<(typeof client.businesses)[':id']['close']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':id'].close.$post(args, options))
}

export async function postBusinessesIdReopen(
  args: InferRequestType<(typeof client.businesses)[':id']['reopen']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.businesses[':id'].reopen.$post(args, options))
}

export async function getCostBudgets(
  args: InferRequestType<typeof client.cost_budgets.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cost_budgets.$get(args, options))
}

export async function postCostBudgets(
  args: InferRequestType<typeof client.cost_budgets.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cost_budgets.$post(args, options))
}

export async function getCostBudgetsId(
  args: InferRequestType<(typeof client.cost_budgets)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cost_budgets[':id'].$get(args, options))
}

export async function patchCostBudgetsId(
  args: InferRequestType<(typeof client.cost_budgets)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cost_budgets[':id'].$patch(args, options))
}

export async function postCostBudgetsIdCancellation(
  args: InferRequestType<(typeof client.cost_budgets)[':id']['cancellation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.cost_budgets[':id'].cancellation.$post(args, options))
}

export async function getMasterBusinessPhases(
  args: InferRequestType<typeof client.master.business_phases.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.master.business_phases.$get(args, options))
}

export async function getMasterSalesProgressions(
  args: InferRequestType<typeof client.master.sales_progressions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.master.sales_progressions.$get(args, options))
}

export async function getMasterItems(
  args: InferRequestType<typeof client.master.items.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.master.items.$get(args, options))
}

export async function getMasterDealLineTypes(
  args: InferRequestType<typeof client.master.deal_line_types.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.master.deal_line_types.$get(args, options))
}

export async function getMasterEmployees(
  args: InferRequestType<typeof client.master.employees.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.master.employees.$get(args, options))
}

export async function getMasterMembers(
  args: InferRequestType<typeof client.master.members.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.master.members.$get(args, options))
}

export async function getMasterCustomFieldsBusinessDefinitions(
  args: InferRequestType<typeof client.master.custom_fields.business.definitions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.master.custom_fields.business.definitions.$get(args, options))
}

export async function getPurchaseOrders(
  args: InferRequestType<typeof client.purchase_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_orders.$get(args, options))
}

export async function postPurchaseOrders(
  args: InferRequestType<typeof client.purchase_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_orders.$post(args, options))
}

export async function getPurchaseOrdersId(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_orders[':id'].$get(args, options))
}

export async function patchPurchaseOrdersId(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_orders[':id'].$patch(args, options))
}

export async function postPurchaseOrdersIdCancellation(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['cancellation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.purchase_orders[':id'].cancellation.$post(args, options))
}

export async function getQuotations(
  args: InferRequestType<typeof client.quotations.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotations.$get(args, options))
}

export async function postQuotations(
  args: InferRequestType<typeof client.quotations.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotations.$post(args, options))
}

export async function getQuotationsId(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotations[':id'].$get(args, options))
}

export async function patchQuotationsId(
  args: InferRequestType<(typeof client.quotations)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotations[':id'].$patch(args, options))
}

export async function putQuotationsIdQuotationStatus(
  args: InferRequestType<(typeof client.quotations)[':id']['quotation_status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotations[':id'].quotation_status.$put(args, options))
}

export async function postQuotationsIdCancellation(
  args: InferRequestType<(typeof client.quotations)[':id']['cancellation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.quotations[':id'].cancellation.$post(args, options))
}

export async function getSalesOrders(
  args: InferRequestType<typeof client.sales_orders.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales_orders.$get(args, options))
}

export async function postSalesOrders(
  args: InferRequestType<typeof client.sales_orders.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales_orders.$post(args, options))
}

export async function getSalesOrdersId(
  args: InferRequestType<(typeof client.sales_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales_orders[':id'].$get(args, options))
}

export async function patchSalesOrdersId(
  args: InferRequestType<(typeof client.sales_orders)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales_orders[':id'].$patch(args, options))
}

export async function postSalesOrdersIdCancellation(
  args: InferRequestType<(typeof client.sales_orders)[':id']['cancellation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales_orders[':id'].cancellation.$post(args, options))
}

export async function getDeliveries(
  args: InferRequestType<typeof client.deliveries.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deliveries.$get(args, options))
}

export async function postDeliveries(
  args: InferRequestType<typeof client.deliveries.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deliveries.$post(args, options))
}

export async function getDeliveriesId(
  args: InferRequestType<(typeof client.deliveries)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deliveries[':id'].$get(args, options))
}

export async function patchDeliveriesId(
  args: InferRequestType<(typeof client.deliveries)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deliveries[':id'].$patch(args, options))
}

export async function postDeliveriesIdCancellation(
  args: InferRequestType<(typeof client.deliveries)[':id']['cancellation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deliveries[':id'].cancellation.$post(args, options))
}

export async function putDeliveriesIdDeliveryStatus(
  args: InferRequestType<(typeof client.deliveries)[':id']['delivery_status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deliveries[':id'].delivery_status.$put(args, options))
}

export async function putDeliveriesIdAcceptanceStatus(
  args: InferRequestType<(typeof client.deliveries)[':id']['acceptance_status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.deliveries[':id'].acceptance_status.$put(args, options))
}

export async function getSales(
  args: InferRequestType<typeof client.sales.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales.$get(args, options))
}

export async function postSales(
  args: InferRequestType<typeof client.sales.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales.$post(args, options))
}

export async function getSalesId(
  args: InferRequestType<(typeof client.sales)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales[':id'].$get(args, options))
}

export async function patchSalesId(
  args: InferRequestType<(typeof client.sales)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales[':id'].$patch(args, options))
}

export async function postSalesIdCancellation(
  args: InferRequestType<(typeof client.sales)[':id']['cancellation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales[':id'].cancellation.$post(args, options))
}

export async function putSalesIdCollectionStatus(
  args: InferRequestType<(typeof client.sales)[':id']['collection_status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales[':id'].collection_status.$put(args, options))
}

export async function getPeriodicSales(
  args: InferRequestType<typeof client.periodic_sales.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.periodic_sales.$get(args, options))
}

export async function postPeriodicSales(
  args: InferRequestType<typeof client.periodic_sales.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.periodic_sales.$post(args, options))
}

export async function getPeriodicSalesId(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.periodic_sales[':id'].$get(args, options))
}

export async function patchPeriodicSalesId(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.periodic_sales[':id'].$patch(args, options))
}

export async function getPeriodicSalesIdSalesEntries(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['sales_entries']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.periodic_sales[':id'].sales_entries.$get(args, options))
}

export async function postPeriodicSalesIdCancellation(
  args: InferRequestType<(typeof client.periodic_sales)[':id']['cancellation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.periodic_sales[':id'].cancellation.$post(args, options))
}

export async function getSalesSchedules(
  args: InferRequestType<typeof client.sales_schedules.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales_schedules.$get(args, options))
}

export async function getSalesSchedulesId(
  args: InferRequestType<(typeof client.sales_schedules)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales_schedules[':id'].$get(args, options))
}

export async function deleteSalesSchedulesId(
  args: InferRequestType<(typeof client.sales_schedules)[':id']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales_schedules[':id'].$delete(args, options))
}

export async function patchSalesSchedulesId(
  args: InferRequestType<(typeof client.sales_schedules)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales_schedules[':id'].$patch(args, options))
}

export async function postSalesSchedulesIdActualization(
  args: InferRequestType<(typeof client.sales_schedules)[':id']['actualization']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales_schedules[':id'].actualization.$post(args, options))
}

export async function getOtherCosts(
  args: InferRequestType<typeof client.other_costs.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.other_costs.$get(args, options))
}

export async function postOtherCosts(
  args: InferRequestType<typeof client.other_costs.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.other_costs.$post(args, options))
}

export async function getOtherCostsId(
  args: InferRequestType<(typeof client.other_costs)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.other_costs[':id'].$get(args, options))
}

export async function patchOtherCostsId(
  args: InferRequestType<(typeof client.other_costs)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.other_costs[':id'].$patch(args, options))
}

export async function postOtherCostsIdRestoration(
  args: InferRequestType<(typeof client.other_costs)[':id']['restoration']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.other_costs[':id'].restoration.$post(args, options))
}

export async function postOtherCostsIdCancellation(
  args: InferRequestType<(typeof client.other_costs)[':id']['cancellation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.other_costs[':id'].cancellation.$post(args, options))
}

export async function getProcurements(
  args: InferRequestType<typeof client.procurements.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.procurements.$get(args, options))
}

export async function postProcurements(
  args: InferRequestType<typeof client.procurements.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.procurements.$post(args, options))
}

export async function getProcurementsId(
  args: InferRequestType<(typeof client.procurements)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.procurements[':id'].$get(args, options))
}

export async function patchProcurementsId(
  args: InferRequestType<(typeof client.procurements)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.procurements[':id'].$patch(args, options))
}

export async function postProcurementsIdCancellation(
  args: InferRequestType<(typeof client.procurements)[':id']['cancellation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.procurements[':id'].cancellation.$post(args, options))
}

export async function putProcurementsIdPaymentStatus(
  args: InferRequestType<(typeof client.procurements)[':id']['payment_status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.procurements[':id'].payment_status.$put(args, options))
}

export async function getAdvanceReceipts(
  args: InferRequestType<typeof client.advance_receipts.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advance_receipts.$get(args, options))
}

export async function postAdvanceReceipts(
  args: InferRequestType<typeof client.advance_receipts.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advance_receipts.$post(args, options))
}

export async function getAdvanceReceiptsId(
  args: InferRequestType<(typeof client.advance_receipts)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advance_receipts[':id'].$get(args, options))
}

export async function patchAdvanceReceiptsId(
  args: InferRequestType<(typeof client.advance_receipts)[':id']['$patch']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advance_receipts[':id'].$patch(args, options))
}

export async function postAdvanceReceiptsIdCancellation(
  args: InferRequestType<(typeof client.advance_receipts)[':id']['cancellation']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advance_receipts[':id'].cancellation.$post(args, options))
}

export async function postAdvanceReceiptsIdReduction(
  args: InferRequestType<(typeof client.advance_receipts)[':id']['reduction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advance_receipts[':id'].reduction.$post(args, options))
}

export async function postAdvanceReceiptsIdPeriodicReduction(
  args: InferRequestType<(typeof client.advance_receipts)[':id']['periodic_reduction']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advance_receipts[':id'].periodic_reduction.$post(args, options))
}

export async function putAdvanceReceiptsIdCollectionStatus(
  args: InferRequestType<(typeof client.advance_receipts)[':id']['collection_status']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.advance_receipts[':id'].collection_status.$put(args, options))
}

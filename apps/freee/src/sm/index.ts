import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSalesSchedulesIdRoute,
  getAdvanceReceiptsIdRoute,
  getAdvanceReceiptsRoute,
  getBusinessesIdRoute,
  getBusinessesRoute,
  getCostBudgetsIdRoute,
  getCostBudgetsRoute,
  getDeliveriesIdRoute,
  getDeliveriesRoute,
  getMasterBusinessPhasesRoute,
  getMasterCustomFieldsBusinessDefinitionsRoute,
  getMasterDealLineTypesRoute,
  getMasterEmployeesRoute,
  getMasterItemsRoute,
  getMasterMembersRoute,
  getMasterSalesProgressionsRoute,
  getOtherCostsIdRoute,
  getOtherCostsRoute,
  getPeriodicSalesIdRoute,
  getPeriodicSalesIdSalesEntriesRoute,
  getPeriodicSalesRoute,
  getProcurementsIdRoute,
  getProcurementsRoute,
  getPurchaseOrdersIdRoute,
  getPurchaseOrdersRoute,
  getQuotationsIdRoute,
  getQuotationsRoute,
  getSalesIdRoute,
  getSalesOrdersIdRoute,
  getSalesOrdersRoute,
  getSalesRoute,
  getSalesSchedulesIdRoute,
  getSalesSchedulesRoute,
  patchAdvanceReceiptsIdRoute,
  patchBusinessesIdRoute,
  patchCostBudgetsIdRoute,
  patchDeliveriesIdRoute,
  patchOtherCostsIdRoute,
  patchPeriodicSalesIdRoute,
  patchProcurementsIdRoute,
  patchPurchaseOrdersIdRoute,
  patchQuotationsIdRoute,
  patchSalesIdRoute,
  patchSalesOrdersIdRoute,
  patchSalesSchedulesIdRoute,
  postAdvanceReceiptsIdCancellationRoute,
  postAdvanceReceiptsIdPeriodicReductionRoute,
  postAdvanceReceiptsIdReductionRoute,
  postAdvanceReceiptsRoute,
  postBusinessesIdCancellationRoute,
  postBusinessesIdCloseRoute,
  postBusinessesIdReopenRoute,
  postBusinessesRoute,
  postCostBudgetsIdCancellationRoute,
  postCostBudgetsRoute,
  postDeliveriesIdCancellationRoute,
  postDeliveriesRoute,
  postOtherCostsIdCancellationRoute,
  postOtherCostsIdRestorationRoute,
  postOtherCostsRoute,
  postPeriodicSalesIdCancellationRoute,
  postPeriodicSalesRoute,
  postProcurementsIdCancellationRoute,
  postProcurementsRoute,
  postPurchaseOrdersIdCancellationRoute,
  postPurchaseOrdersRoute,
  postQuotationsIdCancellationRoute,
  postQuotationsRoute,
  postSalesIdCancellationRoute,
  postSalesOrdersIdCancellationRoute,
  postSalesOrdersRoute,
  postSalesRoute,
  postSalesSchedulesIdActualizationRoute,
  putAdvanceReceiptsIdCollectionStatusRoute,
  putDeliveriesIdAcceptanceStatusRoute,
  putDeliveriesIdDeliveryStatusRoute,
  putProcurementsIdPaymentStatusRoute,
  putQuotationsIdQuotationStatusRoute,
  putSalesIdCollectionStatusRoute,
} from './routes'
import {
  deleteSalesSchedulesIdRouteHandler,
  getAdvanceReceiptsIdRouteHandler,
  getAdvanceReceiptsRouteHandler,
  getBusinessesIdRouteHandler,
  getBusinessesRouteHandler,
  getCostBudgetsIdRouteHandler,
  getCostBudgetsRouteHandler,
  getDeliveriesIdRouteHandler,
  getDeliveriesRouteHandler,
  getMasterBusinessPhasesRouteHandler,
  getMasterCustomFieldsBusinessDefinitionsRouteHandler,
  getMasterDealLineTypesRouteHandler,
  getMasterEmployeesRouteHandler,
  getMasterItemsRouteHandler,
  getMasterMembersRouteHandler,
  getMasterSalesProgressionsRouteHandler,
  getOtherCostsIdRouteHandler,
  getOtherCostsRouteHandler,
  getPeriodicSalesIdRouteHandler,
  getPeriodicSalesIdSalesEntriesRouteHandler,
  getPeriodicSalesRouteHandler,
  getProcurementsIdRouteHandler,
  getProcurementsRouteHandler,
  getPurchaseOrdersIdRouteHandler,
  getPurchaseOrdersRouteHandler,
  getQuotationsIdRouteHandler,
  getQuotationsRouteHandler,
  getSalesIdRouteHandler,
  getSalesOrdersIdRouteHandler,
  getSalesOrdersRouteHandler,
  getSalesRouteHandler,
  getSalesSchedulesIdRouteHandler,
  getSalesSchedulesRouteHandler,
  patchAdvanceReceiptsIdRouteHandler,
  patchBusinessesIdRouteHandler,
  patchCostBudgetsIdRouteHandler,
  patchDeliveriesIdRouteHandler,
  patchOtherCostsIdRouteHandler,
  patchPeriodicSalesIdRouteHandler,
  patchProcurementsIdRouteHandler,
  patchPurchaseOrdersIdRouteHandler,
  patchQuotationsIdRouteHandler,
  patchSalesIdRouteHandler,
  patchSalesOrdersIdRouteHandler,
  patchSalesSchedulesIdRouteHandler,
  postAdvanceReceiptsIdCancellationRouteHandler,
  postAdvanceReceiptsIdPeriodicReductionRouteHandler,
  postAdvanceReceiptsIdReductionRouteHandler,
  postAdvanceReceiptsRouteHandler,
  postBusinessesIdCancellationRouteHandler,
  postBusinessesIdCloseRouteHandler,
  postBusinessesIdReopenRouteHandler,
  postBusinessesRouteHandler,
  postCostBudgetsIdCancellationRouteHandler,
  postCostBudgetsRouteHandler,
  postDeliveriesIdCancellationRouteHandler,
  postDeliveriesRouteHandler,
  postOtherCostsIdCancellationRouteHandler,
  postOtherCostsIdRestorationRouteHandler,
  postOtherCostsRouteHandler,
  postPeriodicSalesIdCancellationRouteHandler,
  postPeriodicSalesRouteHandler,
  postProcurementsIdCancellationRouteHandler,
  postProcurementsRouteHandler,
  postPurchaseOrdersIdCancellationRouteHandler,
  postPurchaseOrdersRouteHandler,
  postQuotationsIdCancellationRouteHandler,
  postQuotationsRouteHandler,
  postSalesIdCancellationRouteHandler,
  postSalesOrdersIdCancellationRouteHandler,
  postSalesOrdersRouteHandler,
  postSalesRouteHandler,
  postSalesSchedulesIdActualizationRouteHandler,
  putAdvanceReceiptsIdCollectionStatusRouteHandler,
  putDeliveriesIdAcceptanceStatusRouteHandler,
  putDeliveriesIdDeliveryStatusRouteHandler,
  putProcurementsIdPaymentStatusRouteHandler,
  putQuotationsIdQuotationStatusRouteHandler,
  putSalesIdCollectionStatusRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getBusinessesRoute, getBusinessesRouteHandler)
  .openapi(postBusinessesRoute, postBusinessesRouteHandler)
  .openapi(getBusinessesIdRoute, getBusinessesIdRouteHandler)
  .openapi(patchBusinessesIdRoute, patchBusinessesIdRouteHandler)
  .openapi(postBusinessesIdCancellationRoute, postBusinessesIdCancellationRouteHandler)
  .openapi(postBusinessesIdCloseRoute, postBusinessesIdCloseRouteHandler)
  .openapi(postBusinessesIdReopenRoute, postBusinessesIdReopenRouteHandler)
  .openapi(getCostBudgetsRoute, getCostBudgetsRouteHandler)
  .openapi(postCostBudgetsRoute, postCostBudgetsRouteHandler)
  .openapi(getCostBudgetsIdRoute, getCostBudgetsIdRouteHandler)
  .openapi(patchCostBudgetsIdRoute, patchCostBudgetsIdRouteHandler)
  .openapi(postCostBudgetsIdCancellationRoute, postCostBudgetsIdCancellationRouteHandler)
  .openapi(getMasterBusinessPhasesRoute, getMasterBusinessPhasesRouteHandler)
  .openapi(getMasterSalesProgressionsRoute, getMasterSalesProgressionsRouteHandler)
  .openapi(getMasterItemsRoute, getMasterItemsRouteHandler)
  .openapi(getMasterDealLineTypesRoute, getMasterDealLineTypesRouteHandler)
  .openapi(getMasterEmployeesRoute, getMasterEmployeesRouteHandler)
  .openapi(getMasterMembersRoute, getMasterMembersRouteHandler)
  .openapi(
    getMasterCustomFieldsBusinessDefinitionsRoute,
    getMasterCustomFieldsBusinessDefinitionsRouteHandler,
  )
  .openapi(getPurchaseOrdersRoute, getPurchaseOrdersRouteHandler)
  .openapi(postPurchaseOrdersRoute, postPurchaseOrdersRouteHandler)
  .openapi(getPurchaseOrdersIdRoute, getPurchaseOrdersIdRouteHandler)
  .openapi(patchPurchaseOrdersIdRoute, patchPurchaseOrdersIdRouteHandler)
  .openapi(postPurchaseOrdersIdCancellationRoute, postPurchaseOrdersIdCancellationRouteHandler)
  .openapi(getQuotationsRoute, getQuotationsRouteHandler)
  .openapi(postQuotationsRoute, postQuotationsRouteHandler)
  .openapi(getQuotationsIdRoute, getQuotationsIdRouteHandler)
  .openapi(patchQuotationsIdRoute, patchQuotationsIdRouteHandler)
  .openapi(putQuotationsIdQuotationStatusRoute, putQuotationsIdQuotationStatusRouteHandler)
  .openapi(postQuotationsIdCancellationRoute, postQuotationsIdCancellationRouteHandler)
  .openapi(getSalesOrdersRoute, getSalesOrdersRouteHandler)
  .openapi(postSalesOrdersRoute, postSalesOrdersRouteHandler)
  .openapi(getSalesOrdersIdRoute, getSalesOrdersIdRouteHandler)
  .openapi(patchSalesOrdersIdRoute, patchSalesOrdersIdRouteHandler)
  .openapi(postSalesOrdersIdCancellationRoute, postSalesOrdersIdCancellationRouteHandler)
  .openapi(getDeliveriesRoute, getDeliveriesRouteHandler)
  .openapi(postDeliveriesRoute, postDeliveriesRouteHandler)
  .openapi(getDeliveriesIdRoute, getDeliveriesIdRouteHandler)
  .openapi(patchDeliveriesIdRoute, patchDeliveriesIdRouteHandler)
  .openapi(postDeliveriesIdCancellationRoute, postDeliveriesIdCancellationRouteHandler)
  .openapi(putDeliveriesIdDeliveryStatusRoute, putDeliveriesIdDeliveryStatusRouteHandler)
  .openapi(putDeliveriesIdAcceptanceStatusRoute, putDeliveriesIdAcceptanceStatusRouteHandler)
  .openapi(getSalesRoute, getSalesRouteHandler)
  .openapi(postSalesRoute, postSalesRouteHandler)
  .openapi(getSalesIdRoute, getSalesIdRouteHandler)
  .openapi(patchSalesIdRoute, patchSalesIdRouteHandler)
  .openapi(postSalesIdCancellationRoute, postSalesIdCancellationRouteHandler)
  .openapi(putSalesIdCollectionStatusRoute, putSalesIdCollectionStatusRouteHandler)
  .openapi(getPeriodicSalesRoute, getPeriodicSalesRouteHandler)
  .openapi(postPeriodicSalesRoute, postPeriodicSalesRouteHandler)
  .openapi(getPeriodicSalesIdRoute, getPeriodicSalesIdRouteHandler)
  .openapi(patchPeriodicSalesIdRoute, patchPeriodicSalesIdRouteHandler)
  .openapi(getPeriodicSalesIdSalesEntriesRoute, getPeriodicSalesIdSalesEntriesRouteHandler)
  .openapi(postPeriodicSalesIdCancellationRoute, postPeriodicSalesIdCancellationRouteHandler)
  .openapi(getSalesSchedulesRoute, getSalesSchedulesRouteHandler)
  .openapi(getSalesSchedulesIdRoute, getSalesSchedulesIdRouteHandler)
  .openapi(patchSalesSchedulesIdRoute, patchSalesSchedulesIdRouteHandler)
  .openapi(deleteSalesSchedulesIdRoute, deleteSalesSchedulesIdRouteHandler)
  .openapi(postSalesSchedulesIdActualizationRoute, postSalesSchedulesIdActualizationRouteHandler)
  .openapi(getOtherCostsRoute, getOtherCostsRouteHandler)
  .openapi(postOtherCostsRoute, postOtherCostsRouteHandler)
  .openapi(patchOtherCostsIdRoute, patchOtherCostsIdRouteHandler)
  .openapi(getOtherCostsIdRoute, getOtherCostsIdRouteHandler)
  .openapi(postOtherCostsIdRestorationRoute, postOtherCostsIdRestorationRouteHandler)
  .openapi(postOtherCostsIdCancellationRoute, postOtherCostsIdCancellationRouteHandler)
  .openapi(getProcurementsRoute, getProcurementsRouteHandler)
  .openapi(postProcurementsRoute, postProcurementsRouteHandler)
  .openapi(patchProcurementsIdRoute, patchProcurementsIdRouteHandler)
  .openapi(getProcurementsIdRoute, getProcurementsIdRouteHandler)
  .openapi(postProcurementsIdCancellationRoute, postProcurementsIdCancellationRouteHandler)
  .openapi(putProcurementsIdPaymentStatusRoute, putProcurementsIdPaymentStatusRouteHandler)
  .openapi(getAdvanceReceiptsRoute, getAdvanceReceiptsRouteHandler)
  .openapi(postAdvanceReceiptsRoute, postAdvanceReceiptsRouteHandler)
  .openapi(getAdvanceReceiptsIdRoute, getAdvanceReceiptsIdRouteHandler)
  .openapi(patchAdvanceReceiptsIdRoute, patchAdvanceReceiptsIdRouteHandler)
  .openapi(postAdvanceReceiptsIdCancellationRoute, postAdvanceReceiptsIdCancellationRouteHandler)
  .openapi(postAdvanceReceiptsIdReductionRoute, postAdvanceReceiptsIdReductionRouteHandler)
  .openapi(
    postAdvanceReceiptsIdPeriodicReductionRoute,
    postAdvanceReceiptsIdPeriodicReductionRouteHandler,
  )
  .openapi(
    putAdvanceReceiptsIdCollectionStatusRoute,
    putAdvanceReceiptsIdCollectionStatusRouteHandler,
  )

export default app

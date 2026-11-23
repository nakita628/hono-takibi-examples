import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdAccountsAccountIdRoute,
  deleteMerchantIdDatafeedsDatafeedIdRoute,
  deleteMerchantIdPosTargetMerchantIdStoreStoreCodeRoute,
  deleteMerchantIdProductsProductIdRoute,
  getAccountsAuthinfoRoute,
  getLiasettingsPosdataprovidersRoute,
  getMerchantIdAccountsAccountIdRoute,
  getMerchantIdAccountsRoute,
  getMerchantIdAccountstatusesAccountIdRoute,
  getMerchantIdAccountstatusesRoute,
  getMerchantIdAccounttaxAccountIdRoute,
  getMerchantIdAccounttaxRoute,
  getMerchantIdDatafeedsDatafeedIdRoute,
  getMerchantIdDatafeedsRoute,
  getMerchantIdDatafeedstatusesDatafeedIdRoute,
  getMerchantIdDatafeedstatusesRoute,
  getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsRoute,
  getMerchantIdLiasettingsAccountIdRoute,
  getMerchantIdLiasettingsRoute,
  getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsRoute,
  getMerchantIdOrderreportsDisbursementsRoute,
  getMerchantIdOrderreturnsReturnIdRoute,
  getMerchantIdOrderreturnsRoute,
  getMerchantIdOrdersbymerchantidMerchantOrderIdRoute,
  getMerchantIdOrdersOrderIdRoute,
  getMerchantIdOrdersRoute,
  getMerchantIdPosTargetMerchantIdStoreRoute,
  getMerchantIdPosTargetMerchantIdStoreStoreCodeRoute,
  getMerchantIdProductsProductIdRoute,
  getMerchantIdProductsRoute,
  getMerchantIdProductstatusesProductIdRoute,
  getMerchantIdProductstatusesRoute,
  getMerchantIdShippingsettingsAccountIdRoute,
  getMerchantIdShippingsettingsRoute,
  getMerchantIdSupportedCarriersRoute,
  getMerchantIdSupportedHolidaysRoute,
  getMerchantIdSupportedPickupServicesRoute,
  getMerchantIdTestordertemplatesTemplateNameRoute,
  postAccountsBatchRoute,
  postAccountstatusesBatchRoute,
  postAccounttaxBatchRoute,
  postDatafeedsBatchRoute,
  postDatafeedstatusesBatchRoute,
  postLiasettingsBatchRoute,
  postMerchantIdAccountsAccountIdClaimwebsiteRoute,
  postMerchantIdAccountsAccountIdLinkRoute,
  postMerchantIdAccountsRoute,
  postMerchantIdDatafeedsDatafeedIdFetchNowRoute,
  postMerchantIdDatafeedsRoute,
  postMerchantIdLiasettingsAccountIdRequestgmbaccessRoute,
  postMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryRoute,
  postMerchantIdLiasettingsAccountIdSetinventoryverificationcontactRoute,
  postMerchantIdLiasettingsAccountIdSetposdataproviderRoute,
  postMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceRoute,
  postMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceRoute,
  postMerchantIdOrdersOrderIdAcknowledgeRoute,
  postMerchantIdOrdersOrderIdCancelLineItemRoute,
  postMerchantIdOrdersOrderIdCancelRoute,
  postMerchantIdOrdersOrderIdInStoreRefundLineItemRoute,
  postMerchantIdOrdersOrderIdRefundRoute,
  postMerchantIdOrdersOrderIdRejectReturnLineItemRoute,
  postMerchantIdOrdersOrderIdReturnLineItemRoute,
  postMerchantIdOrdersOrderIdReturnRefundLineItemRoute,
  postMerchantIdOrdersOrderIdSetLineItemMetadataRoute,
  postMerchantIdOrdersOrderIdShipLineItemsRoute,
  postMerchantIdOrdersOrderIdTestreturnRoute,
  postMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsRoute,
  postMerchantIdOrdersOrderIdUpdateMerchantOrderIdRoute,
  postMerchantIdOrdersOrderIdUpdateShipmentRoute,
  postMerchantIdPosTargetMerchantIdInventoryRoute,
  postMerchantIdPosTargetMerchantIdSaleRoute,
  postMerchantIdPosTargetMerchantIdStoreRoute,
  postMerchantIdProductsRoute,
  postMerchantIdTestordersOrderIdAdvanceRoute,
  postMerchantIdTestordersOrderIdCancelByCustomerRoute,
  postMerchantIdTestordersRoute,
  postOrdersBatchRoute,
  postPosBatchRoute,
  postProductsBatchRoute,
  postProductstatusesBatchRoute,
  postShippingsettingsBatchRoute,
  putMerchantIdAccountsAccountIdRoute,
  putMerchantIdAccounttaxAccountIdRoute,
  putMerchantIdDatafeedsDatafeedIdRoute,
  putMerchantIdLiasettingsAccountIdRoute,
  putMerchantIdShippingsettingsAccountIdRoute,
} from './routes'
import {
  deleteMerchantIdAccountsAccountIdRouteHandler,
  deleteMerchantIdDatafeedsDatafeedIdRouteHandler,
  deleteMerchantIdPosTargetMerchantIdStoreStoreCodeRouteHandler,
  deleteMerchantIdProductsProductIdRouteHandler,
  getAccountsAuthinfoRouteHandler,
  getLiasettingsPosdataprovidersRouteHandler,
  getMerchantIdAccountsAccountIdRouteHandler,
  getMerchantIdAccountsRouteHandler,
  getMerchantIdAccountstatusesAccountIdRouteHandler,
  getMerchantIdAccountstatusesRouteHandler,
  getMerchantIdAccounttaxAccountIdRouteHandler,
  getMerchantIdAccounttaxRouteHandler,
  getMerchantIdDatafeedsDatafeedIdRouteHandler,
  getMerchantIdDatafeedsRouteHandler,
  getMerchantIdDatafeedstatusesDatafeedIdRouteHandler,
  getMerchantIdDatafeedstatusesRouteHandler,
  getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsRouteHandler,
  getMerchantIdLiasettingsAccountIdRouteHandler,
  getMerchantIdLiasettingsRouteHandler,
  getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsRouteHandler,
  getMerchantIdOrderreportsDisbursementsRouteHandler,
  getMerchantIdOrderreturnsReturnIdRouteHandler,
  getMerchantIdOrderreturnsRouteHandler,
  getMerchantIdOrdersbymerchantidMerchantOrderIdRouteHandler,
  getMerchantIdOrdersOrderIdRouteHandler,
  getMerchantIdOrdersRouteHandler,
  getMerchantIdPosTargetMerchantIdStoreRouteHandler,
  getMerchantIdPosTargetMerchantIdStoreStoreCodeRouteHandler,
  getMerchantIdProductsProductIdRouteHandler,
  getMerchantIdProductsRouteHandler,
  getMerchantIdProductstatusesProductIdRouteHandler,
  getMerchantIdProductstatusesRouteHandler,
  getMerchantIdShippingsettingsAccountIdRouteHandler,
  getMerchantIdShippingsettingsRouteHandler,
  getMerchantIdSupportedCarriersRouteHandler,
  getMerchantIdSupportedHolidaysRouteHandler,
  getMerchantIdSupportedPickupServicesRouteHandler,
  getMerchantIdTestordertemplatesTemplateNameRouteHandler,
  postAccountsBatchRouteHandler,
  postAccountstatusesBatchRouteHandler,
  postAccounttaxBatchRouteHandler,
  postDatafeedsBatchRouteHandler,
  postDatafeedstatusesBatchRouteHandler,
  postLiasettingsBatchRouteHandler,
  postMerchantIdAccountsAccountIdClaimwebsiteRouteHandler,
  postMerchantIdAccountsAccountIdLinkRouteHandler,
  postMerchantIdAccountsRouteHandler,
  postMerchantIdDatafeedsDatafeedIdFetchNowRouteHandler,
  postMerchantIdDatafeedsRouteHandler,
  postMerchantIdLiasettingsAccountIdRequestgmbaccessRouteHandler,
  postMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryRouteHandler,
  postMerchantIdLiasettingsAccountIdSetinventoryverificationcontactRouteHandler,
  postMerchantIdLiasettingsAccountIdSetposdataproviderRouteHandler,
  postMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceRouteHandler,
  postMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceRouteHandler,
  postMerchantIdOrdersOrderIdAcknowledgeRouteHandler,
  postMerchantIdOrdersOrderIdCancelLineItemRouteHandler,
  postMerchantIdOrdersOrderIdCancelRouteHandler,
  postMerchantIdOrdersOrderIdInStoreRefundLineItemRouteHandler,
  postMerchantIdOrdersOrderIdRefundRouteHandler,
  postMerchantIdOrdersOrderIdRejectReturnLineItemRouteHandler,
  postMerchantIdOrdersOrderIdReturnLineItemRouteHandler,
  postMerchantIdOrdersOrderIdReturnRefundLineItemRouteHandler,
  postMerchantIdOrdersOrderIdSetLineItemMetadataRouteHandler,
  postMerchantIdOrdersOrderIdShipLineItemsRouteHandler,
  postMerchantIdOrdersOrderIdTestreturnRouteHandler,
  postMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsRouteHandler,
  postMerchantIdOrdersOrderIdUpdateMerchantOrderIdRouteHandler,
  postMerchantIdOrdersOrderIdUpdateShipmentRouteHandler,
  postMerchantIdPosTargetMerchantIdInventoryRouteHandler,
  postMerchantIdPosTargetMerchantIdSaleRouteHandler,
  postMerchantIdPosTargetMerchantIdStoreRouteHandler,
  postMerchantIdProductsRouteHandler,
  postMerchantIdTestordersOrderIdAdvanceRouteHandler,
  postMerchantIdTestordersOrderIdCancelByCustomerRouteHandler,
  postMerchantIdTestordersRouteHandler,
  postOrdersBatchRouteHandler,
  postPosBatchRouteHandler,
  postProductsBatchRouteHandler,
  postProductstatusesBatchRouteHandler,
  postShippingsettingsBatchRouteHandler,
  putMerchantIdAccountsAccountIdRouteHandler,
  putMerchantIdAccounttaxAccountIdRouteHandler,
  putMerchantIdDatafeedsDatafeedIdRouteHandler,
  putMerchantIdLiasettingsAccountIdRouteHandler,
  putMerchantIdShippingsettingsAccountIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsAuthinfoRoute, getAccountsAuthinfoRouteHandler)
  .openapi(postAccountsBatchRoute, postAccountsBatchRouteHandler)
  .openapi(postAccountstatusesBatchRoute, postAccountstatusesBatchRouteHandler)
  .openapi(postAccounttaxBatchRoute, postAccounttaxBatchRouteHandler)
  .openapi(postDatafeedsBatchRoute, postDatafeedsBatchRouteHandler)
  .openapi(postDatafeedstatusesBatchRoute, postDatafeedstatusesBatchRouteHandler)
  .openapi(postLiasettingsBatchRoute, postLiasettingsBatchRouteHandler)
  .openapi(getLiasettingsPosdataprovidersRoute, getLiasettingsPosdataprovidersRouteHandler)
  .openapi(postOrdersBatchRoute, postOrdersBatchRouteHandler)
  .openapi(postPosBatchRoute, postPosBatchRouteHandler)
  .openapi(postProductsBatchRoute, postProductsBatchRouteHandler)
  .openapi(postProductstatusesBatchRoute, postProductstatusesBatchRouteHandler)
  .openapi(postShippingsettingsBatchRoute, postShippingsettingsBatchRouteHandler)
  .openapi(getMerchantIdAccountsRoute, getMerchantIdAccountsRouteHandler)
  .openapi(postMerchantIdAccountsRoute, postMerchantIdAccountsRouteHandler)
  .openapi(deleteMerchantIdAccountsAccountIdRoute, deleteMerchantIdAccountsAccountIdRouteHandler)
  .openapi(getMerchantIdAccountsAccountIdRoute, getMerchantIdAccountsAccountIdRouteHandler)
  .openapi(putMerchantIdAccountsAccountIdRoute, putMerchantIdAccountsAccountIdRouteHandler)
  .openapi(
    postMerchantIdAccountsAccountIdClaimwebsiteRoute,
    postMerchantIdAccountsAccountIdClaimwebsiteRouteHandler,
  )
  .openapi(
    postMerchantIdAccountsAccountIdLinkRoute,
    postMerchantIdAccountsAccountIdLinkRouteHandler,
  )
  .openapi(getMerchantIdAccountstatusesRoute, getMerchantIdAccountstatusesRouteHandler)
  .openapi(
    getMerchantIdAccountstatusesAccountIdRoute,
    getMerchantIdAccountstatusesAccountIdRouteHandler,
  )
  .openapi(getMerchantIdAccounttaxRoute, getMerchantIdAccounttaxRouteHandler)
  .openapi(getMerchantIdAccounttaxAccountIdRoute, getMerchantIdAccounttaxAccountIdRouteHandler)
  .openapi(putMerchantIdAccounttaxAccountIdRoute, putMerchantIdAccounttaxAccountIdRouteHandler)
  .openapi(getMerchantIdDatafeedsRoute, getMerchantIdDatafeedsRouteHandler)
  .openapi(postMerchantIdDatafeedsRoute, postMerchantIdDatafeedsRouteHandler)
  .openapi(
    deleteMerchantIdDatafeedsDatafeedIdRoute,
    deleteMerchantIdDatafeedsDatafeedIdRouteHandler,
  )
  .openapi(getMerchantIdDatafeedsDatafeedIdRoute, getMerchantIdDatafeedsDatafeedIdRouteHandler)
  .openapi(putMerchantIdDatafeedsDatafeedIdRoute, putMerchantIdDatafeedsDatafeedIdRouteHandler)
  .openapi(
    postMerchantIdDatafeedsDatafeedIdFetchNowRoute,
    postMerchantIdDatafeedsDatafeedIdFetchNowRouteHandler,
  )
  .openapi(getMerchantIdDatafeedstatusesRoute, getMerchantIdDatafeedstatusesRouteHandler)
  .openapi(
    getMerchantIdDatafeedstatusesDatafeedIdRoute,
    getMerchantIdDatafeedstatusesDatafeedIdRouteHandler,
  )
  .openapi(getMerchantIdLiasettingsRoute, getMerchantIdLiasettingsRouteHandler)
  .openapi(getMerchantIdLiasettingsAccountIdRoute, getMerchantIdLiasettingsAccountIdRouteHandler)
  .openapi(putMerchantIdLiasettingsAccountIdRoute, putMerchantIdLiasettingsAccountIdRouteHandler)
  .openapi(
    getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsRoute,
    getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsRouteHandler,
  )
  .openapi(
    postMerchantIdLiasettingsAccountIdRequestgmbaccessRoute,
    postMerchantIdLiasettingsAccountIdRequestgmbaccessRouteHandler,
  )
  .openapi(
    postMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryRoute,
    postMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryRouteHandler,
  )
  .openapi(
    postMerchantIdLiasettingsAccountIdSetinventoryverificationcontactRoute,
    postMerchantIdLiasettingsAccountIdSetinventoryverificationcontactRouteHandler,
  )
  .openapi(
    postMerchantIdLiasettingsAccountIdSetposdataproviderRoute,
    postMerchantIdLiasettingsAccountIdSetposdataproviderRouteHandler,
  )
  .openapi(
    postMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceRoute,
    postMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceRouteHandler,
  )
  .openapi(
    postMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceRoute,
    postMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceRouteHandler,
  )
  .openapi(
    getMerchantIdOrderreportsDisbursementsRoute,
    getMerchantIdOrderreportsDisbursementsRouteHandler,
  )
  .openapi(
    getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsRoute,
    getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsRouteHandler,
  )
  .openapi(getMerchantIdOrderreturnsRoute, getMerchantIdOrderreturnsRouteHandler)
  .openapi(getMerchantIdOrderreturnsReturnIdRoute, getMerchantIdOrderreturnsReturnIdRouteHandler)
  .openapi(getMerchantIdOrdersRoute, getMerchantIdOrdersRouteHandler)
  .openapi(getMerchantIdOrdersOrderIdRoute, getMerchantIdOrdersOrderIdRouteHandler)
  .openapi(
    postMerchantIdOrdersOrderIdAcknowledgeRoute,
    postMerchantIdOrdersOrderIdAcknowledgeRouteHandler,
  )
  .openapi(postMerchantIdOrdersOrderIdCancelRoute, postMerchantIdOrdersOrderIdCancelRouteHandler)
  .openapi(
    postMerchantIdOrdersOrderIdCancelLineItemRoute,
    postMerchantIdOrdersOrderIdCancelLineItemRouteHandler,
  )
  .openapi(
    postMerchantIdOrdersOrderIdInStoreRefundLineItemRoute,
    postMerchantIdOrdersOrderIdInStoreRefundLineItemRouteHandler,
  )
  .openapi(postMerchantIdOrdersOrderIdRefundRoute, postMerchantIdOrdersOrderIdRefundRouteHandler)
  .openapi(
    postMerchantIdOrdersOrderIdRejectReturnLineItemRoute,
    postMerchantIdOrdersOrderIdRejectReturnLineItemRouteHandler,
  )
  .openapi(
    postMerchantIdOrdersOrderIdReturnLineItemRoute,
    postMerchantIdOrdersOrderIdReturnLineItemRouteHandler,
  )
  .openapi(
    postMerchantIdOrdersOrderIdReturnRefundLineItemRoute,
    postMerchantIdOrdersOrderIdReturnRefundLineItemRouteHandler,
  )
  .openapi(
    postMerchantIdOrdersOrderIdSetLineItemMetadataRoute,
    postMerchantIdOrdersOrderIdSetLineItemMetadataRouteHandler,
  )
  .openapi(
    postMerchantIdOrdersOrderIdShipLineItemsRoute,
    postMerchantIdOrdersOrderIdShipLineItemsRouteHandler,
  )
  .openapi(
    postMerchantIdOrdersOrderIdTestreturnRoute,
    postMerchantIdOrdersOrderIdTestreturnRouteHandler,
  )
  .openapi(
    postMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsRoute,
    postMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsRouteHandler,
  )
  .openapi(
    postMerchantIdOrdersOrderIdUpdateMerchantOrderIdRoute,
    postMerchantIdOrdersOrderIdUpdateMerchantOrderIdRouteHandler,
  )
  .openapi(
    postMerchantIdOrdersOrderIdUpdateShipmentRoute,
    postMerchantIdOrdersOrderIdUpdateShipmentRouteHandler,
  )
  .openapi(
    getMerchantIdOrdersbymerchantidMerchantOrderIdRoute,
    getMerchantIdOrdersbymerchantidMerchantOrderIdRouteHandler,
  )
  .openapi(
    postMerchantIdPosTargetMerchantIdInventoryRoute,
    postMerchantIdPosTargetMerchantIdInventoryRouteHandler,
  )
  .openapi(
    postMerchantIdPosTargetMerchantIdSaleRoute,
    postMerchantIdPosTargetMerchantIdSaleRouteHandler,
  )
  .openapi(
    getMerchantIdPosTargetMerchantIdStoreRoute,
    getMerchantIdPosTargetMerchantIdStoreRouteHandler,
  )
  .openapi(
    postMerchantIdPosTargetMerchantIdStoreRoute,
    postMerchantIdPosTargetMerchantIdStoreRouteHandler,
  )
  .openapi(
    deleteMerchantIdPosTargetMerchantIdStoreStoreCodeRoute,
    deleteMerchantIdPosTargetMerchantIdStoreStoreCodeRouteHandler,
  )
  .openapi(
    getMerchantIdPosTargetMerchantIdStoreStoreCodeRoute,
    getMerchantIdPosTargetMerchantIdStoreStoreCodeRouteHandler,
  )
  .openapi(getMerchantIdProductsRoute, getMerchantIdProductsRouteHandler)
  .openapi(postMerchantIdProductsRoute, postMerchantIdProductsRouteHandler)
  .openapi(deleteMerchantIdProductsProductIdRoute, deleteMerchantIdProductsProductIdRouteHandler)
  .openapi(getMerchantIdProductsProductIdRoute, getMerchantIdProductsProductIdRouteHandler)
  .openapi(getMerchantIdProductstatusesRoute, getMerchantIdProductstatusesRouteHandler)
  .openapi(
    getMerchantIdProductstatusesProductIdRoute,
    getMerchantIdProductstatusesProductIdRouteHandler,
  )
  .openapi(getMerchantIdShippingsettingsRoute, getMerchantIdShippingsettingsRouteHandler)
  .openapi(
    getMerchantIdShippingsettingsAccountIdRoute,
    getMerchantIdShippingsettingsAccountIdRouteHandler,
  )
  .openapi(
    putMerchantIdShippingsettingsAccountIdRoute,
    putMerchantIdShippingsettingsAccountIdRouteHandler,
  )
  .openapi(getMerchantIdSupportedCarriersRoute, getMerchantIdSupportedCarriersRouteHandler)
  .openapi(getMerchantIdSupportedHolidaysRoute, getMerchantIdSupportedHolidaysRouteHandler)
  .openapi(
    getMerchantIdSupportedPickupServicesRoute,
    getMerchantIdSupportedPickupServicesRouteHandler,
  )
  .openapi(postMerchantIdTestordersRoute, postMerchantIdTestordersRouteHandler)
  .openapi(
    postMerchantIdTestordersOrderIdAdvanceRoute,
    postMerchantIdTestordersOrderIdAdvanceRouteHandler,
  )
  .openapi(
    postMerchantIdTestordersOrderIdCancelByCustomerRoute,
    postMerchantIdTestordersOrderIdCancelByCustomerRouteHandler,
  )
  .openapi(
    getMerchantIdTestordertemplatesTemplateNameRoute,
    getMerchantIdTestordertemplatesTemplateNameRouteHandler,
  )

export default app

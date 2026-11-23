import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdAccountsAccountIdRoute,
  deleteMerchantIdDatafeedsDatafeedIdRoute,
  deleteMerchantIdPosTargetMerchantIdStoreStoreCodeRoute,
  deleteMerchantIdProductsProductIdRoute,
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
  putMerchantIdAccountsAccountIdRoute,
  putMerchantIdAccounttaxAccountIdRoute,
  putMerchantIdDatafeedsDatafeedIdRoute,
  putMerchantIdLiasettingsAccountIdRoute,
  putMerchantIdShippingsettingsAccountIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const merchantIdHandler = app
  .openapi(getMerchantIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMerchantIdAccountsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdAccountsAccountIdClaimwebsiteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdAccountsAccountIdLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdAccountstatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdAccountstatusesAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdAccounttaxRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdAccounttaxAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMerchantIdAccounttaxAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdDatafeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdDatafeedsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdDatafeedsDatafeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdDatafeedsDatafeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMerchantIdDatafeedsDatafeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdDatafeedsDatafeedIdFetchNowRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdDatafeedstatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdDatafeedstatusesDatafeedIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdLiasettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdLiasettingsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMerchantIdLiasettingsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdLiasettingsAccountIdRequestgmbaccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdLiasettingsAccountIdSetinventoryverificationcontactRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdLiasettingsAccountIdSetposdataproviderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdOrderreportsDisbursementsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdOrderreturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdOrderreturnsReturnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdCancelLineItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdInStoreRefundLineItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdRejectReturnLineItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdReturnLineItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdReturnRefundLineItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdSetLineItemMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdShipLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdTestreturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdUpdateMerchantOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdUpdateShipmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdOrdersbymerchantidMerchantOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdPosTargetMerchantIdInventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdPosTargetMerchantIdSaleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdPosTargetMerchantIdStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdPosTargetMerchantIdStoreRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdPosTargetMerchantIdStoreStoreCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdPosTargetMerchantIdStoreStoreCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductstatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductstatusesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdShippingsettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdShippingsettingsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMerchantIdShippingsettingsAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdSupportedCarriersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdSupportedHolidaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdSupportedPickupServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdTestordersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdTestordersOrderIdAdvanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdTestordersOrderIdCancelByCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdTestordertemplatesTemplateNameRoute, (c) => {
    throw new Error('Not implemented')
  })

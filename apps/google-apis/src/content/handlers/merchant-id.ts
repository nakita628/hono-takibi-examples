import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantIdAccountsAccountIdRoute,
  deleteMerchantIdCollectionsCollectionIdRoute,
  deleteMerchantIdConversionsourcesConversionSourceIdRoute,
  deleteMerchantIdDatafeedsDatafeedIdRoute,
  deleteMerchantIdPosTargetMerchantIdStoreStoreCodeRoute,
  deleteMerchantIdProductdeliverytimeProductIdRoute,
  deleteMerchantIdProductsProductIdRoute,
  deleteMerchantIdRegionsRegionIdRoute,
  deleteMerchantIdRepricingrulesRuleIdRoute,
  deleteMerchantIdReturnaddressReturnAddressIdRoute,
  deleteMerchantIdReturnpolicyonlineReturnPolicyIdRoute,
  deleteMerchantIdReturnpolicyReturnPolicyIdRoute,
  getMerchantIdAccountsAccountIdListlinksRoute,
  getMerchantIdAccountsAccountIdRoute,
  getMerchantIdAccountsRoute,
  getMerchantIdAccountstatusesAccountIdRoute,
  getMerchantIdAccountstatusesRoute,
  getMerchantIdAccounttaxAccountIdRoute,
  getMerchantIdAccounttaxRoute,
  getMerchantIdBuyongoogleprogramsRegionCodeRoute,
  getMerchantIdCollectionsCollectionIdRoute,
  getMerchantIdCollectionsRoute,
  getMerchantIdCollectionstatusesCollectionIdRoute,
  getMerchantIdCollectionstatusesRoute,
  getMerchantIdConversionsourcesConversionSourceIdRoute,
  getMerchantIdConversionsourcesRoute,
  getMerchantIdDatafeedsDatafeedIdRoute,
  getMerchantIdDatafeedsRoute,
  getMerchantIdDatafeedstatusesDatafeedIdRoute,
  getMerchantIdDatafeedstatusesRoute,
  getMerchantIdFreelistingsprogramRoute,
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
  getMerchantIdProductdeliverytimeProductIdRoute,
  getMerchantIdProductsProductIdRoute,
  getMerchantIdProductsRoute,
  getMerchantIdProductstatusesProductIdRepricingreportsRoute,
  getMerchantIdProductstatusesProductIdRoute,
  getMerchantIdProductstatusesRoute,
  getMerchantIdPromotionsIdRoute,
  getMerchantIdPubsubnotificationsettingsRoute,
  getMerchantIdQuotasRoute,
  getMerchantIdRecommendationsGenerateRoute,
  getMerchantIdRegionsRegionIdRoute,
  getMerchantIdRegionsRoute,
  getMerchantIdRepricingrulesRoute,
  getMerchantIdRepricingrulesRuleIdRepricingreportsRoute,
  getMerchantIdRepricingrulesRuleIdRoute,
  getMerchantIdReturnaddressReturnAddressIdRoute,
  getMerchantIdReturnaddressRoute,
  getMerchantIdReturnpolicyonlineReturnPolicyIdRoute,
  getMerchantIdReturnpolicyonlineRoute,
  getMerchantIdReturnpolicyReturnPolicyIdRoute,
  getMerchantIdReturnpolicyRoute,
  getMerchantIdSettlementreportsRoute,
  getMerchantIdSettlementreportsSettlementIdRoute,
  getMerchantIdSettlementreportsSettlementIdTransactionsRoute,
  getMerchantIdShippingsettingsAccountIdRoute,
  getMerchantIdShippingsettingsRoute,
  getMerchantIdShoppingadsprogramRoute,
  getMerchantIdSupportedCarriersRoute,
  getMerchantIdSupportedHolidaysRoute,
  getMerchantIdSupportedPickupServicesRoute,
  getMerchantIdTestordertemplatesTemplateNameRoute,
  patchMerchantIdBuyongoogleprogramsRegionCodeRoute,
  patchMerchantIdConversionsourcesConversionSourceIdRoute,
  patchMerchantIdProductsProductIdRoute,
  patchMerchantIdRegionsRegionIdRoute,
  patchMerchantIdRepricingrulesRuleIdRoute,
  patchMerchantIdReturnpolicyonlineReturnPolicyIdRoute,
  postMerchantIdAccountsAccountIdClaimwebsiteRoute,
  postMerchantIdAccountsAccountIdLinkRoute,
  postMerchantIdAccountsAccountIdRequestphoneverificationRoute,
  postMerchantIdAccountsAccountIdUpdatelabelsRoute,
  postMerchantIdAccountsAccountIdVerifyphonenumberRoute,
  postMerchantIdAccountsRoute,
  postMerchantIdBuyongoogleprogramsRegionCodeActivateRoute,
  postMerchantIdBuyongoogleprogramsRegionCodeOnboardRoute,
  postMerchantIdBuyongoogleprogramsRegionCodePauseRoute,
  postMerchantIdBuyongoogleprogramsRegionCodeRequestreviewRoute,
  postMerchantIdCollectionsRoute,
  postMerchantIdConversionsourcesConversionSourceIdUndeleteRoute,
  postMerchantIdConversionsourcesRoute,
  postMerchantIdDatafeedsDatafeedIdFetchNowRoute,
  postMerchantIdDatafeedsRoute,
  postMerchantIdFreelistingsprogramRequestreviewRoute,
  postMerchantIdLiasettingsAccountIdRequestgmbaccessRoute,
  postMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryRoute,
  postMerchantIdLiasettingsAccountIdSetinventoryverificationcontactRoute,
  postMerchantIdLiasettingsAccountIdSetposdataproviderRoute,
  postMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceRoute,
  postMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceRoute,
  postMerchantIdOrderreturnsCreateOrderReturnRoute,
  postMerchantIdOrderreturnsReturnIdAcknowledgeRoute,
  postMerchantIdOrderreturnsReturnIdLabelsRoute,
  postMerchantIdOrderreturnsReturnIdProcessRoute,
  postMerchantIdOrdersOrderIdAcknowledgeRoute,
  postMerchantIdOrdersOrderIdCancelLineItemRoute,
  postMerchantIdOrdersOrderIdCancelRoute,
  postMerchantIdOrdersOrderIdCaptureOrderRoute,
  postMerchantIdOrdersOrderIdInStoreRefundLineItemRoute,
  postMerchantIdOrdersOrderIdRefunditemRoute,
  postMerchantIdOrdersOrderIdRefundorderRoute,
  postMerchantIdOrdersOrderIdRejectReturnLineItemRoute,
  postMerchantIdOrdersOrderIdReturnRefundLineItemRoute,
  postMerchantIdOrdersOrderIdSetLineItemMetadataRoute,
  postMerchantIdOrdersOrderIdShipLineItemsRoute,
  postMerchantIdOrdersOrderIdTestreturnRoute,
  postMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsRoute,
  postMerchantIdOrdersOrderIdUpdateMerchantOrderIdRoute,
  postMerchantIdOrdersOrderIdUpdateShipmentRoute,
  postMerchantIdOrdertrackingsignalsRoute,
  postMerchantIdPosTargetMerchantIdInventoryRoute,
  postMerchantIdPosTargetMerchantIdSaleRoute,
  postMerchantIdPosTargetMerchantIdStoreRoute,
  postMerchantIdProductdeliverytimeRoute,
  postMerchantIdProductsProductIdLocalinventoryRoute,
  postMerchantIdProductsProductIdRegionalinventoryRoute,
  postMerchantIdProductsRoute,
  postMerchantIdPromotionsRoute,
  postMerchantIdRecommendationsReportInteractionRoute,
  postMerchantIdRegionsRoute,
  postMerchantIdReportsSearchRoute,
  postMerchantIdRepricingrulesRoute,
  postMerchantIdReturnaddressRoute,
  postMerchantIdReturnpolicyonlineRoute,
  postMerchantIdReturnpolicyRoute,
  postMerchantIdShoppingadsprogramRequestreviewRoute,
  postMerchantIdTestordersOrderIdAdvanceRoute,
  postMerchantIdTestordersOrderIdCancelByCustomerRoute,
  postMerchantIdTestordersRoute,
  putMerchantIdAccountsAccountIdRoute,
  putMerchantIdAccounttaxAccountIdRoute,
  putMerchantIdDatafeedsDatafeedIdRoute,
  putMerchantIdLiasettingsAccountIdRoute,
  putMerchantIdPubsubnotificationsettingsRoute,
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
  .openapi(getMerchantIdAccountsAccountIdListlinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdAccountsAccountIdRequestphoneverificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdAccountsAccountIdUpdatelabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdAccountsAccountIdVerifyphonenumberRoute, (c) => {
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
  .openapi(getMerchantIdBuyongoogleprogramsRegionCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantIdBuyongoogleprogramsRegionCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdBuyongoogleprogramsRegionCodeActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdBuyongoogleprogramsRegionCodeOnboardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdBuyongoogleprogramsRegionCodePauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdBuyongoogleprogramsRegionCodeRequestreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdCollectionsCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdCollectionstatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdCollectionstatusesCollectionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdConversionsourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdConversionsourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdConversionsourcesConversionSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdConversionsourcesConversionSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantIdConversionsourcesConversionSourceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdConversionsourcesConversionSourceIdUndeleteRoute, (c) => {
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
  .openapi(getMerchantIdFreelistingsprogramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdFreelistingsprogramRequestreviewRoute, (c) => {
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
  .openapi(postMerchantIdOrderreturnsCreateOrderReturnRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdOrderreturnsReturnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrderreturnsReturnIdAcknowledgeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrderreturnsReturnIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrderreturnsReturnIdProcessRoute, (c) => {
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
  .openapi(postMerchantIdOrdersOrderIdCaptureOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdInStoreRefundLineItemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdRefunditemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdRefundorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdOrdersOrderIdRejectReturnLineItemRoute, (c) => {
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
  .openapi(postMerchantIdOrdertrackingsignalsRoute, (c) => {
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
  .openapi(postMerchantIdProductdeliverytimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdProductdeliverytimeProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductdeliverytimeProductIdRoute, (c) => {
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
  .openapi(patchMerchantIdProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdProductsProductIdLocalinventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdProductsProductIdRegionalinventoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductstatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductstatusesProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdProductstatusesProductIdRepricingreportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdPromotionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdPubsubnotificationsettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMerchantIdPubsubnotificationsettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdQuotasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdRecommendationsGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdRecommendationsReportInteractionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdRegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdRegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantIdRegionsRegionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdReportsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdRepricingrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdRepricingrulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdRepricingrulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdRepricingrulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantIdRepricingrulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdRepricingrulesRuleIdRepricingreportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdReturnaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdReturnaddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdReturnaddressReturnAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdReturnaddressReturnAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdReturnpolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdReturnpolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdReturnpolicyReturnPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdReturnpolicyReturnPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdReturnpolicyonlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdReturnpolicyonlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantIdReturnpolicyonlineReturnPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdReturnpolicyonlineReturnPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantIdReturnpolicyonlineReturnPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdSettlementreportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdSettlementreportsSettlementIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantIdSettlementreportsSettlementIdTransactionsRoute, (c) => {
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
  .openapi(getMerchantIdShoppingadsprogramRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantIdShoppingadsprogramRequestreviewRoute, (c) => {
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

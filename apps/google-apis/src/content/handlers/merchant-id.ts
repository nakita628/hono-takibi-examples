import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const getMerchantIdAccountsRouteHandler: RouteHandler<
  typeof getMerchantIdAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdAccountsRouteHandler: RouteHandler<
  typeof postMerchantIdAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMerchantIdAccountsAccountIdRouteHandler: RouteHandler<
  typeof deleteMerchantIdAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdAccountsAccountIdRouteHandler: RouteHandler<
  typeof getMerchantIdAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMerchantIdAccountsAccountIdRouteHandler: RouteHandler<
  typeof putMerchantIdAccountsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdAccountsAccountIdClaimwebsiteRouteHandler: RouteHandler<
  typeof postMerchantIdAccountsAccountIdClaimwebsiteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdAccountsAccountIdLinkRouteHandler: RouteHandler<
  typeof postMerchantIdAccountsAccountIdLinkRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdAccountsAccountIdListlinksRouteHandler: RouteHandler<
  typeof getMerchantIdAccountsAccountIdListlinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdAccountsAccountIdRequestphoneverificationRouteHandler: RouteHandler<
  typeof postMerchantIdAccountsAccountIdRequestphoneverificationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdAccountsAccountIdUpdatelabelsRouteHandler: RouteHandler<
  typeof postMerchantIdAccountsAccountIdUpdatelabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdAccountsAccountIdVerifyphonenumberRouteHandler: RouteHandler<
  typeof postMerchantIdAccountsAccountIdVerifyphonenumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdAccountstatusesRouteHandler: RouteHandler<
  typeof getMerchantIdAccountstatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdAccountstatusesAccountIdRouteHandler: RouteHandler<
  typeof getMerchantIdAccountstatusesAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdAccounttaxRouteHandler: RouteHandler<
  typeof getMerchantIdAccounttaxRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdAccounttaxAccountIdRouteHandler: RouteHandler<
  typeof getMerchantIdAccounttaxAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMerchantIdAccounttaxAccountIdRouteHandler: RouteHandler<
  typeof putMerchantIdAccounttaxAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdBuyongoogleprogramsRegionCodeRouteHandler: RouteHandler<
  typeof getMerchantIdBuyongoogleprogramsRegionCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMerchantIdBuyongoogleprogramsRegionCodeRouteHandler: RouteHandler<
  typeof patchMerchantIdBuyongoogleprogramsRegionCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdBuyongoogleprogramsRegionCodeActivateRouteHandler: RouteHandler<
  typeof postMerchantIdBuyongoogleprogramsRegionCodeActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdBuyongoogleprogramsRegionCodeOnboardRouteHandler: RouteHandler<
  typeof postMerchantIdBuyongoogleprogramsRegionCodeOnboardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdBuyongoogleprogramsRegionCodePauseRouteHandler: RouteHandler<
  typeof postMerchantIdBuyongoogleprogramsRegionCodePauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdBuyongoogleprogramsRegionCodeRequestreviewRouteHandler: RouteHandler<
  typeof postMerchantIdBuyongoogleprogramsRegionCodeRequestreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdCollectionsRouteHandler: RouteHandler<
  typeof getMerchantIdCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdCollectionsRouteHandler: RouteHandler<
  typeof postMerchantIdCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMerchantIdCollectionsCollectionIdRouteHandler: RouteHandler<
  typeof deleteMerchantIdCollectionsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdCollectionsCollectionIdRouteHandler: RouteHandler<
  typeof getMerchantIdCollectionsCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdCollectionstatusesRouteHandler: RouteHandler<
  typeof getMerchantIdCollectionstatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdCollectionstatusesCollectionIdRouteHandler: RouteHandler<
  typeof getMerchantIdCollectionstatusesCollectionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdConversionsourcesRouteHandler: RouteHandler<
  typeof getMerchantIdConversionsourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdConversionsourcesRouteHandler: RouteHandler<
  typeof postMerchantIdConversionsourcesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMerchantIdConversionsourcesConversionSourceIdRouteHandler: RouteHandler<
  typeof deleteMerchantIdConversionsourcesConversionSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdConversionsourcesConversionSourceIdRouteHandler: RouteHandler<
  typeof getMerchantIdConversionsourcesConversionSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMerchantIdConversionsourcesConversionSourceIdRouteHandler: RouteHandler<
  typeof patchMerchantIdConversionsourcesConversionSourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdConversionsourcesConversionSourceIdUndeleteRouteHandler: RouteHandler<
  typeof postMerchantIdConversionsourcesConversionSourceIdUndeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdDatafeedsRouteHandler: RouteHandler<
  typeof getMerchantIdDatafeedsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdDatafeedsRouteHandler: RouteHandler<
  typeof postMerchantIdDatafeedsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMerchantIdDatafeedsDatafeedIdRouteHandler: RouteHandler<
  typeof deleteMerchantIdDatafeedsDatafeedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdDatafeedsDatafeedIdRouteHandler: RouteHandler<
  typeof getMerchantIdDatafeedsDatafeedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMerchantIdDatafeedsDatafeedIdRouteHandler: RouteHandler<
  typeof putMerchantIdDatafeedsDatafeedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdDatafeedsDatafeedIdFetchNowRouteHandler: RouteHandler<
  typeof postMerchantIdDatafeedsDatafeedIdFetchNowRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdDatafeedstatusesRouteHandler: RouteHandler<
  typeof getMerchantIdDatafeedstatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdDatafeedstatusesDatafeedIdRouteHandler: RouteHandler<
  typeof getMerchantIdDatafeedstatusesDatafeedIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdFreelistingsprogramRouteHandler: RouteHandler<
  typeof getMerchantIdFreelistingsprogramRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdFreelistingsprogramRequestreviewRouteHandler: RouteHandler<
  typeof postMerchantIdFreelistingsprogramRequestreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdLiasettingsRouteHandler: RouteHandler<
  typeof getMerchantIdLiasettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdLiasettingsAccountIdRouteHandler: RouteHandler<
  typeof getMerchantIdLiasettingsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMerchantIdLiasettingsAccountIdRouteHandler: RouteHandler<
  typeof putMerchantIdLiasettingsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsRouteHandler: RouteHandler<
  typeof getMerchantIdLiasettingsAccountIdAccessiblegmbaccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdLiasettingsAccountIdRequestgmbaccessRouteHandler: RouteHandler<
  typeof postMerchantIdLiasettingsAccountIdRequestgmbaccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryRouteHandler: RouteHandler<
  typeof postMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdLiasettingsAccountIdSetinventoryverificationcontactRouteHandler: RouteHandler<
  typeof postMerchantIdLiasettingsAccountIdSetinventoryverificationcontactRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdLiasettingsAccountIdSetposdataproviderRouteHandler: RouteHandler<
  typeof postMerchantIdLiasettingsAccountIdSetposdataproviderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceRouteHandler: RouteHandler<
  typeof postMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceRouteHandler: RouteHandler<
  typeof postMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdOrderreportsDisbursementsRouteHandler: RouteHandler<
  typeof getMerchantIdOrderreportsDisbursementsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsRouteHandler: RouteHandler<
  typeof getMerchantIdOrderreportsDisbursementsDisbursementIdTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdOrderreturnsRouteHandler: RouteHandler<
  typeof getMerchantIdOrderreturnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrderreturnsCreateOrderReturnRouteHandler: RouteHandler<
  typeof postMerchantIdOrderreturnsCreateOrderReturnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdOrderreturnsReturnIdRouteHandler: RouteHandler<
  typeof getMerchantIdOrderreturnsReturnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrderreturnsReturnIdAcknowledgeRouteHandler: RouteHandler<
  typeof postMerchantIdOrderreturnsReturnIdAcknowledgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrderreturnsReturnIdLabelsRouteHandler: RouteHandler<
  typeof postMerchantIdOrderreturnsReturnIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrderreturnsReturnIdProcessRouteHandler: RouteHandler<
  typeof postMerchantIdOrderreturnsReturnIdProcessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdOrdersRouteHandler: RouteHandler<
  typeof getMerchantIdOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdOrdersOrderIdRouteHandler: RouteHandler<
  typeof getMerchantIdOrdersOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdAcknowledgeRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdAcknowledgeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdCancelRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdCancelLineItemRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdCancelLineItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdCaptureOrderRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdCaptureOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdInStoreRefundLineItemRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdInStoreRefundLineItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdRefunditemRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdRefunditemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdRefundorderRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdRefundorderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdRejectReturnLineItemRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdRejectReturnLineItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdReturnRefundLineItemRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdReturnRefundLineItemRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdSetLineItemMetadataRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdSetLineItemMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdShipLineItemsRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdShipLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdTestreturnRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdTestreturnRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdUpdateMerchantOrderIdRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdUpdateMerchantOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdersOrderIdUpdateShipmentRouteHandler: RouteHandler<
  typeof postMerchantIdOrdersOrderIdUpdateShipmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdOrdersbymerchantidMerchantOrderIdRouteHandler: RouteHandler<
  typeof getMerchantIdOrdersbymerchantidMerchantOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdOrdertrackingsignalsRouteHandler: RouteHandler<
  typeof postMerchantIdOrdertrackingsignalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdPosTargetMerchantIdInventoryRouteHandler: RouteHandler<
  typeof postMerchantIdPosTargetMerchantIdInventoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdPosTargetMerchantIdSaleRouteHandler: RouteHandler<
  typeof postMerchantIdPosTargetMerchantIdSaleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdPosTargetMerchantIdStoreRouteHandler: RouteHandler<
  typeof getMerchantIdPosTargetMerchantIdStoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdPosTargetMerchantIdStoreRouteHandler: RouteHandler<
  typeof postMerchantIdPosTargetMerchantIdStoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMerchantIdPosTargetMerchantIdStoreStoreCodeRouteHandler: RouteHandler<
  typeof deleteMerchantIdPosTargetMerchantIdStoreStoreCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdPosTargetMerchantIdStoreStoreCodeRouteHandler: RouteHandler<
  typeof getMerchantIdPosTargetMerchantIdStoreStoreCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdProductdeliverytimeRouteHandler: RouteHandler<
  typeof postMerchantIdProductdeliverytimeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMerchantIdProductdeliverytimeProductIdRouteHandler: RouteHandler<
  typeof deleteMerchantIdProductdeliverytimeProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdProductdeliverytimeProductIdRouteHandler: RouteHandler<
  typeof getMerchantIdProductdeliverytimeProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdProductsRouteHandler: RouteHandler<
  typeof getMerchantIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdProductsRouteHandler: RouteHandler<
  typeof postMerchantIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMerchantIdProductsProductIdRouteHandler: RouteHandler<
  typeof deleteMerchantIdProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdProductsProductIdRouteHandler: RouteHandler<
  typeof getMerchantIdProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMerchantIdProductsProductIdRouteHandler: RouteHandler<
  typeof patchMerchantIdProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdProductsProductIdLocalinventoryRouteHandler: RouteHandler<
  typeof postMerchantIdProductsProductIdLocalinventoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdProductsProductIdRegionalinventoryRouteHandler: RouteHandler<
  typeof postMerchantIdProductsProductIdRegionalinventoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdProductstatusesRouteHandler: RouteHandler<
  typeof getMerchantIdProductstatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdProductstatusesProductIdRouteHandler: RouteHandler<
  typeof getMerchantIdProductstatusesProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdProductstatusesProductIdRepricingreportsRouteHandler: RouteHandler<
  typeof getMerchantIdProductstatusesProductIdRepricingreportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdPromotionsRouteHandler: RouteHandler<
  typeof postMerchantIdPromotionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdPromotionsIdRouteHandler: RouteHandler<
  typeof getMerchantIdPromotionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdPubsubnotificationsettingsRouteHandler: RouteHandler<
  typeof getMerchantIdPubsubnotificationsettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMerchantIdPubsubnotificationsettingsRouteHandler: RouteHandler<
  typeof putMerchantIdPubsubnotificationsettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdQuotasRouteHandler: RouteHandler<
  typeof getMerchantIdQuotasRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdRecommendationsGenerateRouteHandler: RouteHandler<
  typeof getMerchantIdRecommendationsGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdRecommendationsReportInteractionRouteHandler: RouteHandler<
  typeof postMerchantIdRecommendationsReportInteractionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdRegionsRouteHandler: RouteHandler<
  typeof getMerchantIdRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdRegionsRouteHandler: RouteHandler<
  typeof postMerchantIdRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMerchantIdRegionsRegionIdRouteHandler: RouteHandler<
  typeof deleteMerchantIdRegionsRegionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdRegionsRegionIdRouteHandler: RouteHandler<
  typeof getMerchantIdRegionsRegionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMerchantIdRegionsRegionIdRouteHandler: RouteHandler<
  typeof patchMerchantIdRegionsRegionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdReportsSearchRouteHandler: RouteHandler<
  typeof postMerchantIdReportsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdRepricingrulesRouteHandler: RouteHandler<
  typeof getMerchantIdRepricingrulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdRepricingrulesRouteHandler: RouteHandler<
  typeof postMerchantIdRepricingrulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMerchantIdRepricingrulesRuleIdRouteHandler: RouteHandler<
  typeof deleteMerchantIdRepricingrulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdRepricingrulesRuleIdRouteHandler: RouteHandler<
  typeof getMerchantIdRepricingrulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMerchantIdRepricingrulesRuleIdRouteHandler: RouteHandler<
  typeof patchMerchantIdRepricingrulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdRepricingrulesRuleIdRepricingreportsRouteHandler: RouteHandler<
  typeof getMerchantIdRepricingrulesRuleIdRepricingreportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdReturnaddressRouteHandler: RouteHandler<
  typeof getMerchantIdReturnaddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdReturnaddressRouteHandler: RouteHandler<
  typeof postMerchantIdReturnaddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMerchantIdReturnaddressReturnAddressIdRouteHandler: RouteHandler<
  typeof deleteMerchantIdReturnaddressReturnAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdReturnaddressReturnAddressIdRouteHandler: RouteHandler<
  typeof getMerchantIdReturnaddressReturnAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdReturnpolicyRouteHandler: RouteHandler<
  typeof getMerchantIdReturnpolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdReturnpolicyRouteHandler: RouteHandler<
  typeof postMerchantIdReturnpolicyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMerchantIdReturnpolicyReturnPolicyIdRouteHandler: RouteHandler<
  typeof deleteMerchantIdReturnpolicyReturnPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdReturnpolicyReturnPolicyIdRouteHandler: RouteHandler<
  typeof getMerchantIdReturnpolicyReturnPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdReturnpolicyonlineRouteHandler: RouteHandler<
  typeof getMerchantIdReturnpolicyonlineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdReturnpolicyonlineRouteHandler: RouteHandler<
  typeof postMerchantIdReturnpolicyonlineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMerchantIdReturnpolicyonlineReturnPolicyIdRouteHandler: RouteHandler<
  typeof deleteMerchantIdReturnpolicyonlineReturnPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdReturnpolicyonlineReturnPolicyIdRouteHandler: RouteHandler<
  typeof getMerchantIdReturnpolicyonlineReturnPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMerchantIdReturnpolicyonlineReturnPolicyIdRouteHandler: RouteHandler<
  typeof patchMerchantIdReturnpolicyonlineReturnPolicyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdSettlementreportsRouteHandler: RouteHandler<
  typeof getMerchantIdSettlementreportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdSettlementreportsSettlementIdRouteHandler: RouteHandler<
  typeof getMerchantIdSettlementreportsSettlementIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdSettlementreportsSettlementIdTransactionsRouteHandler: RouteHandler<
  typeof getMerchantIdSettlementreportsSettlementIdTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdShippingsettingsRouteHandler: RouteHandler<
  typeof getMerchantIdShippingsettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdShippingsettingsAccountIdRouteHandler: RouteHandler<
  typeof getMerchantIdShippingsettingsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putMerchantIdShippingsettingsAccountIdRouteHandler: RouteHandler<
  typeof putMerchantIdShippingsettingsAccountIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdShoppingadsprogramRouteHandler: RouteHandler<
  typeof getMerchantIdShoppingadsprogramRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdShoppingadsprogramRequestreviewRouteHandler: RouteHandler<
  typeof postMerchantIdShoppingadsprogramRequestreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdSupportedCarriersRouteHandler: RouteHandler<
  typeof getMerchantIdSupportedCarriersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdSupportedHolidaysRouteHandler: RouteHandler<
  typeof getMerchantIdSupportedHolidaysRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdSupportedPickupServicesRouteHandler: RouteHandler<
  typeof getMerchantIdSupportedPickupServicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdTestordersRouteHandler: RouteHandler<
  typeof postMerchantIdTestordersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdTestordersOrderIdAdvanceRouteHandler: RouteHandler<
  typeof postMerchantIdTestordersOrderIdAdvanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postMerchantIdTestordersOrderIdCancelByCustomerRouteHandler: RouteHandler<
  typeof postMerchantIdTestordersOrderIdCancelByCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getMerchantIdTestordertemplatesTemplateNameRouteHandler: RouteHandler<
  typeof getMerchantIdTestordertemplatesTemplateNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

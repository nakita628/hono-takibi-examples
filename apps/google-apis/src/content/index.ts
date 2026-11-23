import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdLabelsLabelIdRoute,
  deleteAccountsAccountIdReturncarrierCarrierAccountIdRoute,
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
  getAccountsAccountIdLabelsRoute,
  getAccountsAccountIdReturncarrierRoute,
  getAccountsAuthinfoRoute,
  getCssGroupIdCssesCssDomainIdRoute,
  getCssGroupIdCssesRoute,
  getLiasettingsPosdataprovidersRoute,
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
  patchAccountsAccountIdLabelsLabelIdRoute,
  patchAccountsAccountIdReturncarrierCarrierAccountIdRoute,
  patchMerchantIdBuyongoogleprogramsRegionCodeRoute,
  patchMerchantIdConversionsourcesConversionSourceIdRoute,
  patchMerchantIdProductsProductIdRoute,
  patchMerchantIdRegionsRegionIdRoute,
  patchMerchantIdRepricingrulesRuleIdRoute,
  patchMerchantIdReturnpolicyonlineReturnPolicyIdRoute,
  postAccountsAccountIdCredentialsRoute,
  postAccountsAccountIdLabelsRoute,
  postAccountsAccountIdReturncarrierRoute,
  postAccountsBatchRoute,
  postAccountstatusesBatchRoute,
  postAccounttaxBatchRoute,
  postCssGroupIdCssesCssDomainIdUpdatelabelsRoute,
  postDatafeedsBatchRoute,
  postDatafeedstatusesBatchRoute,
  postLiasettingsBatchRoute,
  postLocalinventoryBatchRoute,
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
  postPosBatchRoute,
  postProductsBatchRoute,
  postProductstatusesBatchRoute,
  postRegionalinventoryBatchRoute,
  postReturnaddressBatchRoute,
  postReturnpolicyBatchRoute,
  postShippingsettingsBatchRoute,
  putMerchantIdAccountsAccountIdRoute,
  putMerchantIdAccounttaxAccountIdRoute,
  putMerchantIdDatafeedsDatafeedIdRoute,
  putMerchantIdLiasettingsAccountIdRoute,
  putMerchantIdPubsubnotificationsettingsRoute,
  putMerchantIdShippingsettingsAccountIdRoute,
} from './routes'
import {
  deleteAccountsAccountIdLabelsLabelIdRouteHandler,
  deleteAccountsAccountIdReturncarrierCarrierAccountIdRouteHandler,
  deleteMerchantIdAccountsAccountIdRouteHandler,
  deleteMerchantIdCollectionsCollectionIdRouteHandler,
  deleteMerchantIdConversionsourcesConversionSourceIdRouteHandler,
  deleteMerchantIdDatafeedsDatafeedIdRouteHandler,
  deleteMerchantIdPosTargetMerchantIdStoreStoreCodeRouteHandler,
  deleteMerchantIdProductdeliverytimeProductIdRouteHandler,
  deleteMerchantIdProductsProductIdRouteHandler,
  deleteMerchantIdRegionsRegionIdRouteHandler,
  deleteMerchantIdRepricingrulesRuleIdRouteHandler,
  deleteMerchantIdReturnaddressReturnAddressIdRouteHandler,
  deleteMerchantIdReturnpolicyonlineReturnPolicyIdRouteHandler,
  deleteMerchantIdReturnpolicyReturnPolicyIdRouteHandler,
  getAccountsAccountIdLabelsRouteHandler,
  getAccountsAccountIdReturncarrierRouteHandler,
  getAccountsAuthinfoRouteHandler,
  getCssGroupIdCssesCssDomainIdRouteHandler,
  getCssGroupIdCssesRouteHandler,
  getLiasettingsPosdataprovidersRouteHandler,
  getMerchantIdAccountsAccountIdListlinksRouteHandler,
  getMerchantIdAccountsAccountIdRouteHandler,
  getMerchantIdAccountsRouteHandler,
  getMerchantIdAccountstatusesAccountIdRouteHandler,
  getMerchantIdAccountstatusesRouteHandler,
  getMerchantIdAccounttaxAccountIdRouteHandler,
  getMerchantIdAccounttaxRouteHandler,
  getMerchantIdBuyongoogleprogramsRegionCodeRouteHandler,
  getMerchantIdCollectionsCollectionIdRouteHandler,
  getMerchantIdCollectionsRouteHandler,
  getMerchantIdCollectionstatusesCollectionIdRouteHandler,
  getMerchantIdCollectionstatusesRouteHandler,
  getMerchantIdConversionsourcesConversionSourceIdRouteHandler,
  getMerchantIdConversionsourcesRouteHandler,
  getMerchantIdDatafeedsDatafeedIdRouteHandler,
  getMerchantIdDatafeedsRouteHandler,
  getMerchantIdDatafeedstatusesDatafeedIdRouteHandler,
  getMerchantIdDatafeedstatusesRouteHandler,
  getMerchantIdFreelistingsprogramRouteHandler,
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
  getMerchantIdProductdeliverytimeProductIdRouteHandler,
  getMerchantIdProductsProductIdRouteHandler,
  getMerchantIdProductsRouteHandler,
  getMerchantIdProductstatusesProductIdRepricingreportsRouteHandler,
  getMerchantIdProductstatusesProductIdRouteHandler,
  getMerchantIdProductstatusesRouteHandler,
  getMerchantIdPromotionsIdRouteHandler,
  getMerchantIdPubsubnotificationsettingsRouteHandler,
  getMerchantIdQuotasRouteHandler,
  getMerchantIdRecommendationsGenerateRouteHandler,
  getMerchantIdRegionsRegionIdRouteHandler,
  getMerchantIdRegionsRouteHandler,
  getMerchantIdRepricingrulesRouteHandler,
  getMerchantIdRepricingrulesRuleIdRepricingreportsRouteHandler,
  getMerchantIdRepricingrulesRuleIdRouteHandler,
  getMerchantIdReturnaddressReturnAddressIdRouteHandler,
  getMerchantIdReturnaddressRouteHandler,
  getMerchantIdReturnpolicyonlineReturnPolicyIdRouteHandler,
  getMerchantIdReturnpolicyonlineRouteHandler,
  getMerchantIdReturnpolicyReturnPolicyIdRouteHandler,
  getMerchantIdReturnpolicyRouteHandler,
  getMerchantIdSettlementreportsRouteHandler,
  getMerchantIdSettlementreportsSettlementIdRouteHandler,
  getMerchantIdSettlementreportsSettlementIdTransactionsRouteHandler,
  getMerchantIdShippingsettingsAccountIdRouteHandler,
  getMerchantIdShippingsettingsRouteHandler,
  getMerchantIdShoppingadsprogramRouteHandler,
  getMerchantIdSupportedCarriersRouteHandler,
  getMerchantIdSupportedHolidaysRouteHandler,
  getMerchantIdSupportedPickupServicesRouteHandler,
  getMerchantIdTestordertemplatesTemplateNameRouteHandler,
  patchAccountsAccountIdLabelsLabelIdRouteHandler,
  patchAccountsAccountIdReturncarrierCarrierAccountIdRouteHandler,
  patchMerchantIdBuyongoogleprogramsRegionCodeRouteHandler,
  patchMerchantIdConversionsourcesConversionSourceIdRouteHandler,
  patchMerchantIdProductsProductIdRouteHandler,
  patchMerchantIdRegionsRegionIdRouteHandler,
  patchMerchantIdRepricingrulesRuleIdRouteHandler,
  patchMerchantIdReturnpolicyonlineReturnPolicyIdRouteHandler,
  postAccountsAccountIdCredentialsRouteHandler,
  postAccountsAccountIdLabelsRouteHandler,
  postAccountsAccountIdReturncarrierRouteHandler,
  postAccountsBatchRouteHandler,
  postAccountstatusesBatchRouteHandler,
  postAccounttaxBatchRouteHandler,
  postCssGroupIdCssesCssDomainIdUpdatelabelsRouteHandler,
  postDatafeedsBatchRouteHandler,
  postDatafeedstatusesBatchRouteHandler,
  postLiasettingsBatchRouteHandler,
  postLocalinventoryBatchRouteHandler,
  postMerchantIdAccountsAccountIdClaimwebsiteRouteHandler,
  postMerchantIdAccountsAccountIdLinkRouteHandler,
  postMerchantIdAccountsAccountIdRequestphoneverificationRouteHandler,
  postMerchantIdAccountsAccountIdUpdatelabelsRouteHandler,
  postMerchantIdAccountsAccountIdVerifyphonenumberRouteHandler,
  postMerchantIdAccountsRouteHandler,
  postMerchantIdBuyongoogleprogramsRegionCodeActivateRouteHandler,
  postMerchantIdBuyongoogleprogramsRegionCodeOnboardRouteHandler,
  postMerchantIdBuyongoogleprogramsRegionCodePauseRouteHandler,
  postMerchantIdBuyongoogleprogramsRegionCodeRequestreviewRouteHandler,
  postMerchantIdCollectionsRouteHandler,
  postMerchantIdConversionsourcesConversionSourceIdUndeleteRouteHandler,
  postMerchantIdConversionsourcesRouteHandler,
  postMerchantIdDatafeedsDatafeedIdFetchNowRouteHandler,
  postMerchantIdDatafeedsRouteHandler,
  postMerchantIdFreelistingsprogramRequestreviewRouteHandler,
  postMerchantIdLiasettingsAccountIdRequestgmbaccessRouteHandler,
  postMerchantIdLiasettingsAccountIdRequestinventoryverificationCountryRouteHandler,
  postMerchantIdLiasettingsAccountIdSetinventoryverificationcontactRouteHandler,
  postMerchantIdLiasettingsAccountIdSetposdataproviderRouteHandler,
  postMerchantIdOrderinvoicesOrderIdCreateChargeInvoiceRouteHandler,
  postMerchantIdOrderinvoicesOrderIdCreateRefundInvoiceRouteHandler,
  postMerchantIdOrderreturnsCreateOrderReturnRouteHandler,
  postMerchantIdOrderreturnsReturnIdAcknowledgeRouteHandler,
  postMerchantIdOrderreturnsReturnIdLabelsRouteHandler,
  postMerchantIdOrderreturnsReturnIdProcessRouteHandler,
  postMerchantIdOrdersOrderIdAcknowledgeRouteHandler,
  postMerchantIdOrdersOrderIdCancelLineItemRouteHandler,
  postMerchantIdOrdersOrderIdCancelRouteHandler,
  postMerchantIdOrdersOrderIdCaptureOrderRouteHandler,
  postMerchantIdOrdersOrderIdInStoreRefundLineItemRouteHandler,
  postMerchantIdOrdersOrderIdRefunditemRouteHandler,
  postMerchantIdOrdersOrderIdRefundorderRouteHandler,
  postMerchantIdOrdersOrderIdRejectReturnLineItemRouteHandler,
  postMerchantIdOrdersOrderIdReturnRefundLineItemRouteHandler,
  postMerchantIdOrdersOrderIdSetLineItemMetadataRouteHandler,
  postMerchantIdOrdersOrderIdShipLineItemsRouteHandler,
  postMerchantIdOrdersOrderIdTestreturnRouteHandler,
  postMerchantIdOrdersOrderIdUpdateLineItemShippingDetailsRouteHandler,
  postMerchantIdOrdersOrderIdUpdateMerchantOrderIdRouteHandler,
  postMerchantIdOrdersOrderIdUpdateShipmentRouteHandler,
  postMerchantIdOrdertrackingsignalsRouteHandler,
  postMerchantIdPosTargetMerchantIdInventoryRouteHandler,
  postMerchantIdPosTargetMerchantIdSaleRouteHandler,
  postMerchantIdPosTargetMerchantIdStoreRouteHandler,
  postMerchantIdProductdeliverytimeRouteHandler,
  postMerchantIdProductsProductIdLocalinventoryRouteHandler,
  postMerchantIdProductsProductIdRegionalinventoryRouteHandler,
  postMerchantIdProductsRouteHandler,
  postMerchantIdPromotionsRouteHandler,
  postMerchantIdRecommendationsReportInteractionRouteHandler,
  postMerchantIdRegionsRouteHandler,
  postMerchantIdReportsSearchRouteHandler,
  postMerchantIdRepricingrulesRouteHandler,
  postMerchantIdReturnaddressRouteHandler,
  postMerchantIdReturnpolicyonlineRouteHandler,
  postMerchantIdReturnpolicyRouteHandler,
  postMerchantIdShoppingadsprogramRequestreviewRouteHandler,
  postMerchantIdTestordersOrderIdAdvanceRouteHandler,
  postMerchantIdTestordersOrderIdCancelByCustomerRouteHandler,
  postMerchantIdTestordersRouteHandler,
  postPosBatchRouteHandler,
  postProductsBatchRouteHandler,
  postProductstatusesBatchRouteHandler,
  postRegionalinventoryBatchRouteHandler,
  postReturnaddressBatchRouteHandler,
  postReturnpolicyBatchRouteHandler,
  postShippingsettingsBatchRouteHandler,
  putMerchantIdAccountsAccountIdRouteHandler,
  putMerchantIdAccounttaxAccountIdRouteHandler,
  putMerchantIdDatafeedsDatafeedIdRouteHandler,
  putMerchantIdLiasettingsAccountIdRouteHandler,
  putMerchantIdPubsubnotificationsettingsRouteHandler,
  putMerchantIdShippingsettingsAccountIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAccountsAuthinfoRoute, getAccountsAuthinfoRouteHandler)
  .openapi(postAccountsBatchRoute, postAccountsBatchRouteHandler)
  .openapi(postAccountsAccountIdCredentialsRoute, postAccountsAccountIdCredentialsRouteHandler)
  .openapi(getAccountsAccountIdLabelsRoute, getAccountsAccountIdLabelsRouteHandler)
  .openapi(postAccountsAccountIdLabelsRoute, postAccountsAccountIdLabelsRouteHandler)
  .openapi(
    deleteAccountsAccountIdLabelsLabelIdRoute,
    deleteAccountsAccountIdLabelsLabelIdRouteHandler,
  )
  .openapi(
    patchAccountsAccountIdLabelsLabelIdRoute,
    patchAccountsAccountIdLabelsLabelIdRouteHandler,
  )
  .openapi(getAccountsAccountIdReturncarrierRoute, getAccountsAccountIdReturncarrierRouteHandler)
  .openapi(postAccountsAccountIdReturncarrierRoute, postAccountsAccountIdReturncarrierRouteHandler)
  .openapi(
    deleteAccountsAccountIdReturncarrierCarrierAccountIdRoute,
    deleteAccountsAccountIdReturncarrierCarrierAccountIdRouteHandler,
  )
  .openapi(
    patchAccountsAccountIdReturncarrierCarrierAccountIdRoute,
    patchAccountsAccountIdReturncarrierCarrierAccountIdRouteHandler,
  )
  .openapi(postAccountstatusesBatchRoute, postAccountstatusesBatchRouteHandler)
  .openapi(postAccounttaxBatchRoute, postAccounttaxBatchRouteHandler)
  .openapi(postDatafeedsBatchRoute, postDatafeedsBatchRouteHandler)
  .openapi(postDatafeedstatusesBatchRoute, postDatafeedstatusesBatchRouteHandler)
  .openapi(postLiasettingsBatchRoute, postLiasettingsBatchRouteHandler)
  .openapi(getLiasettingsPosdataprovidersRoute, getLiasettingsPosdataprovidersRouteHandler)
  .openapi(postLocalinventoryBatchRoute, postLocalinventoryBatchRouteHandler)
  .openapi(postPosBatchRoute, postPosBatchRouteHandler)
  .openapi(postProductsBatchRoute, postProductsBatchRouteHandler)
  .openapi(postProductstatusesBatchRoute, postProductstatusesBatchRouteHandler)
  .openapi(postRegionalinventoryBatchRoute, postRegionalinventoryBatchRouteHandler)
  .openapi(postReturnaddressBatchRoute, postReturnaddressBatchRouteHandler)
  .openapi(postReturnpolicyBatchRoute, postReturnpolicyBatchRouteHandler)
  .openapi(postShippingsettingsBatchRoute, postShippingsettingsBatchRouteHandler)
  .openapi(getCssGroupIdCssesRoute, getCssGroupIdCssesRouteHandler)
  .openapi(getCssGroupIdCssesCssDomainIdRoute, getCssGroupIdCssesCssDomainIdRouteHandler)
  .openapi(
    postCssGroupIdCssesCssDomainIdUpdatelabelsRoute,
    postCssGroupIdCssesCssDomainIdUpdatelabelsRouteHandler,
  )
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
  .openapi(
    getMerchantIdAccountsAccountIdListlinksRoute,
    getMerchantIdAccountsAccountIdListlinksRouteHandler,
  )
  .openapi(
    postMerchantIdAccountsAccountIdRequestphoneverificationRoute,
    postMerchantIdAccountsAccountIdRequestphoneverificationRouteHandler,
  )
  .openapi(
    postMerchantIdAccountsAccountIdUpdatelabelsRoute,
    postMerchantIdAccountsAccountIdUpdatelabelsRouteHandler,
  )
  .openapi(
    postMerchantIdAccountsAccountIdVerifyphonenumberRoute,
    postMerchantIdAccountsAccountIdVerifyphonenumberRouteHandler,
  )
  .openapi(getMerchantIdAccountstatusesRoute, getMerchantIdAccountstatusesRouteHandler)
  .openapi(
    getMerchantIdAccountstatusesAccountIdRoute,
    getMerchantIdAccountstatusesAccountIdRouteHandler,
  )
  .openapi(getMerchantIdAccounttaxRoute, getMerchantIdAccounttaxRouteHandler)
  .openapi(getMerchantIdAccounttaxAccountIdRoute, getMerchantIdAccounttaxAccountIdRouteHandler)
  .openapi(putMerchantIdAccounttaxAccountIdRoute, putMerchantIdAccounttaxAccountIdRouteHandler)
  .openapi(
    getMerchantIdBuyongoogleprogramsRegionCodeRoute,
    getMerchantIdBuyongoogleprogramsRegionCodeRouteHandler,
  )
  .openapi(
    patchMerchantIdBuyongoogleprogramsRegionCodeRoute,
    patchMerchantIdBuyongoogleprogramsRegionCodeRouteHandler,
  )
  .openapi(
    postMerchantIdBuyongoogleprogramsRegionCodeActivateRoute,
    postMerchantIdBuyongoogleprogramsRegionCodeActivateRouteHandler,
  )
  .openapi(
    postMerchantIdBuyongoogleprogramsRegionCodeOnboardRoute,
    postMerchantIdBuyongoogleprogramsRegionCodeOnboardRouteHandler,
  )
  .openapi(
    postMerchantIdBuyongoogleprogramsRegionCodePauseRoute,
    postMerchantIdBuyongoogleprogramsRegionCodePauseRouteHandler,
  )
  .openapi(
    postMerchantIdBuyongoogleprogramsRegionCodeRequestreviewRoute,
    postMerchantIdBuyongoogleprogramsRegionCodeRequestreviewRouteHandler,
  )
  .openapi(getMerchantIdCollectionsRoute, getMerchantIdCollectionsRouteHandler)
  .openapi(postMerchantIdCollectionsRoute, postMerchantIdCollectionsRouteHandler)
  .openapi(
    deleteMerchantIdCollectionsCollectionIdRoute,
    deleteMerchantIdCollectionsCollectionIdRouteHandler,
  )
  .openapi(
    getMerchantIdCollectionsCollectionIdRoute,
    getMerchantIdCollectionsCollectionIdRouteHandler,
  )
  .openapi(getMerchantIdCollectionstatusesRoute, getMerchantIdCollectionstatusesRouteHandler)
  .openapi(
    getMerchantIdCollectionstatusesCollectionIdRoute,
    getMerchantIdCollectionstatusesCollectionIdRouteHandler,
  )
  .openapi(getMerchantIdConversionsourcesRoute, getMerchantIdConversionsourcesRouteHandler)
  .openapi(postMerchantIdConversionsourcesRoute, postMerchantIdConversionsourcesRouteHandler)
  .openapi(
    deleteMerchantIdConversionsourcesConversionSourceIdRoute,
    deleteMerchantIdConversionsourcesConversionSourceIdRouteHandler,
  )
  .openapi(
    getMerchantIdConversionsourcesConversionSourceIdRoute,
    getMerchantIdConversionsourcesConversionSourceIdRouteHandler,
  )
  .openapi(
    patchMerchantIdConversionsourcesConversionSourceIdRoute,
    patchMerchantIdConversionsourcesConversionSourceIdRouteHandler,
  )
  .openapi(
    postMerchantIdConversionsourcesConversionSourceIdUndeleteRoute,
    postMerchantIdConversionsourcesConversionSourceIdUndeleteRouteHandler,
  )
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
  .openapi(getMerchantIdFreelistingsprogramRoute, getMerchantIdFreelistingsprogramRouteHandler)
  .openapi(
    postMerchantIdFreelistingsprogramRequestreviewRoute,
    postMerchantIdFreelistingsprogramRequestreviewRouteHandler,
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
  .openapi(
    postMerchantIdOrderreturnsCreateOrderReturnRoute,
    postMerchantIdOrderreturnsCreateOrderReturnRouteHandler,
  )
  .openapi(getMerchantIdOrderreturnsReturnIdRoute, getMerchantIdOrderreturnsReturnIdRouteHandler)
  .openapi(
    postMerchantIdOrderreturnsReturnIdAcknowledgeRoute,
    postMerchantIdOrderreturnsReturnIdAcknowledgeRouteHandler,
  )
  .openapi(
    postMerchantIdOrderreturnsReturnIdLabelsRoute,
    postMerchantIdOrderreturnsReturnIdLabelsRouteHandler,
  )
  .openapi(
    postMerchantIdOrderreturnsReturnIdProcessRoute,
    postMerchantIdOrderreturnsReturnIdProcessRouteHandler,
  )
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
    postMerchantIdOrdersOrderIdCaptureOrderRoute,
    postMerchantIdOrdersOrderIdCaptureOrderRouteHandler,
  )
  .openapi(
    postMerchantIdOrdersOrderIdInStoreRefundLineItemRoute,
    postMerchantIdOrdersOrderIdInStoreRefundLineItemRouteHandler,
  )
  .openapi(
    postMerchantIdOrdersOrderIdRefunditemRoute,
    postMerchantIdOrdersOrderIdRefunditemRouteHandler,
  )
  .openapi(
    postMerchantIdOrdersOrderIdRefundorderRoute,
    postMerchantIdOrdersOrderIdRefundorderRouteHandler,
  )
  .openapi(
    postMerchantIdOrdersOrderIdRejectReturnLineItemRoute,
    postMerchantIdOrdersOrderIdRejectReturnLineItemRouteHandler,
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
  .openapi(postMerchantIdOrdertrackingsignalsRoute, postMerchantIdOrdertrackingsignalsRouteHandler)
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
  .openapi(postMerchantIdProductdeliverytimeRoute, postMerchantIdProductdeliverytimeRouteHandler)
  .openapi(
    deleteMerchantIdProductdeliverytimeProductIdRoute,
    deleteMerchantIdProductdeliverytimeProductIdRouteHandler,
  )
  .openapi(
    getMerchantIdProductdeliverytimeProductIdRoute,
    getMerchantIdProductdeliverytimeProductIdRouteHandler,
  )
  .openapi(getMerchantIdProductsRoute, getMerchantIdProductsRouteHandler)
  .openapi(postMerchantIdProductsRoute, postMerchantIdProductsRouteHandler)
  .openapi(deleteMerchantIdProductsProductIdRoute, deleteMerchantIdProductsProductIdRouteHandler)
  .openapi(getMerchantIdProductsProductIdRoute, getMerchantIdProductsProductIdRouteHandler)
  .openapi(patchMerchantIdProductsProductIdRoute, patchMerchantIdProductsProductIdRouteHandler)
  .openapi(
    postMerchantIdProductsProductIdLocalinventoryRoute,
    postMerchantIdProductsProductIdLocalinventoryRouteHandler,
  )
  .openapi(
    postMerchantIdProductsProductIdRegionalinventoryRoute,
    postMerchantIdProductsProductIdRegionalinventoryRouteHandler,
  )
  .openapi(getMerchantIdProductstatusesRoute, getMerchantIdProductstatusesRouteHandler)
  .openapi(
    getMerchantIdProductstatusesProductIdRoute,
    getMerchantIdProductstatusesProductIdRouteHandler,
  )
  .openapi(
    getMerchantIdProductstatusesProductIdRepricingreportsRoute,
    getMerchantIdProductstatusesProductIdRepricingreportsRouteHandler,
  )
  .openapi(postMerchantIdPromotionsRoute, postMerchantIdPromotionsRouteHandler)
  .openapi(getMerchantIdPromotionsIdRoute, getMerchantIdPromotionsIdRouteHandler)
  .openapi(
    getMerchantIdPubsubnotificationsettingsRoute,
    getMerchantIdPubsubnotificationsettingsRouteHandler,
  )
  .openapi(
    putMerchantIdPubsubnotificationsettingsRoute,
    putMerchantIdPubsubnotificationsettingsRouteHandler,
  )
  .openapi(getMerchantIdQuotasRoute, getMerchantIdQuotasRouteHandler)
  .openapi(
    getMerchantIdRecommendationsGenerateRoute,
    getMerchantIdRecommendationsGenerateRouteHandler,
  )
  .openapi(
    postMerchantIdRecommendationsReportInteractionRoute,
    postMerchantIdRecommendationsReportInteractionRouteHandler,
  )
  .openapi(getMerchantIdRegionsRoute, getMerchantIdRegionsRouteHandler)
  .openapi(postMerchantIdRegionsRoute, postMerchantIdRegionsRouteHandler)
  .openapi(deleteMerchantIdRegionsRegionIdRoute, deleteMerchantIdRegionsRegionIdRouteHandler)
  .openapi(getMerchantIdRegionsRegionIdRoute, getMerchantIdRegionsRegionIdRouteHandler)
  .openapi(patchMerchantIdRegionsRegionIdRoute, patchMerchantIdRegionsRegionIdRouteHandler)
  .openapi(postMerchantIdReportsSearchRoute, postMerchantIdReportsSearchRouteHandler)
  .openapi(getMerchantIdRepricingrulesRoute, getMerchantIdRepricingrulesRouteHandler)
  .openapi(postMerchantIdRepricingrulesRoute, postMerchantIdRepricingrulesRouteHandler)
  .openapi(
    deleteMerchantIdRepricingrulesRuleIdRoute,
    deleteMerchantIdRepricingrulesRuleIdRouteHandler,
  )
  .openapi(getMerchantIdRepricingrulesRuleIdRoute, getMerchantIdRepricingrulesRuleIdRouteHandler)
  .openapi(
    patchMerchantIdRepricingrulesRuleIdRoute,
    patchMerchantIdRepricingrulesRuleIdRouteHandler,
  )
  .openapi(
    getMerchantIdRepricingrulesRuleIdRepricingreportsRoute,
    getMerchantIdRepricingrulesRuleIdRepricingreportsRouteHandler,
  )
  .openapi(getMerchantIdReturnaddressRoute, getMerchantIdReturnaddressRouteHandler)
  .openapi(postMerchantIdReturnaddressRoute, postMerchantIdReturnaddressRouteHandler)
  .openapi(
    deleteMerchantIdReturnaddressReturnAddressIdRoute,
    deleteMerchantIdReturnaddressReturnAddressIdRouteHandler,
  )
  .openapi(
    getMerchantIdReturnaddressReturnAddressIdRoute,
    getMerchantIdReturnaddressReturnAddressIdRouteHandler,
  )
  .openapi(getMerchantIdReturnpolicyRoute, getMerchantIdReturnpolicyRouteHandler)
  .openapi(postMerchantIdReturnpolicyRoute, postMerchantIdReturnpolicyRouteHandler)
  .openapi(
    deleteMerchantIdReturnpolicyReturnPolicyIdRoute,
    deleteMerchantIdReturnpolicyReturnPolicyIdRouteHandler,
  )
  .openapi(
    getMerchantIdReturnpolicyReturnPolicyIdRoute,
    getMerchantIdReturnpolicyReturnPolicyIdRouteHandler,
  )
  .openapi(getMerchantIdReturnpolicyonlineRoute, getMerchantIdReturnpolicyonlineRouteHandler)
  .openapi(postMerchantIdReturnpolicyonlineRoute, postMerchantIdReturnpolicyonlineRouteHandler)
  .openapi(
    deleteMerchantIdReturnpolicyonlineReturnPolicyIdRoute,
    deleteMerchantIdReturnpolicyonlineReturnPolicyIdRouteHandler,
  )
  .openapi(
    getMerchantIdReturnpolicyonlineReturnPolicyIdRoute,
    getMerchantIdReturnpolicyonlineReturnPolicyIdRouteHandler,
  )
  .openapi(
    patchMerchantIdReturnpolicyonlineReturnPolicyIdRoute,
    patchMerchantIdReturnpolicyonlineReturnPolicyIdRouteHandler,
  )
  .openapi(getMerchantIdSettlementreportsRoute, getMerchantIdSettlementreportsRouteHandler)
  .openapi(
    getMerchantIdSettlementreportsSettlementIdRoute,
    getMerchantIdSettlementreportsSettlementIdRouteHandler,
  )
  .openapi(
    getMerchantIdSettlementreportsSettlementIdTransactionsRoute,
    getMerchantIdSettlementreportsSettlementIdTransactionsRouteHandler,
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
  .openapi(getMerchantIdShoppingadsprogramRoute, getMerchantIdShoppingadsprogramRouteHandler)
  .openapi(
    postMerchantIdShoppingadsprogramRequestreviewRoute,
    postMerchantIdShoppingadsprogramRequestreviewRouteHandler,
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

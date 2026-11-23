import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute,
  deleteV2UserAnalyticsStoreIdRulesRuleIdRoute,
  deleteV2UserCatalogsStoreIdAutoImportRoute,
  deleteV2UserCatalogsStoreIdCustomColumnsColumnIdRoute,
  deleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRoute,
  deleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnIdRoute,
  deleteV2UserChannelCatalogsChannelCatalogIdRoute,
  deleteV2UserCustomerContractsNextRoute,
  deleteV2UserCustomerStoresStoreIdRoute,
  deleteV2UserCustomerStoresStoreIdSharesUserIdRoute,
  deleteV2UserMarketplacesOrdersSubscriptionsIdRoute,
  getV2PublicChannelsCountryIsoCodeRoute,
  getV2PublicChannelsIndexRoute,
  getV2PublicLovIndexRoute,
  getV2PublicLovListNameRoute,
  getV2UserAnalyticsIndexRoute,
  getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute,
  getV2UserAnalyticsStoreIdReportsFiltersRoute,
  getV2UserAnalyticsStoreIdRoute,
  getV2UserAnalyticsStoreIdRulesExecutionsRoute,
  getV2UserAnalyticsStoreIdRulesRoute,
  getV2UserAnalyticsStoreIdRulesRuleIdRoute,
  getV2UserAnalyticsStoreIdTrackingClicksRoute,
  getV2UserAnalyticsStoreIdTrackingExternalordersRoute,
  getV2UserAnalyticsStoreIdTrackingOrdersRoute,
  getV2UserAnalyticsStoreIdTrackingStatusRoute,
  getV2UserAnalyticsTrackingStatusRoute,
  getV2UserCatalogsBeezupColumnsRoute,
  getV2UserCatalogsImportationsRoute,
  getV2UserCatalogsIndexRoute,
  getV2UserCatalogsStoreIdAutoImportRoute,
  getV2UserCatalogsStoreIdCatalogColumnsRoute,
  getV2UserCatalogsStoreIdCategoriesRoute,
  getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRoute,
  getV2UserCatalogsStoreIdCustomColumnsRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdReportRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdRoute,
  getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionRoute,
  getV2UserCatalogsStoreIdImportationsRoute,
  getV2UserCatalogsStoreIdInputConfigurationRoute,
  getV2UserCatalogsStoreIdProductsProductIdRoute,
  getV2UserCatalogsStoreIdProductsRandomRoute,
  getV2UserCatalogsStoreIdProductsRoute,
  getV2UserCatalogsStoreIdRoute,
  getV2UserChannelCatalogsChannelCatalogIdCategoriesRoute,
  getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRoute,
  getV2UserChannelCatalogsChannelCatalogIdExportationsCacheRoute,
  getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryRoute,
  getV2UserChannelCatalogsChannelCatalogIdProductsCountersRoute,
  getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRoute,
  getV2UserChannelCatalogsChannelCatalogIdProductsProductIdRoute,
  getV2UserChannelCatalogsChannelCatalogIdRoute,
  getV2UserChannelCatalogsFilterOperatorsRoute,
  getV2UserChannelCatalogsIndexRoute,
  getV2UserChannelsChannelIdCategoriesRoute,
  getV2UserChannelsChannelIdRoute,
  getV2UserChannelsIndexRoute,
  getV2UserCustomerAccountCreditCardInfoRoute,
  getV2UserCustomerAccountProfilePictureInfoRoute,
  getV2UserCustomerAccountRoute,
  getV2UserCustomerBillingPeriodsRoute,
  getV2UserCustomerContractsRoute,
  getV2UserCustomerFriendsUserIdRoute,
  getV2UserCustomerIndexRoute,
  getV2UserCustomerInvoicesRoute,
  getV2UserCustomerOffersRoute,
  getV2UserCustomerStoresRoute,
  getV2UserCustomerStoresStoreIdAlertsRoute,
  getV2UserCustomerStoresStoreIdRightsRoute,
  getV2UserCustomerStoresStoreIdRoute,
  getV2UserCustomerStoresStoreIdSharesRoute,
  getV2UserCustomerZendeskTokenRoute,
  getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdRoute,
  getV2UserLegacyTrackingChannelCatalogsIndexRoute,
  getV2UserLovIndexRoute,
  getV2UserLovListNameRoute,
  getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesRoute,
  getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRoute,
  getV2UserMarketplacesChannelcatalogsIndexRoute,
  getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryRoute,
  getV2UserMarketplacesOrdersAutomaticTransitionsRoute,
  getV2UserMarketplacesOrdersExportationsRoute,
  getV2UserMarketplacesOrdersIndexRoute,
  getV2UserMarketplacesOrdersInvoicesSettingsDesignRoute,
  getV2UserMarketplacesOrdersInvoicesSettingsGeneralRoute,
  getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryRoute,
  getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute,
  getV2UserMarketplacesOrdersStatusRoute,
  getV2UserMarketplacesOrdersSubscriptionsIdReportingRoute,
  getV2UserMarketplacesOrdersSubscriptionsIdRoute,
  getV2UserMarketplacesOrdersSubscriptionsIndexRoute,
  headV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute,
  patchV2UserAnalyticsStoreIdRulesRuleIdRoute,
  patchV2UserCustomerStoresStoreIdRoute,
  postV2PublicSecurityLoginRoute,
  postV2PublicSecurityLostpasswordRoute,
  postV2PublicSecurityRegisterRoute,
  postV2UserAnalyticsReportsBydayRoute,
  postV2UserAnalyticsStoreIdOptimisationsActionNameRoute,
  postV2UserAnalyticsStoreIdOptimisationsAllActionNameRoute,
  postV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionNameRoute,
  postV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionNameRoute,
  postV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionNameRoute,
  postV2UserAnalyticsStoreIdOptimisationsCopyRoute,
  postV2UserAnalyticsStoreIdReportsBycategoryRoute,
  postV2UserAnalyticsStoreIdReportsBychannelRoute,
  postV2UserAnalyticsStoreIdReportsBydayRoute,
  postV2UserAnalyticsStoreIdReportsByproductRoute,
  postV2UserAnalyticsStoreIdRulesRoute,
  postV2UserAnalyticsStoreIdRulesRuleIdDisableRoute,
  postV2UserAnalyticsStoreIdRulesRuleIdEnableRoute,
  postV2UserAnalyticsStoreIdRulesRuleIdMovedownRoute,
  postV2UserAnalyticsStoreIdRulesRuleIdMoveupRoute,
  postV2UserAnalyticsStoreIdRulesRuleIdRunRoute,
  postV2UserAnalyticsStoreIdRulesRunRoute,
  postV2UserCatalogsStoreIdAutoImportActivateRoute,
  postV2UserCatalogsStoreIdAutoImportPauseRoute,
  postV2UserCatalogsStoreIdAutoImportResumeRoute,
  postV2UserCatalogsStoreIdAutoImportSchedulingIntervalRoute,
  postV2UserCatalogsStoreIdAutoImportSchedulingSchedulesRoute,
  postV2UserCatalogsStoreIdAutoImportStartRoute,
  postV2UserCatalogsStoreIdCatalogColumnsColumnIdRenameRoute,
  postV2UserCatalogsStoreIdCustomColumnsColumnIdRenameRoute,
  postV2UserCatalogsStoreIdCustomColumnsComputeExpressionRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCancelRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnoreRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMapRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattendRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmapRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCommitColumnsRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCommitRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumnsRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMapRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmapRoute,
  postV2UserCatalogsStoreIdImportationsExecutionIdProductsListRoute,
  postV2UserCatalogsStoreIdImportationsStartRoute,
  postV2UserCatalogsStoreIdProductsListRoute,
  postV2UserChannelCatalogsChannelCatalogIdCategoriesConfigureRoute,
  postV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMappingRoute,
  postV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMappingRoute,
  postV2UserChannelCatalogsChannelCatalogIdDisableRoute,
  postV2UserChannelCatalogsChannelCatalogIdEnableRoute,
  postV2UserChannelCatalogsChannelCatalogIdExportationsCacheClearRoute,
  postV2UserChannelCatalogsChannelCatalogIdProductsExportRoute,
  postV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisableRoute,
  postV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRoute,
  postV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenableRoute,
  postV2UserChannelCatalogsChannelCatalogIdProductsRoute,
  postV2UserChannelCatalogsIndexRoute,
  postV2UserChannelCatalogsProductsRoute,
  postV2UserChannelsChannelIdColumnsRoute,
  postV2UserCustomerAccountActivateRoute,
  postV2UserCustomerAccountChangeEmailRoute,
  postV2UserCustomerAccountChangePasswordRoute,
  postV2UserCustomerAccountResendEmailActivationRoute,
  postV2UserCustomerContractsCurrentDisableAutoRenewalRoute,
  postV2UserCustomerContractsCurrentReenableAutoRenewalRoute,
  postV2UserCustomerContractsRoute,
  postV2UserCustomerOffersRoute,
  postV2UserCustomerSecurityLogoutRoute,
  postV2UserCustomerStoresRoute,
  postV2UserCustomerStoresStoreIdAlertsRoute,
  postV2UserCustomerStoresStoreIdSharesRoute,
  postV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrateRoute,
  postV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRoute,
  postV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublishRoute,
  postV2UserMarketplacesOrdersAutomaticTransitionsRoute,
  postV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderTypeRoute,
  postV2UserMarketplacesOrdersBatchesClearMerchantOrderInfosRoute,
  postV2UserMarketplacesOrdersBatchesSetMerchantOrderInfosRoute,
  postV2UserMarketplacesOrdersExportationsRoute,
  postV2UserMarketplacesOrdersHarvestRoute,
  postV2UserMarketplacesOrdersInvoicesGenerateRoute,
  postV2UserMarketplacesOrdersInvoicesGetPdfInvoiceRoute,
  postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerateRoute,
  postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreviewRoute,
  postV2UserMarketplacesOrdersInvoicesSettingsDesignPreviewRoute,
  postV2UserMarketplacesOrdersListFullRoute,
  postV2UserMarketplacesOrdersListLightRoute,
  postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeRoute,
  postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoRoute,
  postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestRoute,
  postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoRoute,
  postV2UserMarketplacesOrdersSubscriptionsIdActivateRoute,
  postV2UserMarketplacesOrdersSubscriptionsIdDeactivateRoute,
  postV2UserMarketplacesOrdersSubscriptionsIdRetryRoute,
  postV2UserMarketplacesOrdersSubscriptionsIdRoute,
  putV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute,
  putV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRoute,
  putV2UserCatalogsStoreIdCustomColumnsColumnIdRoute,
  putV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRoute,
  putV2UserChannelCatalogsChannelCatalogIdColumnMappingsRoute,
  putV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRoute,
  putV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesRoute,
  putV2UserChannelCatalogsChannelCatalogIdSettingsCostRoute,
  putV2UserChannelCatalogsChannelCatalogIdSettingsGeneralRoute,
  putV2UserCustomerAccountCompanyInfoRoute,
  putV2UserCustomerAccountCreditCardInfoRoute,
  putV2UserCustomerAccountPersonalInfoRoute,
  putV2UserCustomerAccountProfilePictureInfoRoute,
  putV2UserMarketplacesOrdersInvoicesSettingsDesignRoute,
  putV2UserMarketplacesOrdersInvoicesSettingsGeneralRoute,
} from '../routes'

export const getV2PublicChannelsIndexRouteHandler: RouteHandler<
  typeof getV2PublicChannelsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PublicChannelsCountryIsoCodeRouteHandler: RouteHandler<
  typeof getV2PublicChannelsCountryIsoCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PublicLovIndexRouteHandler: RouteHandler<
  typeof getV2PublicLovIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2PublicLovListNameRouteHandler: RouteHandler<
  typeof getV2PublicLovListNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PublicSecurityLoginRouteHandler: RouteHandler<
  typeof postV2PublicSecurityLoginRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PublicSecurityLostpasswordRouteHandler: RouteHandler<
  typeof postV2PublicSecurityLostpasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2PublicSecurityRegisterRouteHandler: RouteHandler<
  typeof postV2PublicSecurityRegisterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserAnalyticsIndexRouteHandler: RouteHandler<
  typeof getV2UserAnalyticsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsReportsBydayRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsReportsBydayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserAnalyticsTrackingStatusRouteHandler: RouteHandler<
  typeof getV2UserAnalyticsTrackingStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserAnalyticsStoreIdRouteHandler: RouteHandler<
  typeof getV2UserAnalyticsStoreIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdOptimisationsAllActionNameRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdOptimisationsAllActionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionNameRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionNameRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionNameRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdOptimisationsCopyRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdOptimisationsCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdOptimisationsActionNameRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdOptimisationsActionNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdReportsBycategoryRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdReportsBycategoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdReportsBychannelRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdReportsBychannelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdReportsBydayRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdReportsBydayRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdReportsByproductRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdReportsByproductRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserAnalyticsStoreIdReportsFiltersRouteHandler: RouteHandler<
  typeof getV2UserAnalyticsStoreIdReportsFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRouteHandler: RouteHandler<
  typeof deleteV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRouteHandler: RouteHandler<
  typeof getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRouteHandler: RouteHandler<
  typeof putV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserAnalyticsStoreIdRulesRouteHandler: RouteHandler<
  typeof getV2UserAnalyticsStoreIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdRulesRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserAnalyticsStoreIdRulesExecutionsRouteHandler: RouteHandler<
  typeof getV2UserAnalyticsStoreIdRulesExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdRulesRunRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdRulesRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2UserAnalyticsStoreIdRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteV2UserAnalyticsStoreIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserAnalyticsStoreIdRulesRuleIdRouteHandler: RouteHandler<
  typeof getV2UserAnalyticsStoreIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2UserAnalyticsStoreIdRulesRuleIdRouteHandler: RouteHandler<
  typeof patchV2UserAnalyticsStoreIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdRulesRuleIdDisableRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdRulesRuleIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdRulesRuleIdEnableRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdRulesRuleIdEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdRulesRuleIdMovedownRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdRulesRuleIdMovedownRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdRulesRuleIdMoveupRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdRulesRuleIdMoveupRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserAnalyticsStoreIdRulesRuleIdRunRouteHandler: RouteHandler<
  typeof postV2UserAnalyticsStoreIdRulesRuleIdRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserAnalyticsStoreIdTrackingClicksRouteHandler: RouteHandler<
  typeof getV2UserAnalyticsStoreIdTrackingClicksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserAnalyticsStoreIdTrackingExternalordersRouteHandler: RouteHandler<
  typeof getV2UserAnalyticsStoreIdTrackingExternalordersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserAnalyticsStoreIdTrackingOrdersRouteHandler: RouteHandler<
  typeof getV2UserAnalyticsStoreIdTrackingOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserAnalyticsStoreIdTrackingStatusRouteHandler: RouteHandler<
  typeof getV2UserAnalyticsStoreIdTrackingStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsIndexRouteHandler: RouteHandler<
  typeof getV2UserCatalogsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsBeezupColumnsRouteHandler: RouteHandler<
  typeof getV2UserCatalogsBeezupColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsImportationsRouteHandler: RouteHandler<
  typeof getV2UserCatalogsImportationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2UserCatalogsStoreIdAutoImportRouteHandler: RouteHandler<
  typeof deleteV2UserCatalogsStoreIdAutoImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdAutoImportRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdAutoImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdAutoImportActivateRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdAutoImportActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdAutoImportPauseRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdAutoImportPauseRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdAutoImportResumeRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdAutoImportResumeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdAutoImportSchedulingIntervalRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdAutoImportSchedulingIntervalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdAutoImportSchedulingSchedulesRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdAutoImportSchedulingSchedulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdAutoImportStartRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdAutoImportStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdCatalogColumnsRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdCatalogColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdCatalogColumnsColumnIdRenameRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdCatalogColumnsColumnIdRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdCategoriesRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdCustomColumnsRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdCustomColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdCustomColumnsComputeExpressionRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdCustomColumnsComputeExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2UserCatalogsStoreIdCustomColumnsColumnIdRouteHandler: RouteHandler<
  typeof deleteV2UserCatalogsStoreIdCustomColumnsColumnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserCatalogsStoreIdCustomColumnsColumnIdRouteHandler: RouteHandler<
  typeof putV2UserCatalogsStoreIdCustomColumnsColumnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRouteHandler: RouteHandler<
  typeof putV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdCustomColumnsColumnIdRenameRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdCustomColumnsColumnIdRenameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdImportationsRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdImportationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdImportationsStartRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdImportationsStartRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdImportationsExecutionIdRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdImportationsExecutionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdImportationsExecutionIdCancelRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdImportationsExecutionIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnoreRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnoreRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMapRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattendRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmapRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdImportationsExecutionIdCommitRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdImportationsExecutionIdCommitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdImportationsExecutionIdCommitColumnsRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdImportationsExecutionIdCommitColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumnsRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRouteHandler: RouteHandler<
  typeof deleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRouteHandler: RouteHandler<
  typeof putV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMapRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmapRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmapRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdImportationsExecutionIdProductsListRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdImportationsExecutionIdProductsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdImportationsExecutionIdReportRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdImportationsExecutionIdReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdInputConfigurationRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdInputConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdProductsRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCatalogsStoreIdProductsListRouteHandler: RouteHandler<
  typeof postV2UserCatalogsStoreIdProductsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdProductsRandomRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdProductsRandomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCatalogsStoreIdProductsProductIdRouteHandler: RouteHandler<
  typeof getV2UserCatalogsStoreIdProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserChannelCatalogsIndexRouteHandler: RouteHandler<
  typeof getV2UserChannelCatalogsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelCatalogsIndexRouteHandler: RouteHandler<
  typeof postV2UserChannelCatalogsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserChannelCatalogsFilterOperatorsRouteHandler: RouteHandler<
  typeof getV2UserChannelCatalogsFilterOperatorsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelCatalogsProductsRouteHandler: RouteHandler<
  typeof postV2UserChannelCatalogsProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2UserChannelCatalogsChannelCatalogIdRouteHandler: RouteHandler<
  typeof deleteV2UserChannelCatalogsChannelCatalogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserChannelCatalogsChannelCatalogIdRouteHandler: RouteHandler<
  typeof getV2UserChannelCatalogsChannelCatalogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserChannelCatalogsChannelCatalogIdCategoriesRouteHandler: RouteHandler<
  typeof getV2UserChannelCatalogsChannelCatalogIdCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelCatalogsChannelCatalogIdCategoriesConfigureRouteHandler: RouteHandler<
  typeof postV2UserChannelCatalogsChannelCatalogIdCategoriesConfigureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMappingRouteHandler: RouteHandler<
  typeof postV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMappingRouteHandler: RouteHandler<
  typeof postV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMappingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserChannelCatalogsChannelCatalogIdColumnMappingsRouteHandler: RouteHandler<
  typeof putV2UserChannelCatalogsChannelCatalogIdColumnMappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelCatalogsChannelCatalogIdDisableRouteHandler: RouteHandler<
  typeof postV2UserChannelCatalogsChannelCatalogIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelCatalogsChannelCatalogIdEnableRouteHandler: RouteHandler<
  typeof postV2UserChannelCatalogsChannelCatalogIdEnableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRouteHandler: RouteHandler<
  typeof getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRouteHandler: RouteHandler<
  typeof putV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserChannelCatalogsChannelCatalogIdExportationsCacheRouteHandler: RouteHandler<
  typeof getV2UserChannelCatalogsChannelCatalogIdExportationsCacheRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelCatalogsChannelCatalogIdExportationsCacheClearRouteHandler: RouteHandler<
  typeof postV2UserChannelCatalogsChannelCatalogIdExportationsCacheClearRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryRouteHandler: RouteHandler<
  typeof getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelCatalogsChannelCatalogIdProductsRouteHandler: RouteHandler<
  typeof postV2UserChannelCatalogsChannelCatalogIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserChannelCatalogsChannelCatalogIdProductsCountersRouteHandler: RouteHandler<
  typeof getV2UserChannelCatalogsChannelCatalogIdProductsCountersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelCatalogsChannelCatalogIdProductsExportRouteHandler: RouteHandler<
  typeof postV2UserChannelCatalogsChannelCatalogIdProductsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserChannelCatalogsChannelCatalogIdProductsProductIdRouteHandler: RouteHandler<
  typeof getV2UserChannelCatalogsChannelCatalogIdProductsProductIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisableRouteHandler: RouteHandler<
  typeof postV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesRouteHandler: RouteHandler<
  typeof putV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRouteHandler: RouteHandler<
  typeof getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRouteHandler: RouteHandler<
  typeof postV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnIdRouteHandler: RouteHandler<
  typeof deleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenableRouteHandler: RouteHandler<
  typeof postV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserChannelCatalogsChannelCatalogIdSettingsCostRouteHandler: RouteHandler<
  typeof putV2UserChannelCatalogsChannelCatalogIdSettingsCostRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserChannelCatalogsChannelCatalogIdSettingsGeneralRouteHandler: RouteHandler<
  typeof putV2UserChannelCatalogsChannelCatalogIdSettingsGeneralRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserChannelsIndexRouteHandler: RouteHandler<
  typeof getV2UserChannelsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserChannelsChannelIdRouteHandler: RouteHandler<
  typeof getV2UserChannelsChannelIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserChannelsChannelIdCategoriesRouteHandler: RouteHandler<
  typeof getV2UserChannelsChannelIdCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserChannelsChannelIdColumnsRouteHandler: RouteHandler<
  typeof postV2UserChannelsChannelIdColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerIndexRouteHandler: RouteHandler<
  typeof getV2UserCustomerIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerAccountRouteHandler: RouteHandler<
  typeof getV2UserCustomerAccountRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCustomerAccountActivateRouteHandler: RouteHandler<
  typeof postV2UserCustomerAccountActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCustomerAccountChangeEmailRouteHandler: RouteHandler<
  typeof postV2UserCustomerAccountChangeEmailRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCustomerAccountChangePasswordRouteHandler: RouteHandler<
  typeof postV2UserCustomerAccountChangePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserCustomerAccountCompanyInfoRouteHandler: RouteHandler<
  typeof putV2UserCustomerAccountCompanyInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerAccountCreditCardInfoRouteHandler: RouteHandler<
  typeof getV2UserCustomerAccountCreditCardInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserCustomerAccountCreditCardInfoRouteHandler: RouteHandler<
  typeof putV2UserCustomerAccountCreditCardInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserCustomerAccountPersonalInfoRouteHandler: RouteHandler<
  typeof putV2UserCustomerAccountPersonalInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerAccountProfilePictureInfoRouteHandler: RouteHandler<
  typeof getV2UserCustomerAccountProfilePictureInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserCustomerAccountProfilePictureInfoRouteHandler: RouteHandler<
  typeof putV2UserCustomerAccountProfilePictureInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCustomerAccountResendEmailActivationRouteHandler: RouteHandler<
  typeof postV2UserCustomerAccountResendEmailActivationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerBillingPeriodsRouteHandler: RouteHandler<
  typeof getV2UserCustomerBillingPeriodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerContractsRouteHandler: RouteHandler<
  typeof getV2UserCustomerContractsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCustomerContractsRouteHandler: RouteHandler<
  typeof postV2UserCustomerContractsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCustomerContractsCurrentDisableAutoRenewalRouteHandler: RouteHandler<
  typeof postV2UserCustomerContractsCurrentDisableAutoRenewalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCustomerContractsCurrentReenableAutoRenewalRouteHandler: RouteHandler<
  typeof postV2UserCustomerContractsCurrentReenableAutoRenewalRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2UserCustomerContractsNextRouteHandler: RouteHandler<
  typeof deleteV2UserCustomerContractsNextRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerFriendsUserIdRouteHandler: RouteHandler<
  typeof getV2UserCustomerFriendsUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerInvoicesRouteHandler: RouteHandler<
  typeof getV2UserCustomerInvoicesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerOffersRouteHandler: RouteHandler<
  typeof getV2UserCustomerOffersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCustomerOffersRouteHandler: RouteHandler<
  typeof postV2UserCustomerOffersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCustomerSecurityLogoutRouteHandler: RouteHandler<
  typeof postV2UserCustomerSecurityLogoutRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerStoresRouteHandler: RouteHandler<
  typeof getV2UserCustomerStoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCustomerStoresRouteHandler: RouteHandler<
  typeof postV2UserCustomerStoresRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2UserCustomerStoresStoreIdRouteHandler: RouteHandler<
  typeof deleteV2UserCustomerStoresStoreIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerStoresStoreIdRouteHandler: RouteHandler<
  typeof getV2UserCustomerStoresStoreIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchV2UserCustomerStoresStoreIdRouteHandler: RouteHandler<
  typeof patchV2UserCustomerStoresStoreIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerStoresStoreIdAlertsRouteHandler: RouteHandler<
  typeof getV2UserCustomerStoresStoreIdAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCustomerStoresStoreIdAlertsRouteHandler: RouteHandler<
  typeof postV2UserCustomerStoresStoreIdAlertsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerStoresStoreIdRightsRouteHandler: RouteHandler<
  typeof getV2UserCustomerStoresStoreIdRightsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerStoresStoreIdSharesRouteHandler: RouteHandler<
  typeof getV2UserCustomerStoresStoreIdSharesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserCustomerStoresStoreIdSharesRouteHandler: RouteHandler<
  typeof postV2UserCustomerStoresStoreIdSharesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2UserCustomerStoresStoreIdSharesUserIdRouteHandler: RouteHandler<
  typeof deleteV2UserCustomerStoresStoreIdSharesUserIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserCustomerZendeskTokenRouteHandler: RouteHandler<
  typeof getV2UserCustomerZendeskTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserLegacyTrackingChannelCatalogsIndexRouteHandler: RouteHandler<
  typeof getV2UserLegacyTrackingChannelCatalogsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdRouteHandler: RouteHandler<
  typeof getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrateRouteHandler: RouteHandler<
  typeof postV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserLovIndexRouteHandler: RouteHandler<typeof getV2UserLovIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV2UserLovListNameRouteHandler: RouteHandler<
  typeof getV2UserLovListNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesChannelcatalogsIndexRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesChannelcatalogsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublishRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesOrdersIndexRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesOrdersIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesOrdersAutomaticTransitionsRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesOrdersAutomaticTransitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersAutomaticTransitionsRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersAutomaticTransitionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderTypeRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersBatchesClearMerchantOrderInfosRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersBatchesClearMerchantOrderInfosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersBatchesSetMerchantOrderInfosRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersBatchesSetMerchantOrderInfosRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesOrdersExportationsRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesOrdersExportationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersExportationsRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersExportationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersHarvestRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersHarvestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersInvoicesGenerateRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersInvoicesGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersInvoicesGetPdfInvoiceRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersInvoicesGetPdfInvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesOrdersInvoicesSettingsDesignRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesOrdersInvoicesSettingsDesignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserMarketplacesOrdersInvoicesSettingsDesignRouteHandler: RouteHandler<
  typeof putV2UserMarketplacesOrdersInvoicesSettingsDesignRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersInvoicesSettingsDesignPreviewRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersInvoicesSettingsDesignPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesOrdersInvoicesSettingsGeneralRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesOrdersInvoicesSettingsGeneralRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV2UserMarketplacesOrdersInvoicesSettingsGeneralRouteHandler: RouteHandler<
  typeof putV2UserMarketplacesOrdersInvoicesSettingsGeneralRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerateRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreviewRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersListFullRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersListFullRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersListLightRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersListLightRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesOrdersStatusRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesOrdersStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesOrdersSubscriptionsIndexRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesOrdersSubscriptionsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV2UserMarketplacesOrdersSubscriptionsIdRouteHandler: RouteHandler<
  typeof deleteV2UserMarketplacesOrdersSubscriptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesOrdersSubscriptionsIdRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesOrdersSubscriptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersSubscriptionsIdRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersSubscriptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersSubscriptionsIdActivateRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersSubscriptionsIdActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersSubscriptionsIdDeactivateRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersSubscriptionsIdDeactivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesOrdersSubscriptionsIdReportingRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesOrdersSubscriptionsIdReportingRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersSubscriptionsIdRetryRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersSubscriptionsIdRetryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const headV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRouteHandler: RouteHandler<
  typeof headV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryRouteHandler: RouteHandler<
  typeof getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeRouteHandler: RouteHandler<
  typeof postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

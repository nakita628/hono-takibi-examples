import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2PublicChannelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PublicChannelsCountryIsoCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PublicLovIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2PublicLovListNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PublicSecurityLoginRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PublicSecurityLostpasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2PublicSecurityRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsReportsBydayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsTrackingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdOptimisationsAllActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2UserAnalyticsStoreIdOptimisationsBycategoryCatalogCategoryIdActionNameRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2UserAnalyticsStoreIdOptimisationsBychannelChannelIdActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdOptimisationsByproductProductIdActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdOptimisationsCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdOptimisationsActionNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdReportsBycategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdReportsBychannelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdReportsBydayRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdReportsByproductRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdReportsFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserAnalyticsStoreIdReportsFiltersReportFilterIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdRulesExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserAnalyticsStoreIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2UserAnalyticsStoreIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRuleIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRuleIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRuleIdMovedownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRuleIdMoveupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserAnalyticsStoreIdRulesRuleIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdTrackingClicksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdTrackingExternalordersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdTrackingOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserAnalyticsStoreIdTrackingStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsBeezupColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsImportationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserCatalogsStoreIdAutoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdAutoImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdAutoImportActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdAutoImportPauseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdAutoImportResumeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdAutoImportSchedulingIntervalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdAutoImportSchedulingSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdAutoImportStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdCatalogColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdCatalogColumnsColumnIdRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdCustomColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdCustomColumnsComputeExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserCatalogsStoreIdCustomColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCatalogsStoreIdCustomColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCatalogsStoreIdCustomColumnsColumnIdExpressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdCustomColumnsColumnIdRenameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdImportationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdImportationsStartRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdImportationsExecutionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdIgnoreRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdReattendRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2UserCatalogsStoreIdImportationsExecutionIdCatalogColumnsColumnIdUnmapRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCommitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCommitColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2UserCatalogsStoreIdImportationsExecutionIdConfigureRemainingCatalogColumnsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdExpressionRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdCustomColumnsColumnIdUnmapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2UserCatalogsStoreIdImportationsExecutionIdProductSamplesProductSampleIndexCustomColumnsColumnIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2UserCatalogsStoreIdImportationsExecutionIdProductsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdImportationsExecutionIdReportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdImportationsExecutionIdTechnicalProgressionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdInputConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCatalogsStoreIdProductsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdProductsRandomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCatalogsStoreIdProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsFilterOperatorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserChannelCatalogsChannelCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsChannelCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsChannelCatalogIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdCategoriesConfigureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdCategoriesDisableMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdCategoriesReenableMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserChannelCatalogsChannelCatalogIdColumnMappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserChannelCatalogsChannelCatalogIdExclusionFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsChannelCatalogIdExportationsCacheRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdExportationsCacheClearRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsChannelCatalogIdExportationsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsChannelCatalogIdProductsCountersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdProductsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsChannelCatalogIdProductsProductIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdProductsProductIdDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesCopyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteV2UserChannelCatalogsChannelCatalogIdProductsProductIdOverridesChannelColumnIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2UserChannelCatalogsChannelCatalogIdProductsProductIdReenableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserChannelCatalogsChannelCatalogIdSettingsCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserChannelCatalogsChannelCatalogIdSettingsGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelsChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserChannelsChannelIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserChannelsChannelIdColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerAccountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerAccountActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerAccountChangeEmailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerAccountChangePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCustomerAccountCompanyInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerAccountCreditCardInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCustomerAccountCreditCardInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCustomerAccountPersonalInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerAccountProfilePictureInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserCustomerAccountProfilePictureInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerAccountResendEmailActivationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerBillingPeriodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerContractsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerContractsCurrentDisableAutoRenewalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerContractsCurrentReenableAutoRenewalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserCustomerContractsNextRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerFriendsUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerInvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerSecurityLogoutRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserCustomerStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV2UserCustomerStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerStoresStoreIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerStoresStoreIdAlertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerStoresStoreIdRightsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerStoresStoreIdSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserCustomerStoresStoreIdSharesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserCustomerStoresStoreIdSharesUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserCustomerZendeskTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserLegacyTrackingChannelCatalogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserLegacyTrackingChannelCatalogsChannelCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserLegacyTrackingChannelCatalogsChannelCatalogIdMigrateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserLovIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserLovListNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesChannelcatalogsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdHistoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2UserMarketplacesChannelcatalogsPublicationsMarketplaceTechnicalCodeAccountIdPublishRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV2UserMarketplacesChannelcatalogsChannelCatalogIdPropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesChannelcatalogsChannelCatalogIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersAutomaticTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersAutomaticTransitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersBatchesChangeOrdersChangeOrderTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersBatchesClearMerchantOrderInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersBatchesSetMerchantOrderInfosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersExportationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersExportationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersHarvestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersInvoicesGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersInvoicesGetPdfInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersInvoicesSettingsDesignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserMarketplacesOrdersInvoicesSettingsDesignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersInvoicesSettingsDesignPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersInvoicesSettingsGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2UserMarketplacesOrdersInvoicesSettingsGeneralRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDGenerateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2UserMarketplacesOrdersInvoicesMarketplaceTechnicalCodeAccountIdBeezUPOrderUUIDPreviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postV2UserMarketplacesOrdersListFullRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersListLightRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersSubscriptionsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2UserMarketplacesOrdersSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersSubscriptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersSubscriptionsIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersSubscriptionsIdDeactivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersSubscriptionsIdReportingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2UserMarketplacesOrdersSubscriptionsIdRetryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(headV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdClearMerchantOrderInfoRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHarvestRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdHistoryRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdSetMerchantOrderInfoRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV2UserMarketplacesOrdersMarketplaceTechnicalCodeAccountIdBeezUPOrderIdChangeOrderTypeRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )

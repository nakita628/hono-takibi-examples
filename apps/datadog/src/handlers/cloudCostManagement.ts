import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2CostArbitraryRuleRuleIdRoute,
  deleteApiV2CostAwsCurConfigCloudAccountIdRoute,
  deleteApiV2CostAzureUcConfigCloudAccountIdRoute,
  deleteApiV2CostBudgetBudgetIdCustomForecastRoute,
  deleteApiV2CostBudgetBudgetIdRoute,
  deleteApiV2CostCustomCostsFileIdRoute,
  deleteApiV2CostGcpUcConfigCloudAccountIdRoute,
  deleteApiV2CostTagDescriptionsTagKeyRoute,
  deleteApiV2CostUnitCostsUnitCostIdRoute,
  deleteApiV2TagsEnrichmentRulesetIdRoute,
  getApiV2CostAccountFiltersCloudAccountIdRoute,
  getApiV2CostAnomaliesAnomalyIdRoute,
  getApiV2CostAnomaliesRoute,
  getApiV2CostArbitraryRuleRoute,
  getApiV2CostArbitraryRuleRuleIdRoute,
  getApiV2CostArbitraryRuleStatusRoute,
  getApiV2CostAwsCurConfigCloudAccountIdRoute,
  getApiV2CostAwsCurConfigRoute,
  getApiV2CostAzureUcConfigCloudAccountIdRoute,
  getApiV2CostAzureUcConfigRoute,
  getApiV2CostBudgetBudgetIdCustomForecastRoute,
  getApiV2CostBudgetBudgetIdRoute,
  getApiV2CostBudgetsRoute,
  getApiV2CostCloudAccountsRoute,
  getApiV2CostCommitmentsCommitmentListRoute,
  getApiV2CostCommitmentsCoverageScalarRoute,
  getApiV2CostCommitmentsCoverageTimeseriesRoute,
  getApiV2CostCommitmentsOnDemandHotSpotsScalarRoute,
  getApiV2CostCommitmentsSavingsScalarRoute,
  getApiV2CostCommitmentsSavingsTimeseriesRoute,
  getApiV2CostCommitmentsUtilizationScalarRoute,
  getApiV2CostCommitmentsUtilizationTimeseriesRoute,
  getApiV2CostCustomCostsFileIdRoute,
  getApiV2CostCustomCostsRoute,
  getApiV2CostGcpUcConfigCloudAccountIdRoute,
  getApiV2CostGcpUcConfigRoute,
  getApiV2CostOciConfigRoute,
  getApiV2CostTagDescriptionsRoute,
  getApiV2CostTagDescriptionsTagKeyGenerateRoute,
  getApiV2CostTagDescriptionsTagKeyRoute,
  getApiV2CostTagKeysRoute,
  getApiV2CostTagKeysTagKeyRoute,
  getApiV2CostTagMetadataCurrencyRoute,
  getApiV2CostTagMetadataMetricsRoute,
  getApiV2CostTagMetadataMonthsRoute,
  getApiV2CostTagMetadataOrchestratorsRoute,
  getApiV2CostTagMetadataRoute,
  getApiV2CostTagMetadataTagSourcesRoute,
  getApiV2CostTagsRoute,
  getApiV2CostUnitCostsRoute,
  getApiV2CostUnitCostsUnitCostIdRoute,
  getApiV2TagsEnrichmentRoute,
  getApiV2TagsEnrichmentRulesetIdRoute,
  getApiV2TagsEnrichmentStatusRoute,
  patchApiV2CostAccountFiltersCloudAccountIdRoute,
  patchApiV2CostArbitraryRuleRuleIdRoute,
  patchApiV2CostAwsCurConfigCloudAccountIdRoute,
  patchApiV2CostAzureUcConfigCloudAccountIdRoute,
  patchApiV2CostCustomCostsFileIdRoute,
  patchApiV2CostGcpUcConfigCloudAccountIdRoute,
  patchApiV2TagsEnrichmentRulesetIdRoute,
  postApiV2CostArbitraryRuleReorderRoute,
  postApiV2CostArbitraryRuleRoute,
  postApiV2CostAwsCurConfigRoute,
  postApiV2CostAzureUcConfigRoute,
  postApiV2CostBudgetCsvValidateRoute,
  postApiV2CostBudgetValidateRoute,
  postApiV2CostGcpUcConfigRoute,
  postApiV2CostRecommendationsRoute,
  postApiV2CostUnitCostsRoute,
  postApiV2TagsEnrichmentReorderRoute,
  postApiV2TagsEnrichmentRoute,
  postApiV2TagsEnrichmentValidateQueryRoute,
  putApiV2CostBudgetCustomForecastRoute,
  putApiV2CostBudgetRoute,
  putApiV2CostCustomCostsRoute,
  putApiV2CostTagDescriptionsTagKeyRoute,
  putApiV2CostUnitCostsUnitCostIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const cloudCostManagementHandler = app
  .openapi(getApiV2CostAccountFiltersCloudAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CostAccountFiltersCloudAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostAnomaliesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostAnomaliesAnomalyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostArbitraryRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CostArbitraryRuleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CostArbitraryRuleReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostArbitraryRuleStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CostArbitraryRuleRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostArbitraryRuleRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CostArbitraryRuleRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostAwsCurConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CostAwsCurConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CostAwsCurConfigCloudAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostAwsCurConfigCloudAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CostAwsCurConfigCloudAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostAzureUcConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CostAzureUcConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CostAzureUcConfigCloudAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostAzureUcConfigCloudAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CostAzureUcConfigCloudAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CostBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CostBudgetCsvValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CostBudgetCustomForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CostBudgetValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CostBudgetBudgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostBudgetBudgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CostBudgetBudgetIdCustomForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostBudgetBudgetIdCustomForecastRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostCloudAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostCommitmentsCommitmentListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostCommitmentsCoverageScalarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostCommitmentsCoverageTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostCommitmentsOnDemandHotSpotsScalarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostCommitmentsSavingsScalarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostCommitmentsSavingsTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostCommitmentsUtilizationScalarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostCommitmentsUtilizationTimeseriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostCustomCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CostCustomCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CostCustomCostsFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostCustomCostsFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CostCustomCostsFileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostGcpUcConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CostGcpUcConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CostGcpUcConfigCloudAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostGcpUcConfigCloudAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2CostGcpUcConfigCloudAccountIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostOciConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CostRecommendationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostTagDescriptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CostTagDescriptionsTagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostTagDescriptionsTagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CostTagDescriptionsTagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostTagDescriptionsTagKeyGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostTagKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostTagKeysTagKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostTagMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostTagMetadataCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostTagMetadataMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostTagMetadataMonthsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostTagMetadataOrchestratorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostTagMetadataTagSourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostUnitCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2CostUnitCostsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2CostUnitCostsUnitCostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostUnitCostsUnitCostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2CostUnitCostsUnitCostIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TagsEnrichmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TagsEnrichmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TagsEnrichmentReorderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TagsEnrichmentStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2TagsEnrichmentValidateQueryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2TagsEnrichmentRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2TagsEnrichmentRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2TagsEnrichmentRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })

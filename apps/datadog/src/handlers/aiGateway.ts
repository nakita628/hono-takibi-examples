import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2BudgetsIdRoute,
  deleteApiV2DataCaptureOverridesIdRoute,
  deleteApiV2ModelGroupsIdRoute,
  deleteApiV2PoliciesInboundRoute,
  deleteApiV2ProvidersIdRoute,
  deleteApiV2ProvidersProviderIdModelsCanonicalPricingRoute,
  deleteApiV2ProvidersProviderIdModelsCanonicalRoute,
  deleteApiV2RateLimitsIdRoute,
  deleteApiV2RoutingRulesRoute,
  getApiV2BudgetsIdCurrentPeriodRoute,
  getApiV2BudgetsIdInstancesDimensionsRoute,
  getApiV2BudgetsIdInstancesRoute,
  getApiV2BudgetsIdInstancesSummaryRoute,
  getApiV2BudgetsIdRoute,
  getApiV2BudgetsRoute,
  getApiV2DataCaptureConfigurationRoute,
  getApiV2GovernanceRoute,
  getApiV2ModelGroupsIdRoute,
  getApiV2ModelGroupsRoute,
  getApiV2ModelsRoute,
  getApiV2PoliciesInboundRoute,
  getApiV2PoliciesRoute,
  getApiV2ProviderModelsRoute,
  getApiV2ProvidersIdRoute,
  getApiV2ProvidersProviderIdModelsCanonicalPricingRoute,
  getApiV2ProvidersProviderIdModelsRoute,
  getApiV2ProvidersRoute,
  getApiV2RateLimitsIdInstancesRoute,
  getApiV2RateLimitsIdInstancesSummaryRoute,
  getApiV2RateLimitsIdRoute,
  getApiV2RateLimitsInstancesSummaryRoute,
  getApiV2RateLimitsRoute,
  getApiV2RateLimitsUsageRoute,
  getApiV2RoutingRulesGetRoute,
  getApiV2RoutingRulesRoute,
  patchApiV2BudgetsIdRoute,
  patchApiV2ModelGroupsIdRoute,
  patchApiV2ProvidersIdRoute,
  patchApiV2ProvidersProviderIdModelsCanonicalRoute,
  patchApiV2RateLimitsIdRoute,
  postApiV2BudgetsIdInstancesCapacityRoute,
  postApiV2BudgetsIdInstancesResetRoute,
  postApiV2BudgetsRoute,
  postApiV2DataCaptureOverridesRoute,
  postApiV2ModelGroupsRoute,
  postApiV2PoliciesRoute,
  postApiV2ProvidersProviderIdModelsBulkRoute,
  postApiV2ProvidersProviderIdModelsRoute,
  postApiV2ProvidersRoute,
  postApiV2RateLimitsRoute,
  postApiV2RoutingRulesRoute,
  putApiV2DataCaptureOverridesIdRoute,
  putApiV2GovernanceRoute,
  putApiV2ProvidersProviderIdModelsCanonicalPricingRoute,
  putApiV2RoutingRulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayHandler = app
  .openapi(getApiV2BudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2BudgetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BudgetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2BudgetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BudgetsIdCurrentPeriodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BudgetsIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BudgetsIdInstancesCapacityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BudgetsIdInstancesDimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2BudgetsIdInstancesResetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2BudgetsIdInstancesSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2DataCaptureConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2DataCaptureOverridesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2DataCaptureOverridesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2DataCaptureOverridesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GovernanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2GovernanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ModelGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ModelGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ModelGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ModelGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ModelGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PoliciesInboundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PoliciesInboundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProviderModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProvidersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProvidersProviderIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProvidersProviderIdModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ProvidersProviderIdModelsBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProvidersProviderIdModelsCanonicalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2ProvidersProviderIdModelsCanonicalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ProvidersProviderIdModelsCanonicalPricingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ProvidersProviderIdModelsCanonicalPricingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ProvidersProviderIdModelsCanonicalPricingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RateLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RateLimitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RateLimitsInstancesSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RateLimitsUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RateLimitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RateLimitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2RateLimitsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RateLimitsIdInstancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RateLimitsIdInstancesSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2RoutingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2RoutingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RoutingRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RoutingRulesGetRoute, (c) => {
    throw new Error('Not implemented')
  })

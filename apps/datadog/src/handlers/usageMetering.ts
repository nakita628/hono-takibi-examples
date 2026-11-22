import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2UsageAdminTemporaryGrantRequestsRequestIdGrantRoute,
  deleteApiV2UsageQuotasQuotaNamespaceIdPendingRoute,
  deleteApiV2UsageQuotasQuotaNamespaceIdRoute,
  deleteApiV2UsageTemporaryGrantRequestsRequestIdRoute,
  getApiV2CostByTagActiveBillingDimensionsRoute,
  getApiV2CostByTagMonthlyCostAttributionRoute,
  getApiV2UsageAdminTemporaryGrantRequestsRequestIdRoute,
  getApiV2UsageAdminTemporaryGrantRequestsRoute,
  getApiV2UsageApplicationSecurityRoute,
  getApiV2UsageBillingDimensionMappingRoute,
  getApiV2UsageCostByOrgRoute,
  getApiV2UsageEstimatedCostRoute,
  getApiV2UsageHistoricalCostRoute,
  getApiV2UsageHourlyUsageRoute,
  getApiV2UsageLambdaTracedInvocationsRoute,
  getApiV2UsageMonthlyResourcesRoute,
  getApiV2UsageObservabilityPipelinesRoute,
  getApiV2UsageProjectedCostRoute,
  getApiV2UsageQuotasQuotaNamespaceIdRoute,
  getApiV2UsageQuotasQuotaNamespaceRoute,
  getApiV2UsageSummaryAvailableFieldsRoute,
  getApiV2UsageTemporaryGrantRequestsRequestIdRoute,
  getApiV2UsageTemporaryGrantRequestsRoute,
  getApiV2UsageUsageAttributionTypesRoute,
  patchApiV2UsageQuotasQuotaNamespaceIdRoute,
  postApiV2UsageAdminTemporaryGrantRequestsRequestIdDecisionRoute,
  postApiV2UsageQuotasQuotaNamespaceRoute,
  postApiV2UsageTemporaryGrantRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const usageMeteringHandler = app
  .openapi(getApiV2CostByTagActiveBillingDimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2CostByTagMonthlyCostAttributionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageAdminTemporaryGrantRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageAdminTemporaryGrantRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsageAdminTemporaryGrantRequestsRequestIdDecisionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsageAdminTemporaryGrantRequestsRequestIdGrantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageApplicationSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageBillingDimensionMappingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageCostByOrgRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageEstimatedCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageHistoricalCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageHourlyUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageLambdaTracedInvocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageMonthlyResourcesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageObservabilityPipelinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageProjectedCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageQuotasQuotaNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsageQuotasQuotaNamespaceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsageQuotasQuotaNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageQuotasQuotaNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiV2UsageQuotasQuotaNamespaceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsageQuotasQuotaNamespaceIdPendingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageSummaryAvailableFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageTemporaryGrantRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2UsageTemporaryGrantRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2UsageTemporaryGrantRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageTemporaryGrantRequestsRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2UsageUsageAttributionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })

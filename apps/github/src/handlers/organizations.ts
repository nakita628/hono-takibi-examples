import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrgSettingsBillingBudgetsBudgetIdRoute,
  getOrganizationsOrgActionsCacheRetentionLimitRoute,
  getOrganizationsOrgActionsCacheStorageLimitRoute,
  getOrganizationsOrgSettingsBillingAiCreditUsageRoute,
  getOrganizationsOrgSettingsBillingBudgetsBudgetIdRoute,
  getOrganizationsOrgSettingsBillingBudgetsRoute,
  getOrganizationsOrgSettingsBillingPremiumRequestUsageRoute,
  getOrganizationsOrgSettingsBillingUsageRoute,
  getOrganizationsOrgSettingsBillingUsageSummaryRoute,
  getOrganizationsRoute,
  patchOrganizationsOrgSettingsBillingBudgetsBudgetIdRoute,
  postOrganizationsOrgSettingsBillingBudgetsRoute,
  putOrganizationsOrgActionsCacheRetentionLimitRoute,
  putOrganizationsOrgActionsCacheStorageLimitRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationsHandler = app
  .openapi(getOrganizationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgActionsCacheRetentionLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrgActionsCacheRetentionLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgActionsCacheStorageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrgActionsCacheStorageLimitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgSettingsBillingAiCreditUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgSettingsBillingBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOrganizationsOrgSettingsBillingBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgSettingsBillingBudgetsBudgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationsOrgSettingsBillingBudgetsBudgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationsOrgSettingsBillingBudgetsBudgetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgSettingsBillingPremiumRequestUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgSettingsBillingUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrgSettingsBillingUsageSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })

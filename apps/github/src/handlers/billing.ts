import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationsOrgSettingsBillingBudgetsBudgetIdRoute,
  getOrganizationsOrgSettingsBillingAiCreditUsageRoute,
  getOrganizationsOrgSettingsBillingBudgetsBudgetIdRoute,
  getOrganizationsOrgSettingsBillingBudgetsRoute,
  getOrganizationsOrgSettingsBillingPremiumRequestUsageRoute,
  getOrganizationsOrgSettingsBillingUsageRoute,
  getOrganizationsOrgSettingsBillingUsageSummaryRoute,
  getUsersUsernameSettingsBillingAiCreditUsageRoute,
  getUsersUsernameSettingsBillingPremiumRequestUsageRoute,
  getUsersUsernameSettingsBillingUsageRoute,
  getUsersUsernameSettingsBillingUsageSummaryRoute,
  patchOrganizationsOrgSettingsBillingBudgetsBudgetIdRoute,
  postOrganizationsOrgSettingsBillingBudgetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billingHandler = app
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
  .openapi(getUsersUsernameSettingsBillingAiCreditUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSettingsBillingPremiumRequestUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSettingsBillingUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUsernameSettingsBillingUsageSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })

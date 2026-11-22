import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBillableUsage2Route,
  getAccountsAccountIdBillableUsageBillableMetricsRoute,
  getOrganizationsOrganizationIdBillableUsageRoute,
  postAccountsAccountIdBillableUsage2Route,
} from '../routes'

const app = new OpenAPIHono()

export const billableUsageV2Handler = app
  .openapi(getAccountsAccountIdBillableUsage2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdBillableUsage2Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBillableUsageBillableMetricsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationsOrganizationIdBillableUsageRoute, (c) => {
    throw new Error('Not implemented')
  })

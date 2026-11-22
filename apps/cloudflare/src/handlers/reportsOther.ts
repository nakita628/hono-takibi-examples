import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdReportingIndustryRoute,
  getAccountsAccountIdReportingPoliciesPolicyIdRoute,
  getAccountsAccountIdReportingPoliciesRoute,
  getAccountsAccountIdReportingReportsReportIdRoute,
  getAccountsAccountIdReportingReportsRoute,
  patchAccountsAccountIdReportingIndustryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsOtherHandler = app
  .openapi(getAccountsAccountIdReportingIndustryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdReportingIndustryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdReportingPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdReportingPoliciesPolicyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdReportingReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdReportingReportsReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })

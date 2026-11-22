import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAbuseReportsReportIdAppealsEligibilityRoute,
  getAccountsAccountIdAbuseReportsReportIdEmailsRoute,
  getAccountsAccountIdAbuseReportsReportIdMitigationsRoute,
  getAccountsAccountIdAbuseReportsReportParamRoute,
  getAccountsAccountIdAbuseReportsRoute,
  getAccountsAccountIdAbuseReportsSubmittedReportIdEmailsRoute,
  getAccountsAccountIdAbuseReportsSubmittedReportIdRoute,
  getAccountsAccountIdAbuseReportsSubmittedRoute,
  postAccountsAccountIdAbuseReportsReportIdMitigationsAppealRoute,
  postAccountsAccountIdAbuseReportsReportParamRoute,
} from '../routes'

const app = new OpenAPIHono()

export const abuseReportsOtherHandler = app
  .openapi(getAccountsAccountIdAbuseReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAbuseReportsSubmittedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAbuseReportsSubmittedReportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAbuseReportsSubmittedReportIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAbuseReportsReportIdAppealsEligibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAbuseReportsReportIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAbuseReportsReportIdMitigationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAbuseReportsReportIdMitigationsAppealRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAbuseReportsReportParamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAbuseReportsReportParamRoute, (c) => {
    throw new Error('Not implemented')
  })

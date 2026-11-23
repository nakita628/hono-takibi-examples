import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postCreditAssetReportFreddieMacGetRoute,
  postCreditAuditCopyTokenCreateRoute,
  postCreditAuditCopyTokenRemoveRoute,
  postCreditAuditCopyTokenUpdateRoute,
  postCreditBankIncomeGetRoute,
  postCreditBankIncomePdfGetRoute,
  postCreditBankIncomeRefreshRoute,
  postCreditEmploymentGetRoute,
  postCreditFreddieMacReportsGetRoute,
  postCreditPayrollIncomeGetRoute,
  postCreditPayrollIncomePrecheckRoute,
  postCreditPayrollIncomeRefreshRoute,
  postCreditRelayCreateRoute,
  postCreditRelayGetRoute,
  postCreditRelayRefreshRoute,
  postCreditRelayRemoveRoute,
  postCreditSessionsGetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const creditHandler = app
  .openapi(postCreditAssetReportFreddieMacGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditAuditCopyTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditAuditCopyTokenRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditAuditCopyTokenUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditBankIncomeGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditBankIncomePdfGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditBankIncomeRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditEmploymentGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditFreddieMacReportsGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditPayrollIncomeGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditPayrollIncomePrecheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditPayrollIncomeRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditRelayCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditRelayGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditRelayRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditRelayRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCreditSessionsGetRoute, (c) => {
    throw new Error('Not implemented')
  })

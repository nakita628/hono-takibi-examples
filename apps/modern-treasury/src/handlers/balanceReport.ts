import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiInternalAccountsInternalAccountIdBalanceReportsIdRoute,
  getApiInternalAccountsInternalAccountIdBalanceReportsIdRoute,
  getApiInternalAccountsInternalAccountIdBalanceReportsRoute,
  postApiInternalAccountsInternalAccountIdBalanceReportsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const balanceReportHandler = app
  .openapi(getApiInternalAccountsInternalAccountIdBalanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiInternalAccountsInternalAccountIdBalanceReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiInternalAccountsInternalAccountIdBalanceReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiInternalAccountsInternalAccountIdBalanceReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })

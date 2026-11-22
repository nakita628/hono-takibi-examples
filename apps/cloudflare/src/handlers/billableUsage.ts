import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdBillableUsageInfoRoute,
  getAccountsAccountIdBillableUsageRoute,
} from '../routes'

const app = new OpenAPIHono()

export const billableUsageHandler = app
  .openapi(getAccountsAccountIdBillableUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdBillableUsageInfoRoute, (c) => {
    throw new Error('Not implemented')
  })

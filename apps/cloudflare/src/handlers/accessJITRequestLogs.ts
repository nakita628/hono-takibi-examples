import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAccessLogsJitRequestsKnockRequestIdRoute,
  getAccountsAccountIdAccessLogsJitRequestsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const accessJITRequestLogsHandler = app
  .openapi(getAccountsAccountIdAccessLogsJitRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAccessLogsJitRequestsKnockRequestIdRoute, (c) => {
    throw new Error('Not implemented')
  })

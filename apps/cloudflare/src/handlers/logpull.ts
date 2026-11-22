import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdLogsListRoute, getAccountsAccountIdLogsRetrieveRoute } from '../routes'

const app = new OpenAPIHono()

export const logpullHandler = app
  .openapi(getAccountsAccountIdLogsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdLogsRetrieveRoute, (c) => {
    throw new Error('Not implemented')
  })

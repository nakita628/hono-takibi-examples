import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdIntelDomainHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const domainHistoryHandler = app.openapi(
  getAccountsAccountIdIntelDomainHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

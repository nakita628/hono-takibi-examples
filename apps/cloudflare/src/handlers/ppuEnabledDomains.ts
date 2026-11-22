import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdPayPerUseEnabledDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const ppuEnabledDomainsHandler = app.openapi(
  getAccountsAccountIdPayPerUseEnabledDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

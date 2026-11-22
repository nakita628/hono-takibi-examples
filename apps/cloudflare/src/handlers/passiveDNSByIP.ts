import { OpenAPIHono } from '@hono/zod-openapi'
import { getAccountsAccountIdIntelDnsRoute } from '../routes'

const app = new OpenAPIHono()

export const passiveDNSByIPHandler = app.openapi(getAccountsAccountIdIntelDnsRoute, (c) => {
  throw new Error('Not implemented')
})

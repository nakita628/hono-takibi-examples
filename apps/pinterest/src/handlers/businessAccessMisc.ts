import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdAccountsAdAccountIdAllowedDomainsRoute } from '../routes'

const app = new OpenAPIHono()

export const businessAccessMiscHandler = app.openapi(
  getAdAccountsAdAccountIdAllowedDomainsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

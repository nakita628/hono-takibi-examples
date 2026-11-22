import { OpenAPIHono } from '@hono/zod-openapi'
import { getNetworksNetworkIdL7FirewallRulesApplicationCategoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const mxl7ApplicationCategoriesHandler = app.openapi(
  getNetworksNetworkIdL7FirewallRulesApplicationCategoriesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

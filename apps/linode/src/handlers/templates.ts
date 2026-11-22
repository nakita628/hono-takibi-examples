import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionNetworkingFirewallsTemplatesRoute,
  getApiVersionNetworkingFirewallsTemplatesSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const templatesHandler = app
  .openapi(getApiVersionNetworkingFirewallsTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionNetworkingFirewallsTemplatesSlugRoute, (c) => {
    throw new Error('Not implemented')
  })

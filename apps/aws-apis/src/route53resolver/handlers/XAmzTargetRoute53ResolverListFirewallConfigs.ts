import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListFirewallConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverListFirewallConfigsHandler = app.openapi(
  postXAmzTargetRoute53ResolverListFirewallConfigsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

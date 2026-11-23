import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverUpdateFirewallConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverUpdateFirewallConfigHandler = app.openapi(
  postXAmzTargetRoute53ResolverUpdateFirewallConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetFirewallConfigRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverGetFirewallConfigHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetFirewallConfigRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

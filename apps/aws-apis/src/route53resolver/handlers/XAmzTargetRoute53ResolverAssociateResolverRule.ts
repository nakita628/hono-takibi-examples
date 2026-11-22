import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverAssociateResolverRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverAssociateResolverRuleHandler = app.openapi(
  postXAmzTargetRoute53ResolverAssociateResolverRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverUpdateResolverRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverUpdateResolverRuleHandler = app.openapi(
  postXAmzTargetRoute53ResolverUpdateResolverRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

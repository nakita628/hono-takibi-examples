import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetResolverRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverGetResolverRuleHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetResolverRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

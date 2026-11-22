import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverDeleteResolverRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverDeleteResolverRuleHandler = app.openapi(
  postXAmzTargetRoute53ResolverDeleteResolverRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

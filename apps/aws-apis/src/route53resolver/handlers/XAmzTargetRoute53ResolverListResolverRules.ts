import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListResolverRulesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverListResolverRulesHandler = app.openapi(
  postXAmzTargetRoute53ResolverListResolverRulesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

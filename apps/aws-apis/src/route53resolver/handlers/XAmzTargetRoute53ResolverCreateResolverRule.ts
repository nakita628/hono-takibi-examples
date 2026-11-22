import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverCreateResolverRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverCreateResolverRuleHandler = app.openapi(
  postXAmzTargetRoute53ResolverCreateResolverRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

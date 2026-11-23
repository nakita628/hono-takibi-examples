import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverCreateResolverRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverCreateResolverRuleHandler = app.openapi(
  postXAmzTargetRoute53ResolverCreateResolverRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

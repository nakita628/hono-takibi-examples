import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverDisassociateResolverRuleRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverDisassociateResolverRuleHandler = app.openapi(
  postXAmzTargetRoute53ResolverDisassociateResolverRuleRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListResolverRuleAssociationsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverListResolverRuleAssociationsHandler = app.openapi(
  postXAmzTargetRoute53ResolverListResolverRuleAssociationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

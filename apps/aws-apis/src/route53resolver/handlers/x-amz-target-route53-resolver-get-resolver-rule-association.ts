import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetResolverRuleAssociationRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverGetResolverRuleAssociationHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetResolverRuleAssociationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

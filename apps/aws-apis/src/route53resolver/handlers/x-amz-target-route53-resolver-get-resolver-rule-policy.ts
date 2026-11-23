import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetResolverRulePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverGetResolverRulePolicyHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetResolverRulePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

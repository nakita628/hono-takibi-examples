import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverPutResolverRulePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetRoute53ResolverPutResolverRulePolicyHandler = app.openapi(
  postXAmzTargetRoute53ResolverPutResolverRulePolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

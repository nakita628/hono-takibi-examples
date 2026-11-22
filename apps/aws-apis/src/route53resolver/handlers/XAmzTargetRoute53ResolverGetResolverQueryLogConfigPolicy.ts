import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyHandler = app.openapi(
  postXAmzTargetRoute53ResolverGetResolverQueryLogConfigPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

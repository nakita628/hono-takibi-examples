import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyHandler = app.openapi(
  postXAmzTargetRoute53ResolverPutResolverQueryLogConfigPolicyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)

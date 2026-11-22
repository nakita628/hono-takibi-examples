import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetRoute53ResolverListResolverQueryLogConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetRoute53ResolverListResolverQueryLogConfigsHandler = app.openapi(
  postXAmzTargetRoute53ResolverListResolverQueryLogConfigsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
